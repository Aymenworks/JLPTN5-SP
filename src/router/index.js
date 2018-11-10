import Vue from 'vue'
import Home from '@/components/Kanjis/Home'
import KanjiDetail from '@/components/Kanjis/KanjiDetail'
import About from '@/components/About/About'
import Quizzes from '@/components/Quizzes/Quizzes'
import QuizzDetail from '@/components/Quizzes/QuizzDetail'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/kanjiDetail', name: 'kanjiDetail', component: KanjiDetail },
  { path: '/quizzes', name: 'quizzes', component: Quizzes},
  { path: '/quizzDetail', name: 'quizzDetail', component: QuizzDetail}
]

export default new VueRouter({
  routes
})
