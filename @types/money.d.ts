/*
 * @Author: jml
 * @Date: 2020-12-31 11:50:43
 * @LastEditors: jml
 * @LastEditTime: 2021-01-04 17:00:16
 */

declare const money: money;
export interface money {
  /**
   * 将分格式化为元，保留两位小数
   * @param {Number | String} num 金额(分)
   * @param {Number} decimalPlaces 小数位数(默认2位)
   * @param {String} unit 单位(默认为元)
   */
  moneyFixed(
    num: Number | String,
    decimalPlaces?: Number,
    unit?: String
  ): String;

  /**
   * 将元格式化为分，主要用于向服务端传递参数时使用
   * @param {*} num 金额(元，两位小数)
   */
  moneyComplete(num: Number | String): Number;
  /**
   * 给c端计算税率
   * @param {Number | String} num
   * @param {Number} tax 税率(默认值1.0835)
   */
  afterTaxPrice(num: Number | String): Number;
}
