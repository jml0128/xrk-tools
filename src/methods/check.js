/*
 * @Description: 数据检查
 * @Author: jml
 * @Date: 2020-12-30 10:25:09
 * @LastEditors: jml
 * @LastEditTime: 2020-12-31 16:46:49
 */

const _getType = (param) => {
  return Object.prototype.toString.call(param);
};

module.exports = {
  /**
   * 判断是否为数字 (数字字符串也是数字，例如'23'、'123.213')
   * @param {String | Number} num
   */
  isNumber: (num) => {
    return /^[+,-]?[0-9]+(\.?[0-9]+)$/g.test(String(num));
  },
  /**
   * 判断是否为手机号
   * @param {String | Number} tel
   */
  isTel: (tel) => {
    return /^1[0-9]{10}$/.test(String(tel));
  },

  /**
   * 判断是否有值，但是值为false
   * @param {any} value
   */
  isFalseValue: (value) => {
    return (
      value === 0 ||
      value === false ||
      value === null ||
      value === undefined ||
      value === NaN ||
      value === ""
    );
  },

  /**
   *判断是否为函数
   * @param {any} param
   */
  isFunction: (param) => {
    return _getType(param) === "[object Function]";
  },

  /**
   *判断是否为时间对象
   * @param {any} param
   */
  isDate: (param) => {
    return _getType(param) === "[object Date]";
  },

  /**
   *判断是否为Object对象
   * @param {any} param
   */
  isObject: (param) => {
    return _getType(param) === "[object Object]";
  },

  /**
   *判断是否为Map
   * @param {any} param
   */
  isMap: (param) => {
    return _getType(param) === "[object Map]";
  },

  /**
   *判断是否为Set
   * @param {any} param
   */
  isSet: (param) => {
    return _getType(param) === "[object Set]";
  },

  /**
   *判断是否为字符串
   * @param {any} param
   */
  isString: (param) => {
    return _getType(param) === "[object String]";
  },

  /**
   *判断是否为Boolean
   * @param {any} param
   */
  isBoolean: (param) => {
    return _getType(param) === "[object Boolean]";
  },
};
