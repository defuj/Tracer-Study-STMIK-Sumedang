<template>
    <div>
        <!--begin::Header Mobile-->
        <div
            id="kt_header_mobile"
            class="header-mobile align-items-center header-mobile-fixed"
        >
            <!--begin::Logo-->
            <a href="index.html">
                <img
                    alt="Logo"
                    :src="
                        require('../../../../public/media/logos/logo-light.png')
                    "
                />
            </a>

            <!--end::Logo-->

            <!--begin::Toolbar-->
            <div class="d-flex align-items-center">
                <!--begin::Aside Mobile Toggle-->
                <button
                    class="btn p-0 burger-icon burger-icon-left"
                    id="kt_aside_mobile_toggle"
                    @click="asideToggle"
                >
                    <span></span>
                </button>

                <!--end::Aside Mobile Toggle-->

                <!--begin::Topbar Mobile Toggle-->
                <div class="dropdown">
                    <!--begin::Toggle-->
                    <div
                        class="topbar-item"
                        data-toggle="dropdown"
                        data-offset="0px,0px"
                    >
                        <div
                            class="btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2"
                        >
                            <span
                                class="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1"
                                >Hi,</span
                            >
                            <span
                                class="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3"
                                >{{
                                    namaAdmin
                                        .split(" ")
                                        .slice(0, 1)
                                        .join(" ")
                                }}</span
                            >
                            <span class="symbol symbol-35 symbol-light-success">
                                <span
                                    class="symbol-label font-size-h5 font-weight-bold"
                                    >{{
                                        namaAdmin.substring(0, 1).toUpperCase()
                                    }}</span
                                >
                            </span>
                        </div>
                    </div>

                    <!--end::Toggle-->

                    <!--begin::Dropdown-->
                    <div
                        class="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-anim-up dropdown-menu-lg p-0"
                    >
                        <!--[html-partial:include:{"file":"partials/_extras/dropdown/user.html"}]/-->
                        <User :namaAdmin="namaAdmin" />
                    </div>

                    <!--end::Dropdown-->
                </div>

                <!--end::Topbar Mobile Toggle-->
            </div>

            <!--end::Toolbar-->
        </div>

        <!--end::Header Mobile-->
    </div>
</template>
<script>
import User from "./Header/User";
export default {
    props: ["namaAdmin", "dataToggle"],
    data() {
        return {
            dataToggleAside: this.dataToggle
        };
    },
    name: "HeaderMobile",
    components: {
        User
    },
    watch: {
        dataToggle: function(a) {
            this.dataToggleAside = a;
        }
    },
    methods: {
        asideToggle: function() {
            this.dataToggleAside == 0
                ? (this.dataToggleAside = 1)
                : (this.dataToggleAside = 0);
            // console.log(this.dataToggleAside);
            this.$emit("clicked", this.dataToggleAside);
        }
    }
};
</script>
