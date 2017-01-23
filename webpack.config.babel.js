import 'babel-polyfill';
import path from 'path';
import webpack from 'webpack';
import sass from 'node-sass';
import Copy from 'copy-webpack-plugin';

export default {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    publicPath: '/',
    sourcePrefix: ' ',
    path: path.join(__dirname, 'public'),
    filename: 'app.js'
  },
  target: 'web',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, include: [path.resolve(__dirname, 'src')], loader: 'babel' },
      { test: /\.css$/, include: [path.resolve(__dirname, 'src')], loaders: ['style', 'css?modules'] }
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
  devTool: '#inline-source-map',
  devServer: {
    contentBase: 'public',
    port: 9000,
    inline: true,
    hot: true,
    colors: true
  }
};
