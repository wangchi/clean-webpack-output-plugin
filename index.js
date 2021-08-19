const chalk = require('chalk');
const remove = require('fs-extra').remove;

function removePath(path) {
  remove(path)
    .then(() => {
      console.log(
        'clean-webpack-output-plugin clean ' +
          chalk.bold.green(path) +
          ' success'
      );
    })
    .catch((err) => {
      throw err;
    });
}

class CleanWebpackOutputPlugin {
  constructor(patterns) {
    this.pluginName = 'clean-webpack-output-plugin';

    if (!patterns) return;

    patterns = typeof patterns === 'string' ? [patterns] : patterns;

    if (!Array.isArray(patterns)) {
      console.log(
        chalk.red(this.pluginName) + ' patterns must be a array or string'
      );
      return;
    }

    this.patterns = patterns;
  }

  apply(compiler) {
    if (typeof compiler === 'undefined') {
      this.remove(compiler);
      return;
    }

    compiler.hooks.entryOption.tap(
      'CleanWebpackOutputPlugin',
      (compilation) => {
        this.remove(compiler);
      }
    );
  }

  remove(compiler) {
    if (!compiler) return;

    if (!this.patterns) {
      removePath(compiler.outputPath);
      return;
    }

    this.patterns.forEach((item) => {
      removePath(item);
    });
  }
}

module.exports = CleanWebpackOutputPlugin;
