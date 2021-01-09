(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/alumni/pages/Setting.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/alumni/pages/Setting.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
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
  components: {
    datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  name: "Setting",
  data: function data() {
    return {
      validSubmit: true,
      validPassword: true,
      data: {
        id: "",
        nama: "",
        nim: "",
        email: "",
        tahunLulus: "",
        alamat: "",
        noHp: "",
        tanggalLahir: "",
        tempatKerja: "",
        alamatTempatKerja: "",
        cpassword: "",
        password: ""
      }
    };
  },
  mounted: function mounted() {
    this.getDataAlumni();
    $("#input-tanggal_lahir").datepicker();
  },
  watch: {
    "data.password": function dataPassword() {
      // if (this.data.password.length != 0) {
      if (this.data.password != this.data.cpassword) {
        this.validPassword = false;
        this.validSubmit = false;
      } else {
        this.validPassword = true;
      } // } else {
      //     this.data.cpassword = "";
      //     this.validPassword = true;
      // }


      if (this.data.password == "") {
        this.data.cpassword = "";
      }
    },
    "data.cpassword": function dataCpassword() {
      // if (this.data.password.length != 0) {
      if (this.data.password != this.data.cpassword) {
        this.validPassword = false;
        this.validSubmit = false;
      } else {
        this.validPassword = true;
      } // } else {
      //     this.validPassword = true;
      // }

    }
  },
  methods: {
    getDataAlumni: function getDataAlumni() {
      var _this = this;

      axios.get("/dataAlumni").then(function (res) {
        var data = res.data.data;
        _this.data.id = data.id;
        _this.data.nama = data.nama;
        _this.data.nim = data.nim;
        _this.data.email = data.email;
        _this.data.alamat = data.alamat;
        _this.data.tanggalLahir = data.tanggal_lahir;
        _this.data.noHp = data.no_hp;
        _this.data.tahunLulus = data.tahun_lulus;
        _this.data.tempatKerja = data.tempat_kerja;
        _this.data.alamatTempatKerja = data.alamat_tempat_kerja;
      })["catch"](function (err) {
        console.error(err);
      });
    },
    submitHandler: function submitHandler(e) {
      var _this2 = this;

      e.preventDefault();
      var that = this;
      $.each(this.data, function (i, val) {
        // console.log(i, val);
        if (i == "password" || i == "cpassword") {
          if (that.data.password == that.data.cpassword) {
            that.validSubmit = true;
          } else {
            that.validSubmit = false;
          }
        } else {
          if (val) {
            that.validSubmit = true;
          } else {
            that.validSubmit = false; // console.log(i, val, that.validSubmit);

            return false;
          }
        }
      });

      if (this.validSubmit) {
        axios.put("/api/ubahProfile", this.data).then(function (res) {
          if (res.data.success) {
            Swal.fire("Data Berhasil Disimpan!", "", "success").then(_this2.$router.push("/Dashboard"));
          } else {
            Swal.fire("Data Gagal Disimpan!", "", "error");
          }
        })["catch"](function (err) {
          console.error(err);
        });
      } else {
        Swal.fire("Data Belum Lengkap!", "Lengkapi data diri terlebih dahulu!", "error");
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/alumni/pages/Setting.vue?vue&type=template&id=0fc53b12&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/alumni/pages/Setting.vue?vue&type=template&id=0fc53b12& ***!
  \************************************************************************************************************************************************************************************************************/
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
      _c(
        "form",
        { attrs: { method: "put" }, on: { submit: _vm.submitHandler } },
        [
          _c("div", { staticClass: "row mt-5 rounded-lg" }, [
            _c(
              "div",
              { staticClass: "col-md-6 col-12" },
              [
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      id: "fieldset-1",
                      label: "NIM",
                      "label-for": "input-1"
                    }
                  },
                  [
                    _c("b-form-input", {
                      class: _vm.data.nim ? "" : "is-invalid",
                      attrs: {
                        id: "input-1",
                        trim: "",
                        disabled: "",
                        autocomplete: "off"
                      },
                      model: {
                        value: _vm.data.nim,
                        callback: function($$v) {
                          _vm.$set(_vm.data, "nim", $$v)
                        },
                        expression: "data.nim"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-md-6 col-12" },
              [
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      id: "fieldset-nama",
                      label: "Nama",
                      "label-for": "input-nama"
                    }
                  },
                  [
                    _c("b-form-input", {
                      class: _vm.data.nama ? "" : "is-invalid",
                      attrs: {
                        id: "input-nama",
                        trim: "",
                        autocomplete: "off"
                      },
                      model: {
                        value: _vm.data.nama,
                        callback: function($$v) {
                          _vm.$set(_vm.data, "nama", $$v)
                        },
                        expression: "data.nama"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-md-6 col-12" },
              [
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      id: "fieldset-email",
                      label: "Email",
                      "label-for": "input-email"
                    }
                  },
                  [
                    _c("b-form-input", {
                      class: _vm.data.email ? "" : "is-invalid",
                      attrs: {
                        id: "input-email",
                        trim: "",
                        type: "email",
                        autocomplete: "off"
                      },
                      model: {
                        value: _vm.data.email,
                        callback: function($$v) {
                          _vm.$set(_vm.data, "email", $$v)
                        },
                        expression: "data.email"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-md-6 col-12" },
              [
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      id: "fieldset-noHp",
                      label: "Nomor Handphone",
                      "label-for": "input-noHp"
                    }
                  },
                  [
                    _c("b-form-input", {
                      class: _vm.data.noHp ? "" : "is-invalid",
                      attrs: {
                        id: "input-noHp",
                        trim: "",
                        autocomplete: "off"
                      },
                      model: {
                        value: _vm.data.noHp,
                        callback: function($$v) {
                          _vm.$set(_vm.data, "noHp", $$v)
                        },
                        expression: "data.noHp"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-md-6 col-12" },
              [
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      id: "fieldset-password",
                      label: "Password",
                      "label-for": "input-password",
                      description:
                        "Leave blank if you didnt want to change your password"
                    }
                  },
                  [
                    _c("b-form-input", {
                      attrs: {
                        id: "input-password",
                        trim: "",
                        type: "password"
                      },
                      model: {
                        value: _vm.data.password,
                        callback: function($$v) {
                          _vm.$set(_vm.data, "password", $$v)
                        },
                        expression: "data.password"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-md-6 col-12" },
              [
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      id: "fieldset-cpassword",
                      label: "Konfirmasi Password",
                      "label-for": "input-cpassword"
                    }
                  },
                  [
                    _c("b-form-input", {
                      class: _vm.validPassword ? "" : "is-invalid",
                      attrs: {
                        id: "input-cpassword",
                        trim: "",
                        type: "password"
                      },
                      model: {
                        value: _vm.data.cpassword,
                        callback: function($$v) {
                          _vm.$set(_vm.data, "cpassword", $$v)
                        },
                        expression: "data.cpassword"
                      }
                    }),
                    _vm._v(" "),
                    _c("small", {
                      ref: "cekPassword",
                      staticClass: "form-text text-danger"
                    })
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-md-3 col-6" },
              [
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      id: "fieldset-tanggalLahir",
                      label: "Tanggal Lahir",
                      "label-for": "input-tanggalLahir"
                    }
                  },
                  [
                    _c("b-form-datepicker", {
                      class: _vm.data.tanggalLahir ? "" : "is-invalid",
                      attrs: {
                        id: "input-tanggalLahir",
                        trim: "",
                        autocomplete: "off"
                      },
                      model: {
                        value: _vm.data.tanggalLahir,
                        callback: function($$v) {
                          _vm.$set(_vm.data, "tanggalLahir", $$v)
                        },
                        expression: "data.tanggalLahir"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-md-3 col-6" },
              [
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      id: "fieldset-tahunLulus",
                      label: "Tahun Lulus",
                      "label-for": "input-tahunLulus"
                    }
                  },
                  [
                    _c("b-form-input", {
                      class: _vm.data.tahunLulus ? "" : "is-invalid",
                      attrs: {
                        id: "input-tahunLulus",
                        trim: "",
                        autocomplete: "off"
                      },
                      model: {
                        value: _vm.data.tahunLulus,
                        callback: function($$v) {
                          _vm.$set(_vm.data, "tahunLulus", $$v)
                        },
                        expression: "data.tahunLulus"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-12 col-md-6" },
              [
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      id: "fieldset-alamat",
                      label: "Alamat",
                      "label-for": "input-alamat"
                    }
                  },
                  [
                    _c("b-form-textarea", {
                      class: _vm.data.alamat ? "" : "is-invalid",
                      attrs: {
                        id: "input-alamat",
                        trim: "",
                        autocomplete: "off"
                      },
                      model: {
                        value: _vm.data.alamat,
                        callback: function($$v) {
                          _vm.$set(_vm.data, "alamat", $$v)
                        },
                        expression: "data.alamat"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("div", { staticClass: "row rounded-lg" }, [
            _c(
              "div",
              { staticClass: "col-12 col-md-6" },
              [
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      id: "fieldset-tempatKerja",
                      label: "Tempat Kerja",
                      "label-for": "input-tempatKerja"
                    }
                  },
                  [
                    _c("b-form-input", {
                      class: _vm.data.tempatKerja ? "" : "is-invalid",
                      attrs: {
                        id: "input-tempatKerja",
                        autocomplete: "off",
                        trim: ""
                      },
                      model: {
                        value: _vm.data.tempatKerja,
                        callback: function($$v) {
                          _vm.$set(_vm.data, "tempatKerja", $$v)
                        },
                        expression: "data.tempatKerja"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-12 col-md-6" },
              [
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      id: "fieldset-alamatTempatKerja",
                      label: "Alamat Tempat Kerja",
                      "label-for": "input-alamatTempatKerja"
                    }
                  },
                  [
                    _c("b-form-textarea", {
                      class: _vm.data.alamatTempatKerja ? "" : "is-invalid",
                      attrs: {
                        id: "input-alamatTempatKerja",
                        trim: "",
                        autocomplete: "off"
                      },
                      model: {
                        value: _vm.data.alamatTempatKerja,
                        callback: function($$v) {
                          _vm.$set(_vm.data, "alamatTempatKerja", $$v)
                        },
                        expression: "data.alamatTempatKerja"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _vm._m(0)
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row rounded-lg" }, [
      _c("div", { staticClass: "col-12 d-flex justify-content-end" }, [
        _c(
          "button",
          { staticClass: "btn btn-primary", attrs: { type: "submit" } },
          [_vm._v("\n                        Simpan\n                    ")]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/alumni/pages/Setting.vue":
/*!***********************************************!*\
  !*** ./resources/js/alumni/pages/Setting.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Setting_vue_vue_type_template_id_0fc53b12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Setting.vue?vue&type=template&id=0fc53b12& */ "./resources/js/alumni/pages/Setting.vue?vue&type=template&id=0fc53b12&");
/* harmony import */ var _Setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Setting.vue?vue&type=script&lang=js& */ "./resources/js/alumni/pages/Setting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Setting_vue_vue_type_template_id_0fc53b12___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Setting_vue_vue_type_template_id_0fc53b12___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/alumni/pages/Setting.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/alumni/pages/Setting.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/alumni/pages/Setting.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Setting.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/alumni/pages/Setting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/alumni/pages/Setting.vue?vue&type=template&id=0fc53b12&":
/*!******************************************************************************!*\
  !*** ./resources/js/alumni/pages/Setting.vue?vue&type=template&id=0fc53b12& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Setting_vue_vue_type_template_id_0fc53b12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Setting.vue?vue&type=template&id=0fc53b12& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/alumni/pages/Setting.vue?vue&type=template&id=0fc53b12&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Setting_vue_vue_type_template_id_0fc53b12___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Setting_vue_vue_type_template_id_0fc53b12___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);