(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/alumni/pages/Dashboard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/alumni/pages/Dashboard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Dashboard",
  data: function data() {
    return {
      kelengkapanData: "",
      cekData: "",
      valid: ""
    };
  },
  mounted: function mounted() {
    this.getDataAlumni();
  },
  methods: {
    getDataAlumni: function getDataAlumni() {
      var _this = this;

      axios.get("/dataAlumni").then(function (res) {
        var that = _this;
        var data = res.data.data;
        _this.valid = res.data.data.kuesioner;
        $.each(res.data.data, function (i, val) {
          if (val == null) {
            console.log(i, val);
            return that.cekData = false;
          } else {
            that.cekData = true;
          }
        });
        console.log(_this.cekData);
      })["catch"](function (err) {
        console.error(err);
      });
    },
    disableHandler: function disableHandler() {
      if (this.cekData != true) {
        Swal.fire("Data Belum Lengkap!", "Lengkapi data diri terlebih dahulu!", "error");
      } else {
        if (this.valid == 1) {
          Swal.fire("Anda Sudah Menigisi!", "", "error");
        } else {
          this.$router.push("/Kuesioner");
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/alumni/pages/Dashboard.vue?vue&type=template&id=bbbd1a54&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/alumni/pages/Dashboard.vue?vue&type=template&id=bbbd1a54& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "container" }, [
      _vm.cekData.length == 0
        ? _c("div")
        : _vm.cekData == false
        ? _c(
            "div",
            {
              staticClass: "row mt-5 rounded-lg",
              staticStyle: { "background-color": "#37b2ff" }
            },
            [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "col-md-6 col-sm-12 d-flex align-items-end flex-column"
                },
                [
                  _c(
                    "div",
                    { staticClass: "mt-auto p-4" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass:
                            "rounded-lg btn btn-light font-weight-bold py-2 px-4 text-dark",
                          attrs: { to: "/Setting" }
                        },
                        [
                          _vm._v("Lengkapi Data\n                            "),
                          _c(
                            "svg",
                            {
                              staticStyle: {
                                "enable-background": "new 0 0 268.832 268.832"
                              },
                              attrs: {
                                version: "1.1",
                                id: "Capa_1",
                                xmlns: "http://www.w3.org/2000/svg",
                                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                x: "0px",
                                y: "0px",
                                width: "21px",
                                height: "21px",
                                viewBox: "0 0 268.832 268.832",
                                "xml:space": "preserve"
                              }
                            },
                            [
                              _c("g", [
                                _c("path", {
                                  attrs: {
                                    d:
                                      "M265.171,125.577l-80-80c-4.881-4.881-12.797-4.881-17.678,0c-4.882,4.882-4.882,12.796,0,17.678l58.661,58.661H12.5\n\t\tc-6.903,0-12.5,5.597-12.5,12.5c0,6.902,5.597,12.5,12.5,12.5h213.654l-58.659,58.661c-4.882,4.882-4.882,12.796,0,17.678\n\t\tc2.44,2.439,5.64,3.661,8.839,3.661s6.398-1.222,8.839-3.661l79.998-80C270.053,138.373,270.053,130.459,265.171,125.577z"
                                  }
                                })
                              ])
                            ]
                          )
                        ]
                      )
                    ],
                    1
                  )
                ]
              )
            ]
          )
        : _vm.cekData == true
        ? _c(
            "div",
            {
              staticClass: "row mt-5 rounded-lg",
              staticStyle: { "background-color": "#37b2ff" }
            },
            [_vm._m(1)]
          )
        : _vm._e()
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "container" }, [
      _vm._m(2),
      _vm._v(" "),
      _c("hr", { attrs: { width: "100%" } }),
      _vm._v(" "),
      _c("div", { staticClass: "row mt-5 rounded-lg shadow" }, [
        _vm._m(3),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "col-12 col-md-6 d-flex align-items-center justify-content-end p-4"
          },
          [
            _c(
              "span",
              {
                staticClass:
                  "my-2 ml-0 btn btn-warning text-white font-weight-bold",
                on: {
                  click: function($event) {
                    return _vm.disableHandler()
                  }
                }
              },
              [
                _vm._v(
                  "\n                        Jawab Kuesioner\n                    "
                )
              ]
            )
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6 col-sm-12" }, [
      _c("div", { staticClass: "content p-4" }, [
        _c("h3", { staticClass: "text-white font-weight-bolder" }, [
          _vm._v(
            "\n                            Lengkapi Data Anda!\n                        "
          )
        ]),
        _vm._v(" "),
        _c("span", { staticClass: "text-white" }, [
          _vm._v(
            "Konfigurasi anda hampir selesai, silahkan lengkapi\n                            data diri Anda. Seperti alamat, tanggal lahir, Nomor\n                            Handpohone untuk memudahkan kami mengoganisir data\n                        "
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6 col-sm-12" }, [
      _c("div", { staticClass: "content p-4" }, [
        _c("h3", { staticClass: "text-white font-weight-bolder" }, [
          _vm._v(
            "\n                            Tracer Study STMIK Sumedang\n                        "
          )
        ]),
        _vm._v(" "),
        _c("span", { staticClass: "text-white" }, [
          _vm._v(
            "Tracer Study STMIK Sumedang Mambantu Menentukan\n                            kurikulum yang akan di terapkan di tahun ajaran\n                            selanjutnya, mohon untuk menigisi Kuesioner Tracer\n                            Study ini dengan data yang Valid\n                        "
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [_c("h1", [_vm._v("Kuesioner")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-md-6 p-4" }, [
      _c("span", { staticClass: "mr-auto" }, [
        _c("img", {
          staticClass: "mr-2",
          attrs: { src: "/css/Alumni/document.png", alt: "" }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "h4" }, [_vm._v("Kuesioner Tracer Study")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/alumni/pages/Dashboard.vue":
/*!*************************************************!*\
  !*** ./resources/js/alumni/pages/Dashboard.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_bbbd1a54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=bbbd1a54& */ "./resources/js/alumni/pages/Dashboard.vue?vue&type=template&id=bbbd1a54&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/alumni/pages/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_bbbd1a54___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_bbbd1a54___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/alumni/pages/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/alumni/pages/Dashboard.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/alumni/pages/Dashboard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/alumni/pages/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/alumni/pages/Dashboard.vue?vue&type=template&id=bbbd1a54&":
/*!********************************************************************************!*\
  !*** ./resources/js/alumni/pages/Dashboard.vue?vue&type=template&id=bbbd1a54& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_bbbd1a54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=bbbd1a54& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/alumni/pages/Dashboard.vue?vue&type=template&id=bbbd1a54&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_bbbd1a54___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_bbbd1a54___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);