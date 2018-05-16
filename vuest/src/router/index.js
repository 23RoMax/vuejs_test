import Vue from 'vue'
import Router from 'vue-router'
import vuest from '@/components/vuest'
import test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'vuest',
      component: vuest
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
