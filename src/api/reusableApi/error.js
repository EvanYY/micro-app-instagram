import {
  Request
} from '@/api/baseUtilAjax'

/*
 * @description:
 * @author: 杨洋
 * @date: 2020-10-13 12:04:36
 * @variable1: name
 * @variable2: msg
*/
export const saveErrorLog = async (data = {}, success = null, error = null, cbs = []) => {
  return new Request({
    url: '/cat/error',
    data
  }).init(success, error, cbs)
}
