import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Search = () => import('../views/search/Search')
const Order = () => import('../views/order/Order')
const Mine = () => import('../views/mine/Mine')
const Login = () => import('../views/login/Login')


import Shop from '../views/shop/Shop'
import ShopGoods from '../views/shop/shopGoods/ShopGoods'
import ShopRatings from '../views/shop/shopRatings/ShopRatings'
import ShopInfo from '../views/shop/shopInfo/ShopInfo'

Vue.use(VueRouter)

  const routes = [
    {
      path:'',
      redirect:'/home'
    },{
      path: '/home',
      component:Home,
      meta: {
        showFooter: true
      },
    },{
      path: '/search',
      component:Search,
      meta: {
        showFooter: true
      },
    },{
      path: '/order',
      component:Order,
      meta: {
        showFooter: true
      },
    },{
      path: '/mine',
      component:Mine,
      meta: {
        showFooter: true
      },
    },{
      path: '/login',
      component:Login,
      meta: {
        showFooter: false
      },
    },
    {
      path: '/shop',
      component: Shop,
      children: [
        {
          path: '/shop/goods',
          component: ShopGoods
        },
        {
          path: '/shop/ratings',
          component: ShopRatings
        },
        {
          path: '/shop/info',
          component: ShopInfo
        },
        {
          path: '',
          redirect: '/shop/goods'
        },
      ]
    },

]

const router = new VueRouter({
  routes,
  mode:'history',
})

export default router
