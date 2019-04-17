import Vue from 'vue'
import Router from 'vue-router'
import SubSchedule from './views/SubSchedule'
import SubRanking from './views/SubRanking'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: SubSchedule
    },{
      path: '/subranking',
      name: 'subranking',
      component: SubRanking
    }
  ]
})
