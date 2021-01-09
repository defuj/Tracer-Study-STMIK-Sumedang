<template>
    <v-app class="container-fluid">
        <div class="card container">
            <div class="card-header">
                <h3>{{ header }}</h3>
            </div>
            <div class="card-body">
                <h1>Content Must Be Here</h1>
            </div>
        </div>
    </v-app>
</template>
<script>
export default {
    name: "SingleChoice",
    data() {
        return {
            header: "Single Choice Kuesioner"
        };
    }
};
</script>
