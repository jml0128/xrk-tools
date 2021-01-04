/*
 * @Author: jml
 * @Date: 2020-12-31 11:50:43
 * @LastEditors: jml
 * @LastEditTime: 2021-01-04 17:02:27
 */

declare const transform: transform;
export interface transform {
  /**
   * 将字符串指定位置替换为指定字符
   * @param {*} str 需替换的字符串
   * @param {*} start 开始位置(默认0)
   * @param {*} end 结束位置(默认0)
   * @param {*} replaceStr 替换为(默认为*)
   */
  hideSomeString(
    str: Number | String,
    start?: Number,
    end?: Number,
    replaceStr?: String
  ): String;
}
