import Vue from 'vue';
import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken, removeToken } from '@/utils/auth'
const { Base64 } = require('js-base64');



let commonRequest = {

  "App_Token": "c8b9f4ebca2242c2b7fa0688b7dce857",
  "Sign_Method": "NO_SIGN",
  "App_Sub_ID": "120000150004",
  "Time_Stamp": "2018-10-13 18:10:52:052",
  "Partner_ID": "12000000",
  "Sys_ID": "12000015",
  "User_Token": "",
  "Api_Version": "1.0",
  "Api_ID": "snowbeer.cmp.msgsend.msgsend"
}
Date.prototype.format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1,                 //月份
    "d+": this.getDate(),                    //日
    "H+": this.getHours(),                   //小时
    "h+": this.getHours(),                   //小时
    "m+": this.getMinutes(),                 //分
    "s+": this.getSeconds(),                 //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds()             //毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
  }
  return fmt;
};
// create an axios instance
const service = axios.create({
  baseURL: 'http://120.25.174.100:8888' || process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  // baseURL: "https://ecsb-crb.crcloud.com/ecsb/gw/soa/rf",
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['X-Token'] = getToken()
      config.headers['Authorization'] = getToken()
    }
    // config.url = "?ssdp=" + Base64.encode(
    //   "Api_ID=" + commonRequest.Api_ID +
    //   "&Api_Version=" + commonRequest.Api_Version +
    //   "&App_Sub_ID=" + commonRequest.App_Sub_ID +
    //   "&App_Token=" + commonRequest.App_Token +
    //   "&Partner_ID=" + commonRequest.Partner_ID +
    //   "&Sign_Method=NO_SIGN&Sys_ID=" + commonRequest.Sys_ID +
    //   "&Time_Stamp=" + new Date().format("yyyy-MM-dd HH:mm:ss:S") +
    //   "&User_Token="
    // );
    // debugger
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data;

    // 
    if (res.code === 200) {
      return Promise.resolve(res.data)
    }
    if (res.code === 500) {
      Message({
        message: res.msg || 'Error',
        type: 'error',
        duration: 3 * 1000
      })
    }
    if (res.code === 401) {
      Message({
        message: '登录过期',
        type: 'error',
        duration: 3 * 1000
      })
      removeToken();
      Vue.prototype.$router.push('/login')
    }
    // if the custom code is not 20000, it is judged as an error.
    // if (res.code !== 20000) {
    //   Message({
    //     message: res.message || 'Error',
    //     type: 'error',
    //     duration: 5 * 1000
    //   })

    //   // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
    //   if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    //     // to re-login
    //     MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
    //       confirmButtonText: 'Re-Login',
    //       cancelButtonText: 'Cancel',
    //       type: 'warning'
    //     }).then(() => {
    //       store.dispatch('user/resetToken').then(() => {
    //         location.reload()
    //       })
    //     })
    //   }
    //   return Promise.reject(new Error(res.message || 'Error'))
    // } else {
    //   return res
    // }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
