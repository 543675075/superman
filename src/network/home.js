import {request} from "./request.js"

export function homeSwiper(){
  return request({
    url: "/home/multidata"
  })
}

export function homeShowPic(type,page){
  return request({
    url: "/home/data",
    params: {
      type,
      page
    }
  })
}