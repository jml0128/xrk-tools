/*
 * @Description: 时间相关方法
 * @Author: jml
 * @Date: 2020-12-30 10:15:17
 * @LastEditors: jml
 * @LastEditTime: 2020-12-30 17:27:53
 */

import check from "./check";
const { isNumber, isDate } = check;

export default {
  /**
   * 格式化时间
   * @param {Number | String | Date} date 需格式化的时间(传入时间戳单位为秒)
   * @param {String} fmt 格式化(默认Y-M-D H:m:s)
   * @param {Boolean} autoFillZero 月日时分秒不足两位时自动补零(默认true)
   */
  dateFormat: (date = new Date(), fmt = "Y-M-D H:m:s", autoFillZero = true) => {
    let _date = null;
    if (isNumber(date)) {
      // 时间戳
      _date = new Date(Math.round(String(date).padEnd(13, 0)));
    } else if (isDate(date)) {
      // 时间对象
      _date = date;
    } else {
      // 错误传参
      console.warn(`入参${date}不是正确的时间对象或时间戳`);
      return date;
    }
    const fillZero = (number, count = 2) => {
      return String(number).padStart(count, 0);
    };
    const _fullYear = _date.getFullYear();
    const _month = _date.getMonth();
    const _day = _date.getDate();
    const _hours = _date.getHours();
    const _minutes = _date.getMinutes();
    const _seconds = _date.getSeconds();
    const fmtMap = {
      Y: _fullYear,
      M: autoFillZero ? fillZero(_month) : _month,
      D: autoFillZero ? fillZero(_day) : _day,
      H: autoFillZero ? fillZero(_hours) : _hours,
      m: autoFillZero ? fillZero(_minutes) : _minutes,
      s: autoFillZero ? fillZero(_seconds) : _seconds,
    };
    let _fmt = String(fmt);
    for (const key in fmtMap) {
      if (Object.hasOwnProperty.call(fmtMap, key)) {
        _fmt = _fmt.replace(new RegExp(`${key}`), fmtMap[key]);
      }
    }
    return _fmt;
  },
};
