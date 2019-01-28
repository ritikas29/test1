
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import LoginComponent from "./views/login.vue"
import SecureComponent from "./views/secure.vue"
Vue.config.productionTip = false
Vue.use(VueRouter);
//export default new VueRouter({
 const  routes= [
      {
          path: '/',
          redirect: {
              name: "login"
          }
      },
      {
          path: "/login",
          name: "login",
          component: LoginComponent
      },
      {
          path: "/secure",
          name: "secure",
          component: SecureComponent
      }
  ]
//})
const router = new VueRouter({routes: routes});
new Vue({
    el: '#app',
    router:router,
    render: h => h(App)
  })

