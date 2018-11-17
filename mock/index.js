/**
 * @Author: crazy_mad
 * @Date: 2018/11/17 13:46
 * @Description:
 */
class JsonResult {
  constructor (state, message, data = null) {
    this.state = state
    this.message = message
    this.data = data
  }
}

const proxy = {
  'POST /api/get': (req, res) => {
    let body = req.body
    if (body !== null) {
      res.json(new JsonResult(1, 'ok', body))
    } else {
      res.json(new JsonResult(0, 'error'))
    }
  },
  'GET /api/post': (req, res) => {
    let params = req.params
    if (params != null) {
      res.json(new JsonResult(1, 'ok', params))
    } else {
      res.json(new JsonResult(0, 'error'))
    }
  }
}
module.exports = proxy
