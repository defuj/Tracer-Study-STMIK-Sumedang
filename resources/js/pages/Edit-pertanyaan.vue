<template>
    <v-app class="container-fluid">
        <div class="card container rounded-lg shadow-lg">
            <div class="card-header bg-white row">
                <div class="col">
                    <span class="h3">{{ header }}</span>
                </div>

                <div
                    class="col d-flex justify-content-end"
                    v-if="tipe_pertanyaan.length"
                >
                    <span class="btn btn-info">{{ tipe_pertanyaan }}</span>
                </div>
            </div>
            <div class="card-body">
                <div class="row d-flex align-items-top">
                    <div class="col-8" v-if="edit === 0 && pertanyaan.length">
                        <span class="h3">{{ pertanyaan }}</span>
                    </div>
                    <div
                        class="col-8"
                        v-else-if="edit === 1 && pertanyaan.length"
                    >
                        <input
                            type="text"
                            v-model="pertanyaanEdit"
                            class="form-control h4"
                        />
                    </div>
                    <div class="col-8" v-else>
                        <p
                            class="shine box"
                            style="width: 100%; height: 25px"
                        ></p>
                        <p
                            class="shine box"
                            style="width: 40%; height: 25px"
                        ></p>
                    </div>
                    <div
                        class="col d-flex justify-content-end"
                        v-if="pertanyaan.length"
                    >
                        <i
                            class="flaticon2-check-mark btn btn-success icon-nm mx-1"
                            v-if="edit === 1"
                            @click="
                                edit = 0;
                                editPertanyaan();
                            "
                            style="height: 32px"
                        ></i>
                        <i
                            class="flaticon2-delete btn btn-danger icon-nm mx-1"
                            v-if="edit === 1"
                            @click="
                                edit = 0;
                                pertanyaanEdit = pertanyaan;
                            "
                            style="height: 32px"
                        ></i>
                        <i
                            class="flaticon2-pen btn btn-primary icon-nm mx-1"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Edit Pertanyaan"
                            style="height: 32px"
                            v-if="edit === 0"
                            @click="edit = 1"
                        ></i>
                    </div>
                </div>
                <hr />
            </div>
            <div class="opsi-pertanyaan row" v-if="tipe_pertanyaan != 'Essay'">
                <div class="col-6">
                    <ul
                        class="list-group container-fluid rounded-lg"
                        style="margin: auto"
                    >
                        <li
                            v-for="(item, index) in opsi"
                            :key="item.id"
                            class="list-group-item"
                        >
                            <div class="input-group">
                                <input
                                    type="text"
                                    class="form-control input-detail bg-white"
                                    placeholder="Masukan Opsi Baru....."
                                    :readonly="editOpsi != item.id + '-' + 1"
                                    :value="item.nama_opsi"
                                    :id="'editNamaOpsi' + index"
                                />
                                <div class="input-group-append ml-1">
                                    <i
                                        class="input-group-text flaticon2-check-mark btn btn-success icon-nm mx-1"
                                        style="height: 32px"
                                        @click="
                                            editOpsi = 1;
                                            editDetailPertanyaan(
                                                item.id,
                                                index
                                            );
                                        "
                                        v-if="editOpsi == item.id + '-' + 1"
                                    ></i>
                                    <i
                                        class="input-group-text flaticon2-delete btn btn-danger icon-nm mx-1"
                                        style="height: 32px"
                                        @click="editOpsi = 1"
                                        v-if="editOpsi == item.id + '-' + 1"
                                    ></i>
                                    <i
                                        class="input-group-text flaticon2-pen btn btn-primary icon-nm mx-1"
                                        style="height: 32px"
                                        @click="editOpsi = item.id + '-' + 1"
                                        v-if="editOpsi == 1"
                                    ></i>
                                    <i
                                        class="input-group-text flaticon2-trash btn btn-danger icon-nm mx-1"
                                        style="height: 32px"
                                        @click="deleteDetailPertanyaan(item.id)"
                                        v-if="editOpsi == 1"
                                    ></i>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item" v-if="opsi === false">
                            <div class="input-group">
                                <span
                                    class="shine box"
                                    style="width: 77%; height: 25px"
                                ></span>
                                <span
                                    class="shine box"
                                    style="width:10%; height: 25px"
                                ></span>
                                <span
                                    class="shine box"
                                    style="width: 10%; height: 25px"
                                ></span>
                            </div>
                        </li>
                        <li class="list-group-item" v-if="opsi === false">
                            <div class="input-group">
                                <span
                                    class="shine box"
                                    style="width: 77%; height: 25px"
                                ></span>
                                <span
                                    class="shine box"
                                    style="width:10%; height: 25px"
                                ></span>
                                <span
                                    class="shine box"
                                    style="width: 10%; height: 25px"
                                ></span>
                            </div>
                        </li>
                        <li class="list-group-item" v-if="opsi === false">
                            <div class="input-group">
                                <span
                                    class="shine box"
                                    style="width: 77%; height: 25px"
                                ></span>
                                <span
                                    class="shine box"
                                    style="width:10%; height: 25px"
                                ></span>
                                <span
                                    class="shine box"
                                    style="width: 10%; height: 25px"
                                ></span>
                            </div>
                        </li>

                        <li class="list-group-item" v-if="opsi !== false">
                            <div class="input-group">
                                <input
                                    type="text"
                                    class="form-control input-detail bg-white"
                                    placeholder="Masukan Opsi Baru....."
                                    v-model="tambahDetail"
                                />
                                <div class="input-group-append ml-1">
                                    <i
                                        class="input-group-text flaticon2-add-1 btn btn-success icon-nm mx-1"
                                        style="height: 32px"
                                        @click="tambahDetailPertanyaan()"
                                    ></i>
                                    <i
                                        class="input-group-text flaticon2-delete btn btn-danger icon-nm mx-1"
                                        style="height: 32px"
                                        @click="tambahDetail = ''"
                                    ></i>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </v-app>
</template>
<script>
export default {
    name: "EditPertanyaan",
    data() {
        return {
            header: "Edit Pertanyaan",
            pertanyaan: "",
            opsi: false,
            edit: 0,
            pertanyaanEdit: "",
            tipe_pertanyaan: "",
            editOpsi: 1,
            editNamaOpsi: "",
            tambahDetail: ""
        };
    },
    mounted() {
        this.getDetailPertanyaan();
    },
    methods: {
        getDetailPertanyaan: function() {
            axios
                .get("/api/edit-pertanyaan/" + this.$route.params.id)
                .then(res => {
                    this.pertanyaan = res.data.judul;
                    this.pertanyaanEdit = res.data.judul;
                    this.opsi = res.data.detail;
                    this.tipe_pertanyaan = res.data.tipe_pertanyaan;
                    console.log(this.tipe_pertanyaan);
                })
                .catch(err => {
                    console.error(err);
                });
        },
        editPertanyaan: function() {
            axios
                .post("/api/edit-pertanyaan", {
                    id: this.$route.params.id,
                    judul: this.pertanyaanEdit
                })
                .then(res => {
                    if (res.data.success) {
                        Swal.fire(
                            "Pertanyaan Berhasil Diubah!",
                            " ",
                            "success"
                        ).then((this.pertanyaan = this.pertanyaanEdit));
                    } else {
                        Swal.fire(
                            "Pertanyaan Gagal Diubah!",
                            " ",
                            "error"
                        ).then((this.pertanyaanEdit = this.pertanyaan));
                    }
                });
        },
        deleteOpsi: function(index) {
            this.$delete(this.opsi, index);
        },
        editOpsis: function(index) {
            let valNamaOpsi = document.getElementById("editNamaOpsi" + index)
                .value;
            this.$set(this.opsi[index], "nama_opsi", valNamaOpsi);
        },
        tambahDetailPertanyaan: function() {
            axios
                .post("/api/detail-pertanyaan", {
                    id_pertanyaan: this.$route.params.id,
                    nama_opsi: this.tambahDetail
                })
                .then(res => {
                    this.opsi = res.data.detail;
                    this.tambahDetail = "";
                })
                .catch(err => {
                    console.error(err);
                });
        },
        deleteDetailPertanyaan: function(id) {
            Swal.fire({
                title: "Apa anda yakin menghapus opsi ini?!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then(result => {
                if (result.isConfirmed) {
                    axios
                        .delete(
                            "/api/detail-pertanyaan/" +
                                id +
                                "/" +
                                this.$route.params.id
                        )
                        .then(response => {
                            this.opsi = response.data.detail;
                        })
                        .catch(err => {
                            console.error(err);
                        });
                }
            });
        },
        editDetailPertanyaan: function(id, index) {
            const valNamaOpsi = document.getElementById("editNamaOpsi" + index)
                .value;
            Swal.fire({
                title: "Apa anda yakin akan mengubah opsi ini?!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Change it!"
            }).then(result => {
                if (result.isConfirmed) {
                    axios
                        .put("/api/detail-pertanyaan/", {
                            id: id,
                            id_pertanyaan: this.$route.params.id,
                            nama_opsi: valNamaOpsi
                        })
                        .then(response => {
                            this.opsi = response.data.detail;
                        })
                        .catch(err => {
                            console.error(err);
                        });
                }
            });
        }
    }
};
</script>
<style>
.shine {
    background: #f6f7f8;
    background-image: linear-gradient(
        to right,
        #f6f7f8 0%,
        #edeef1 20%,
        #f6f7f8 40%,
        #f6f7f8 100%
    );
    background-repeat: no-repeat;
    background-size: 800px 104px;
    display: inline-block;
    position: relative;

    -webkit-animation-duration: 1s;
    -webkit-animation-fill-mode: forwards;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-name: placeholderShimmer;
    -webkit-animation-timing-function: linear;
}

.box {
    height: 30px;
}

@-webkit-keyframes placeholderShimmer {
    0% {
        background-position: -468px 0;
    }

    100% {
        background-position: 468px 0;
    }
}

.input-detail {
    border: 0;
}
</style>
