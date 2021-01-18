import request from '@/utils/request';

export const login = (data) => {
  return request({
    url: 'login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}

export function cosAuth(){
  return request({
    url:'/cosAuth',
    method:"post"
  })
}
