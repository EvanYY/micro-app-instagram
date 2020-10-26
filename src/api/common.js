import {
  Request
} from '@/api/baseUtilAjax'

/*
 * @description:
 * @author: 杨洋
 * @date: 2020-10-24 14:33:03
 * @variable1: 变量1
 * @variable2: 变量2
 * @variable3: 变量3
 * @variable4: 变量4
 * @variable5: 变量5
*/
export const getVistorList = async (params = {}, success = null, error = null, cbs = []) => {
  return new Request({
    url: '',
    params
  }, 'get').init(success, error, cbs)
}
/*
 * @description:
 * @author: 杨洋
 * @date: 2020-10-24 14:39:22
 * @variable1: 变量1
 * @variable2: 变量2
 * @variable3: 变量3
 * @variable4: 变量4
 * @variable5: 变量5
*/
export const getMsgList = async (params = {}, success = null, error = null, cbs = []) => {
  return new Request({
    url: '',
    params
  }, 'get').init(success, error, cbs)
}
