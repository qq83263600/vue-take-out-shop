/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import ajax from './ajax'
// const BASE_URL = 'http://localhost:4000'
const BASE_URL = '/api'


// 1、根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`api/position/${geohash}`)
//2.获取食品分类列表
export const reqFoodCategorys = () => ajax(`api/index_category`)
// 3、根据经纬度获取商铺列表
export const reqShops = (longitude, latitude) => ajax('api/shops', {longitude, latitude})
//根据经纬度和关键字搜索商铺列表
export const reqSearchShop = (geohash, keyword) => ajax('api/search_shops', {geohash, keyword})

//4.用户名密码登录
export const reqPwdLogin = ({name,pwd,captcha} ) => ajax(`api/login_pwd`,{name,pwd,captcha},'POST')
//5.发送短信验证码
export const reqSendCode = ( phone ) => ajax(`api/sendcode`,{phone})
//6.手机号验证码登录
export const reqSmsLogin = (phone,code ) => ajax(`api/login_sms`,{phone,code},'POST')
//7.根据会话获取用户信息
export const reqUserInfo = () => ajax(`api/userinfo`)
//8.手机验证码登录
export const reqLogout = () => ajax(`api/logout`)

//9.获取商家信息
export const reqShopInfo = () => ajax(`/info`)
//10.获取商家评价信息
export const reqShopRatings = () => ajax(`/ratings`)
//11.获取商家数组
export const reqShopGoods = () => ajax(`/goods`)