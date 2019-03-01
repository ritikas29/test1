<template>
    <div id="secure">
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
    <button type="button" class="btn btn-secondary" v-on:click="showData()" >Result</button>
    </div>
    <br/>
      
      <div v-if="result" >
        
        
        
          <paginate></paginate>

    </div>
    
  </div>
  </div>
</template>

<script>
import axios from "axios"
import paginate from "../components/paginate.vue"

    export default {
        
        name: 'Secure',
        components:{ 
            Paginate: paginate
        
          },
        data() {
            return {
                result : false,
                showData(){
                    this.result = true;
                    alert('sucessfully 1');
                },
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
        axios.post( 'http://192.168.15.230:8000/upload',
          formData,
          {
            headers: {
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

*{
   /* box-sizing: border-box;*/
    margin-bottom:25px;
      
   /* width: 100%; */
  
  
}
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
    margin-left:30px;
    float:right;
    top: 70%;
    left: 50%; 
    }

button:hover{
    background: rgb(42, 97, 114);
    transition: 0.2s all ease;
} */
:root{
    --primary: #021324;
    --secondary: #0d3a4d;
}
button{
    background: var(--primary);
    color: hsl(0, 27%, 96%);
    padding: 0.5px 12px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    margin: 10px;
    height:34px;
    line-height: 34px;
    float: right;
    }

button:hover{
    background:  var(--secondary);
    transition: 0.2s all ease;
}
</style>
