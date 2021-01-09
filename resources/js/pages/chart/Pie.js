import { Pie } from "vue-chartjs";
export default {
    extends: Pie,
    props: ["data", "options"],
    watch: {
        data() {
            console.log(this.data);
            this.chart();
        }
    },
    mounted() {},
    methods: {
        chart() {
            this.renderChart(this.data, this.options);
        }
    }
};
