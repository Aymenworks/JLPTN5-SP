import Vue from 'vue'
import Home from '@/components/Home'
import About from '@/components/About'
import Quizzes from '@/components/Quizzes'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/*
var XML = require('pixl-xml');
var convert = require('xml-js');
var doc = null;
try {
	doc = XML.parse( '../assets/KanjiEN.xml' );
}
catch (err) {
	console.log("XML Parser Error: " + err);
}
console.log( doc );
*/

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/quizzes', name: 'Quizzes', component: Quizzes }
]

export default new VueRouter({
  routes
})
