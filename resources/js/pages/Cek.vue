<template>
    <v-app class="container-fluid ">
        <div class="card contianer">
            <div class="card-header bg-light">
                <div class="row">
                    <div class="col-9">
                        <h2>
                            Data Kuesioner Mahasiswa
                        </h2>
                    </div>
                    <div class="col-3 d-flex justify-content-end">
                        <!-- <button
                            class="btn btn-primary rounded-lg"
                            @click="cobaanHandler()"
                        >
                            Tambah Pertanyaan
                        </button> -->
                    </div>
                </div>
            </div>
            <div class="card-body bg-light" style="padding-top: -20px">
                <v-row>
                    <v-col> </v-col>
                    <v-col>
                        <v-text-field
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Search"
                            single-line
                            hide-details
                            @focus="focusPage"
                            v-on:keyup="searchData"
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-data-table
                    :headers="headers"
                    :items="desserts"
                    :options.sync="options"
                    :items-per-page="5"
                    :server-items-length="totalDesserts"
                    :loading="loading"
                    :search="search"
                    class="elevation-1"
                >
                    <template v-slot:item.no="{ item }">
                        <span class="h6">
                            {{
                                filteredDesserts
                                    .map(function(x) {
                                        return x.id;
                                    })
                                    .indexOf(item.id) + 1
                            }}
                        </span>
                    </template>
                    <template v-slot:item.actions="{ item }">
                        <v-icon small @click="deleteItem(item.id)"
                            >mdi-delete</v-icon
                        >
                    </template>
                </v-data-table>
            </div>
        </div>
    </v-app>
</template>
<script>
export default {
    name: "Cek",
    data() {
        return {
            cobaan: 0,
            no: 0,
            search: "",
            allDesserts: [],
            filteredDesserts: [],
            totalDesserts: 0,
            desserts: [],
            editedIndex: -1,
            loading: true,
            options: {},
            headers: [
                {
                    text: "No",
                    value: "no",
                    class: "h6 align-content-center"
                },
                { text: "Title", value: "title", class: "h6" },
                {
                    text: "Actions",
                    value: "actions",
                    class: "align-content-center h6"
                }
            ]
        };
    },
    watch: {
        options: {
            handler() {
                // this.getDataFromApi();
                this.loading = true;
                const { sortBy, sortDesc, page, itemsPerPage } = this.options;

                if (this.options) {
                    this.desserts = this.filteredDesserts.slice(
                        (page - 1) * itemsPerPage,
                        page * itemsPerPage
                    );
                }
                this.loading = false;
            },
            deep: true
        }
    },
    mounted() {
        this.getDataFromApi();
    },
    methods: {
        cobaanHandler: function() {
            this.cobaan == 0 ? (this.cobaan = 1) : (this.cobaan = 0);
        },
        focusPage: function() {
            this.options.page = 1;
        },
        deleteItem(id) {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then(result => {
                if (result.isConfirmed) {
                    Swal.fire(
                        "Deleted!",
                        "Your file has been deleted." + id,
                        "success"
                    );
                }
            });
        },
        searchData: function() {
            this.loading = true;
            const { sortBy, sortDesc, page, itemsPerPage } = this.options;

            this.filteredDesserts = this.allDesserts.filter(row => {
                return Object.keys(row).some(key => {
                    return (
                        String(row[key])
                            .toLowerCase()
                            .indexOf(this.search.toLowerCase()) > -1
                    );
                });
            });
            this.totalDesserts = this.filteredDesserts.length;
            // page = 1;
            this.desserts = this.filteredDesserts.slice(
                (page - 1) * itemsPerPage,
                page * itemsPerPage
            );
            // console.log(this.allDesserts);
            this.loading = false;
        },
        getDataFromApi() {
            this.loading = true;
            axios
                .get("https://jsonplaceholder.typicode.com/photos")
                .then(res => {
                    const {
                        sortBy,
                        sortDesc,
                        page,
                        itemsPerPage
                    } = this.options;

                    let items = res.data;
                    const total = items.length;

                    if (sortBy.length === 1 && sortDesc.length === 1) {
                        items = items.sort((a, b) => {
                            const sortA = a[sortBy[0]];
                            const sortB = b[sortBy[0]];

                            if (sortDesc[0]) {
                                if (sortA < sortB) return 1;
                                if (sortA > sortB) return -1;
                                return 0;
                            } else {
                                if (sortA < sortB) return -1;
                                if (sortA > sortB) return 1;
                                return 0;
                            }
                        });
                    }

                    if (itemsPerPage > 0) {
                        items = items.slice(
                            (page - 1) * itemsPerPage,
                            page * itemsPerPage
                        );
                    }

                    this.desserts = items;
                    this.totalDesserts = res.data.length;
                    this.loading = false;
                    this.allDesserts = res.data;
                    this.filteredDesserts = res.data;
                });
        }
    }
};
</script>
