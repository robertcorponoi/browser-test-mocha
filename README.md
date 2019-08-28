<div align="center">

# browser-test-mocha

browser-test-mocha sets up a test server using Mocha and Chai to test against a browser environment. You can use any mocha or chai functionality inside of your test files with sinon support coming soon.

</div>

<div align="center">

[![NPM version](https://img.shields.io/npm/v/browser-test-mocha.svg?style=flat)](https://www.npmjs.com/package/browser-test-mocha)
[![Known Vulnerabilities](https://snyk.io/test/github/robertcorponoi/browser-test-mocha/badge.svg)](https://snyk.io/test/github/robertcorponoi/browser-test-mocha)
[![NPM downloads](https://img.shields.io/npm/dm/browser-test-mocha.svg?style=flat)](https://www.npmjs.com/package/browser-test-mocha)
<a href="https://badge.fury.io/js/browser-test-mocha"><img src="https://img.shields.io/github/issues/robertcorponoi/browser-test-mocha.svg" alt="issues" height="18"></a>
<a href="https://badge.fury.io/js/browser-test-mocha"><img src="https://img.shields.io/github/license/robertcorponoi/browser-test-mocha.svg" alt="license" height="18"></a>
[![Gitter](https://badges.gitter.im/gitterHQ/gitter.svg)](https://gitter.im/robertcorponoi)

</div>

## **Table of contents**

- [Install](#install)
- [Usage](#usage)
- [Flags](#flags)
- [Examples](#examples)
- [Programmatic Usage](#programmatic-usage)

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
$ browser-test-mocha -f test/one.js,test/two.js,test/three.js
```

The -f flag indicates that you are passing the test files and multiple files can be passed separated by commas and no spaces in between.

After it has finished doing the necessary file operations, a http server will start up at nearest available port to 3000 and if you navigate to it in a browser, you will see the results of your tests.

## **Flags**

Currently browser-test-mocha only has one flag (other than version):

```
browser-test-mocha [options] <files>

-f, --files         Specifies the files to pass to be tested.
-V, --version       Outputs the current version of browser-test-mocha
```

## **License**

MIT