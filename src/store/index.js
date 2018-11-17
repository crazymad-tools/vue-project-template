/**
 * @Author: crazy_mad
 * @Date: 2018/11/17 13:22
 * @Description: Vuex配置
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
