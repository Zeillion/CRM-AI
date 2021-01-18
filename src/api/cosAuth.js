import request from '@/utils/request'

export const cosAuth = () => {
  return request({
    url: '/cos/credential',
    method: 'post',
  })
}
