import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import '@/assets/iconfont/iconfont.css'


Vue.config.productionTip = false
Vue.prototype.$http=axios



// router.beforeEach((to,from,next)=>{
//   //无论是刷新还是跳转路由，第一个进入的就是这个路由前置钩子函数
//   store.commit('settoken',localStorage.getItem('token'))
//   if(to.meta.requireAuth){
//     if(store.state.token){
//       next()
//     }else{
//       next({
//         path:'/Login',
//         query:{redirect:to.fullPath}
//       })
//     }
//   }else{
//     next()
//   }
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
