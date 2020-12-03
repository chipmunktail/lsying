
import request from '@/utils/request'

const deviceApi = {

}

/**
 * 获取设备分页列表
 * @param data
 * @returns {AxiosPromise}
 */
deviceApi.getPageList = data => {
  return request({
    url: '/deviceCommodity/getPageListByuser',
    method: 'post',
    data
  })
}

/**
 * 设备详情
 * @param data
 * @returns {AxiosPromise}
 */
deviceApi.detail = id => {
  return request({
    url: '/deviceCommodity/info/' + id,
    method: 'get'
  })
}

/**
 * 新增设备
 * @param data
 * @returns {AxiosPromise}
 */
deviceApi.add = data => {
  return request({
    url: '/deviceCommodity/add',
    method: 'post',
    data
  })
}

/**
 * 修改设备
 * @param data
 * @returns {AxiosPromise}
 */
deviceApi.update = data => {
  return request({
    url: '/deviceCommodity/update',
    method: 'post',
    data
  })
}

/**
 * 删除设备
 * @param data
 * @returns {AxiosPromise}
 */
deviceApi.delete = id => {
  return request({
    url: '/deviceCommodity/delete/' + id,
    method: 'post'
  })
}


export default deviceApi
