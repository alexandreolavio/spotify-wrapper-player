const path = require('path');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './index.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './src/app/pages'),
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src/app/pages'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
        }],
      },
    ],
  },
};
