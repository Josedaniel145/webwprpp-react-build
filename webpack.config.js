const path = require('path');

module.exports = {
  mode: 'production',

  entry: './src/js/init-react.js',

  output: {
    filename: 'init-react.js',
    path: path.resolve(__dirname, 'dist/js'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            sourceType: 'unambiguous',
            presets: [
              ['@babel/preset-env', { modules: 'commonjs' }],
              '@babel/preset-react'
            ],
          },
        },
      },
    ],
  },

  resolve: {
    extensions: ['.js'],
  },
};