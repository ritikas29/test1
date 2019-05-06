<template>
  <div class="main-app">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" 
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">  
      <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <router-link class="nav-link " id="v-pills-home-tab" data-toggle="pill"  role="tab" aria-controls="v-pills-home" 
          aria-selected="true" :to="'/secure'"><i class="fa fa-home"></i> Home</router-link>
        <router-link class="nav-link" id="v-pills-profile-tab" data-toggle="pill" role="tab" aria-controls="v-pills-profile" aria-selected="false" 
          :to="'/Connect'">
          <i class="fa fa-file" aria-hidden="true"></i> Download Files</router-link></div>

          <div v-if="result" class="tab-content">
                  <paginate></paginate>
          </div>
  </div>
 </template>
     <script>
import paginate from "../components/paginate.vue"
export default {
    components:{ 
            Paginate: paginate
        
          },
          data() {
            return {
                result : true,
              
            }
        },

}

     </script>
     <style>
     .nav {
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #13195d;
  overflow-x: hidden;
  /*padding-top: 20px;*/
  line-height:1.5;
  margin:0 auto;
  padding:45px 0px;
  

}

.nav a {
  text-decoration: none;
  font-size: 20px;
  color: #fff;
  display: block;
  float:left;
  padding:5px 10px;
 border-radius: 0;
}

.nav a:hover {
  background-color: white;
  color: #262626;
  box-shadow: 0 5px 1px lightgrey;
  }
.main-app{
    display: inline-block;
   width:100%;
}
.tab-content{
    width: 84%;
    float: right;
    height:80vh;
    padding-top: 15px;
}

  </style>
