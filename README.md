<p align="center">
  <img width="250" height="160" src="https://github.com/robertcorponoi/graphics/blob/master/browser-test-mocha/browser-test-mocha-logo.png?raw=true">
</p>

<h1 align="center">browser-test-mocha</h1>

<p align="center">browser-test-mocha sets up a test server using Mocha and Chai to test against a browser environment. You can use any mocha, chai, and sinon functionalitiy in your tests.<p>

<div align="center">

  [![NPM version](https://img.shields.io/npm/v/browser-test-mocha.svg?style=flat)](https://www.npmjs.com/package/browser-test-mocha)
  [![Known Vulnerabilities](https://snyk.io/test/github/robertcorponoi/browser-test-mocha/badge.svg)](https://snyk.io/test/github/robertcorponoi/browser-test-mocha)
  ![npm](https://img.shields.io/npm/dt/browser-test-mocha)
  [![NPM downloads](https://img.shields.io/npm/dm/browser-test-mocha.svg?style=flat)](https://www.npmjs.com/package/browser-test-mocha)
  <a href="https://badge.fury.io/js/browser-test-mocha"><img src="https://img.shields.io/github/issues/robertcorponoi/browser-test-mocha.svg" alt="issues" height="18"></a>
  <a href="https://badge.fury.io/js/browser-test-mocha"><img src="https://img.shields.io/github/license/robertcorponoi/browser-test-mocha.svg" alt="license" height="18"></a>
  [![Gitter](https://badges.gitter.im/gitterHQ/gitter.svg)](https://gitter.im/robertcorponoi)

</div>

## **Install**

To install it as a global command to use anywhere you can use:

```shell
$ npm install -g browser-test-mocha
```

Otherwise, if you just want to use it programmatically inside of a project, you can install it at a project level:

```shell
$ npm install --save-dev browser-test-mocha
```

## **Usage**

To use browser-test-mocha, you need to pass the files containing the tests to it:

```shell
$ browser-test-mocha test/one.js,test/two.js,test/three.js
```

Note: multiple files can be passed separated by commas and no spaces in between.

After it has finished doing the necessary file operations, a http server will start up at nearest available port to 3000 and if you navigate to it in a browser, you will see the results of your tests.

## **Flags**

The current flags available for browser-test-mocha are:

```
browser-test-mocha <files> [options] 

-V, --version       Outputs the current version of browser-test-mocha
```

## **Tests**

To run the tests available for browser-test-mocha, use:

```bash
$ npm run test
```

## **License**

MIT