<template>
    <v-app>
        <v-main>
            <v-container>
                <h2>Data Kuesioner</h2>
                <v-row class="justify-content-end">
                    <v-col md="3" class="float-right">
                        <v-text-field
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Search"
                            single-line
                            hide-details
                        >
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-data-table
                            :headers="headers"
                            :items="posts"
                            :search="search"
                            :items-per-page="5"
                            class="elevation-1"
                        >
                            <template v-slot:item.actions="{ item }">
                                <v-icon small @click="deleteItem(item.id)"
                                    >mdi-delete</v-icon
                                >
                            </template>
                        </v-data-table>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>
<script>
export default {
    name: "dataTable",
    props: ["posts"],
    data: () => ({
        search: "",
        headers: [
            {
                text: "User Id",
                value: "userId",
                class: "red lighten-1",
                class: "blue-grey darken-2 white--text"
            },
            {
                text: "Id",
                value: "id",
                class: "blue-grey darken-2 white--text"
            },
            {
                text: "Title",
                value: "title",
                class: "blue-grey darken-2 white--text"
            },
            {
                text: "Actions",
                value: "actions",
                sortable: false,
                class: "blue-grey darken-2 white--text"
            }
        ]
    }),
    methods: {
        deleteItem(Id) {
            const index = this.posts.indexOf(x => x.id === id);
            this.posts.splice(index, 1);
        }
    }
};
</script>
