<template>
    <div>
        <header class="p-3 mt-2">
            
        </header>

      <!--  <div class="bg-light p-3 d-flex"> 
           
            
        </div>-->

        <fetch-json url="" :params="params">
            <section class="p-3" slot-scope="{ rows: users, meta }">
                <vue-table :columns="columns"
                           :rows="users"
                           :sort-by="params.sort_by"
                           :sort-direction="params.sort_direction"
                           @column:sort="onSort"
                >
                    <template slot-scope="{ row }" slot="image_thumbnail_url">
                        <div class="d-flex align-items-center">
                            <div class="thumbnail">
                              
                              <span><img v-img:group :src=" row.image_url" width="100" height="100" class="thumbnail"> </span>
                            </div>
                            
                        </div>
                    </template>

                    <template slot-scope="{ row }" slot="Trash_found">
                        <div class="d-flex flex-column">
                            <div>
                                <span>{{ row.Trash_found }}</span>
                            </div>
                            
                        </div>
                    </template>

                    <template slot-scope="{ row }" slot="Confidence">
                        {{ row.Confidence}}
                    </template>

                   

                   
                </vue-table>

                <vue-table-pagination
                        :items-per-page="params.limit"
                        :total-items="meta ? meta.total_items : 0"
                        :current-page="params.page"
                        :show-refresh-button="false"
                        @pagination:change="onPaginationChange"
                />
            </section>
        </fetch-json>
    </div>
      
</template>

<script>
    import FetchJson from './FetchJson'
    //import VueAvatar from '@lossendae/vue-avatar'
    //import accounting from 'accounting'
    import VueTablePagination from "./general/vueTablePagination";

    import Vue from 'vue'

    export default {
        name: 'App',
        components: { FetchJson,VueTablePagination },
        data() {
            return {
                columns: [{
                  name:"S.No",
                  title:"S.No"
                },
                 {
                    name: "image_thumbnail_url",
                    // You can either set sortable to true (which give the column name)
                    // or set the value to the string of your choice
                    sortable: 'image_thumbnail_url',
                }, {
                    name: "Trash_found",
                    sortable: 'Trash_found',
                }, {
                    name: "Confidence",
                    title: "Confidence",
                },  ],
                filters: {
                    q: null,
                    modify: 'all',
                    is_active: 'all',
                },
                total_items: 0,
                params: {
                    limit: 4,
                    sort_by: 'trashfound',
                    sort_direction: 'asc',
                    page: 1,
                },
            }
        },
        methods: {
            
            
            /**
             * VueTable component event
             */
            onSort({ sortBy, sortDirection }) {
                this.params.sort_by = sortBy
                this.params.sort_direction = sortDirection
            },
            /**
             * VueTablePagination component event
             */
            onPaginationChange(page) {
                this.params.page = page
            },
            /**
             * Apply filters to params given to the fetchJson component
             */
            applyFilters() {
                let filters = {}
                Object.keys(this.filters).forEach(key => {
                    if (this.filters[key] === 'all') {
                        return
                    }

                    if (typeof this.filters[key] === 'string' && this.filters[key].length > 0) {
                        filters[key] = this.filters[key]
                    }

                    if (typeof this.filters[key] === 'boolean') {
                        filters[key] = this.filters[key]
                    }
                })

                // We use Vue.set & Vue.delete to make the filters key observable
                if (Object.keys(filters).length > 0) {
                    Vue.set(this.params, 'filters', filters)
                } else {
                    if (this.params.hasOwnProperty('filters')) {
                        Vue.delete(this.params, 'filters')
                    }
                }
            },
        },
        /**
         * Watch filters data property for any change
         */
        watch: {
            filters: {
                handler() {
                    this.applyFilters()
                },
                deep: true,
            },
        },
    }
</script>



<style>

 table {
  font-family:Comic Sans MS ;
  border-collapse: collapse; 
  width: 100%;
  
  
}
thead{
  font-family: Comic Sans MS;
  font-size:13px;
  color:black;
}

tbody, thead {
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: rgb(240, 245, 245);
}
tbody
{font-family: 'Roboto', sans-serif;
 font-size: 13px;
 }
tr:hover
 {
     transition: box-shadow .3s;
  /* background-color:rgb(248, 244, 244); */
   box-shadow: 0 0 11px rgba(33,33,33,.2); 
   }
  table,thead,tbody
        {
         /* border: 1px solid black;  
          border-collapse: collapse;
         border-radius: 3px;*/
          width: 100px;
        
        }
        tbody
        {
            /*background-color: #ddd;*/
         overflow: auto;
        }
        img{
          vertical-align: middle;
    border-style: none;
    

}
         
table tr td{
  padding: 10px 0;
  border-bottom: 1px solid #fff;
        
}
       
       </style>  


