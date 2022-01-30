/*
 * @Description: 3
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2022-01-30 10:08:08
 * @LastEditors: Seven
 * @LastEditTime: 2022-01-30 10:45:22
 */
import axios from '../../src/index'

axios({
  method: 'get',
  url: '/simple/get',
  params: {
    a: 1, b: 2
  }
})