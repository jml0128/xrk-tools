/*
 * @Author: jml
 * @Date: 2020-12-30 10:05:59
 * @LastEditors: jml
 * @LastEditTime: 2021-01-04 11:41:40
 */

const base = require("./methods/base");
const check = require("./methods/check");
const date = require("./methods/date");
const file = require("./methods/file");
const money = require("./methods/money");
const transform = require("./methods/transform");
const storage = require("./methods/storage");
const url = require("./methods/url");

// const xrkTools = function () {
//   this.base = base;
//   this.check = check;
//   this.date = date;
//   this.file = file;
//   this.money = money;
//   this.transform = transform;
//   this.storage = storage;
//   this.url = url;
// };

// module.exports = new xrkTools();
module.exports = {
  base,
  check,
  date,
  file,
  money,
  transform,
  storage,
  url,
};
