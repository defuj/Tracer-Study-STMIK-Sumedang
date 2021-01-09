<template>
    <div style="background-color: rgb(242,243,247)">
        <div class="container">
            <form @submit="cekHandler">
                <div
                    v-for="(item, i) in dataPertanyaan"
                    class="row mt-5 rounded-lg shadow"
                    :key="i"
                >
                    <div class="card col-12 p-4">
                        <span class="h5"
                            >{{ item.pertanyaan }}
                            <span class="text-danger">{{
                                item.required == 1 ? "*" : ""
                            }}</span>
                        </span>
                        <div class="row">
                            <div class="col-md-12">
                                <Essay
                                    v-if="item.tipe_pertanyaan == 'Essay'"
                                    :idAlumnis="idAlumni"
                                    :idPertanyaans="item.id"
                                    :required="item.required"
                                    @childData="Essays"
                                />
                                <SingleChoice
                                    v-if="
                                        item.tipe_pertanyaan == 'Single Choice'
                                    "
                                    :idAlumnis="idAlumni"
                                    :idPertanyaans="item.id"
                                    :required="item.required"
                                    @childData="SingleChoices"
                                />
                                <MultiChoice
                                    v-if="
                                        item.tipe_pertanyaan == 'Multi Choice'
                                    "
                                    :idAlumnis="idAlumni"
                                    :idPertanyaans="item.id"
                                    :required="item.required"
                                    @childData="MultiChoices"
                                />
                                <Likert
                                    v-if="
                                        item.tipe_pertanyaan == 'Skala Likert'
                                    "
                                    :idAlumnis="idAlumni"
                                    :idPertanyaans="item.id"
                                    :required="item.required"
                                    @childData="SkalaLikerts"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row d-flex justify-content-end mt-4">
                    <button
                        class="btn btn-primary px-4 py-2 rounded-lg shadow"
                        type="submit"
                    >
                        Simpan
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import Essay from "./tipe_pertanyaan/Essay";
import MultiChoice from "./tipe_pertanyaan/MultiChoice";
import SingleChoice from "./tipe_pertanyaan/SingleChoice";
import Likert from "./tipe_pertanyaan/Likert";
export default {
    name: "Kuesioner",
    components: {
        Essay,
        SingleChoice,
        MultiChoice,
        Likert
    },
    data() {
        return {
            cekData: "",
            dataPertanyaan: "",
            idAlumni: "",
            allData: {}
        };
    },
    watch: {
        cekData() {
            if (this.cekData != true) {
                Swal.fire(
                    "Data Belum Lengkap!",
                    "Lengkapi data diri terlebih dahulu!",
                    "error"
                );
                this.$router.push("/Setting");
            }
        }
    },
    mounted() {
        this.getDataAlumni();
        this.getDataPertanyaan();
    },
    methods: {
        getDataAlumni: function() {
            axios
                .get("/dataAlumni")
                .then(res => {
                    let that = this;
                    let data = res.data.data;
                    $.each(res.data.data, function(i, val) {
                        // if (val != null) {
                        //     console.log(i, val);
                        //     return (that.cekData = false);
                        // } else {
                        that.cekData = true;
                        // }
                    });
                    this.idAlumni = res.data.data.id;
                })
                .catch(err => {
                    console.error(err);
                });
        },
        getDataPertanyaan: function() {
            axios
                .get("/api/get-pertanyaan")
                .then(res => {
                    this.dataPertanyaan = res.data.data;
                    console.log(this.dataPertanyaan);
                })
                .catch(err => {
                    console.error(err);
                });
        },
        Essays: function(data) {
            this.allData[data.id_pertanyaan] = data;
        },
        SingleChoices: function(data) {
            this.allData[data.id_pertanyaan] = data;
        },
        MultiChoices: function(data) {
            let that = this;
            if (data.checked == true) {
                this.allData[data.id_pertanyaan + "-" + data.id_detail] = {
                    id_pertanyaan: data.id_pertanyaan,
                    id_detail: data.id_detail,
                    id_alumni: data.id_alumni,
                    jawaban: data.jawaban
                };
            } else {
                this.$delete(
                    this.allData,
                    data.id_pertanyaan + "-" + data.id_detail
                );
            }
            console.log(this.allData);
        },
        SkalaLikerts: function(data) {
            if (data.jawaban != "") {
                this.allData[data.id_pertanyaan + "-" + data.id_detail] = {
                    id_pertanyaan: data.id_pertanyaan,
                    id_detail: data.id_detail,
                    id_alumni: data.id_alumni,
                    jawaban: data.jawaban
                };
            } else {
                this.$delete(
                    this.allData,
                    data.id_pertanyaan + "-" + data.id_detail
                );
            }
            console.log(this.allData);
        },
        cekHandler: function(e) {
            e.preventDefault();
            Swal.fire({
                title: "Apa anda yakin data sudah benar??!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Ya, Sudah Benar!"
            }).then(result => {
                if (result.isConfirmed) {
                    axios
                        .post("/percobaan", {
                            data: this.allData,
                            id: this.idAlumni
                        })
                        .then(res => {
                            this.$router.push({ name: "dashboard" });
                        })
                        .catch(err => {
                            console.error(err);
                        });
                }
            });
            console.log(this.allData);
        }
    }
};
</script>
