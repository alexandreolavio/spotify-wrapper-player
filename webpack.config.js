const path = require('path');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: 'src/app/js/index.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './lib'),
  },
  devServer: {
    contentBase: path.resolve(__dirname, './lib'),
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
