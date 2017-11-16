import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Home'
require('./src/assets/stylesheets/base.scss');
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
