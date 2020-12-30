/*
 * @Description: 金额相关方法
 * @Author: jml
 * @Date: 2020-12-30 10:15:05
 * @LastEditors: jml
 * @LastEditTime: 2020-12-30 17:28:46
 */

import check from "./check";
import base from "./base";
const { isNumber, isFunction } = check;
const { numberFormat } = base;

/**
 * 判断是否为合法数字，是=>调用callbackTrue ,否=>调用callbackFalse
 * @param {Number} num 数字
 * @param {Function | String | Number} callbackTrue
 * @param {Function | String | Number} callbackFalse
 */
const _moneyFunctional = (num, callbackTrue = "", callbackFalse = "") => {
  if (isNumber(num)) {
    return isFunction(callbackTrue) ? callbackTrue() : callbackTrue;
  } else {
    console.warn(`入参${num}不是正确的数字`);
    return isFunction(callbackFalse) ? callbackFalse() : callbackFalse;
  }
};

export default {
  /**
   * 将分格式化为元，保留两位小数
   * @param {Number | String} num 金额(分)
   * @param {Number} decimalPlaces 小数位数(默认2位)
   * @param {String} unit 单位(默认为元)
   */
  moneyFixed: (num, decimalPlaces = 2, unit = "元") => {
    return _moneyFunctional(
      num,
      () => numberFormat(num, 100, decimalPlaces, unit),
      "-"
    );
  },

  /**
   * 将元格式化为分，主要用于向服务端传递参数时使用
   * @param {*} num 金额(元，两位小数)
   */
  moneyComplete: (num) => {
    return _moneyFunctional(num, () => Math.round(Number(num) * 100), num);
  },

  /**
   * 给c端计算税率
   * @param {Number | String} num
   * @param {Number} tax 税率(默认值1.0835)
   */
  afterTaxPrice: (num, tax = 1.0835) => {
    return _moneyFunctional(
      num,
      () => (Math.ceil(num * 100 * tax) / 100).toFixed(2),
      ""
    );
  },
};
