<template>
    <div>
        <input
            type="text"
            v-model="jawaban.jawaban"
            class="form-control rounded-0  border-top-0  border-left-0  border-right-0"
            @keyup="sendData"
            placeholder="Jawab disini . . . . "
            :required="required > 0 ? true : false"
        />
    </div>
</template>
<script>
export default {
    props: ["idAlumnis", "idPertanyaans", "required"],
    name: "Essay",
    data() {
        return {
            jawaban: {
                id_pertanyaan: "",
                id_detail: 0,
                id_alumni: "",
                jawaban: ""
            }
        };
    },
    mounted() {
        this.jawaban.id_pertanyaan = this.idPertanyaans;
        this.jawaban.id_alumni = this.idAlumnis;
        // console.log(this.jawaban, this.required);
    },
    methods: {
        sendData: function() {
            this.$emit("childData", this.jawaban);
        }
    }
};
</script>
<style>
.form-control:focus {
    box-shadow: inset 0 -1px 0 #ddd;
}
</style>
