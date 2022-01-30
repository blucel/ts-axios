/*
 * @Description:
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2022-01-30 09:33:46
 * @LastEditors: Seven
 * @LastEditTime: 2022-01-30 09:37:54
 */
import { AxiosRequestConfig } from './types'

export default function xhr(config: AxiosRequestConfig): void {
  const { data = null, method = 'get', url } = config
  const request = new XMLHttpRequest()
  request.open(method.toUpperCase(), url, true)
  request.send(data)
}
