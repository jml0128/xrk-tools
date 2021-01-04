/*
 * @Author: jml
 * @Date: 2020-12-30 10:02:16
 * @LastEditors: jml
 * @LastEditTime: 2021-01-04 16:19:54
 */

const path = require("path");

const fs = require("fs");
const join = path.join;
const resolve = (dir) => path.join(__dirname, "/", dir);

function getComponentEntries(path) {
  let files = fs.readdirSync(resolve(path));
  const componentEntries = files.reduce((ret, item) => {
    const itemPath = join(path, item);
    const isDir = fs.statSync(itemPath).isDirectory();
    if (isDir) {
      ret[item] = resolve(join(itemPath, "index.js"));
    } else {
      const [name] = item.split(".");
      ret[name] = resolve(`${itemPath}`);
    }
    return ret;
  }, {});
  return componentEntries;
}

module.exports = {
  entry: {
    ...getComponentEntries("src/methods"),
    index: resolve("src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "[name].js",
    libraryTarget: "commonjs2",
    // filename: (pathData) => {
    //   return pathData.chunk.name === "index" ? "index.js" : "[name].js";
    // },
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
            // plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
  externals: {
    // axios: "axios",
    // qrcode: "qrcode",
  },
  devtool: false,
};
