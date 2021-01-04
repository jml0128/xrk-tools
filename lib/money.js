module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/methods/base.js":
/*!*****************************!*\
  !*** ./src/methods/base.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
 * @Description: 通用基础方法
 * @Author: jml
 * @Date: 2020-12-30 10:17:46
 * @LastEditors: jml
 * @LastEditTime: 2021-01-04 18:01:38
 */
var _require = __webpack_require__(/*! ./check */ "./src/methods/check.js"),
    isNumber = _require.isNumber,
    isObject = _require.isObject,
    isMap = _require.isMap,
    isSet = _require.isSet;

var isArray = Array.isArray;

var isSepcialObject = function isSepcialObject(content) {
  return isArray(content) || isObject(content) || isMap(content) || isSet(content);
};
/**
 * 通用基础方法
 */


var base = {
  /**
   * 格式化数值
   * @param {Number|String} num 数字
   * @param {Number} divisor 除数(默认值100)
   * @param {Number} decimalPlaces 小数位数(默认值2)
   * @param {String} unit 单位
   */
  numberFormat: function numberFormat(num) {
    var divisor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    var decimalPlaces = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
    var unit = arguments.length > 3 ? arguments[3] : undefined;

    if (isNumber(num)) {
      return (Number(num) / divisor).toFixed(decimalPlaces) + unit;
    } else {
      console.warn("\u5165\u53C2".concat(num, "\u4E0D\u662F\u6B63\u786E\u7684\u6570\u5B57"));
      return num;
    }
  },

  /**
   * 简易深克隆(无法克隆Function Map Set undefined)
   * @param {any} content 需要深克隆的内容
   */
  easyDeepClone: function easyDeepClone(content) {
    return JSON.parse(JSON.stringify(content));
  },

  /**
   * 深克隆
   * @param {any} content 需要深克隆的内容
   */
  deepClone: function deepClone(content) {
    if (isSepcialObject(content)) {
      var res = null;
      var type = "";

      if (isArray(content)) {
        type = "Array";
        res = [];
      } else if (isObject(content)) {
        type = "Object";
        res = {};
      } else if (isMap(content)) {
        type = "Map";
        res = new Map();
      } else if (isSet(content)) {
        type = "Set";
        res = new Set();
      }

      if (type === "Array" || type == "Object") {
        for (var key in content) {
          if (Object.hasOwnProperty.call(content, key)) {
            if (isSepcialObject(content[key])) {
              res[key] = base.deepClone(content[key]);
            } else {
              res[key] = content[key];
            }
          }
        }
      } else if (type === "Map") {
        content.forEach(function (value, key) {
          res.set(key, isSepcialObject(value) ? base.deepClone(value) : value);
        });
      } else if (type === "Set") {
        content.forEach(function (value) {
          res.add(isSepcialObject(value) ? base.deepClone(value) : value);
        });
      }

      return res;
    }

    return content;
  }
};
module.exports = base;

/***/ }),

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

/***/ "./src/methods/money.js":
/*!******************************!*\
  !*** ./src/methods/money.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
 * @Description: 金额相关方法
 * @Author: jml
 * @Date: 2020-12-30 10:15:05
 * @LastEditors: jml
 * @LastEditTime: 2021-01-04 18:00:32
 */
var _require = __webpack_require__(/*! ./check */ "./src/methods/check.js"),
    isNumber = _require.isNumber,
    isFunction = _require.isFunction;

var _require2 = __webpack_require__(/*! ./base */ "./src/methods/base.js"),
    numberFormat = _require2.numberFormat;

var _moneyFunctional = function _moneyFunctional(num) {
  var callbackTrue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var callbackFalse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

  if (isNumber(num)) {
    return isFunction(callbackTrue) ? callbackTrue() : callbackTrue;
  } else {
    console.warn("\u5165\u53C2".concat(num, "\u4E0D\u662F\u6B63\u786E\u7684\u6570\u5B57"));
    return isFunction(callbackFalse) ? callbackFalse() : callbackFalse;
  }
};
/**
 * 处理金额
 */


var money = {
  /**
   * 将分格式化为元，保留两位小数
   * @param {Number | String} num 金额(分)
   * @param {Number} decimalPlaces 小数位数(默认2位)
   * @param {String} unit 单位(默认为元)
   */
  moneyFixed: function moneyFixed(num) {
    var decimalPlaces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    var unit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "元";
    return _moneyFunctional(num, function () {
      return numberFormat(num, 100, decimalPlaces, unit);
    }, "-");
  },

  /**
   * 将元格式化为分，主要用于向服务端传递参数时使用
   * @param {*} num 金额(元，两位小数)
   */
  moneyComplete: function moneyComplete(num) {
    return _moneyFunctional(num, function () {
      return Math.round(Number(num) * 100);
    }, num);
  },

  /**
   * 给c端计算税率
   * @param {Number | String} num
   * @param {Number} tax 税率(默认值1.0835)
   */
  afterTaxPrice: function afterTaxPrice(num) {
    var tax = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.0835;
    return _moneyFunctional(num, function () {
      return (Math.ceil(num * 100 * tax) / 100).toFixed(2);
    }, "");
  }
};
module.exports = money;

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
/******/ 	return __webpack_require__("./src/methods/money.js");
/******/ })()
;