<template>
    <div id="secure">
    <div class="container">


    <div class="file btn btn-lg btn-primary"><br/>
  <!-- <button type="button" class="btn btn-lg btn-primary" disabled>Upload</button><br/>-->
   <!--input type="file" @change="file"/>
       <button type="button" class="btn btn-secondary" v-on:click="submitFiles()" >SUBMIT</button-->
    <!--input type="file" v-on:change="onFileChanged"-->
  <label>Files
        <input type="file" id="files" ref="files" multiple v-on:change="handleFilesUpload()"/>
      </label>
      </div>
   <br/>
      <button v-on:click="submitFiles()">Submit</button>
   
    <button type="button" class="btn btn-secondary" v-on:click="showData()" >Result</button>
      <div v-if="result" >
        <br/>
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

          
          

</script >
<style scoped>
*{
  box-sizing: border-box;
}
#secure {
      position: relative;
       /*background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQKpmxOUMC8yHZrzWTow6KvUeuOHN13Cdq5rJ2kZZA5vKKCKKzewhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQKpmxOUMC8yHZrzWTow6KvUeuOHN13Cdq5rJ2kZZA5vKKCKKzew);* /
     /*  background-color: #FFFFFF
; */
      /* padding: 200px; */
       margin-top: 10px;
       border-color: #504d4c
;    }
   .btn-lg {
   padding: .5rem 1rem;
   font-size: 0.9rem;
   line-height: 1.5;
   border-radius: .3rem;
  /* position: absolute; */
   top: 50px;
}
button{
   background:#99db49;
   color: #08176f;
   padding: 12px 12px;
   border: none;
   vertical-align: top;
   border-radius: 4px;
   cursor: pointer;
   margin-left:20px;
   top: 70%;
   left: 50%;
}
button:hover{
   background: purple;
   transition: 0.2s all ease;
}
</style>
