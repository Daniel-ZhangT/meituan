import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Home from '../views/Home.vue'
import Mine from '../views/Mine.vue'
import Test1 from '../views/Test1.vue'
import Error from '../views/Error.vue'

Vue.use(VueRouter)

const routes = [{
    path: "/home",
    name:"home",
    component: Home,
    children: [{
      path: "test1",
      component: Test1
    }]
  },
  {
    // path: "/mine",
    // path:"/mine/:name/:age",
    path:"/mine",
    component: Mine
  },{
    path:"/*",
    component:Error
  }
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  // h5中的history
  mode: 'history',
  // url中的hash
  // mode:'hash',
  base: process.env.BASE_URL,
  routes
})

export default router