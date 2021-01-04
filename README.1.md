## Constants

<dl>
<dt><a href="#base">base</a></dt>
<dd><p>通用基础方法</p>
</dd>
<dt><a href="#check">check</a></dt>
<dd><p>数据检查</p>
</dd>
<dt><a href="#date">date</a></dt>
<dd><p>处理时间</p>
</dd>
<dt><a href="#file">file</a></dt>
<dd><p>处理文件</p>
</dd>
<dt><a href="#money">money</a></dt>
<dd><p>处理金额</p>
</dd>
<dt><a href="#customStorage">customStorage</a></dt>
<dd><p>处理本地数据</p>
</dd>
<dt><a href="#transform">transform</a></dt>
<dd><p>处理字符串</p>
</dd>
</dl>

<a name="base"></a>

## base
通用基础方法

**Kind**: global constant  

* [base](#base)
    * [.numberFormat(num, divisor, decimalPlaces, unit)](#base.numberFormat)
    * [.easyDeepClone(content)](#base.easyDeepClone)
    * [.deepClone(content)](#base.deepClone)

<a name="base.numberFormat"></a>

### base.numberFormat(num, divisor, decimalPlaces, unit)
格式化数值

**Kind**: static method of [<code>base</code>](#base)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>num</td><td><code>Number</code> | <code>String</code></td><td><p>数字</p>
</td>
    </tr><tr>
    <td>divisor</td><td><code>Number</code></td><td><p>除数(默认值100)</p>
</td>
    </tr><tr>
    <td>decimalPlaces</td><td><code>Number</code></td><td><p>小数位数(默认值2)</p>
</td>
    </tr><tr>
    <td>unit</td><td><code>String</code></td><td><p>单位</p>
</td>
    </tr>  </tbody>
</table>

<a name="base.easyDeepClone"></a>

### base.easyDeepClone(content)
简易深克隆(无法克隆Function Map Set undefined)

**Kind**: static method of [<code>base</code>](#base)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>content</td><td><code>any</code></td><td><p>需要深克隆的内容</p>
</td>
    </tr>  </tbody>
</table>

<a name="base.deepClone"></a>

### base.deepClone(content)
深克隆

**Kind**: static method of [<code>base</code>](#base)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>content</td><td><code>any</code></td><td><p>需要深克隆的内容</p>
</td>
    </tr>  </tbody>
</table>

<a name="check"></a>

## check
数据检查

**Kind**: global constant  

* [check](#check)
    * [.isNumber(num)](#check.isNumber)
    * [.isTel(tel)](#check.isTel)
    * [.isFalseValue(value)](#check.isFalseValue)
    * [.isFunction(param)](#check.isFunction)
    * [.isDate(param)](#check.isDate)
    * [.isObject(param)](#check.isObject)
    * [.isMap(param)](#check.isMap)
    * [.isSet(param)](#check.isSet)
    * [.isString(param)](#check.isString)
    * [.isBoolean(param)](#check.isBoolean)

<a name="check.isNumber"></a>

### check.isNumber(num)
判断是否为数字 (数字字符串也是数字，例如'23'、'123.213')

**Kind**: static method of [<code>check</code>](#check)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>num</td><td><code>String</code> | <code>Number</code></td>
    </tr>  </tbody>
</table>

<a name="check.isTel"></a>

### check.isTel(tel)
判断是否为手机号

**Kind**: static method of [<code>check</code>](#check)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>tel</td><td><code>String</code> | <code>Number</code></td>
    </tr>  </tbody>
</table>

<a name="check.isFalseValue"></a>

### check.isFalseValue(value)
判断是否有值，但是值为false

**Kind**: static method of [<code>check</code>](#check)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>value</td><td><code>any</code></td>
    </tr>  </tbody>
</table>

<a name="check.isFunction"></a>

### check.isFunction(param)
判断是否为函数

**Kind**: static method of [<code>check</code>](#check)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>param</td><td><code>any</code></td>
    </tr>  </tbody>
</table>

<a name="check.isDate"></a>

### check.isDate(param)
判断是否为时间对象

**Kind**: static method of [<code>check</code>](#check)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>param</td><td><code>any</code></td>
    </tr>  </tbody>
</table>

<a name="check.isObject"></a>

### check.isObject(param)
判断是否为Object对象

**Kind**: static method of [<code>check</code>](#check)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>param</td><td><code>any</code></td>
    </tr>  </tbody>
</table>

<a name="check.isMap"></a>

### check.isMap(param)
判断是否为Map

**Kind**: static method of [<code>check</code>](#check)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>param</td><td><code>any</code></td>
    </tr>  </tbody>
</table>

<a name="check.isSet"></a>

### check.isSet(param)
判断是否为Set

**Kind**: static method of [<code>check</code>](#check)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>param</td><td><code>any</code></td>
    </tr>  </tbody>
</table>

<a name="check.isString"></a>

### check.isString(param)
判断是否为字符串

**Kind**: static method of [<code>check</code>](#check)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>param</td><td><code>any</code></td>
    </tr>  </tbody>
</table>

<a name="check.isBoolean"></a>

### check.isBoolean(param)
判断是否为Boolean

**Kind**: static method of [<code>check</code>](#check)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>param</td><td><code>any</code></td>
    </tr>  </tbody>
</table>

<a name="date"></a>

## date
处理时间

**Kind**: global constant  
<a name="date.dateFormat"></a>

### date.dateFormat(date, fmt, autoFillZero)
格式化时间

**Kind**: static method of [<code>date</code>](#date)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>date</td><td><code>Number</code> | <code>String</code> | <code>Date</code></td><td><p>需格式化的时间(传入时间戳单位为秒)</p>
</td>
    </tr><tr>
    <td>fmt</td><td><code>String</code></td><td><p>格式化(默认Y-M-D H:m:s)</p>
</td>
    </tr><tr>
    <td>autoFillZero</td><td><code>Boolean</code></td><td><p>月日时分秒不足两位时自动补零(默认true)</p>
</td>
    </tr>  </tbody>
</table>

<a name="file"></a>

## file
处理文件

**Kind**: global constant  

* [file](#file)
    * [.dataURLToBlob(base64)](#file.dataURLToBlob)
    * [.blobToDataURI(blob)](#file.blobToDataURI)
    * [.imgElement2Base64(imgElement)](#file.imgElement2Base64)
    * [.imgUrl2Base64(imgUrl)](#file.imgUrl2Base64)
    * [.getNetFile(url, responseType, options)](#file.getNetFile)
    * [.contentToQrcodeUrl(content)](#file.contentToQrcodeUrl)

<a name="file.dataURLToBlob"></a>

### file.dataURLToBlob(base64)
base64转为Blob

**Kind**: static method of [<code>file</code>](#file)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>base64</td><td><code>String</code></td>
    </tr>  </tbody>
</table>

<a name="file.blobToDataURI"></a>

### file.blobToDataURI(blob)
Blob转为base64

**Kind**: static method of [<code>file</code>](#file)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>blob</td><td><code>Blob</code></td>
    </tr>  </tbody>
</table>

<a name="file.imgElement2Base64"></a>

### file.imgElement2Base64(imgElement)
将img标签转为base64

**Kind**: static method of [<code>file</code>](#file)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>imgElement</td><td><code>HTMLImageElement</code></td><td><p>img标签</p>
</td>
    </tr>  </tbody>
</table>

<a name="file.imgUrl2Base64"></a>

### file.imgUrl2Base64(imgUrl)
将img网络资源转为base64

**Kind**: static method of [<code>file</code>](#file)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>imgUrl</td><td><code>String</code></td><td><p>img地址</p>
</td>
    </tr>  </tbody>
</table>

<a name="file.getNetFile"></a>

### file.getNetFile(url, responseType, options)
获取网络资源文件

**Kind**: static method of [<code>file</code>](#file)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>url</td><td><code>String</code></td><td><p>网络资源地址</p>
</td>
    </tr><tr>
    <td>responseType</td><td><code>String</code></td><td><p>响应类型(默认blob)</p>
</td>
    </tr><tr>
    <td>options</td><td><code>*</code></td><td></td>
    </tr>  </tbody>
</table>

<a name="file.contentToQrcodeUrl"></a>

### file.contentToQrcodeUrl(content)
将内容转为二维码图片

**Kind**: static method of [<code>file</code>](#file)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>content</td><td><code>any</code></td>
    </tr>  </tbody>
</table>

<a name="money"></a>

## money
处理金额

**Kind**: global constant  

* [money](#money)
    * [.moneyFixed(num, decimalPlaces, unit)](#money.moneyFixed)
    * [.moneyComplete(num)](#money.moneyComplete)
    * [.afterTaxPrice(num, tax)](#money.afterTaxPrice)

<a name="money.moneyFixed"></a>

### money.moneyFixed(num, decimalPlaces, unit)
将分格式化为元，保留两位小数

**Kind**: static method of [<code>money</code>](#money)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>num</td><td><code>Number</code> | <code>String</code></td><td><p>金额(分)</p>
</td>
    </tr><tr>
    <td>decimalPlaces</td><td><code>Number</code></td><td><p>小数位数(默认2位)</p>
</td>
    </tr><tr>
    <td>unit</td><td><code>String</code></td><td><p>单位(默认为元)</p>
</td>
    </tr>  </tbody>
</table>

<a name="money.moneyComplete"></a>

### money.moneyComplete(num)
将元格式化为分，主要用于向服务端传递参数时使用

**Kind**: static method of [<code>money</code>](#money)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>num</td><td><code>*</code></td><td><p>金额(元，两位小数)</p>
</td>
    </tr>  </tbody>
</table>

<a name="money.afterTaxPrice"></a>

### money.afterTaxPrice(num, tax)
给c端计算税率

**Kind**: static method of [<code>money</code>](#money)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>num</td><td><code>Number</code> | <code>String</code></td><td></td>
    </tr><tr>
    <td>tax</td><td><code>Number</code></td><td><p>税率(默认值1.0835)</p>
</td>
    </tr>  </tbody>
</table>

<a name="customStorage"></a>

## customStorage
处理本地数据

**Kind**: global constant  

* [customStorage](#customStorage)
    * [.setStorage(key, value, isLocal)](#customStorage.setStorage)
    * [.getStorage(key, isLocal)](#customStorage.getStorage)

<a name="customStorage.setStorage"></a>

### customStorage.setStorage(key, value, isLocal)
本地数据存储

**Kind**: static method of [<code>customStorage</code>](#customStorage)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>key</td><td><code>String</code></td><td><p>存储KEY</p>
</td>
    </tr><tr>
    <td>value</td><td><code>any</code></td><td><p>存储的内容</p>
</td>
    </tr><tr>
    <td>isLocal</td><td><code>Boolean</code></td><td><p>是否使用localStorage(默认是),否则使用sessionStorage</p>
</td>
    </tr>  </tbody>
</table>

<a name="customStorage.getStorage"></a>

### customStorage.getStorage(key, isLocal)
读取本地存储的数据

**Kind**: static method of [<code>customStorage</code>](#customStorage)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>key</td><td><code>String</code></td><td><p>需读取的KEY</p>
</td>
    </tr><tr>
    <td>isLocal</td><td><code>Boolean</code></td><td><p>是否使用localStorage(默认是),否则使用sessionStorage</p>
</td>
    </tr>  </tbody>
</table>

<a name="transform"></a>

## transform
处理字符串

**Kind**: global constant  
<a name="transform.hideSomeString"></a>

### transform.hideSomeString(str, start, end, replaceStr)
将字符串指定位置替换为指定字符

**Kind**: static method of [<code>transform</code>](#transform)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>str</td><td><code>*</code></td><td><p>需替换的字符串</p>
</td>
    </tr><tr>
    <td>start</td><td><code>*</code></td><td><p>开始位置(默认0)</p>
</td>
    </tr><tr>
    <td>end</td><td><code>*</code></td><td><p>结束位置(默认0)</p>
</td>
    </tr><tr>
    <td>replaceStr</td><td><code>*</code></td><td><p>替换为(默认为*)</p>
</td>
    </tr>  </tbody>
</table>

