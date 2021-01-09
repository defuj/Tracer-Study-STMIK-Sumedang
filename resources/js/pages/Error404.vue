<template>
    <div class="d-flex flex-column flex-root">
        <div
            id="bgcover"
            class="d-flex flex-row-fluid flex-column bgi-size-cover bgi-position-center bgi-no-repeat p-10 p-sm-30"
            :style="{
                backgroundImage:
                    'url(' +
                    require('../../../public/media/error/bg1.jpg') +
                    ')'
            }"
        >
            <!-- begin:: Content -->
            <h1
                class="font-size-sm-100 font-weight-boldest text-dark-75 mt-15"
                style="font-size: 150px;"
            >
                404
            </h1>
            <p class="font-size-h3 font-weight-light">
                OOPS! Something went wrong here
            </p>
            <!-- end:: Content -->
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // img: require("/media/error/bg1.jpg")
        };
    },
    name: "Error404"
};
</script>
<style>
#bgcover {
    /* Full height */
    height: 100%;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
template {
    height: 100%;
}
</style>
