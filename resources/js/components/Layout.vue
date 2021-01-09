<template>
    <div>
        <!--begin::Main-->

        <!--[html-partial:include:{"file":"partials/_header-mobile.html"}]/-->
        <HeaderMobile
            :namaAdmin="nama_admin"
            :dataToggle="dataToggleAside"
            @clicked="clickToggleAside"
        />
        <div class="d-flex flex-column flex-root">
            <!--begin::Page-->
            <div class="d-flex flex-row flex-column-fluid page">
                <!--[html-partial:include:{"file":"partials/_aside.html"}]/-->
                <Aside :dataToggleAside="dataToggleAside" />

                <!--begin::Wrapper-->
                <div
                    class="d-flex flex-column flex-row-fluid wrapper"
                    id="kt_wrapper"
                    @click="bodyToggleAside()"
                >
                    <!--[html-partial:include:{"file":"partials/_header.html"}]/-->
                    <Header :namaAdmin="nama_admin" />

                    <!--begin::Content-->
                    <div
                        class="content d-flex flex-column flex-column-fluid"
                        id="kt_content"
                    >
                        <router-view></router-view>
                    </div>

                    <!--end::Content-->

                    <!--[html-partial:include:{"file":"partials/_footer.html"}]/-->
                    <Footer />
                </div>

                <!--end::Wrapper-->
            </div>

            <!--end::Page-->
        </div>

        <!--end::Main-->
    </div>
</template>
<script>
import HeaderMobile from "./Layout/HeaderMobile";
import Aside from "./Layout/Aside";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
export default {
    data() {
        return {
            nama_admin: "",
            BaseURL: "http://localhost:8000/",
            dataToggleAside: 0
        };
    },
    name: "Layout",
    components: {
        HeaderMobile,
        Aside,
        Header,
        Footer
    },
    methods: {
        clickToggleAside: function(data) {
            this.dataToggleAside = data;
        },
        bodyToggleAside: function() {
            this.dataToggleAside = 0;
        }
    },
    mounted() {
        axios.get(this.BaseURL + "dataAdmin").then(response => {
            this.nama_admin = response.data.data;
        });
    }
};
</script>
