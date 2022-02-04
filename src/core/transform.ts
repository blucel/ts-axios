/*
 * @Description:
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2022-02-02 10:29:11
 * @LastEditors: Seven
 * @LastEditTime: 2022-02-02 10:42:46
 */
import { AxiosTransformer } from '../types'

export default function transform(
  data: any,
  headers: any,
  fns?: AxiosTransformer | AxiosTransformer[]
): any {
  if (!fns) {
    return data
  }
  if (!Array.isArray(fns)) {
    fns = [fns]
  }
  fns.forEach(fn => {
    data = fn(data, headers)
  })
  return data
}
