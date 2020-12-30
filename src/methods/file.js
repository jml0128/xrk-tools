/*
 * @Description: 文件相关处理
 * @Date: 2020-12-30 15:03:13
 * @LastEditors: jml
 * @LastEditTime: 2020-12-30 17:28:06
 */

const axios = require("axios");

export default {
  /**
   * base64转为Blob
   * @param {String} base64
   */
  dataURLToBlob: (base64) => {
    const arr = base64.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    let u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  },
  /**
   * Blob转为base64
   * @param {Blob} blob
   */
  blobToDataURI: async (blob) => {
    const dataURI = await new Promise((resolve) => {
      let reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onload = (e) => {
        resolve(e.target.result);
      };
    });
    return dataURI;
  },

  /**
   * 将img标签转为base64
   * @param {Image} imgElement img标签
   */
  imgElement2Base64: (imgElement) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = imgElement.width;
    canvas.height = imgElement.height;
    ctx.drawImage(imgElement, 0, 0, imgElement.width, imgElement.height);
    return canvas.toDataURL("image/png");
  },

  /**
   * 将img网络资源转为base64
   * @param {String} imgUrl img地址
   */
  imgUrl2Base64: async (imgUrl) => {
    const base64 = await new Promise((resolve) => {
      const img = new Image();
      img.setAttribute("crossOrigin", "anonymous");
      img.src = imgUrl;
      img.onload = () => {
        resolve(this.imgElement2Base64.call(this, img));
      };
    });
    return base64;
  },

  /**
   * 获取网络资源文件
   * @param {String} url 网络资源地址
   * @param {String} responseType 响应类型(默认blob)
   * @param {*} options
   */
  getNetFile: async (
    url,
    responseType = "blob",
    options = { data: { noInterceptor: true } }
  ) => {
    const { data } = await axios.get(url, {
      responseType,
      ...options,
    });
    return data;
  },
};
