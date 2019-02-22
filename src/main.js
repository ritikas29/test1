
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import LoginComponent from "./views/login.vue"
import Register from "./views/register.vue"
import SecureComponent from "./views/secure.vue"
import BootstrapVue from 'bootstrap-vue'
import VueImg from 'v-img';
import VueTable from "@lossendae/vue-table";
import VueTablePagination from "@lossendae/vue-table";
Vue.use(VueImg);
Vue.component("vue-table", VueTable);
Vue.use("vue-table-pagination",VueTablePagination)
//import paginate from "./components/paginate.vue"


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
     // {
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

