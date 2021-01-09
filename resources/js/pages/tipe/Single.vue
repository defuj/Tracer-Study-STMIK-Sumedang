<script>
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
            this.renderChart(
                {
                    labels: [
                        "Alumni yang mengisi",
                        "Alumni yang belum mengisi"
                    ],
                    datasets: [
                        {
                            label: "# of Votes",
                            data: [1, 2],
                            backgroundColor: [
                                "rgba(75, 192, 192, 0.2)",
                                "rgba(54, 162, 235, 0.2)"
                            ],
                            borderColor: [
                                "rgba(75, 192, 192, 1)",
                                "rgba(54, 162, 235, 1)"
                            ],
                            borderWidth: 1
                        }
                    ]
                },
                {
                    borderWidth: "100px",
                    hoverBackgroundColor: "blue",
                    hoverBorderWidth: "100px"
                }
            );
        }
    }
};
</script>
