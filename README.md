# clean-webpack-output-plugin

[![npm version][npm-version-image]][npm-url]
[![npm downloads][npm-download-image]][npm-url]
[![node engine][node-engine-image]][npm-url]

[npm-version-image]: https://img.shields.io/npm/v/clean-webpack-output-plugin.svg?style=flat-square
[npm-download-image]: https://img.shields.io/npm/dm/clean-webpack-output-plugin.svg?style=flat-square
[node-engine-image]: https://img.shields.io/badge/node-%3E=10.12.0-blue.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/clean-webpack-output-plugin

A webpack plugin to remove your output files, is similar to [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin).

## Install

```bash
npm i clean-webpack-output-plugin --save-dev
```

## Usage

```js
const CleanWebpackOutputPlugin = require('clean-webpack-output-plugin');

// default remove outputPath, without params
plugins: [new CleanWebpackOutputPlugin()];

// remove dir
plugins: [new CleanWebpackOutputPlugin('/tmp/mydir')];

// remove file
plugins: [new CleanWebpackOutputPlugin('/tmp/myfile')];

// remove multiple
plugins: [
  new CleanWebpackOutputPlugin(['/tmp/mydir', '/tmp/otherdir', '/tmp/myfile']),
];
```

## License

[MIT LICENSE](./LICENSE)
