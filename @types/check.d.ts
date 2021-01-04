/*
 * @Author: jml
 * @Date: 2020-12-31 11:50:43
 * @LastEditors: jml
 * @LastEditTime: 2021-01-04 13:31:15
 */

declare const check: check;
export interface check {
  /**
   * 判断是否为数字 (数字字符串也是数字，例如'23'、'123.213')
   * @param {String | Number} num
   */
  isNumber(num: Number | String): Boolean;
  /**
   * 判断是否为手机号
   * @param {String | Number} tel
   */
  isTel(num: Number | String): Boolean;

  /**
   * 判断是否有值，但是值为false
   * @param {any} value
   */
  isFalseValue(value: any): Boolean;
  /**
   *判断是否为函数
   * @param {any} param
   */
  isFunction(params: any): Boolean;

  /**
   *判断是否为时间对象
   * @param {any} param
   */
  isDate(params: any): Boolean;

  /**
   *判断是否为Object对象
   * @param {any} param
   */
  isObject(params: any): Boolean;

  /**
   *判断是否为Map
   * @param {any} param
   */
  isMap(params: any): Boolean;

  /**
   *判断是否为Set
   * @param {any} param
   */
  isSet(params: any): Boolean;
  /**
   *判断是否为字符串
   * @param {any} param
   */
  isString(params: any): Boolean;
  /**
   *判断是否为Boolean
   * @param {any} param
   */
  isBoolean(params: any): Boolean;
}
