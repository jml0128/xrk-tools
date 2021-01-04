/*
 * @Description: file content
 * @Author: jml
 * @Date: 2021-01-04 13:18:21
 * @LastEditors: jml
 * @LastEditTime: 2021-01-04 17:01:20
 */
import { file } from "./file";
import { transform } from "./transform";
import { base } from "./base";
import { check } from "./check";
import { date } from "./date";
import { money } from "./money";
import { storage } from "./storage";
import { url } from "./url";

export default interface ToolsStatic {
  /**
   * 文件处理
   */
  file: file;
  /**
   * 字符串处理
   */
  transform: transform;
  /**
   * 基础操作（数值格式化、深拷贝、浅拷贝）
   */
  base: base;
  /**
   * 数据检查
   */
  check: check;
  /**
   * 时间处理
   */
  date: date;
  /**
   * 金额处理
   */
  money: money;
  /**
   * 本地数据处理
   */
  storage: storage;
  /**
   * url处理
   */
  url: url;
}
