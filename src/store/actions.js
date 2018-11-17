/**
 * @Author: crazy_mad
 * @Date: 2018/11/17 13:22
 * @Description:
 */
import axios from 'axios'
import urls from '@/config/url'

export default {
  getCount ({commit}, count) {
    console.log(urls.GET_COUNT)
    return axios.get(urls.GET_COUNT).then(res => {
      commit('UPDATE_COUNT', res.data.data)
    })
  }
}
