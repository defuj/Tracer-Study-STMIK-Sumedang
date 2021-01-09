require("./bootstrap");
window.Vue = require("vue");
import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import VueSweetalert2 from "vue-sweetalert2";
Vue.use(VueSweetalert2);
import swal from "sweetalert2";
// Vue.use(swal);
import "sweetalert2/dist/sweetalert2.min.css";
window.Swal = swal;

import Vuex from "vuex";
Vue.use(Vuex);
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "@mdi/font/css/materialdesignicons.css";
import "../sass/main.scss";
Vue.use(Vuetify);

import VueAxios from "vue-axios";
import axios from "axios";
import { BootstrapVue } from "bootstrap-vue";
Vue.use(BootstrapVue);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(VueRouter, VueAxios, axios);

const routes = [
    {
        path: "/",
        redirect: "dashboard",
        component: () => import("./alumni/Template.vue"),
        children: [
            {
                path: "/Dashboard",
                name: "dashboard",
                component: () => import("./alumni/pages/Dashboard.vue")
            },
            {
                path: "/Setting",
                name: "setting",
                component: () => import("./alumni/pages/Setting.vue")
            },
            {
                path: "/Kuesioner",
                name: "kuesioner",
                component: () => import("./alumni/pages/Kuesioner.vue")
            }
        ]
    }
];

const router = new VueRouter({
    routes: routes,
    mode: "history"
});

const app = new Vue(
    Vue.util.extend(
        {
            router,
            el: "#app",
            vuetify: new Vuetify()
        },
        App
    )
);
