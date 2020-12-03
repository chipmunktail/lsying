
import request from '@/utils/request'

const productApi = {

}

/**
 * 获取商品分页列表
 * @param data
 * @returns {AxiosPromise}
 */
productApi.getPageList = data => {
  return request({
    url: '/commodity/getPageList',
    method: 'post',
    data
  })
}

/**
 * 商品详情
 * @param data
 * @returns {AxiosPromise}
 */
productApi.detail = id => {
  return request({
    url: '/commodity/info/' + id,
    method: 'get'
  })
}

/**
 * 新增商品
 * @param data
 * @returns {AxiosPromise}
 */
productApi.add = data => {
  return request({
    url: '/commodity/add',
    method: 'post',
    data
  })
}

/**
 * 修改商品
 * @param data
 * @returns {AxiosPromise}
 */
productApi.update = data => {
  return request({
    url: '/commodity/update',
    method: 'post',
    data
  })
}

/**
 * 删除商品
 * @param data
 * @returns {AxiosPromise}
 */
productApi.delete = id => {
  return request({
    url: '/commodity/delete/' + id,
    method: 'post'
  })
}

/**
 * 复制商品
 * @param data
 * @returns {AxiosPromise}
 */
productApi.post = id => {
    return request({
      url: '/commodity/copy/' + id,
      method: 'post'
    })
  }



export default productApi
