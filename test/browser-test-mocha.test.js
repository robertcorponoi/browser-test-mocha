'use strict'

const path = require('path');
const chai = require('chai');
const fs = require('fs-extra');
const shell = require('shelljs');
const pkg = require('../package.json');

describe('browser-test-mocha CLI', () => {

  it('should print the correct version of the program', function (done) {

    this.timeout(5000);

    const cmd = shell.exec('node cli/browser-test-mocha.js -V', { async: true });

    cmd.stdout.on('data', (data) => {

      chai.expect(data).to.equal(pkg.version + '\n');

      done();

    });

  });

  it('should create the correct project structure', function (done) {

    this.timeout(10000);

    shell.exec('node cli/browser-test-mocha.js -f test/scripts/1.js,test/scripts/2.js,test/scripts/3.js', { async: true });

    setTimeout(() => {

      const src = fs.readdirSync(path.resolve(__dirname, '../src/scripts'));

      const index = fs.readFileSync(path.resolve(__dirname, '../src/index.html'), 'utf-8');

      chai.expect(src).to.deep.equal(['1.js', '2.js', '3.js']) && chai.expect(index.length).to.equal(704);

      done();

    }, 5000);

  });

});