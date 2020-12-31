/*
 * @Description: 本地数据存储
 * @Author: jml
 * @Date: 2020-12-30 10:15:58
 * @LastEditors: jml
 * @LastEditTime: 2020-12-31 16:18:50
 */

const { isFalseValue } = require("./check");

module.exports = {
  /**
   * 本地数据存储
   * @param {String} key 存储KEY
   * @param {any} value  存储的内容
   * @param {Boolean} isLocal 是否使用localStorage(默认是),否则使用sessionStorage
   */
  setStorage: (key, value, isLocal = true) => {
    if (key && (value || isFalseValue(value))) {
      const isObject = typeof value === "object";
      if (isLocal) {
        localStorage.setItem(key, isObject ? JSON.stringify(value) : value);
      } else {
        sessionStorage.setItem(key, isObject ? JSON.stringify(value) : value);
      }
    } else {
      console.error("setStorage 参数不全");
    }
  },
  /**
   * 读取本地存储的数据
   * @param {String} key 需读取的KEY
   * @param {Boolean} isLocal 是否使用localStorage(默认是),否则使用sessionStorage
   */
  getStorage: (key, isLocal = true) => {
    try {
      return JSON.parse(
        isLocal ? localStorage.getItem(key) : sessionStorage.getItem(key)
      );
    } catch (e) {
      return isLocal ? localStorage.getItem(key) : sessionStorage.getItem(key);
    }
  },
};
