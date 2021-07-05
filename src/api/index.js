import { axios } from './axios'

export function request ({ url, method = 'get', params = {} }) {
  const reqUrl = url
  // urlReplacements.forEach(replacement => {
  //   reqUrl = replace(reqUrl, replacement.substr, replacement.replacement)
  // })
  if (['post', 'patch', 'put'].includes(method)) {
    return axios({
      url: reqUrl,
      data: params,
      method
    })
  } else if (['get', 'delete'].includes(method)) {
    return axios({
      url: reqUrl,
      params,
      method
    })
  }
}
