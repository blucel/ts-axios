/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2022-02-03 09:26:29
 * @LastEditors: Seven
 * @LastEditTime: 2022-02-03 13:40:09
 */
import axios, { AxiosError, Canceler } from '../../src/index'
const instance = axios.create({
  baseURL: 'https://www.baidu.com/'
})

instance.get('https://public.healthyj.cn/images/gov/img1.png')
instance.get('/images/gov/img1.png')

const update = (e: ProgressEvent) => {
  console.log(e);
}
instance.defaults.onDownloadProgress = update
instance.defaults.onUploadProgress = update

const downloadEl = document.getElementById('download')

downloadEl.addEventListener('click', e => {
  instance.get('https://public.healthyj.cn/images/gov/img1.png')
})

const uploadEl = document.getElementById('upload')
uploadEl.addEventListener('click', e => {
  const data = new FormData()
  const fileEl = document.getElementById('file') as HTMLInputElement
  if (fileEl.files) {
    data.append('file', fileEl.files[0])
    instance.post('/more/upload', data)
  }
})