import * as types from './mutation-type.js'

export default {
  // 更新用户信息
  setUserInfo ({commit}, data) {
    // console.log(data)
    return new Promise((resolve, reject) => {
      commit(types.SET_USERINFO, data)
      resolve()
    })
  }
}
