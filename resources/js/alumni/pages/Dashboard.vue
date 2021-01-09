<template>
    <div>
        <div class="container">
            <div v-if="cekData.length == 0"></div>
            <div
                class="row mt-5 rounded-lg"
                style="background-color: #37b2ff"
                v-else-if="cekData == false"
            >
                <div class="col-md-6 col-sm-12">
                    <div class="content p-4">
                        <h3 class="text-white font-weight-bolder">
                            Lengkapi Data Anda!
                        </h3>
                        <span class="text-white"
                            >Konfigurasi anda hampir selesai, silahkan lengkapi
                            data diri Anda. Seperti alamat, tanggal lahir, Nomor
                            Handpohone untuk memudahkan kami mengoganisir data
                        </span>
                    </div>
                </div>
                <div
                    class="col-md-6 col-sm-12 d-flex align-items-end flex-column"
                >
                    <div class="mt-auto p-4">
                        <router-link
                            to="/Setting"
                            class="rounded-lg btn btn-light font-weight-bold py-2 px-4 text-dark"
                            >Lengkapi Data
                            <svg
                                version="1.1"
                                id="Capa_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                width="21px"
                                height="21px"
                                viewBox="0 0 268.832 268.832"
                                style="enable-background:new 0 0 268.832 268.832;"
                                xml:space="preserve"
                            >
                                <g>
                                    <path
                                        d="M265.171,125.577l-80-80c-4.881-4.881-12.797-4.881-17.678,0c-4.882,4.882-4.882,12.796,0,17.678l58.661,58.661H12.5
		c-6.903,0-12.5,5.597-12.5,12.5c0,6.902,5.597,12.5,12.5,12.5h213.654l-58.659,58.661c-4.882,4.882-4.882,12.796,0,17.678
		c2.44,2.439,5.64,3.661,8.839,3.661s6.398-1.222,8.839-3.661l79.998-80C270.053,138.373,270.053,130.459,265.171,125.577z"
                                    />
                                </g>
                            </svg>
                        </router-link>
                    </div>
                </div>
            </div>
            <div
                class="row mt-5 rounded-lg"
                style="background-color: #37b2ff"
                v-else-if="cekData == true"
            >
                <div class="col-md-6 col-sm-12">
                    <div class="content p-4">
                        <h3 class="text-white font-weight-bolder">
                            Tracer Study STMIK Sumedang
                        </h3>
                        <span class="text-white"
                            >Tracer Study STMIK Sumedang Mambantu Menentukan
                            kurikulum yang akan di terapkan di tahun ajaran
                            selanjutnya, mohon untuk menigisi Kuesioner Tracer
                            Study ini dengan data yang Valid
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>Kuesioner</h1>
                </div>
            </div>

            <hr width="100%" />
            <div class="row mt-5 rounded-lg shadow">
                <div class="col-12 col-md-6 p-4">
                    <span class="mr-auto">
                        <img
                            class="mr-2"
                            src="/css/Alumni/document.png"
                            alt=""
                        />

                        <span class="h4">Kuesioner Tracer Study</span>
                    </span>
                </div>
                <div
                    class="col-12 col-md-6 d-flex align-items-center justify-content-end p-4"
                >
                    <span
                        @click="disableHandler()"
                        class="my-2 ml-0 btn btn-warning text-white font-weight-bold"
                    >
                        Jawab Kuesioner
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Dashboard",
    data() {
        return {
            kelengkapanData: "",
            cekData: "",
            valid: ""
        };
    },
    mounted() {
        this.getDataAlumni();
    },
    methods: {
        getDataAlumni: function() {
            axios
                .get("/dataAlumni")
                .then(res => {
                    let that = this;
                    let data = res.data.data;
                    this.valid = res.data.data.kuesioner;
                    $.each(res.data.data, function(i, val) {
                        if (val == null) {
                            console.log(i, val);
                            return (that.cekData = false);
                        } else {
                            that.cekData = true;
                        }
                    });
                    console.log(this.cekData);
                })
                .catch(err => {
                    console.error(err);
                });
        },
        disableHandler: function() {
            if (this.cekData != true) {
                Swal.fire(
                    "Data Belum Lengkap!",
                    "Lengkapi data diri terlebih dahulu!",
                    "error"
                );
            } else {
                if (this.valid == 1) {
                    Swal.fire("Anda Sudah Menigisi!", "", "error");
                } else {
                    this.$router.push("/Kuesioner");
                }
            }
        }
    }
};
</script>
