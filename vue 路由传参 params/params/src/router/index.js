import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index.vue'
import Books from '../pages/Book.vue'
import Phone from '../pages/Phone.vue'
import Food from '../pages/Food.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/books',
      name: 'books',
      component: Books
    },
    {
      path: '/phone',
      name: 'phone',
      component: Phone
    },
    {
      path: '/food',
      name: 'food',
      component: Food
    },

  ]
})
