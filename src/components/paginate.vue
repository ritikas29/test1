<template>
   
    <div class="page-item">
  <table id="user-table" class="display" style="width:100%">
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
      <td>
      <img v-img:group :src=" paginate.images" width="100" height="100">  
      <!--img :src=" paginate.images"   width="100" height="100"/--> 
    </td>
      <td>{{paginate.trashfound}}</td> 
       <td> {{paginate.confidence}}</td>
      <td>{{paginate.modify}}</td>
    </tr>
    
   
</tbody>
  
</table>

 <pagination class="paginate" :records="7" v-model="page" :per-page="3" @paginate="callback">
</pagination>
</div>
      
</template>
<script>
//import json1 from '../assets/json/table.json';
import axios from 'axios' //local directory
//import jQuery from 'jquery'
//import Paginate from 'vuejs-paginate'
//let $ = jQuery
import Pagination from 'vue-pagination-2'
export default{
      components: {
       Pagination
      },
    data(){
        return {
            paginate: [] ,
            page: 8
           
    
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
    },
    methods: {
         callback: function(page) {
      console.log(`Page ${page} was selected. Do something about it`);
       }
      }
    }
   //   // $('#example').DataTable();
    // }
   //methods: {
     
     //clickCallback:function(pageNum) {
       //console.log(pageNum)
       //this.pageNum = pageNum
     //}
  //}
  
      
 </script>
 
        