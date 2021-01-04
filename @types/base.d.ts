/*
 * @Author: jml
 * @Date: 2020-12-31 11:50:43
 * @LastEditors: jml
 * @LastEditTime: 2021-01-04 13:30:16
 */

declare const base: base;
export interface base {
  /**
   * 格式化数值
   * @param {Number|String} num 数字
   * @param {Number} divisor 除数(默认值100)
   * @param {Number} decimalPlaces 小数位数(默认值2)
   * @param {String} unit 单位
   */
  numberFormat(
    num: Number | String,
    divisor?: Number,
    decimalPlaces?: Number,
    unit?: String
  ): String;
  /**
   * 简易深克隆(无法克隆Function Map Set undefined)
   * @param {any} content 需要深克隆的内容
   */
  easyDeepClone(content: any): any;
  /**
   * 深克隆
   * @param {any} content 需要深克隆的内容
   */
  deepClone(content: any): any;
}
