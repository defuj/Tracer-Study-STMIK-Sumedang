<template>
    <v-app class="container-fluid">
        <div class="card container">
            <div class="card-header">
                <h1>{{ header }}</h1>
            </div>
            <div class="card-body">
                content
            </div>
        </div>
    </v-app>
</template>
<script>
export default {
    name: "Essay",
    data() {
        return {
            header: "Essay Kuesioner"
        };
    }
};
</script>
