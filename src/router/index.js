import Vue from 'vue'
import Home from '@/components/Home'
import About from '@/components/About'
import Quizzes from '@/components/Quizzes'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/quizzes', name: 'Quizzes', component: Quizzes }
]

export default new VueRouter({
  routes
})
