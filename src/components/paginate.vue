<template>
    <div>
        <header class="p-3 mt-2">
            
        </header>

        <div class="bg-light p-3 d-flex">
            <div>
                <div class="btn-group mr-1" role="group">
                    <button type="button" class="btn btn-outline-secondary"
                            :class="{ active: filters.is_active === true }"
                            @click="filters.is_active = true"
                    ><i class="fa fa-circle mr-2 text-success"></i>Active
                    </button>
                    <button type="button" class="btn btn-outline-secondary"
                            :class="{ active: filters.is_active === false }"
                            @click="filters.is_active = false"
                    ><i class="fa fa-circle mr-2 text-danger"></i>Inactive
                    </button>
                    <button type="button" class="btn btn-outline-secondary"
                            :class="{ active: filters.is_active === 'all' }"
                            @click="filters.is_active = 'all'"
                    >All
                    </button>
                </div>
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-outline-secondary"
                            :class="{ active: filters.modify === 'yes' }"
                            @click="filters.modify = 'yes'"
                    > <span class="badge badge-primary mr-2"></span>yes
                    </button>
                    <button type="button" class="btn btn-outline-secondary"
                            :class="{ active: filters.modify === 'no' }"
                            @click="filters.modify = 'no'"
                    > <span class="badge badge-primary mr-2"></span>no
                    </button>
                    <button type="button" class="btn btn-outline-secondary"
                            :class="{ active: filters.modify === 'all' }"
                            @click="filters.modify = 'all'"
                    >  <span class="badge badge-primary mr-2"></span>All
                    </button>
                </div>
            </div>
            
        </div>

        <fetch-json url="/comments.json" :params="params">
            <section class="p-3" slot-scope="{ rows: users, meta }">
                <vue-table :columns="columns"
                           :rows="users"
                           :sort-by="params.sort_by"
                           :sort-direction="params.sort_direction"
                           @column:sort="onSort"
                >
                    <template slot-scope="{ row }" slot="images">
                        <div class="d-flex align-items-center">
                            <div>
                              <span><img v-img:group :src=" row.images" width="100" height="100"> </span>
                            </div>
                            
                        </div>
                    </template>

                    <template slot-scope="{ row }" slot="trashfound">
                        <div class="d-flex flex-column">
                            <div>
                                <span>{{ row.trashfound }}</span>
                            </div>
                            
                        </div>
                    </template>

                    <template slot-scope="{ row }" slot="confidence">
                        {{ row.confidence}}
                    </template>

                    <template slot-scope="{ row }" slot="modify">
                        <span class="badge badge-primary" v-if="row.modify === 'yes'">yes</span>
                        <span class="badge badge-pink" v-if="row.modify !== 'yes'"> no</span>
                    </template>

                    <template slot-scope="{ row }" slot="is_active">
                        <div class="d-flex align-items-center">
                            <i class="fa fa-circle mr-2" :class="[row.is_active ? 'text-success' : 'text-danger']"></i>
                            <small class="text-uppercase">{{ row.is_active ? 'Active' : 'Inactive' }}</small>
                        </div>
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
                    name: "images",
                    // You can either set sortable to true (which give the column name)
                    // or set the value to the string of your choice
                    sortable: 'images',
                }, {
                    name: "trashfound",
                    sortable: 'trashfound',
                }, {
                    name: "confidence",
                    title: "confidence",
                }, {
                    name: "modify",
                    sortable: true,
                },  {
                    name: "is_active",
                    title: "Is active",
                    sortable: true,
                }, ],
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


<style ></style>