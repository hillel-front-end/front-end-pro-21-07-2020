const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const buildPath = path.resolve(__dirname, 'build');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: buildPath,
    filename: 'main.js',
  },
  devServer: {
    port: 3000,
    contentBase: buildPath,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Modal',
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
  ],
};
