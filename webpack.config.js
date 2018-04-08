const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const sass = require("node-sass");

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./src/index.html"
    }),
    CopyWebpackPlugin([
      {
        from: "src/index.scss",
        to: "index.css",
        transform: (content) => sass.renderSync({ data: content.toString('UTF-8') }).css,
      },
    ]),
  ],
};
