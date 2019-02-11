<template>
    <div id="secure">
      
    <!--div class="file btn btn-lg btn-primary">
   <button type="button" class="btn btn-lg btn-primary" disabled>upload</button>
   <input type="file" name="file"/>
   </>
    <button type="button" class="btn btn-secondary" v-on:click="submit()" >SUBMIT</button  -->
    <div class="container">
    <div class="large-12 medium-12 small-12 cell">
      <label>Files
        <input type="file" id="files" ref="files" />
      </label>
      <button type="button" class="btn btn-secondary" v-on:click="submitFiles()" >SUBMIT</button>
      <button type="button" class="btn btn-secondary" v-on:click="showData()" >Result</button>
      <div v-if="result" >
          <paginate></paginate>
      </div>
      
            <!--router-link to="/secure">result

      <paginate></paginate>
      </router-link-->
    
      <!--router-link to="/paginate" v-on:click.native="submitFiles()" replace>
            <button type="button" class="btn btn-primary">submit</button>
       </router-link-->
    </div>
    
  </div>
</div>
</template>

<script>
//import axios from "axios"
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
            }
        },
        methods: {



            submitFiles() {
                alert('sucessfully ')
      // `event` is the native DOM event
         if (event) {
        alert(event.target.tagName)
            }
          }


               /*let formData = new FormData();
               for(var i=0;i<this.files.length;i++) {
                   let file = this.files[i]
                   formData.append('files['+i +']',file)
               }
                axios.post('http://localhost:3000/posts',
                formData,
                {
                    headers: {
                        'content-type':'multipart/form-data'
                    }
                } 
                ).then(function(){
                    console.log('success')
                })
                .catch(function(){
                    console.log("failure !!")
                });*/
          }
          
     }

</script>

<style  scoped>
   #secure {
        background-color: #FFFFFF;
        padding: 20px;
        margin-top: 10px;
    } 
    
    
</style>