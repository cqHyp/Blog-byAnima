import Vue from 'vue'
import Router from 'vue-router'

const main = resolve => require(['../components/main/main'],resolve);
Vue.use(Router)

export const thisRoute = [
  {path:'/',name:'首页',component:main}
]

export default new Router({
  routes:thisRoute
})
