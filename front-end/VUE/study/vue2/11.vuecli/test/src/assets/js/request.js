import api from './api.js'
import http from './http.js'
export function getData(data) {
  return http({
    methods: 'GET',
    params: data,
    url: api.shop,
  })
}
