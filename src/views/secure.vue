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
   :to="'/secure'"><i class="fa fa-home"></i> Home</router-link>
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

 <div class="container">
<div class="file"> <!--btn btn-lg btn-primary-->
  <!-- <button type="button" class="btn btn-lg btn-primary" disabled>Upload</button><br/>-->
   <!--input type="file" @change="file"/>
       <button type="button" class="btn btn-secondary" v-on:click="submitFiles()" >SUBMIT</button-->
    <!--input type="file" v-on:change="onFileChanged"-->
  <label>Files
        <input type="file" id="files" ref="files" multiple v-on:change="handleFilesUpload()"/>
      </label>
      
      <button class="btn btn-secondary" v-on:click="submitFiles()">Submit</button>
    </div>
    <br/>
    </div>
  </div>
  </div>
</template>

<script>
import axios from "axios"
//import paginate from "../components/paginate.vue"

    export default {
        
        name: 'Secure',
        //components:{ 
          //  Paginate: paginate
        
          //},
        data() {
            return {
              //  result : false,
                //showData(){
                  //  this.result = true;
                    //alert('sucessfully 1');
                //},
                 files: ''
            }
        },
      

    methods: {
      /*
        Submits all of the files to the server
      */
      submitFiles(){
        /*
          Initialize the form data
        */
        let formData = new FormData();

        /*
          Iteate over any file sent over appending the files
          to the form data.
        */
        for( var i = 0; i < this.files.length; i++ ){
          let file = this.files[i];

          formData.append('files[' + i + ']', file);
        }
           
        /*
          Make the request to the POST /multiple-files URL
        */
       let token = localStorage.getItem("token")
        axios.post( 'http://192.168.15.212:8000/upload',
          formData,
          {
            headers: {
              'X-AUTH':'localStorage.token',
              'authorization':token,
              'token':token,
                'Content-Type': 'multipart/form-data'
            }
          }
        ).then(function(){
          console.log('SUCCESS!!');
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
      },

      /*
        Handles a change on the file upload
      */
      handleFilesUpload(){
        this.files = this.$refs.files.files;
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

/*@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}*/


body {
  background: transparent;
  width: 100%;
  height: 100%;
}
/*.file{
  background:rgb(176, 217, 224);
  display: flex;
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #b8b9bb;
    border-radius: 2px; 
} */
label{
  
      display: block;
      min-width: 80%; 
      margin-top: 5px;
      position: relative;
      float:left;
      width:80%;
      height: 100%;
}
   #secure {
       /* padding: 200px; */
        
        border-color: #504d4c;
 
     /*  width: 100%; 
      display: block;
      min-width: 100%; */
      
    }


    
    /*.btn-lg {
    padding: .1rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .3rem;
   /* position: absolute; 
    top: 50px;
    width: 100%;
} */
/* button{
    background:#6373cc; 
    color: black;
    padding: 12px 12px;
    border: none;
    vertical-align: top;
    border-radius: 4px;
    cursor: pointer;
    margin:10px;
    float:right;
    top: 70%;
    left: 50%; 
    }

button:hover{
    background: rgb(42, 97, 114);
    transition: 0.2s all ease;
} */
:root{
    --primary: #182c41;
    --secondary: #117aa7;
}
button{
    background: var(--primary);
    color: hsl(0, 27%, 96%);
    padding: 0.5px 12px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    margin-top: 25px;
    height:34px;
    line-height: 34px;
    float: left;
    margin-right:15px;
    }

button:hover{
    background:  var(--secondary);
    transition: 0.2s all ease;
}
</style>

       
