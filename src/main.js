import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import LoginComponent from "./views/login.vue"
import Register from "./views/register.vue"
import SecureComponent from "./views/secure.vue"
import connect from "./views/connect.vue"
import BootstrapVue from 'bootstrap-vue'
import VueImg from 'v-img';
import axios from 'axios'
import result from "./views/result.vue"
import VueResource from 'vue-resource'
import { Pagination } from 'bootstrap-vue/es/components'
Vue.use(BootstrapVue);
Vue.use(Pagination)

Vue.use(VueResource);


Vue.http.headers.common['Access-Control-Allow-Headers']='Origin,Accept,Content-Type,Authorization,Access-Control-Allow-Origin'
Vue.use(VueImg);

//import paginate from "./components/paginate.vue"
                   

window.token=localStorage.getItem('token');

window.axios=axios
//axios.defaults.headers.common['Authorization'] = store.getState().session.token;
//window.axios.defaults.params={token:window.token}

Vue.config.productionTip = false
Vue.use(BootstrapVue);
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
          path:"/register",
          name:"register",
          component: Register
      },
      {
          path: "/secure",
          name: "secure",
          component:  SecureComponent
      },
      {
          path: "/Connect",
          name:"connect",
          component: connect
      },
      {
          path:"/result",
          name:"result",
          component: result
      }
     //
         // path:"/paginate",
          //name: "paginate",
          //component: paginate
      //}
      
  ]
//})
const router = new VueRouter({
    routes: routes});
new Vue({
    el: '#app',
    router:router,
    render: h => h(App)
  })

