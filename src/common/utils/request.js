function getType(data, method) { // 获取请求方式
  let type = {}
  if (!method) {
    method = 'post'
    type = {
      method,
      data: {
        ...data
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    }
  } else {
    method = 'get'
    type = {
      method,
      params: {
        ...data
      }
    }
  }
  return type
}

function Request(url, data, method) {
  return new Promise((resolve, reject) => {
    //uni.showLoading()
    uni.request({
      url: requestURL + url,
      ...getType(data, method),
      success: res => {
        resolve(res)
      },
      fail: err => {
        //uni.hideLoading()
        console.log('err')
        reject(err)
      }
    })
  }).catch(err => console.log(err))
}
export default Request