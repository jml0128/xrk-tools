/*
 * @Description: 数据转换方法
 * @Author: jml
 * @Date: 2020-12-30 10:15:58
 * @LastEditors: jml
 * @LastEditTime: 2020-12-31 11:57:48
 */

module.exports = {
  /**
   * 将字符串指定位置替换为指定字符
   * @param {*} str 需替换的字符串
   * @param {*} start 开始位置(默认0)
   * @param {*} end 结束位置(默认0)
   * @param {*} replaceStr 替换为(默认为*)
   */
  hideSomeString: (str, start = 0, end = 0, replaceStr = "*") => {
    const _str = String(str);
    return (
      _str.substr(0, start) +
      String(replaceStr).repeat(end - start) +
      _str.substr(end)
    );
  },
};
