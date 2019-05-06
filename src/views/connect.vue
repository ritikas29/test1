<template>
  <div class="main-app">
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
                :to="'/secure'"> <i class="fa fa-home"></i> Home
       </router-link>
       <router-link class="nav-link" 
                id="v-pills-profile-tab" 
                data-toggle="pill" 
                role="tab" 
                aria-controls="v-pills-profile" aria-selected="false" 
                :to="'/Connect'"><i class="fa fa-file" aria-hidden="true"></i> Download Files          
      </router-link>
    </div>
  <div class="tab-content">
    <div class="col">
        <vue-good-table mode="remote" :columns="columns" :rows="rows" :line-numbers="false" :totalRows="totalRecords"
            :pagination-options="{ enabled: true }" @on-page-change="onPageChange" @on-sort-change="onSortChange" @on-per-page-change="onPerPageChange" >
              <template slot="table-row" slot-scope="props">
                        <span v-if="props.column.field === 'download'">  
                                <span> <button type="button" class="btn btn-dark" v-on:click="download(props.formattedRow.file_name)" >Download</button> </span>
                         </span>
                         <span v-else>
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
                                      { label: 'S.No',field:'S_No'},
                                      { label: 'Filename',field:'file_name' },
                                      { label: 'Download', field: 'download' },
                                      { label: 'Result',field:'result'}
                            ],
                          totalRecords: 0,
                          serverParams: {
                                    _page: 1,
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
                          /* loadItems() {
                              console.log("server params are",this.serverParams)
                            SERVER_API.get('http://192.168.15.135:8000/files', {params: this.serverParams }).then(response => {
                          console.log(response);
                        //If there totalresults count is 40
                              this.totalRecords =response.data.result.number_of_rows;
                              this.rows = response.data.result.result;
                            }); */   
        loadItems() {
                            console.log("server params are",this.serverParams)
                          SERVER_API.get('http://192.168.15.141:8000/files', {params: this.serverParams }).then(response => {
                              console.log(response);
                              console.log(response.headers);
                                        //If there totalresults count is 40
                              this.totalRecords =response.data.result.number_of_rows;
                              this.rows = response.data.result.result;
                          });
              },
           download(file_name) {
                      console.log(file_name)
                      SERVER_API.get('http://192.168.15.141:8000/download', {         
                                  params: {
                                      "file_name": file_name
                                          },
                          }).then(response => {
                             console.log(response);
                             console.log(response.data)
                             window.open("data:file/csv;base64,"+response.data.result,'_blank')//header send with base64
                              
                                
                                // window.open("data:application/octet-stream;base64,"+response.data.result,'_blank')
                                // document.body.appendChild(link);
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
  width: 16%;
  top: auto;
  position: fixed;
  float: left;
  height:90vh;

}

.nav a {
  text-decoration: none;
  line-height:1.5;
  font-size: 20px;
  color: #fff;
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
.main-app{
    display: inline-block;
   width:100%;
}
.tab-content{
    width: 84%;
    float: right;
    height:80vh;
    padding-top:15px;
}

</style>