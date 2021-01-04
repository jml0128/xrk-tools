/*
 * @Author: jml
 * @Date: 2020-12-31 11:50:43
 * @LastEditors: jml
 * @LastEditTime: 2021-01-04 15:40:05
 */

declare const date: date;
export interface date {
  /**
   * 格式化时间
   * @param {Number | String | Date} date 需格式化的时间(传入时间戳单位为秒)
   * @param {String} fmt 格式化(默认Y-M-D H:m:s)
   * @param {Boolean} autoFillZero 月日时分秒不足两位时自动补零(默认true)
   */
  dateFormat(
    date: Number | String | Date,
    fmt?: String,
    autoFillZero?: Boolean
  ): String;
}
