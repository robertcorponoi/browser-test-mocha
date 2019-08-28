#!/usr/bin/env node

const path = require('path');
const jsdom = require('jsdom');
const fs = require('fs-extra');
const program = require('commander');
const pkg = require('../package.json');
const server = require('../src/server');

const { JSDOM } = jsdom;

/**
 * When the version of the program is requested just use the version from the package.json file so that
 * we don't have to update this.
 */
program.version(pkg.version);

/**
 * Set the files flag which is used to specify the files to add to be tested and then pass them to the
 * optionsToArray method to make it easier to work with.
 */
program.option('-f, --files <items>', 'Comma separated list of files of test files', optionToArray);

/**
 * Since we want to avoid the many callbacks associated with some of the filesystem operations, we use an
 * async method to process the commands.
 * 
 * This checks to see what files have been passed, copies them locally, adds them to the DOM, and finally
 * starts the local server on an available port.
 * 
 * @async
 */
async function main() {

  program.parse(process.argv);

  /**
   * The user passed some js files to add to be tested, we need to take the following steps:
   * 
   * 1. Get the contents of the base HTML file and create a virtual DOM based off of it so that we can add more scripts to it.
   * 2. Remove all of the old tests.
   * 3. For each file: Create a script and fill it with the contents of the test file and then add it to the virtual dom.
   * 4. Write a new index.html file with the new DOM that includes the user's test files.
   * 5. Finally, start the server on the first available port.
   */
  if (program.files) {

    const file = await fs.readFile(path.resolve(__dirname, '../src/base.html'), 'utf-8');

    const dom = new JSDOM(file);

    const document = dom.window.document;

    console.info('Removing old tests...');

    await fs.remove(path.resolve(__dirname, '../src/index.html')).catch(err => { throw new Error(err) });

    await fs.emptyDir(path.resolve(__dirname, '../src/scripts')).catch(err => { throw new Error(err) });

    await Promise.all(program.files.map(async file => {

      console.info(`Adding ${file}...`);

      const script = document.createElement('script');

      script.type = 'module';

      script.src = `./scripts/${path.basename(file)}`;

      const data = await fs.readFile(file, 'utf-8').catch(err => { throw new Error(err) });

      await fs.writeFile(path.resolve(__dirname, `../src/scripts/${path.basename(file)}`), data).catch(err => { throw new Error(err) });

      const insertPoint = document.querySelector('.mocha-init');

      insertPoint.parentNode.insertBefore(script, insertPoint.nextSibling);

    }));

    await fs.outputFile(path.resolve(__dirname, '../src/index.html'), document.documentElement.innerHTML).catch(err => { throw new Error(err) });

    console.info('Starting server...');

    server();

  }

}

main();

/**
 * Splits options that can be passed a comma separated lists into an Array.
 * 
 * @param {string} list The comma separated list to break into an Array.
 * 
 * @returns {Array<string>}
 */
function optionToArray(list) {

  return list.split(',');

}