import Vue from 'vue'
import Home from '@/components/Kanjis/Home'
import About from '@/components/About/About'
import Quizzes from '@/components/Quizzes/Quizzes'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/quizzes', name: 'Quizzes', component: Quizzes}
]

export default new VueRouter({
  routes
})
