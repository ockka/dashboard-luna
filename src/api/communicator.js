import 'whatwg-fetch'
import apiUtils from './apiUtils'

const API_HEADERS = {
  'Content-Type': 'application/json',
}

const communicator = {
  getMethod(path) {
    return fetch(path)
      .then(response => response)
      .then(apiUtils.checkStatus)
  },
  putWithBodyMethod(path, data) {
    return fetch(path, { method: 'PUT', headers: API_HEADERS, body: JSON.stringify(data) })
      .then(response => response)
      .then(apiUtils.checkStatus)
  },
  postMethod(path, data) {
    return fetch(path, { method: 'POST', headers: API_HEADERS, body: JSON.stringify(data) })
      .then(response => response)
      .then(apiUtils.checkStatus)
  },
}

export default communicator
