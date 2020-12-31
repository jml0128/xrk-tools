/*
 * @Description: 通用基础方法
 * @Author: jml
 * @Date: 2020-12-30 10:17:46
 * @LastEditors: jml
 * @LastEditTime: 2020-12-31 16:50:44
 */

const { isNumber, isObject, isMap, isSet } = require("./check");
const { isArray } = Array;

/**
 * 判断是否为数组、对象、map、set其中一种
 * @param {any} content
 */
const isSepcialObject = (content) => {
  return (
    isArray(content) || isObject(content) || isMap(content) || isSet(content)
  );
};

module.exports = {
  /**
   * 格式化数值
   * @param {Number|String} num 数字
   * @param {Number} divisor 除数(默认值100)
   * @param {Number} decimalPlaces 小数位数(默认值2)
   * @param {String} unit 单位
   */
  numberFormat: (num, divisor = 100, decimalPlaces = 2, unit) => {
    if (isNumber(num)) {
      return (Number(num) / divisor).toFixed(decimalPlaces) + unit;
    } else {
      console.warn(`入参${num}不是正确的数字`);
      return num;
    }
  },

  /**
   * 简易深克隆(无法克隆Function Map Set undefined)
   * @param {any} content 需要深克隆的内容
   */
  easyDeepClone: (content) => {
    return JSON.parse(JSON.stringify(content));
  },

  /**
   * 深克隆
   * @param {any} content 需要深克隆的内容
   */
  deepClone: (content) => {
    if (isSepcialObject(content)) {
      let res = null;
      let type = "";
      if (isArray(content)) {
        type = "Array";
        res = [];
      } else if (isObject(content)) {
        type = "Object";
        res = {};
      } else if (isMap(content)) {
        type = "Map";
        res = new Map();
      } else if (isSet(content)) {
        type = "Set";
        res = new Set();
      }
      if (type === "Array" || type == "Object") {
        for (const key in content) {
          if (Object.hasOwnProperty.call(content, key)) {
            if (isSepcialObject(content[key])) {
              res[key] = deepClone(content[key]);
            } else {
              res[key] = content[key];
            }
          }
        }
      } else if (type === "Map") {
        content.forEach((value, key) => {
          res.set(key, isSepcialObject(value) ? deepClone(value) : value);
        });
      } else if (type === "Set") {
        content.forEach((value) => {
          res.add(isSepcialObject(value) ? deepClone(value) : value);
        });
      }
      return res;
    }
    return content;
  },
};
