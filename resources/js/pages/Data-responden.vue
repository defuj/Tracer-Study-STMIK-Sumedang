<template>
    <div>
        <div class="container-fluid">
            <div class="card container border-0">
                <div class="card-header bg-white row border-bottom-0">
                    <div class="col">
                        <span class="h1">Data Responden</span>
                    </div>

                    <!-- <div class="col d-flex justify-content-end">
                        <div class="dropdown">
                            <button
                                class="btn btn-primary dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Filter Tahun
                            </button>
                            <div
                                class="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                            >
                                <a class="dropdown-item btn bg-white">TS -1</a>
                                <a class="dropdown-item btn bg-white">TS -2</a>
                                <a class="dropdown-item btn bg-white">TS -3</a>
                                <a class="dropdown-item btn bg-white">TS -4</a>
                            </div>
                        </div>
                    </div> -->
                </div>
                <div class="card-body">
                    <div
                        class="row"
                        v-for="(id, index) in idPertanyaan"
                        :key="index"
                    >
                        <div class="col-12" v-if="id.tipe === 'Multi Choice'">
                            <hr />
                            <h3>{{ id.nama }}</h3>
                            <GChart
                                style="height: 25rem; width: 40rem;"
                                type="ColumnChart"
                                :data="chartData(id.id)"
                            />
                        </div>
                        <div class="col-12" v-if="id.tipe === 'Single Choice'">
                            <hr />
                            <h3>{{ id.nama }}</h3>
                            <GChart
                                style="height: 25rem; width: 40rem;"
                                type="PieChart"
                                :data="chartData(id.id)"
                            />
                        </div>
                        <div
                            class="col-12"
                            v-else-if="id.tipe === 'Skala Likert'"
                        >
                            <hr />
                            <h3>{{ id.nama }}</h3>
                            <div class="row">
                                <div
                                    class="col-12 pl-5"
                                    v-for="(data, index) in filterResponden(
                                        id.id
                                    )"
                                    :key="index"
                                >
                                    <h4>{{ data.nama_opsi }}</h4>

                                    <GChart
                                        style="height: 25rem; width: 40rem;"
                                        type="PieChart"
                                        :data="dataLikert(data.detail_id)"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { GChart } from "vue-google-charts";
export default {
    name: "Data-responden",
    components: {
        GChart
    },
    data() {
        return {
            idPertanyaan: [],
            dataResponden: [],
            loop: false,
            chartOptions: {
                chart: {
                    title: "Company Performance",
                    subtitle: "Sales, Expenses, and Profit: 2014-2017"
                }
            }
        };
    },
    mounted() {
        this.getIdPertanyaan();
    },
    methods: {
        getJawaban() {
            let data = axios
                .get("/api/getJawaban")
                .then(res => {
                    return res.data;
                })
                .catch(err => {
                    console.log(err);
                });
            return data;
        },
        async getIdPertanyaan() {
            let data = await this.getJawaban();
            this.dataResponden = data;
            console.log(this.dataResponden);
            let array = [];
            data.forEach(e => {
                array.push({
                    id: e.pertanyaan_id,
                    tipe: e.tipe_pertanyaan,
                    nama: e.pertanyaan
                });
            });
            this.idPertanyaan = array.filter(
                (e, index, self) =>
                    index ===
                    self.findIndex(
                        t =>
                            t.id === e.id &&
                            t.tipe === e.tipe &&
                            t.nama === e.nama
                    )
            );
            this.loop = true;
            console.log(this.idPertanyaan);
        },
        chartData(id) {
            let data = [["Nama Opsi", "Jumlah"]];
            this.dataResponden.forEach(e => {
                if (e.pertanyaan_id === id) {
                    data.push([e.nama_opsi, e.jumlah_jawaban]);
                }
            });
            return data;
        },
        dataAlumnis() {
            let data = {
                labels: ["Alumni yang mengisi", "Alumni yang belum mengisi"],
                datasets: [
                    {
                        label: "# of Votes",
                        data: ["1", "2"],
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
        },
        filterResponden(id) {
            let data = this.dataResponden.filter(e => e.pertanyaan_id === id);
            console.log(data);
            return data;
        },
        dataLikert(id) {
            let chartData = [["Nama Opsi", "Jumlah"]];
            let datas = this.dataResponden.filter(e => e.detail_id === id);
            chartData.push(["Sangat Setuju", Number(datas[0].SS)]);
            chartData.push(["Setuju", Number(datas[0].S)]);
            chartData.push(["Tidak Setuju", Number(datas[0].TS)]);
            chartData.push(["Sangat Tidak Setuju", Number(datas[0].STS)]);
            console.log(chartData);
            return chartData;
        }
    }
};
</script>
