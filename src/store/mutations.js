import * as types from './mutation-type.js';

export default {
  // 更新用户信息
  [types.SET_USERINFO](state, userInfo) {
    state.userInfo = userInfo
  }

}
