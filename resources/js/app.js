require("./bootstrap");
window.Vue = require("vue");
import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
Vue.use(VueSweetalert2);
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "@mdi/font/css/materialdesignicons.css";
import "../sass/main.scss";
Vue.use(Vuetify);
import VueAxios from "vue-axios";
import axios from "axios";
import VueGoogleCharts from "vue-google-charts";
Vue.use(VueGoogleCharts);
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(VueRouter, VueAxios, axios, BootstrapVue);

const routes = [
    {
        path: "/",
        redirect: "/Dashboard",
        component: () => import("./components/Templates.vue"),
        children: [
            {
                path: "/Dashboard",
                name: "dashboard",
                component: () => import("./pages/Dashboard.vue")
            },
            {
                path: "/cek",
                name: "cek",
                component: () => import("./pages/Cek.vue")
            },
            {
                path: "/data-pertanyaan",
                name: "data-pertanyaan",
                component: () => import("./pages/Data-pertanyaan.vue")
            },
            {
                path: "/data-responden",
                name: "dataresponden",
                component: () => import("./pages/Data-responden.vue")
            },
            {
                path: "/edit-pertanyaan/:id",
                name: "edit-pertanyaan",
                component: () => import("./pages/Edit-pertanyaan.vue")
            }
        ]
    },
    {
        path: "/error",
        name: "Error",
        component: () => import("./pages/Error404.vue")
    },
    {
        path: "*",
        redirect: "/error"
    }
];

const router = new VueRouter({
    // mode: "history",
    routes: routes
});

const app = new Vue(
    Vue.util.extend({ router, el: "#app", vuetify: new Vuetify() }, App)
);
