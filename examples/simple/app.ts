import axios, { AxiosError, Canceler } from '../../src/index'
import { AxiosTransformer } from '../../src/types'
import qs from 'qs'
axios.defaults.headers.common.asd="123"
const CancelToken = axios.CancelToken
const source = CancelToken.source()
// axios.get('/simple/get', {
//   cancelToken: source.token
// }).catch(e => {
//   if (axios.isCancel(e)) {
//     console.log('request canceled', e.message);
//   }
// })
// setTimeout(() => {
//   source.cancel('Opratio canceled by the user.')
//   axios.post('/simple/post', {a: 123}, {
//     cancelToken: source.token
//   }).catch(e => {
//     if (axios.isCancel(e)) {
//       console.log(e.message);
//     }
//   })
// })

let cancel: Canceler
axios.get('/simple/get', {
  cancelToken: new CancelToken(c => {
    cancel = c
  })
})

setTimeout(() => {
  cancel()
})

// axios({
//   transformRequest:[
//     (function(data) {
//       return qs.stringify(data)
//     }), ...(axios.defaults.transformRequest as AxiosTransformer[])
//   ],
//   transformResponse: [...(axios.defaults.transformResponse as AxiosTransformer[]), function(data) {
//     if (typeof data === 'object') {
//       data.bbbbbb = 2
//     }
//     return data
//   }],
//   method: 'post',
//   url: '/simple/post',
//   headers: {
//     num: '0'
//   },
//   data: {
//     a: 123,
//     b: 'asdsa'
//   }
// }).then(res => {
//   console.log(res.data, 'test');
  
// })
// 这部分疑惑，header的Content-Type
// axios({
//   method: 'post',
//   url: '/simple/post',
//   headers: {
//     num: '0'
//   },
//   data: {
//     a: 123,
//     b: 'asdsa'
//   }
// }).then(res => {
//   console.log(res);
  
// })
// axios({
//   method: 'post',
//   url: '/simple/post',
//   headers: {
//     num: '0'
//   },
//   data: qs.stringify({
//     a: 123,
//     b: 'asdsa'
//   })
// }).then(res => {
//   console.log(res);
  
// })
// 这部分疑惑，header的Content-Type

// axios.interceptors.request.use(config => {
//   config.headers.num += '1'
//   return config
// })

// let request = axios.interceptors.request.use(config => {
//   config.headers.num += '2'
//   return config
// })
// axios.interceptors.request.eject(request)
// axios.interceptors.response.use(res => {
//   res.data += '1'
//   return res
// })
// axios.interceptors.response.use(res => {
//   res.data += '22'
//   return res
// })
// axios.interceptors.response.use(res => {
//   res.data += '2'
//   return res
// })

// axios.interceptors.request.use(config => {
//   config.headers.num += '3'
//   return config
// })
// axios({
//   method: 'post',
//   url: '/simple/post',
//   headers: {
//     num: '0'
//   },
//   data: {
//     a: 123,
//     b: 'asdsa'
//   }
// }).then(res => {
//   console.log(res);
  
// })

// interface ResponseData<T> {
//   code: number,
//   result: T,
//   message: string
// }

// interface User {
//   name: string,
//   age: number
// }

// function getUser<T>() {
//   return axios.post<ResponseData<T>>('/simple/user1').then(res => res.data).catch(err => console.log(err))
// }

// async function test() {
//   const user = await getUser<User>()
//   if (user) {
//     console.log(user.result.age);
//   }
// }
// test()
// axios({
//   method: 'post',
//   url: '/simple/post',
//   data: {
//     a: 123,
//     b: 'asdsa'
//   }
// })

// axios('/simple/post', {
//   method: 'post',
//   data: {
//     a: 123,
//     b: 'asdsa'
//   }
// })


// axios.request({
//   method: 'post',
//   url: '/simple/post',
//   data: {
//     a: 123,
//     b: 'asdsa'
//   }
// })

// axios.post('/simple/post', {
//   a: 123,
//   b: 'asdsa'
// })



// setTimeout(() => {
//   axios({
//     method: 'post',
//     url: '/simple/post',
//     data: {
//       a: 123,
//       b: 'asdsa'
//     }
//   }).then(res => {
//     console.log(res);
//   }).catch(err => {
//     console.log(err.message, err);
//   })
// }, 5500)

// axios({
//   method: 'post',
//   url: '/simple/timeout',
//   data: {
//     a: 123,
//     b: 'asdsa'
//   },
//   timeout: 222
// }).then(res => {
//   console.log(res);
// }).catch((err: AxiosError) => {
//   console.log(err.message);
//   console.log(err.code);
//   console.log(err.config);
//   console.log(err.isAxiosError);
//   console.log(err.request);
//   console.log(err.response);
// })

// axios({
//   method: 'post',
//   url: '/simple/post500',
//   data: {
//     a: 123,
//     b: 'asdsa'
//   },
//   timeout: 222
// }).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err.message, err);
// })

// axios({
//   method: 'post',
//   url: '/simple/post',
//   headers: {
//     'content-type': 'application/json',
//     'Accept': 'application/json, text/plain, */*'
//   },
//   responseType: 'json',
//   data: {
//     a: 123
//   }
// }).then(res => {
//   console.log(res);
// })

// const paramsString = 'q=USAJKK&name=test'
// const searchParams = new URLSearchParams(paramsString)
// axios({
//   url: '/simple/post',
//   method: 'post',
//   data: searchParams
// })

// const arr = new Int32Array([21,23])
// axios({
//   method: 'post',
//   url: '/simple/buffer',
//   data: arr
// })

// axios({
//   method: 'get',
//   url: '/simple/get',
//   params: {
//     foo: ['bar', 'baz']
//   }
// })

// axios({
//   method: 'get',
//   url: '/simple/get',
//   params: {
//     foo: {
//       bar: 'baz'
//     }
//   }
// })

// const date = new Date()
// axios({
//   method: 'get',
//   url: '/simple/get',
//   params: {
//     date
//   }
// })

// axios({
//   method: 'get',
//   url: '/simple/get',
//   params: {
//     foo: '@:$, '
//   }
// })

// axios({
//   method: 'get',
//   url: '/simple/get',
//   params: {
//     foo: 'bar',
//     baz: null
//   }
// })

// axios({
//   method: 'get',
//   url: '/simple/get#hash',
//   params: {
//     foo: ['bar', 'baz']
//   }
// })

// axios({
//   method: 'get',
//   url: '/simple/get?a=123&b=asd',
//   params: {
//     foo: ['bar', 'baz']
//   }
// })
