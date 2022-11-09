import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelloView from '@/views/HelloView.vue'
import LoginView from '@/views/LoginView.vue'
import NotFound404 from '@/views/NotFound404.vue'
import DogView from '@/views/DogView'

Vue.use(VueRouter)

const isLoginIn = true

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/hello/:userName',
    name: 'hello',
    component:HelloView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    beforeEnter(to, from, next) {
      if (isLoginIn === true) {
        console.log('이미 로그인되어 있음')
        next({name:'home'})
      } else{
        next()
      }
    }
  },
  {
    path: '/404',
    name: 'NotFound404',
    component:NotFound404
  },
  {
    path: '/dog/:breed',
    name: 'dog',
    component: DogView
  },
  {
    path: '*',
    redirect: '/404'
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to,from,next)=>{
//   // 로그인 여부
//   const isLoggedIn = false
//   // 로그인이 필요한 페이지 
//   const authPages = ['hello']
  
//   const isAuthRequired = authPages.includes(to.name)
//   if (isAuthRequired && !isLoggedIn){
//     next({ name: 'login'})
//   } else{
//     next()
//   }

//   // console.log('to',to)
//   // console.log('from',from)
//   // console.log('next',next)
//   // next()
// })

export default router
