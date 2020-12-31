/*
 * @Author: jml
 * @Date: 2020-12-30 10:02:16
 * @LastEditors: jml
 * @LastEditTime: 2020-12-31 17:01:24
 */

const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      //   { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
  externals: {
    axios: "axios",
    QRCode: "QRCode",
  },
  devServer: {
    inline: true,
    hot: true,
  },
};
