import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    hasLogin: false,
    loginProvider: "",
    openid: null,
    testvuex: false,
    colorIndex: 0,
    UserInfo: {}
  },
  mutations: {
    SET_USERINFO: (state, userinfo) => {
      state.UserInfo = Object.assign({}, userinfo)
    },

  },
  getters: {
    currentColor(state) {
      return state.colorList[state.colorIndex]
    }
  },
  actions: {
    wxlogin({
      commit
    }) {
      uni.getUserInfo({
        success: (res) => {
          var userInfo = res.userInfo
          commit('SET_USERINFO', userInfo)
        }
      })
    }
  }
})

export default store