<template>
    <div>
        <div class="row">
            <div class="col">
                <small class="text-muted">Bisa Pilih lebih dari satu</small>
            </div>
        </div>
        <div v-for="(opsi, i) in jawaban" :key="i">
            <input
                type="checkbox"
                :id="opsi.jawaban"
                :class="'multichoice' + idPertanyaans"
                v-model="opsi.checked"
                @change="cekRequired"
                :required="required > 0 ? true : false"
            />
            <label :for="opsi.jawaban">{{ opsi.jawaban }}</label>
        </div>
    </div>
</template>
<script>
export default {
    name: "MultiChoice",
    props: ["idAlumnis", "idPertanyaans", "required"],
    data() {
        return {
            cekcek: false,
            jawaban: []
        };
    },
    mounted() {
        this.getDetail();
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
                            jawaban: v.nama_opsi,
                            checked: false
                        });
                    });
                })
                .catch(err => {
                    console.error(err);
                });
        },
        cekRequired: function() {
            let that = this;
            let nameclass = ".multichoice" + this.idPertanyaans;
            // let data = {};
            $.each(that.jawaban, function(i, v) {
                if (v.checked == true) {
                    $(nameclass).removeAttr("required");
                    return false;
                } else {
                    if (that.required > 0) {
                        $(nameclass).prop("required", true);
                    }
                }
            });
            $.each(that.jawaban, function(i, v) {
                that.$emit("childData", v);
            });
            // this.$emit("childData", this.jawaban);
            // console.log(data);
        }
    }
};
</script>
