/*
 * @Author: jml
 * @Date: 2020-12-30 10:05:59
 * @LastEditors: jml
 * @LastEditTime: 2020-12-30 17:31:06
 */

import transfrom from "./methods/transform";
import file from "./methods/file";

const fn = {
  ...file,
  ...transfrom,
};
window.fn = fn;
export default fn;
