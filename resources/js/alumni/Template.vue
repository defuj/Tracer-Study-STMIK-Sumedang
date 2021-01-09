<template>
    <div>
        <nav
            class="navbar shadow navbar-expand-lg fixed-top navbar-light bg-light"
        >
            <div class="container">
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navCollapse"
                    aria-controls="navCollapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    @click="navCollapseHandler"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navCollapse">
                    <router-link to="/Dashboard" class="navbar-brand mr-auto">
                        <img
                            src="https://lh3.googleusercontent.com/-tkeArbkXtw4/AAAAAAAAAAI/AAAAAAAAAAA/SxD1W8p4878/s44-p-k-no-ns-nd/photo.jpg"
                            style="visibility: visible;"
                        />
                        <span class="ml-2">Tracer Study</span>
                    </router-link>

                    <form class="form-inline my-2 my-lg-0">
                        <div>
                            <span class="h6">Hi,</span>
                            <b-dropdown
                                id="dropdown-right"
                                right
                                text="Moh"
                                variant="primary"
                                class="m-2"
                            >
                                <b-dropdown-item to="/Setting"
                                    >Setting
                                </b-dropdown-item>

                                <b-dropdown-item @click="logoutHandler()"
                                    >Logout</b-dropdown-item
                                >
                            </b-dropdown>
                        </div>
                    </form>
                </div>
            </div>
        </nav>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: "Template",
    data() {
        return {
            navCollapse: false
        };
    },
    mounted() {},
    methods: {
        navCollapseHandler: function() {
            if (this.navCollapse) {
                this.navCollapse = false;
                $("#navCollapse").hide();
            } else {
                this.navCollapse = true;
                $("#navCollapse").show();
            }
        },
        logoutHandler() {
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
                    window.location.href = "/log-out";
                }
            });
        }
    }
};
</script>
