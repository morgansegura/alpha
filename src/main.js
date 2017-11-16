// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Work from './components/Work'
import About from './components/About'
import Blog from './components/Blog'
import Services from './components/Services'
import Contact from './components/Contact'
import './assets/stylesheets/base.scss'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Home},
  {path: '/work', component: Work},
  {path: '/about', component: About},
  {path: '/blog', component: Blog},
  {path: '/services', component: Services},
  {path: '/contact', component: Contact}

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
}).$mount('#app')
