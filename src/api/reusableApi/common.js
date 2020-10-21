import {
  Request
} from '@/api/baseUtilAjax'
/*
 * @description: demo
 * @author: 杨洋
 * @date: 2020-10-15 17:05:46
 * @version: V1.0.0
*/
/**
 *  @userId
 *  @orgId
 */
export const syncBiPrivilege = async (params = {}, success = null, error = null, cbs = []) => {
  return new Request({
    url: 'new-privilege/biPermission/syncBiPrivilege',
    params
  }, 'get').init(success, error, cbs)
}
