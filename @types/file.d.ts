/*
 * @Author: jml
 * @Date: 2020-12-31 11:50:43
 * @LastEditors: jml
 * @LastEditTime: 2021-01-04 16:39:59
 */

declare const file: file;
export interface file {
  /**
   * base64转为Blob
   * @param {String} base64
   */
  dataURLToBlob(base64: String): Blob;
  /**
   * Blob转为base64
   * @param {Blob} blob
   */
  blobToDataURI(blob: Blob): Promise<String>;
  /**
   * 将img标签转为base64
   * @param {Image} imgElement img标签
   */
  imgElement2Base64(imgElement: HTMLImageElement): String;

  /**
   * 将img网络资源转为base64
   * @param {String} imgUrl img地址
   */
  imgUrl2Base64(imgUrl: String): Promise<String>;
  /**
   * 获取网络资源文件
   * @param {String} url 网络资源地址
   * @param {String} responseType 响应类型(默认blob)
   * @param {*} options
   */
  getNetFile(url: String, responseType?: "blob"): Promise<Blob>;
  /**
   * 将内容转为二维码图片
   * @param {any} content
   */
  contentToQrcodeUrl(content: any): Promise<String>;
}
