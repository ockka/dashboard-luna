const apiUtils = {
  checkStatus(response) {
    if (response.ok) {
      return response.json()
    }
    throw response
  },
}
export default apiUtils
