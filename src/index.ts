import { AxiosRequestConfig } from './types'
import xmr from './xhr'
function Axios(config: AxiosRequestConfig): void {
  xmr(config)
}

export default Axios
