<template>
    <v-app class="container-fluid">
        <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <form class="form" v-on:submit.prevent="clickHandler">
                        <div class="modal-header">
                            <h5
                                class="modal-title font-weight-bold h3"
                                id="exampleModalLabel"
                            >
                                Tambah Item Pertanyaan
                            </h5>
                            <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="card-body">
                                <div class="form-group">
                                    <label>Judul Pertanyaan :</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Masukan Judul Pertanyaan"
                                        required
                                        v-model="dataPertanyaan.pertanyaan"
                                    />
                                </div>
                                <hr />
                                <div class="form-group">
                                    <label>Pilih Tipe Pertanyaan</label>
                                    <div class="radio-list">
                                        <label class="radio">
                                            <input
                                                type="radio"
                                                name="tipepertanyaan"
                                                value="Single Choice"
                                                required
                                                v-model="
                                                    dataPertanyaan.tipe_pertanyaan
                                                "
                                            />
                                            <span></span>
                                            Single Choice
                                        </label>
                                        <label class="radio">
                                            <input
                                                type="radio"
                                                name="tipepertanyaan"
                                                value="Multi Choice"
                                                v-model="
                                                    dataPertanyaan.tipe_pertanyaan
                                                "
                                            />
                                            <span></span>
                                            Multi Choice
                                        </label>
                                        <label class="radio">
                                            <input
                                                type="radio"
                                                name="tipepertanyaan"
                                                value="Essay"
                                                v-model="
                                                    dataPertanyaan.tipe_pertanyaan
                                                "
                                            />
                                            <span></span>
                                            Essay
                                        </label>
                                        <label class="radio">
                                            <input
                                                type="radio"
                                                name="tipepertanyaan"
                                                value="Skala Likert"
                                                v-model="
                                                    dataPertanyaan.tipe_pertanyaan
                                                "
                                            />
                                            <span></span>
                                            Skala Likert
                                        </label>
                                    </div>
                                </div>
                                <hr />
                                <div class="form-group">
                                    <span>Required </span>
                                    <label class="switch">
                                        <input
                                            type="checkbox"
                                            v-model="dataPertanyaan.required"
                                        />
                                        <span class="slider round"></span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-dismiss="modal"
                                ref="disExampleModal"
                            >
                                Close
                            </button>
                            <button type="submit" class="btn btn-primary">
                                Simpan Pertanyaan
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="card container rounded-lg shadow-lg">
            <div class="card-header bg-white">
                <div class="row d-flex align-items-center">
                    <div class="col-9 ">
                        <h3>Data Pertanyaan</h3>
                    </div>
                    <div class="col-3 d-flex justify-content-end">
                        <button
                            class="btn btn-primary"
                            type="button"
                            data-toggle="modal"
                            data-target="#exampleModal"
                        >
                            <span>Tambah Pertanyaan</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <ul class="list-group row mr-2">
                    <li
                        class="list-group-item col-12"
                        v-for="(item, index) in itempertanyaan"
                        :key="item.id"
                    >
                        <div class="row d-flex align-items-center">
                            <div class="col d-flex justify-content-start">
                                {{
                                    itempertanyaan
                                        .map(function(x) {
                                            return x.id;
                                        })
                                        .indexOf(item.id) + 1
                                }}. {{ item.pertanyaan }}
                                <span
                                    v-if="item.required == 1"
                                    class="text-danger"
                                    >*</span
                                >
                            </div>
                            <div class="col d-flex justify-content-end">
                                <router-link
                                    :to="{
                                        path: '/edit-pertanyaan/' + item.id
                                    }"
                                    ><i
                                        class="flaticon-edit btn btn-success mx-1 "
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="Edit Pertanyaan"
                                    ></i
                                ></router-link>

                                <i
                                    class="far fa-trash-alt btn btn-danger mx-1"
                                    @click="deleteItem(item.id, index)"
                                ></i>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item" v-if="itempertanyaan === false">
                        <div class="input-group">
                            <span
                                class="shine box"
                                style="width: 100%; height: 25px"
                            ></span>
                        </div>
                    </li>
                    <li class="list-group-item" v-if="itempertanyaan === false">
                        <div class="input-group">
                            <span
                                class="shine box"
                                style="width: 100%; height: 25px"
                            ></span>
                        </div>
                    </li>
                    <li class="list-group-item" v-if="itempertanyaan === false">
                        <div class="input-group">
                            <span
                                class="shine box"
                                style="width: 100%; height: 25px"
                            ></span>
                        </div>
                    </li>
                    <li class="list-group-item" v-if="itempertanyaan === false">
                        <div class="input-group">
                            <span
                                class="shine box"
                                style="width: 100%; height: 25px"
                            ></span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </v-app>
</template>
<script>
export default {
    name: "Data-pertanyaan",
    data() {
        return {
            header: "Header",
            body: "Body",
            dataPertanyaan: {
                pertanyaan: "",
                tipe_pertanyaan: "",
                required: false
            },
            itempertanyaan: false
        };
    },
    mounted() {
        this.getDataPertanyaan();
    },
    methods: {
        clickHandler: function(e) {
            console.log(this.itempertanyaan);
            // e.preventDefault();
            axios
                .post("/api/tambah-pertanyaan", this.dataPertanyaan)
                .then(res => {
                    // console.log(res.data.data);
                    this.$refs.disExampleModal.click();
                    Swal.fire(
                        "Item Pertanyaan Berhasil Ditambahkan!",
                        " ",
                        "success"
                    ).then(this.getDataPertanyaan());
                })
                .catch(err => {
                    console.log(err);
                });
        },
        getDataPertanyaan() {
            axios.get("/api/get-pertanyaan").then(response => {
                // let dataPertanyaan = response.data.data;
                this.itempertanyaan = response.data.data;
            });
        },
        deleteItem: function(id, index) {
            Swal.fire({
                title: "Apa anda yakin menghapus pertanyaan ini?!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then(result => {
                if (result.isConfirmed) {
                    axios
                        .delete("/api/delete-pertanyaan/" + id)
                        .then(response => {
                            Swal.fire(
                                response.data.title,
                                response.data.message,
                                response.data.icon
                            );
                            if (response.data.success) {
                                this.itempertanyaan.splice(index, 1);
                            }
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
