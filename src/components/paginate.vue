<template>
<div class="container">
   <table class="table table-striped mt-4">
  <thead>
    <tr>
      <th scope="col">AlbumID</th>
    <th scope="col">ID</th>
      <th scope="col">Title</th>
      <th scope="col">url</th>
      <th scope="col">thumbnailUrl</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="paginate in paginate" :key="paginate.id" >
     
      <th scope="row">1</th>
      <td>{{paginate.id}}</td>
      <td>{{paginate.albumid}}</td>
      <td>{{paginate.title}}</td>
      <td>{{paginate.url}}</td>
      <td>{{paginate.thubnailUrl}}</td>

    </tr>
    
  </tbody>
  <b-row>
      <b-col md="6" class="table table-striped mt-4">
        <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" />
      </b-col>
    </b-row>
   <div>currentPage: {{currentPage}}</div>
</table>
</div>

</template>
<script>
import axios from 'axios'
import bPagination from 'bootstrap-vue/es/components/pagination/pagination';
export default {
  name:'paginate',
  components:
  'b-pagination',
  data() {
    return {
      paginate:[],
       currentPage: 1,
       perPage:5,
       totalRows:5,
       pageOptions: [5,10,15],
      }
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/photos').then(paginate => {
    console.log(paginate.data);
    this.paginate= paginate.data
    });
  }
}
</script>