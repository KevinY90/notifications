const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');


module.exports = {
    entry: ['babel-polyfill', './client/index.jsx'],
    output: {
      path: __dirname,
      filename: './public/bundle.js',
    },
    optimization: {
      minimize: true
    },
    devtool: false,
    module: {
      rules: [
        {
          test: /jsx?/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env':{
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.AggressiveMergingPlugin(),
      new CompressionPlugin({
        filename: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
      })
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  };
