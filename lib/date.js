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

/***/ }),

/***/ "./src/methods/date.js":
/*!*****************************!*\
  !*** ./src/methods/date.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
 * @Description: 时间相关方法
 * @Author: jml
 * @Date: 2020-12-30 10:15:17
 * @LastEditors: jml
 * @LastEditTime: 2021-01-04 18:00:01
 */
var _require = __webpack_require__(/*! ./check */ "./src/methods/check.js"),
    isNumber = _require.isNumber,
    isDate = _require.isDate;
/**
 * 处理时间
 */


var date = {
  /**
   * 格式化时间
   * @param {Number | String | Date} date 需格式化的时间(传入时间戳单位为秒)
   * @param {String} fmt 格式化(默认Y-M-D H:m:s)
   * @param {Boolean} autoFillZero 月日时分秒不足两位时自动补零(默认true)
   */
  dateFormat: function dateFormat() {
    var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
    var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Y-M-D H:m:s";
    var autoFillZero = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var _date = null;

    if (isNumber(date)) {
      // 时间戳
      _date = new Date(Math.round(String(date).padEnd(13, 0)));
    } else if (isDate(date)) {
      // 时间对象
      _date = date;
    } else {
      // 错误传参
      console.warn("\u5165\u53C2".concat(date, "\u4E0D\u662F\u6B63\u786E\u7684\u65F6\u95F4\u5BF9\u8C61\u6216\u65F6\u95F4\u6233"));
      return date;
    }

    var fillZero = function fillZero(number) {
      var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
      return String(number).padStart(count, 0);
    };

    var _fullYear = _date.getFullYear();

    var _month = _date.getMonth();

    var _day = _date.getDate();

    var _hours = _date.getHours();

    var _minutes = _date.getMinutes();

    var _seconds = _date.getSeconds();

    var fmtMap = {
      Y: _fullYear,
      M: autoFillZero ? fillZero(_month) : _month,
      D: autoFillZero ? fillZero(_day) : _day,
      H: autoFillZero ? fillZero(_hours) : _hours,
      m: autoFillZero ? fillZero(_minutes) : _minutes,
      s: autoFillZero ? fillZero(_seconds) : _seconds
    };

    var _fmt = String(fmt);

    for (var key in fmtMap) {
      if (Object.hasOwnProperty.call(fmtMap, key)) {
        _fmt = _fmt.replace(new RegExp("".concat(key)), fmtMap[key]);
      }
    }

    return _fmt;
  }
};
module.exports = date;

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
/******/ 	return __webpack_require__("./src/methods/date.js");
/******/ })()
;