// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Home from './components/Home'
import Work from './components/Work'
import About from './components/About'
import Blog from './components/Blog'
import addBlog from './components/addBlog'
import Services from './components/Services'
import Contact from './components/Contact'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  {path: '/', component: Home},
  {path: '/work', component: Work},
  {path: '/about', component: About},
  {path: '/blog', component: Blog},
  {path: '/add-blog', component: addBlog},
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
