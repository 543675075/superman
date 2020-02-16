import Vue from "vue"
import VueRouter from "vue-router"

const Home = ()=>import ("../views/home/Home")
import Cart from 'views/cart/Cart.vue'
const Profile = ()=>import("../views/profile/Profile")
const Category =()=>import ("../views/category/Category")

Vue.use(VueRouter)


const router = new VueRouter({
  routers:[
    {
      path:"/home",
      name:"home",
      component:Home
    },
    {
      path:"/cart",
      name: "Cart",
      component:Cart
    },
    {
      path:"/profile",
      name: "Profile",
      component:Profile
    },
    {
      path:"/category",
      name: "Profile",
      component:Category
    }
  ],
  mode: "history",
})
router.beforeEach((to, from, next) => {
  // document.title=to.
  console.log(to)
  next()
})
export default router