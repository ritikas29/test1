<template>
    <div id="app" class="container">
        <div class="row">
            <div class="col">
                <vue-good-table mode="remote" :columns="columns" :rows="rows" :totalRows="totalRecords" :pagination-options="{ enabled: true }"
                        @on-page-change="onPageChange" @on-sort-change="onSortChange" @on-per-page-change="onPerPageChange" >
                    <template slot="table-row" slot-scope="props">
                        <span v-if="props.column.field === 'file_name'">
                                <a v-bind:href="props.row.original">{{props.row.file_name }}</a>
                        </span>
                        <span v-else>
                            <span v-if="props.column.field === 'image_url'">  
                                <span><img v-img:group :src="props.formattedRow[props.column.field]" width="100" height="100" class="thumbnail"> </span>
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
import { SERVER_API } from './application.js';
import { VueGoodTable } from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css'
export default {
    name: "StatisticsPage",
    components: { VueGoodTable },
    data: function() {
            console.log("props are", this.props)
            return {
                columns: [
                        { label: 'S.No',field:'S_No' },
                        { label: 'Image',field:'image_url' },
                        { label: 'Trash_found', field: 'Trash_found' },
                        { label: 'Confidence',field:'Confidence'},
                ],
                totalRecords: 0,
                serverParams: {
                    _page: 1,
                    file_name: this.file_name

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
                            SERVER_API.get('http://192.168.15.141:8000/extract/features', {params: this.serverParams }).then(response => {
                            console.log(response);
                            //If there totalresults count is 40
                                    this.totalRecords =response.data.result.number_of_rows;
                                    this.rows = response.data.result.result;
                            });
                        }
    }
}

/*hings to integrate real api
- Replace http://localhost:3000/result with real api
- Afer ? marks params will  stay in serverParams.... at current _page define the skip and _limit per page results i.e 10
- Assign total no of results in this.totalRecords at current its 40 which means I have 40 total entries in my DB
*/
</script>

<style scoped>
</style>
