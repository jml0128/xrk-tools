# xrk-tools-test

## 安装

`npm i xrk-tools-test`

<br>

## 完整引入

`import xkrTools from 'xrk-tool-test'`

<br>

## 按需引入

借助 <span style="color:#3667EC;">babel-plugin-component</span>

首先，安装 babel-plugin-component

`npm i babel-plugin-component -D`

然后，修改.babelrc 或者 babel.config.js

```
{

  "plugins": [
    [
      "component",
      { libraryName: "xrk-tools-test", style: false },
      "xrk-tools-test",
    ],
  ]

}
```

最后，只需在项目中引入需要部分

`import { file } from 'xrk-tool-test'`

<br>
<br>

## 文档

- base
  - numberFormat(num: Number | String,divisor?: Number,decimalPlaces?: Number,unit?: String): String;格式化数值
  - easyDeepClone(content: any): any;简易深克隆(无法克隆 Function Map Set undefined)
  - deepClone(content: any): any;深克隆
- check

  - isNumber(num: Number | String): Boolean; 判断是否为数字 (数字字符串也是数字，例如'23'、'123.213')
  - isTel(num: Number | String): Boolean; 判断是否为手机号
  - isFalseValue(value: any): Boolean;判断是否有值，但是值为 false
  - isFunction(params: any): Boolean;判断是否为函数
  - isDate(params: any): Boolean;判断是否为时间对象
  - isObject(params: any): Boolean;判断是否为 Object 对象
  - isMap(params: any): Boolean;判断是否为 Map 断是否为 Set
  - isString(params: any): Boolean;判断是否为字符串
  - isBoolean(params: any): Boolean;判断是否为 Boolean

- date
  - dateFormat(date: Number | String | Date,fmt?: String,autoFillZero?: Boolean): String;格式化时间

* file
  - dataURLToBlob(base64: String): Blob;base64 转为 Blob
  - blobToDataURI(blob: Blob): Promise<String>;Blob 转为 base64g;将 img 标签转为 base64
  - imgUrl2Base64(imgUrl: String): Promise<String>;将 img 网络资源转为 base64
  - getNetFile(url: String, responseType?: "blob"): Promise<Blob>;获取网络资源文件
  - contentToQrcodeUrl(content: any): Promise<String>;将内容转为二维码图片
* money

  - moneyFixed(
    num: Number | String,
    decimalPlaces?: Number,
    unit?: String
    ): String;将分格式化为元，保留两位小数

  - moneyComplete(num: Number | String): Number;将元格式化为分，主要用于向服务端传递参数时使用
  - afterTaxPrice(num: Number | String): Number;给 c 端计算税率

* storage
  - setStorage(key: String, value: any, isLocal?: Boolean): void;本地数据存储
  - getStorage(key: String, isLocal?: Boolean): String;读取本地存储的数据
* transform
  - hideSomeString(
    str: Number | String,
    start?: Number,
    end?: Number,
    replaceStr?: String
    ): String;将字符串指定位置替换为指定字符
