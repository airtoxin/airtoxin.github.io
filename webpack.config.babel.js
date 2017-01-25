import 'babel-polyfill';
import path from 'path';
import webpack from 'webpack';
import sass from 'node-sass';
import Copy from 'copy-webpack-plugin';

export default {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'public'),
    filename: 'app.js'
  },
  target: 'web',
  module: {
    loaders: [
      { test: /\.jsx?$/, include: [path.resolve(__dirname, 'src')], loader: 'babel-loader' },
      { test: /\.css$/, include: [path.resolve(__dirname, 'src')], loaders: ['style-loader', 'css-loader?modules'] }
    ]
  },
  plugins: [
    new Copy([
      { from: 'src/index.html' },
      {
        from: 'src/index.scss',
        to: '[name].css',
        transform: (content) => sass.renderSync({ data: content.toString('UTF-8') }).css,
      },
    ]),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: 'public',
    port: 9000,
    inline: true,
    hot: true
  }
};
