 /**
 * 企业服务层,获取后端数据
 */
import axios from 'axios'
import {API_PARM_FUN_ALL,API_PARM_ALL,CRMAPI_URL} from '@/constants/interface';

/**
 * 客户阶段列表
 * @param Object [k=>v参数对象] obj
 * @since 2018/08/07
 * @author jzq
 * @returns {Promise.<*>}
 */
export function stageListSvr(obj,commit) {
  return axios.get(CRMAPI_URL+'/customerstage/stageList?'+API_PARM_FUN_ALL(obj,2)).then(res => {
    return res.data.data
  });
}