/*
 * @Description: 数据检查
 * @Author: jml
 * @Date: 2020-12-30 10:25:09
 * @LastEditors: jml
 * @LastEditTime: 2020-12-30 17:27:22
 */

const _getType = (param) => {
  return Object.prototype.toString.call(param);
};

export default {
  /**
   * 判断是否为数字
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
};
