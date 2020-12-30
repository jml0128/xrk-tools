/*
 * @Description: 通用基础方法
 * @Author: jml
 * @Date: 2020-12-30 10:17:46
 * @LastEditors: jml
 * @LastEditTime: 2020-12-30 17:27:02
 */

import check from "./check";
const { isNumber } = check;
export default {
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
};
