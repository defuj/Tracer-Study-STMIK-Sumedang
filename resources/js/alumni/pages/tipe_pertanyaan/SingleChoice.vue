<template>
    <div>
        <div v-for="(opsi, i) in opsi" :key="i">
            <input
                type="radio"
                :id="opsi.nama_opsi"
                :value="opsi.nama_opsi"
                :name="'opsi_pertanyaan_' + jawaban.id_pertanyaan"
                v-model="jawaban.jawaban"
                :required="required > 0 ? true : false"
                @change="changeHandler(opsi.id)"
            />
            <label :for="opsi.nama_opsi">{{ opsi.nama_opsi }}</label>
            <br />
        </div>
    </div>
</template>
<script>
export default {
    name: "SingleChoice",
    props: ["idAlumnis", "idPertanyaans", "required"],
    data() {
        return {
            jawaban: {
                id_pertanyaan: "",
                id_detail: 0,
                id_alumni: "",
                jawaban: ""
            },
            opsi: []
        };
    },
    mounted() {
        this.getDetail();
        this.jawaban.id_pertanyaan = this.idPertanyaans;
        this.jawaban.id_alumni = this.idAlumnis;
        // console.log(this.jawaban, this.required);
    },
    methods: {
        getDetail: function() {
            let that = this;
            axios
                .get("/api/detail-pertanyaan/" + this.idPertanyaans)
                .then(res => {
                    this.opsi = res.data.detail;
                    // $.each(res.data.detail, function(i, v) {
                    //     that.opsi.push(v.nama_opsi);
                    //     console.log(v);
                    // });
                    console.log(this.opsi);
                })
                .catch(err => {
                    console.error(err);
                });
            // console.log();
        },
        changeHandler: function(id) {
            this.jawaban.id_detail = id;
            this.$emit("childData", this.jawaban);
        }
    }
};
</script>
