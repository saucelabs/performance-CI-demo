const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: "development",
  devtool: false,
  context: __dirname,
  entry: path.join(__dirname, '..', 'src', 'index.jsx'),
  output: {
    path: path.join(__dirname, '..', 'build'),
    filename: `bundle.js`,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: /src/,
        exclude: /node_modules/,
        query: {
          presets: ['@babel/react'],
        },
      },
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: path.join(__dirname, '..', 'imgs', '[name].png'),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '..', 'template.html'),
    }),
    new CopyWebpackPlugin([
      { from: path.join(__dirname, '..', 'libs', '*') },
    ]),
  ],
};
