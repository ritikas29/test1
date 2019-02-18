<template>

   <div class="container">
  <table class="table table-striped mt-4">
  <thead>
    <tr>
        <th scope="col">sno</th>
        <th scope="col">images</th>
        <th scope="col">trashfound</th>
        <th scope="col">confidence</th>
        <th scope="col">modify</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="paginate in paginate" :key="paginate.id" >
      <th scope="row"></th>

      <td>{{paginate.sno}}</td>
      <td><img :src=" paginate.images "   width="100" height="100"/> 
    </td>
      <td>{{paginate.trashfound}}</td> 
       <td> {{paginate.confidence}}</td>
      <td>{{paginate.modify}}</td>
    </tr>
    
  </tbody>

</table>

       </div> 
</template>
<script>
//import json1 from '../assets/json/table.json';
import axios from 'axios' //local directory
export default{
  
    data(){
        return {
            paginate: [] 
        }
    },
    created(){
        //console.log(json1);

                
         axios.get('http://localhost:3000/comments').then(paginate =>{
              
              
               this.paginate =paginate.data

         })
         //.catch(error => console.log(error));

        /*axios.get('https://jsonplaceholder.typicode.com/todos/1').then(posts =>{
        
          console.log(posts.data);
              
           this.posts =posts.data

         });*/
    } 
}         
 </script>
 <style>

  table,thead,tbody
        {
            /*background-color: #aaa;*/
            width: 100px;
        }
        tbody
        {
            /*background-color: #ddd;*/
         overflow: auto;
        }
       
      /*  thead > tr, tbody
        {
            display: block;
        } */
   </style>  

        
    
