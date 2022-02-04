/*
 * @Description:
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2022-02-03 19:01:42
 * @LastEditors: Seven
 * @LastEditTime: 2022-02-03 19:04:40
 */

import cookie from '../../src/helpers/cookie'

describe('helpers:cookie', () => {
  test('should read cookies', () => {
    document.cookie = 'foo=baz'
    expect(cookie.read('foo')).toBe('baz')
  })
  test('should return null if cookie name is not exist', () => {
    expect(cookie.read('ss')).toBeNull()
  })
})
