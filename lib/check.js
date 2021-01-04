module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/methods/check.js":
/*!******************************!*\
  !*** ./src/methods/check.js ***!
  \******************************/
/***/ ((module) => {

/*
 * @Description: 数据检查
 * @Author: jml
 * @Date: 2020-12-30 10:25:09
 * @LastEditors: jml
 * @LastEditTime: 2021-01-04 17:59:48
 */
var _getType = function _getType(param) {
  return Object.prototype.toString.call(param);
};
/**
 * 数据检查
 */


var check = {
  /**
   * 判断是否为数字 (数字字符串也是数字，例如'23'、'123.213')
   * @param {String | Number} num
   */
  isNumber: function isNumber(num) {
    return /^[+,-]?[0-9]+(\.?[0-9]+)$/g.test(String(num));
  },

  /**
   * 判断是否为手机号
   * @param {String | Number} tel
   */
  isTel: function isTel(tel) {
    return /^1[0-9]{10}$/.test(String(tel));
  },

  /**
   * 判断是否有值，但是值为false
   * @param {any} value
   */
  isFalseValue: function isFalseValue(value) {
    return value === 0 || value === false || value === null || value === undefined || value === NaN || value === "";
  },

  /**
   *判断是否为函数
   * @param {any} param
   */
  isFunction: function isFunction(param) {
    return _getType(param) === "[object Function]";
  },

  /**
   *判断是否为时间对象
   * @param {any} param
   */
  isDate: function isDate(param) {
    return _getType(param) === "[object Date]";
  },

  /**
   *判断是否为Object对象
   * @param {any} param
   */
  isObject: function isObject(param) {
    return _getType(param) === "[object Object]";
  },

  /**
   *判断是否为Map
   * @param {any} param
   */
  isMap: function isMap(param) {
    return _getType(param) === "[object Map]";
  },

  /**
   *判断是否为Set
   * @param {any} param
   */
  isSet: function isSet(param) {
    return _getType(param) === "[object Set]";
  },

  /**
   *判断是否为字符串
   * @param {any} param
   */
  isString: function isString(param) {
    return _getType(param) === "[object String]";
  },

  /**
   *判断是否为Boolean
   * @param {any} param
   */
  isBoolean: function isBoolean(param) {
    return _getType(param) === "[object Boolean]";
  }
};
module.exports = check;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/methods/check.js");
/******/ })()
;