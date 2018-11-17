/**
 * @Author: crazy_mad
 * @Date: 2018/11/17 14:06
 * @Description: 工具包
 */

/**
 * 获取前端的域名
 * @returns {RegExpMatchArray}
 */
export function getDomain () {
  let url = document.location.href
  let domain = url.match(/^http(s)?:\/\/[0-9a-zA-Z-]*(:[0-9]*)+/g)
  return domain
}
