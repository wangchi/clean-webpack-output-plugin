const assert = require('assert');
const path = require('path');
const CleanWebpackOutputPlugin = require('../index');

describe('Clean', () => {
  describe('clean nothing', () => {
    it('nothing to clean', () => {
      let cleanWebpackOutputPlugin = new CleanWebpackOutputPlugin();
      let result = cleanWebpackOutputPlugin.apply();
    });
  });

  // src: test/_src/...
  // dest: test/_dest/...

  describe('clean single file', () => {
    it('clean single file', () => {
      let cleanWebpackOutputPlugin = new CleanWebpackOutputPlugin(
        './_temp1/main.js'
      );
      let result = cleanWebpackOutputPlugin.apply();
    });
  });

  describe('clean dir', () => {
    it('clean dir', () => {
      let cleanWebpackOutputPlugin = new CleanWebpackOutputPlugin(
        './_temp3/_nested'
      );
      let result = cleanWebpackOutputPlugin.apply();
    });
  });

  describe('clean multiple', () => {
    it('clean dir and files', () => {
      let cleanWebpackOutputPlugin = new CleanWebpackOutputPlugin([
        './_temp2',
        './_temp3',
        './_temp1/foo.js',
      ]);
      let result = cleanWebpackOutputPlugin.apply();
    });
  });
});
