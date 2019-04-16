<template>
    <div id="app">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" 
integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" 
crossorigin="anonymous">  
<div class="nav flex-column nav-pills" 
id="v-pills-tab" 
role="tablist"
 aria-orientation="vertical">
<router-link class="nav-link "
 id="v-pills-home-tab" 
 data-toggle="pill"  
 role="tab"
  aria-controls="v-pills-home" 
  aria-selected="true"
   :to="'/secure'"> <i class="fa fa-home"></i> Home</router-link>
<router-link class="nav-link" 
 id="v-pills-profile-tab" 
 data-toggle="pill" 
  role="tab" 
  aria-controls="v-pills-profile" aria-selected="false" 
  :to="'/Connect'"><i class="fa fa-file" aria-hidden="true"></i> Download Files</router-link></div>
<div class="tab-content" 
id="v-pills-tabContent">
 <div  id="v-pills-home"
  role="tabpanel" 
  aria-labelledby="v-pills-home-tab">
   <div class="tab-pane fade" 
   id="v-pills-profile" 
   role="tabpanel"
    aria-labelledby="v-pills-profile-tab">  
      </div>
      </div>
      </div>
      </div>
      </template>

<style  scoped>
  
  .nav {
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #e6e6e6;
  overflow-x: hidden;
  /*padding-top: 20px;*/
  line-height:1.5;
  margin:0 auto;
  padding:45px 0px;

}

.nav a {
  text-decoration: none;
  line-height:1.5;
  font-size: 20px;
  color: #0000ff;
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

.main {
  margin-left: 100px; /* Same as the width of the sidenav */
} 


</style>