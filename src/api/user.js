import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/sys/user/login',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/sys/user',
    method: 'get'
  })
}

export function page(params) {
  return request({
    url: '/sys/user/page',
    method: 'get',
    params: params
  })
}

export function logout() {
  return request({
    url: '/sys/user/logout',
    method: 'post'
  })
}
