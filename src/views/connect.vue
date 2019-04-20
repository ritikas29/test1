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
       <p> list of files </p>
          <table class="table table-bordered">
              <thead>
                   <tr>
                       <th scope="col">#</th>
                        <th scope="col">Filename</th>
                        <th scope="col">Download</th>
                        <th scope="col">Result</th>
                      </tr>
              </thead>
           <tbody>
              <tr v-for="connect in connect" :key="connect.id">
                                <td>{{connect.sno}}</td> 
                                <td>{{connect.filename}}</td>
                                <td><button type="button" class="btn btn-dark" v-on:click="download()" >Download</button></td>
                                <td> 
                                   <router-link to="/result">
                                   <button type="button" class="btn btn-secondary"  >Result
                                     
                                      </button>
                                      
                                     </router-link>  
                                 </td>
              </tr> 
             </tbody>
           </table>
           
</div>
</template>
<script>
import axios from 'axios'
//import paginate from "../components/paginate.vue"
export default {
 // components:{ 
   //         Paginate: paginate
        
     //     },
    data() {  
        return {
       //result : false,
       // showData(){
         //   this.result = true;
             //alert('got it');
         //},
         connect:[],
         url:''
    }
    },
    created() {
      axios.get('http://localhost:3000/filenames').then(connect =>{
        this.connect = connect.data
      })
    },
    methods: {
      download() {
         let token = localStorage.getItem("token")
           axios({
                    url: 'http://localhost:3000/filenames',
                    method: 'GET',
                    responseType: 'blob', // important//The response is a Blob object containing the binary data.
                     }).then((response) => {
                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', 'file.csv'); //or any other extension
                    document.body.appendChild(link);
                    link.click();
                  });        
      }
    }
}
</script>    
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