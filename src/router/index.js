import Vue from "vue"
import VueRouter from "vue-router"

const Home = ()=>import ("../views/home/Home")
import Cart from 'views/cart/Cart.vue'
const Profile = ()=>import("../views/profile/Profile")
const Category =()=>import ("../views/category/Category")

Vue.use(VueRouter)


const router = new VueRouter({
  routes:[
    {
      path: "",
      redirect: "/home"
    },
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
      name: "Category",
      component:Category
    }
  ],
  mode: "history",
})
router.beforeEach((to, from, next) => {
  document.title=to.matched[0].name
  next()
})
export default router