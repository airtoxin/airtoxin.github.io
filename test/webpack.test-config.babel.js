/* eslint-disable import/no-extraneous-dependencies */
import 'babel-polyfill';
import base from '../webpack.config.babel.js';

export default {
  ...base,
  devServer: {
    ...base.devServer,
    port: 9999,
    hot: false,
  },
};
