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
       <div class="row">
<div class="col">
<vue-good-table
mode="remote"
:columns="columns"
:rows="rows"
:line-numbers="true"
:totalRows="totalRecords"
:pagination-options="{ enabled: true }"
@on-page-change="onPageChange"
@on-sort-change="onSortChange"
@on-per-page-change="onPerPageChange" >
<template slot="table-row" slot-scope="props">
<span v-if="props.column.field == 'S.No'">
      <span style="font-weight: bold; color: blue;">{{props.formattedRow[props.column.field]}}</span> 
    </span>
<span v-else>
    <span v-if="props.column.field === 'download'">  
         <span> <button type="button" class="btn btn-dark" v-on:click="download(props.formattedRow.file_name)" >Download</button> </span>
    </span>
    <span v-if="props.column.field === 'result'">  
         <span> <router-link to="/result">
                                   <button type="button" class="btn btn-secondary">Result
                                     
                                     </button> 
                                     </router-link> 
          </span>
    </span>
    <span v-else>
        {{ props.formattedRow[props.column.field] }}
    </span>
</span>

</template>
</vue-good-table>
</div>
</div>
</div>
</template>
<script>
import { SERVER_API } from "./../components/application.js";
import { VueGoodTable } from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css'
import axios from 'axios'
import { log } from 'util';
export default {
name: "StatisticsPage",
components: { VueGoodTable },
data: function() {
    console.log("props are", this.props)
return {
      columns: [
      { label: 'S.No',field:'S_No' , type:'number'},
      { label: 'Filename',field:'file_name' },
      { label: 'Download', field: 'download' },
      { label: 'Result',field:'result'}
    ],
totalRecords: 0,
serverParams: {
_page: 0,

   },
   
rows: [],
}
},
methods: {
    updateParams(newProps) {
   this.serverParams = Object.assign({}, this.serverParams, newProps);
    },
  onPageChange(params) {
     this.updateParams({_page: params.currentPage});
    this.loadItems();
   },
   onPerPageChange(params) {
   this.updateParams({perPage: params.currentPerPage});
   this.loadItems();
   },
  onSortChange(params) {
             console.log(params);
             this.updateParams({
                     type: params[0].type,
                  field: params[0].field,
           });
  this.loadItems();
      },
  loadItems() {
      console.log("server params are",this.serverParams)
     SERVER_API.get('http://192.168.15.224:8000/files', {params: this.serverParams }).then(response => {
   console.log(response);
//If there totalresults count is 40
      this.totalRecords =response.data.result.number_of_rows;
      this.rows = response.data.result.result;
     });
     /*loadItems() {
      console.log("server params are",this.serverParams)
     SERVER_API.get('http://localhost:3000/filenames', {params: this.serverParams }).then(response => {
   console.log(response);
//If there totalresults count is 40
     // this.totalRecords =response.data.result.number_of_rows;
      this.rows = response.data;
     });*/
        },
        download(file_name) {
          console.log(file_name)
                        /*let token = localStorage.getItem("token")
                      axios({   
                              url: 'http://192.168.15.224:8000/download/'+file_name,
                                method: 'POST',
                                responseType: 'blob', // important//The response is a Blob object containing the binary data.
                                }).then((response) => {
                                const url = window.URL.createObjectURL(new Blob([response.data]));
                                const link = document.createElement('a');
                                link.href = url;
                                link.setAttribute('download', file_name); //or any other extension
                                document.body.appendChild(link);
                                link.click();
                              }); */
      SERVER_API.get('http://192.168.15.224:8000/download', {params: {
        "file_name": file_name
      } }).then(response => {
    console.log(response);

    console.log(response.data)

    window.open("data:application/octet-stream;base64,"+response.data.result,'_blank')
    
//If there totalresults count is 40
      //const url = window.URL.createObjectURL(new Blob([response.data]));
        //                         const link = document.createElement('a');
      //                           link.href = url;
      //                           link.setAttribute('download','file_name'); //or any other extension
      //                           document.body.appendChild(link);
      //                           link.click();
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