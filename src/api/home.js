import {request} from "./request";

export function reqAddress() {
  return request({
    url:'/api/position'
  })
}




