import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Computer from '@/components/Computer'
import Lens from '@/components/Lens'
import Phone from '@/components/Phone'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/lens',
      name: 'lens',
      component: Lens
    },
    {
      path: '/computer/:id',
      name: 'computer',
      component: Computer
    }, 
    {
      path: '/phone',
      name: 'phone',
      component: Phone
    } 
  ]
})
