/*
 * @Author: jml
 * @Date: 2020-12-31 11:50:43
 * @LastEditors: jml
 * @LastEditTime: 2020-12-31 17:03:42
 */

export interface file {
  dataURLToBlob(base64: String): Blob;
  blobToDataURI(blob: Blob): String;
  imgElement2Base64(imgElement: HTMLImageElement): String;
  imgUrl2Base64(imgUrl: String): String;
  getNetFile(url: String, responseType?: "blob"): Blob;
  contentToQrcodeUrl(content: any): String;
}

export interface transform {
  hideSomeString(
    str: Number | String,
    start?: Number,
    end?: Number,
    replaceStr?: String
  ): String;
}

export interface base {
  numberFormat(
    num: Number | String,
    divisor?: Number,
    decimalPlaces?: Number,
    unit?: String
  ): String;
  easyDeepClone(content: any): any;
  deepClone(content: any): any;
}

export interface check {
  isNumber(num: Number | String): Boolean;
  isTel(num: Number | String): Boolean;
  isFalseValue(value: any): Boolean;
  isFunction(params: any): Boolean;
  isDate(params: any): Boolean;
  isObject(params: any): Boolean;
  isMap(params: any): Boolean;
  isSet(params: any): Boolean;
  isString(params: any): Boolean;
  isBoolean(params: any): Boolean;
}

export interface date {
  dateFormat(
    date: Number | String | Date,
    fmt?: String,
    autoFillZero?: Boolean
  ): String;
}

export interface money {
  moneyFixed(
    num: Number | String,
    decimalPlaces?: Number,
    unit?: String
  ): String;
  moneyComplete(num: Number | String): Number;
  afterTaxPrice(num: Number | String): Number;
}

export interface customStorage {
  setStorage(key: String, value: any, isLocal?: Boolean): void;
  getStorage(key: String, isLocal?: Boolean): String;
}
export interface url {
  queryFormat(query: Object): String;
}

export interface ToolsStatic {
  file: file;
  transform: transform;
  base: base;
  check: check;
  date: date;
  money: money;
  storage: customStorage;
  url: url;
}

declare const xrkTools: ToolsStatic;

export default xrkTools;
