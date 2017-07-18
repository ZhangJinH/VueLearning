import Vue from 'vue'
import Router from 'vue-router'
import Message from 'views/message'
import Friends from 'views/friends'
import Login from 'views/login'
import Index from 'views/index'
import Register from 'views/register'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/login'
    },
    {
      path:'/login',
      name:'login',
      component: Login
    },
    {
      path:'/register',
      name:'register',
      component: Register
    },
    {
      path:'/index',
      component: Index,
      children:[
        //如果有子路由，父级路由不能有name属性
        {
          path:'/',
          redirect:'message'
        },
        {
          path:'message',
          name:'message',
          component: Message
        },
        {
          path:'friends',
          name:'friends',
          component: Friends
        }
      ]
    }
  ]
})
