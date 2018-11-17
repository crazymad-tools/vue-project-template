/**
 * @Author: crazy_mad
 * @Date: 2018/11/17 14:11
 * @Description: 资源地址列表
 */
import config from '../../config'
import { getDomain } from '../util'

let servers = config.dev.backEndServers
// let imageServer = config.backEndServers.image
// let ssoServer = config.backEndServers.sso
let serviceServer = process.env.NODE_ENV === 'development' ? getDomain() : servers.service

export default {
  GET_COUNT: serviceServer + '/api/count'
}
