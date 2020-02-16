import axios from "axios"

export function request(config){
  // 创建axios实例
  const example = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/hy',
    // baseURL: 'http://106.54.54.237:8000/api/hy',
    timeout: 4000
  })

 
  // 请求拦截
  // example.Interceptors.request.use(aaa=>{
  //   return aaa
  // },err=>{
  //   return err
  // })
  // // 响应拦截
  // example.Interceptors.response.use(result=>{
  //   return resule
  // },err=>{
  //   return err
  // })

  // 发送网络请求
  return example(config)
}