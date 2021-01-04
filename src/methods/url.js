/*
 * @Description: url相关方法
 * @Author: jml
 * @Date: 2020-12-30 10:17:46
 * @LastEditors: jml
 * @LastEditTime: 2021-01-04 16:43:01
 */

const { isNumber, isObject, isString, isBoolean } = require("./check");

const url = {
  /**
   * 丢弃对象所有非Number String Boolean的值，并返回序列化字符串 例如 ?key=value&key1=value1&key2=value2
   * @param {Object} query 需处理的对象
   */
  queryFormat: (query) => {
    if (!isObject(query)) {
      console.warn(query, `入参有误，需传入对象`);
      return query;
    }
    const _dealQueryArr = [];
    for (const key in query) {
      if (Object.hasOwnProperty.call(query, key)) {
        const value = query[key];
        if (isNumber(value) || isString(value) || isBoolean(value)) {
          _dealQueryArr.push(`${key}=${value}`);
        }
      }
    }
    return `?${_dealQueryArr.join("&")}`;
  },
};

module.exports = url;
