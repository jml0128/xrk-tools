/*
 * @Author: jml
 * @Date: 2020-12-31 11:50:43
 * @LastEditors: jml
 * @LastEditTime: 2021-01-04 15:42:02
 */

declare const url: url;
export interface url {
  /**
   * 丢弃对象所有非Number String Boolean的值，并返回序列化字符串 例如 ?key=value&key1=value1&key2=value2
   * @param {Object} query 需处理的对象
   */
  queryFormat(query: Object): String;
}
