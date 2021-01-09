<template>
    <div>
        <table class="table border">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <td scope="col"><center>SS</center></td>
                    <td scope="col"><center>S</center></td>
                    <td scope="col"><center>TS</center></td>
                    <td scope="col"><center>STS</center></td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(opsi, i) in jawaban" :key="i">
                    <td>
                        {{ opsi.nama_opsi }}
                    </td>
                    <td>
                        <center>
                            <input
                                type="radio"
                                :name="'opsi_pertanyaan_' + opsi.id_detail"
                                :required="required > 0 ? true : false"
                                v-model="opsi.jawaban"
                                value="4"
                            />
                        </center>
                    </td>
                    <td>
                        <center>
                            <input
                                type="radio"
                                :name="'opsi_pertanyaan_' + opsi.id_detail"
                                :required="required > 0 ? true : false"
                                v-model="opsi.jawaban"
                                value="3"
                            />
                        </center>
                    </td>
                    <td>
                        <center>
                            <input
                                type="radio"
                                :name="'opsi_pertanyaan_' + opsi.id_detail"
                                :required="required > 0 ? true : false"
                                v-model="opsi.jawaban"
                                value="2"
                            />
                        </center>
                    </td>
                    <td>
                        <center>
                            <input
                                type="radio"
                                :name="'opsi_pertanyaan_' + opsi.id_detail"
                                :required="required > 0 ? true : false"
                                v-model="opsi.jawaban"
                                value="1"
                            />
                        </center>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name: "Likert",
    props: ["idAlumnis", "idPertanyaans", "required"],
    data() {
        return {
            coba: "",
            jawaban: []
        };
    },
    watch: {
        jawaban: {
            handler: function() {
                let that = this;
                $.each(that.jawaban, function(i, v) {
                    that.$emit("childData", v);
                });
                console.log(this.jawaban);
            },
            deep: true
        }
    },
    mounted() {
        this.getDetail();
        // this.$watch(
        //     this.jawaban,
        //     function() {
        //         console.log("a thing changed");
        //     },
        //     { deep: true }
        // );
    },
    methods: {
        getDetail: function() {
            let that = this;
            axios
                .get("/api/detail-pertanyaan/" + this.idPertanyaans)
                .then(res => {
                    let data = res.data.detail;
                    // console.log(data);
                    $.each(data, function(i, v) {
                        that.jawaban.push({
                            id_pertanyaan: v.id_pertanyaan,
                            id_detail: v.id,
                            id_alumni: that.idAlumnis,
                            jawaban: "",
                            nama_opsi: v.nama_opsi
                        });
                    });
                })
                .catch(err => {
                    console.error(err);
                });
        }
    }
};
</script>
<style>
.checkboxgroup {
    display: inline-block;
    text-align: center;
}
.checkboxgroup label {
    display: block;
}
</style>
