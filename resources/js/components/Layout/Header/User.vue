<template>
    <div>
        <!--begin::Header-->
        <div
            class="d-flex align-items-center justify-content-between flex-wrap p-8 bgi-size-cover bgi-no-repeat rounded-top"
            v-bind:style="{ 'background-image': 'url(' + img + ')' }"
        >
            <div class="d-flex align-items-center mr-2">
                <!--begin::Symbol-->
                <div class="symbol bg-white-o-15 mr-3">
                    <span
                        class="symbol-label text-success font-weight-bold font-size-h4"
                        >{{ namaAdmin.substring(0, 1).toUpperCase() }}</span
                    >
                </div>

                <!--end::Symbol-->

                <!--begin::Text-->
                <div class="text-white m-0 flex-grow-1 mr-3 font-size-h5">
                    {{ namaAdmin }}
                </div>

                <!--end::Text-->
            </div>
        </div>

        <!--end::Header-->

        <!--begin::Nav-->
        <div class="navi navi-spacer-x-0 pt-5">
            <div class="navi-footer px-8 py-5">
                <a
                    @click="logoutHandler()"
                    class="btn btn-light-primary font-weight-bold"
                    >Sign Out</a
                >
                <a class="btn btn-secondary font-weight-bold">Close</a>
            </div>

            <!--end::Footer-->
        </div>

        <!--end::Nav-->
    </div>
</template>
<script>
export default {
    props: ["namaAdmin"],
    data() {
        return {
            img: require("../../../../../public/media/misc/bg-1.jpg")
        };
    },
    name: "User",
    methods: {
        logoutHandler: () => {
            Swal.fire({
                title: "Are you sure?",
                text: "apakah kamu ayakin akan keluar??",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Ya, Keluar!",
                cancelButtonText: "Batal"
            }).then(result => {
                if (result.isConfirmed) {
                    window.location.href = "/logout";
                }
            });
        }
    }
};
</script>
