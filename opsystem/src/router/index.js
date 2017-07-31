import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import login from '@/views/login'
import register from '@/views/register'
import main from '@/views/main'
import page1 from '@/views/child/page1'
import page2 from '@/views/child/page2'
import page3 from '@/views/child/page3'
import page4 from '@/views/child/page4'
import page5 from '@/views/child/page5'
import page6 from '@/views/child/page6'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path:'/',
      redirect:'/login'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/main',
      component: main,
      children:[
        {
          path:'',
          redirect:'page1'
        },
        {
          path: 'page1',
          name: 'page1',
          component: page1
        },
        {
          path: 'page2',
          name: 'page2',
          component: page2
        },
        {
          path: 'page3',
          name: 'page3',
          component: page3
        },
        {
          path: 'page4',
          name: 'page4',
          component: page4
        },
        {
          path: 'page5',
          name: 'page5',
          component: page5
        },
        {
          path: 'page6',
          name: 'page6',
          component: page6
        },
      ]
    }
  ]
})

export default router
