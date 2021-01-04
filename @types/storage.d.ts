/*
 * @Author: jml
 * @Date: 2020-12-31 11:50:43
 * @LastEditors: jml
 * @LastEditTime: 2021-01-04 16:55:35
 */

declare const storage: storage;
export interface storage {
  /**
   * 本地数据存储
   * @param {String} key 存储KEY
   * @param {any} value  存储的内容
   * @param {Boolean} isLocal 是否使用localStorage(默认是),否则使用sessionStorage
   */
  setStorage(key: String, value: any, isLocal?: Boolean): void;
  /**
   * 读取本地存储的数据
   * @param {String} key 需读取的KEY
   * @param {Boolean} isLocal 是否使用localStorage(默认是),否则使用sessionStorage
   */
  getStorage(key: String, isLocal?: Boolean): String;
}
