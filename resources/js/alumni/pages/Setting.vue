<template>
    <div>
        <div class="container">
            <form method="put" @submit="submitHandler">
                <div class="row mt-5 rounded-lg">
                    <div class="col-md-6 col-12">
                        <b-form-group
                            id="fieldset-1"
                            label="NIM"
                            label-for="input-1"
                        >
                            <b-form-input
                                id="input-1"
                                v-model="data.nim"
                                trim
                                :class="data.nim ? '' : 'is-invalid'"
                                disabled
                                autocomplete="off"
                            ></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-6 col-12">
                        <b-form-group
                            id="fieldset-nama"
                            label="Nama"
                            label-for="input-nama"
                        >
                            <b-form-input
                                id="input-nama"
                                v-model="data.nama"
                                :class="data.nama ? '' : 'is-invalid'"
                                trim
                                autocomplete="off"
                            ></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-6 col-12">
                        <b-form-group
                            id="fieldset-email"
                            label="Email"
                            label-for="input-email"
                        >
                            <b-form-input
                                id="input-email"
                                v-model="data.email"
                                trim
                                :class="data.email ? '' : 'is-invalid'"
                                type="email"
                                autocomplete="off"
                            ></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-6 col-12">
                        <b-form-group
                            id="fieldset-noHp"
                            label="Nomor Handphone"
                            label-for="input-noHp"
                        >
                            <b-form-input
                                id="input-noHp"
                                v-model="data.noHp"
                                :class="data.noHp ? '' : 'is-invalid'"
                                trim
                                autocomplete="off"
                            ></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-6 col-12">
                        <b-form-group
                            id="fieldset-password"
                            label="Password"
                            label-for="input-password"
                            description="Leave blank if you didnt want to change your password"
                        >
                            <b-form-input
                                id="input-password"
                                v-model="data.password"
                                trim
                                type="password"
                            ></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-6 col-12">
                        <b-form-group
                            id="fieldset-cpassword"
                            label="Konfirmasi Password"
                            label-for="input-cpassword"
                        >
                            <b-form-input
                                id="input-cpassword"
                                v-model="data.cpassword"
                                :class="validPassword ? '' : 'is-invalid'"
                                trim
                                type="password"
                            ></b-form-input>
                            <small
                                class="form-text text-danger"
                                ref="cekPassword"
                            ></small>
                        </b-form-group>
                    </div>
                    <div class="col-md-3 col-6">
                        <b-form-group
                            id="fieldset-tanggalLahir"
                            label="Tanggal Lahir"
                            label-for="input-tanggalLahir"
                        >
                            <b-form-datepicker
                                id="input-tanggalLahir"
                                v-model="data.tanggalLahir"
                                trim
                                :class="data.tanggalLahir ? '' : 'is-invalid'"
                                autocomplete="off"
                            ></b-form-datepicker>
                        </b-form-group>
                    </div>
                    <div class="col-md-3 col-6">
                        <b-form-group
                            id="fieldset-tahunLulus"
                            label="Tahun Lulus"
                            label-for="input-tahunLulus"
                        >
                            <b-form-input
                                id="input-tahunLulus"
                                v-model="data.tahunLulus"
                                trim
                                :class="data.tahunLulus ? '' : 'is-invalid'"
                                autocomplete="off"
                            ></b-form-input>
                        </b-form-group>
                    </div>

                    <div class="col-12 col-md-6">
                        <b-form-group
                            id="fieldset-alamat"
                            label="Alamat"
                            label-for="input-alamat"
                        >
                            <b-form-textarea
                                id="input-alamat"
                                v-model="data.alamat"
                                trim
                                :class="data.alamat ? '' : 'is-invalid'"
                                autocomplete="off"
                            ></b-form-textarea>
                        </b-form-group>
                    </div>
                </div>
                <hr />
                <div class="row rounded-lg">
                    <div class="col-12 col-md-6">
                        <b-form-group
                            id="fieldset-tempatKerja"
                            label="Tempat Kerja"
                            label-for="input-tempatKerja"
                        >
                            <b-form-input
                                id="input-tempatKerja"
                                v-model="data.tempatKerja"
                                :class="data.tempatKerja ? '' : 'is-invalid'"
                                autocomplete="off"
                                trim
                            ></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-12 col-md-6">
                        <b-form-group
                            id="fieldset-alamatTempatKerja"
                            label="Alamat Tempat Kerja"
                            label-for="input-alamatTempatKerja"
                        >
                            <b-form-textarea
                                id="input-alamatTempatKerja"
                                v-model="data.alamatTempatKerja"
                                :class="
                                    data.alamatTempatKerja ? '' : 'is-invalid'
                                "
                                trim
                                autocomplete="off"
                            ></b-form-textarea>
                        </b-form-group>
                    </div>
                </div>
                <hr />
                <div class="row rounded-lg">
                    <div class="col-12 d-flex justify-content-end">
                        <button class="btn btn-primary" type="submit">
                            Simpan
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import datepicker from "vuejs-datepicker";

export default {
    components: {
        datepicker
    },
    name: "Setting",
    data() {
        return {
            validSubmit: true,
            validPassword: true,
            data: {
                id: "",
                nama: "",
                nim: "",
                email: "",
                tahunLulus: "",
                alamat: "",
                noHp: "",
                tanggalLahir: "",
                tempatKerja: "",
                alamatTempatKerja: "",
                cpassword: "",
                password: ""
            }
        };
    },
    mounted() {
        this.getDataAlumni();
        $("#input-tanggal_lahir").datepicker();
    },
    watch: {
        "data.password": function() {
            // if (this.data.password.length != 0) {
            if (this.data.password != this.data.cpassword) {
                this.validPassword = false;

                this.validSubmit = false;
            } else {
                this.validPassword = true;
            }
            // } else {
            //     this.data.cpassword = "";
            //     this.validPassword = true;
            // }

            if (this.data.password == "") {
                this.data.cpassword = "";
            }
        },
        "data.cpassword": function() {
            // if (this.data.password.length != 0) {
            if (this.data.password != this.data.cpassword) {
                this.validPassword = false;
                this.validSubmit = false;
            } else {
                this.validPassword = true;
            }
            // } else {
            //     this.validPassword = true;
            // }
        }
    },
    methods: {
        getDataAlumni: function() {
            axios
                .get("/dataAlumni")
                .then(res => {
                    let data = res.data.data;
                    this.data.id = data.id;
                    this.data.nama = data.nama;
                    this.data.nim = data.nim;
                    this.data.email = data.email;
                    this.data.alamat = data.alamat;
                    this.data.tanggalLahir = data.tanggal_lahir;
                    this.data.noHp = data.no_hp;
                    this.data.tahunLulus = data.tahun_lulus;
                    this.data.tempatKerja = data.tempat_kerja;
                    this.data.alamatTempatKerja = data.alamat_tempat_kerja;
                })
                .catch(err => {
                    console.error(err);
                });
        },
        submitHandler: function(e) {
            e.preventDefault();
            let that = this;
            $.each(this.data, function(i, val) {
                // console.log(i, val);
                if (i == "password" || i == "cpassword") {
                    if (that.data.password == that.data.cpassword) {
                        that.validSubmit = true;
                    } else {
                        that.validSubmit = false;
                    }
                } else {
                    if (val) {
                        that.validSubmit = true;
                    } else {
                        that.validSubmit = false;
                        // console.log(i, val, that.validSubmit);
                        return false;
                    }
                }
            });
            if (this.validSubmit) {
                axios
                    .put("/api/ubahProfile", this.data)
                    .then(res => {
                        if (res.data.success) {
                            Swal.fire(
                                "Data Berhasil Disimpan!",
                                "",
                                "success"
                            ).then(this.$router.push("/Dashboard"));
                        } else {
                            Swal.fire("Data Gagal Disimpan!", "", "error");
                        }
                    })
                    .catch(err => {
                        console.error(err);
                    });
            } else {
                Swal.fire(
                    "Data Belum Lengkap!",
                    "Lengkapi data diri terlebih dahulu!",
                    "error"
                );
            }
        }
    }
};
</script>
