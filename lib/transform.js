module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/methods/transform.js":
/*!**********************************!*\
  !*** ./src/methods/transform.js ***!
  \**********************************/
/***/ ((module) => {

/*
 * @Description: 数据转换方法
 * @Author: jml
 * @Date: 2020-12-30 10:15:58
 * @LastEditors: jml
 * @LastEditTime: 2021-01-04 18:00:51
 */

/**
 * 处理字符串
 */
var transform = {
  /**
   * 将字符串指定位置替换为指定字符
   * @param {*} str 需替换的字符串
   * @param {*} start 开始位置(默认0)
   * @param {*} end 结束位置(默认0)
   * @param {*} replaceStr 替换为(默认为*)
   */
  hideSomeString: function hideSomeString(str) {
    var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var replaceStr = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "*";

    var _str = String(str);

    return _str.substr(0, start) + String(replaceStr).repeat(end - start) + _str.substr(end);
  }
};
module.exports = transform;

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
/******/ 	return __webpack_require__("./src/methods/transform.js");
/******/ })()
;