<template>
    <div>
        <div class="container">
            <div class="row shadow-lg rounded-lg">
                <div class="col-12 col-md-4 ">
                    <div
                        class="card shadow-lg total-alumni text-white p-4 h4 font-weight-normal d-flex align-items-center "
                    >
                        JUMLAH ALUMNI
                    </div>

                    <div class="card show-lg p-4 d-flex align-items-center h4">
                        {{ dataAlumni.Alumni }}
                    </div>
                    <div
                        class="mt-4 card shadow-lg mengisi-alumni text-white p-4 h4 font-weight-normal d-flex align-items-center"
                    >
                        ALUMNI YANG MENGISI
                    </div>
                    <div class="card show-lg p-4 d-flex align-items-center h4">
                        {{ dataAlumni.mengisi }}
                    </div>
                    <div
                        class="mt-4 card shadow-lg belum-alumni text-white p-4 h4 font-weight-normal d-flex align-items-center"
                    >
                        ALUMNI YANG BELUM MENGISI
                    </div>
                    <div class="card show-lg p-4 d-flex align-items-center h4">
                        {{ dataAlumni.belum }}
                    </div>
                </div>
                <div
                    class="col-12 col-md-8 d-flex justify-content-center align-items-center"
                    style="margin-right: -100px"
                >
                    <PieChart :data="dataAlumnis()" :option="optionAlumnis()" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import PieChart from "./chart/Pie";
export default {
    name: "Dashboard",
    components: {
        PieChart
    },
    data() {
        return {
            dataAlumni: ""
        };
    },
    mounted() {
        this.nama();
    },
    watch: {
        dataAlumni() {
            console.log(this.dataAlumni);
        }
    },
    methods: {
        nama() {
            axios
                .get("/api/getAlumni")
                .then(res => {
                    this.dataAlumni = res.data;
                })
                .catch(err => {
                    console.error(err);
                });
        },
        dataAlumnis() {
            let data = {
                labels: ["Alumni yang mengisi", "Alumni yang belum mengisi"],
                datasets: [
                    {
                        label: "# of Votes",
                        data: [this.dataAlumni.mengisi, this.dataAlumni.belum],
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
            };
            return data;
        },
        optionAlumnis() {
            let options = {
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true
                            }
                        }
                    ]
                }
            };
            return options;
        }
    }
};
</script>
<style>
.total-alumni {
    background-color: #3b82f6;
}
.total-alumni:hover {
    background-color: #2563eb;
}

.mengisi-alumni {
    background-color: #a78bfa;
}

.mengisi-alumni:hover {
    background-color: #8b5cf6;
}

.belum-alumni {
    background-color: #ef4444;
}

.belum-alumni:hover {
    background-color: #dc2626;
}
</style>
