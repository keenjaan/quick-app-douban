import nativeFetch from '@system.fetch'
import prompt from '@system.prompt'

// 服务器地址
const SERVER_URL = 'https://api.douban.com';
// const SERVER_URL = 'https://cnodejs.org/api';
// const SERVER_URL = '';


const network = {
  /**
   * 网络请求
   * @param options
   * @return {Promise}
   */
  async fetch (obj) {
    console.log('开始网络请求');
    const url = SERVER_URL + obj.url;
    let options = Object.assign(obj, {url})
    const p1 = new Promise((resolve, reject) => {
      
      options.success = function ({data, code}) {
        console.log(JSON.stringify(data), 7777);
          // 根据后端接口返回来定制。
          // 根据code 来进行拦截
          if (code == 404) {
            prompt.showToast({
                message:'找不到页面'
            })
          }
        resolve( data )
      }
      options.fail = function (data) {
          console.log(data, 'fail');
          // fail 会返回一个错误的字符串说明
          prompt.showToast({
            message: data
        })
        resolve( null )
      }
      // console.log(JSON.stringify(options), 888);
      nativeFetch.fetch(options)
    })
    return p1
  },
  get (url, data) {
    return this.fetch({url, data});
    // console.log(JSON.stringify(d), 9999);
  },
  post (url, data) {
    return this.fetch({url, data, method: 'post'})
  }
}

// 注入到全局
const hookTo = global.__proto__ || global
hookTo.network = network
// export {
//   network
// }