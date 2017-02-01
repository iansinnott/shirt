var path = require('path');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'shirt.js',
    libraryTarget: 'umd',
    library: 'Shirt',
  },

  // We could require that ramda be installed in whatever app is using this lib,
  // but would that be a good idea? Unminified dist source goes from about 13k
  // to about 36k without the use of externals
  // externals: {
  //   'ramda': {
  //     commonjs: 'ramda',
  //     commonjs2: 'ramda',
  //     amd: 'ramda',
  //     root: 'R', // Assume ramda is defined as window.R if it was loaded via script tag
  //   },
  // },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          babelrc: false,
          presets: [
            ['babel-preset-es2015', { modules: false }],
            'babel-preset-stage-1',
          ],
        },
      },
    ],
  },
};
