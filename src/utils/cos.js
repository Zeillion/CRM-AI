import COS from "./cos-js-sdk-v5.min.js"
import { cosAuth } from "@/api/cosAuth"
// 初始化数据
const defaultData = {
  // SecretId: "AKIDiBMM4UqWz96lF4OsrZzBbjCNL1UgGGck",
  // SecretKey: "zt8QQ9gw1ye4E7lCqIdiaATYS5WnnWyC",
  Bucket: process.env.NODE_ENV == "production" ? 'crm-ai-prd-1259627966' : 'crm-ai-dev-1259627966', /* 必须 */
  Region: "ap-chengdu",
};
// https://test-1254001891.cos.ap-nanjing.myqcloud.com
let getDate = `${new Date().getFullYear()}-${new Date().getMonth() +
  1}-${new Date().getDate()}`;
// 上传文件的key值 保证唯一性
// 规则为  创建人-类型-创建时间

// 还有跨域问题，需要解决问题才能使用


class _Cos {
  constructor() {
    this._cos = new COS({
      // SecretId: options ? options.SecretId : defaultData.SecretId,
      // SecretKey: options ? options.SecretId : defaultData.SecretKey,
      getAuthorization: function (options, callback) {
        cosAuth().then(res => {
          var credentials = res && res.credentials;
          if (!res || !credentials) return console.error('credentials invalid');
          callback({
            TmpSecretId: credentials.tmpSecretId,
            TmpSecretKey: credentials.tmpSecretKey,
            XCosSecurityToken: credentials.sessionToken,
            // 建议返回服务器时间作为签名的开始时间，避免用户浏览器本地时间偏差过大导致签名错误
            StartTime: res.startTime, // 时间戳，单位秒，如：1580000000
            ExpiredTime: res.expiredTime, // 时间戳，单位秒，如：1580000900
          });

        })
      }
    });
    this.config = {
      Bucket: defaultData.Bucket,
      Region: defaultData.Region,
    };
  }

  /**
   * 封装查询对象列表
   * @returns {Promise}
   */
  getFile() {
    let _this = this
    return new Promise(function (resolve, reject) {
      _this._cos.getBucket({
        ..._this.config
      }, function (err, data) {
        resolve(data)
        if (err) {
          reject(err)
        }
      })
    })

  }

  /**
   * 封装上传文件
   * @param file any
   * @param fileName string
   * @returns {Promise}
   */
  // Key（文件名）不能以/结尾，否则会被识别为文件夹。
  updateFile(file, fileName, cb) {
    let _this = this;
    return new Promise(function (resolve, reject) {
      _this._cos.putObject(
        {
          ..._this.config,
          Key: getDate + "/" + fileName /* 必须 */,
          Body: file,
          onProgress: function (progressData) {
            cb instanceof Function && cb(JSON.stringify(progressData));
          },
        },
        function (err, data) {
          console.log('err', err);
          console.log('data', data)
          if (err) {
            reject(err);
          }
          resolve(data);
        }
      );
    });
  }
  // 单个删除对象
  deleteFile(key) {
    const _this = this;
    return new Promise(function (resolve, reject) {
      _this._cos.deleteObject(
        {
          ..._this.config,
          Key: key /* 必须 */,
        },
        function (err, data) {
          resolve(data);
          if (err) {
            reject(err);
          }
        }
      );
    });
  }
  /**
   * 封装下载文件
   * @param file any
   * @param fileName string
   * @returns {Promise}
   */
  downloadFile() {
    // do
  }

  /**
   * 封装批量上传文件
   * @param arr Array 文件数组
   * @param fileName string
   * @returns {Promise}
   */
  uploadFiles(arr, fileName) {
    const _this = this;
    arr.map(t => {
      return {
        ..._this.config,
        key: getDate + "/" + fileName /* 必须 */,
        Body: t
      }
    })
    return new Promise((resolve, reject) => {
      _this._cos.uploadFiles({
        file: arr,
        SliceSize: 1024 * 1024,
        onProgress: function (info) {
          var percent = parseInt(info.percent * 10000) / 100;
          var speed = parseInt(info.speed / 1024 / 1024 * 100) / 100;
          console.log('进度：' + percent + '%; 速度：' + speed + 'Mb/s;');
        },
        onFileFinish: function (err, data, options) {
          console.log(options.Key + '上传' + (err ? '失败' : '完成'));
        },

      }, function (err, data) {
        console.log(err || data)
        err ? reject(err) : resolve(data)
      })
    })
  }

}


export default new _Cos();