(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Cek.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Cek.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Cek",
  data: function data() {
    return {
      cobaan: 0,
      no: 0,
      search: "",
      allDesserts: [],
      filteredDesserts: [],
      totalDesserts: 0,
      desserts: [],
      editedIndex: -1,
      loading: true,
      options: {},
      headers: [{
        text: "No",
        value: "no",
        "class": "h6 align-content-center"
      }, {
        text: "Title",
        value: "title",
        "class": "h6"
      }, {
        text: "Actions",
        value: "actions",
        "class": "align-content-center h6"
      }]
    };
  },
  watch: {
    options: {
      handler: function handler() {
        // this.getDataFromApi();
        this.loading = true;
        var _this$options = this.options,
            sortBy = _this$options.sortBy,
            sortDesc = _this$options.sortDesc,
            page = _this$options.page,
            itemsPerPage = _this$options.itemsPerPage;

        if (this.options) {
          this.desserts = this.filteredDesserts.slice((page - 1) * itemsPerPage, page * itemsPerPage);
        }

        this.loading = false;
      },
      deep: true
    }
  },
  mounted: function mounted() {
    this.getDataFromApi();
  },
  methods: {
    cobaanHandler: function cobaanHandler() {
      this.cobaan == 0 ? this.cobaan = 1 : this.cobaan = 0;
    },
    focusPage: function focusPage() {
      this.options.page = 1;
    },
    deleteItem: function deleteItem(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(function (result) {
        if (result.isConfirmed) {
          Swal.fire("Deleted!", "Your file has been deleted." + id, "success");
        }
      });
    },
    searchData: function searchData() {
      var _this = this;

      this.loading = true;
      var _this$options2 = this.options,
          sortBy = _this$options2.sortBy,
          sortDesc = _this$options2.sortDesc,
          page = _this$options2.page,
          itemsPerPage = _this$options2.itemsPerPage;
      this.filteredDesserts = this.allDesserts.filter(function (row) {
        return Object.keys(row).some(function (key) {
          return String(row[key]).toLowerCase().indexOf(_this.search.toLowerCase()) > -1;
        });
      });
      this.totalDesserts = this.filteredDesserts.length; // page = 1;

      this.desserts = this.filteredDesserts.slice((page - 1) * itemsPerPage, page * itemsPerPage); // console.log(this.allDesserts);

      this.loading = false;
    },
    getDataFromApi: function getDataFromApi() {
      var _this2 = this;

      this.loading = true;
      axios.get("https://jsonplaceholder.typicode.com/photos").then(function (res) {
        var _this2$options = _this2.options,
            sortBy = _this2$options.sortBy,
            sortDesc = _this2$options.sortDesc,
            page = _this2$options.page,
            itemsPerPage = _this2$options.itemsPerPage;
        var items = res.data;
        var total = items.length;

        if (sortBy.length === 1 && sortDesc.length === 1) {
          items = items.sort(function (a, b) {
            var sortA = a[sortBy[0]];
            var sortB = b[sortBy[0]];

            if (sortDesc[0]) {
              if (sortA < sortB) return 1;
              if (sortA > sortB) return -1;
              return 0;
            } else {
              if (sortA < sortB) return -1;
              if (sortA > sortB) return 1;
              return 0;
            }
          });
        }

        if (itemsPerPage > 0) {
          items = items.slice((page - 1) * itemsPerPage, page * itemsPerPage);
        }

        _this2.desserts = items;
        _this2.totalDesserts = res.data.length;
        _this2.loading = false;
        _this2.allDesserts = res.data;
        _this2.filteredDesserts = res.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Cek.vue?vue&type=template&id=35ea9bd0&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Cek.vue?vue&type=template&id=35ea9bd0& ***!
  \*************************************************************************************************************************************************************************************************/
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
  return _c("v-app", { staticClass: "container-fluid " }, [
    _c("div", { staticClass: "card contianer" }, [
      _c("div", { staticClass: "card-header bg-light" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-9" }, [
            _c("h2", [
              _vm._v(
                "\n                        Data Kuesioner Mahasiswa\n                    "
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-3 d-flex justify-content-end" })
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "card-body bg-light",
          staticStyle: { "padding-top": "-20px" }
        },
        [
          _c(
            "v-row",
            [
              _c("v-col"),
              _vm._v(" "),
              _c(
                "v-col",
                [
                  _c("v-text-field", {
                    attrs: {
                      "append-icon": "mdi-magnify",
                      label: "Search",
                      "single-line": "",
                      "hide-details": ""
                    },
                    on: { focus: _vm.focusPage, keyup: _vm.searchData },
                    model: {
                      value: _vm.search,
                      callback: function($$v) {
                        _vm.search = $$v
                      },
                      expression: "search"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-data-table", {
            staticClass: "elevation-1",
            attrs: {
              headers: _vm.headers,
              items: _vm.desserts,
              options: _vm.options,
              "items-per-page": 5,
              "server-items-length": _vm.totalDesserts,
              loading: _vm.loading,
              search: _vm.search
            },
            on: {
              "update:options": function($event) {
                _vm.options = $event
              }
            },
            scopedSlots: _vm._u([
              {
                key: "item.no",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _c("span", { staticClass: "h6" }, [
                      _vm._v(
                        "\n                        " +
                          _vm._s(
                            _vm.filteredDesserts
                              .map(function(x) {
                                return x.id
                              })
                              .indexOf(item.id) + 1
                          ) +
                          "\n                    "
                      )
                    ])
                  ]
                }
              },
              {
                key: "item.actions",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _c(
                      "v-icon",
                      {
                        attrs: { small: "" },
                        on: {
                          click: function($event) {
                            return _vm.deleteItem(item.id)
                          }
                        }
                      },
                      [_vm._v("mdi-delete")]
                    )
                  ]
                }
              }
            ])
          })
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Cek.vue":
/*!************************************!*\
  !*** ./resources/js/pages/Cek.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Cek_vue_vue_type_template_id_35ea9bd0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cek.vue?vue&type=template&id=35ea9bd0& */ "./resources/js/pages/Cek.vue?vue&type=template&id=35ea9bd0&");
/* harmony import */ var _Cek_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cek.vue?vue&type=script&lang=js& */ "./resources/js/pages/Cek.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Cek_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Cek_vue_vue_type_template_id_35ea9bd0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Cek_vue_vue_type_template_id_35ea9bd0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Cek.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Cek.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./resources/js/pages/Cek.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cek_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Cek.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Cek.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cek_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Cek.vue?vue&type=template&id=35ea9bd0&":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/Cek.vue?vue&type=template&id=35ea9bd0& ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cek_vue_vue_type_template_id_35ea9bd0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Cek.vue?vue&type=template&id=35ea9bd0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Cek.vue?vue&type=template&id=35ea9bd0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cek_vue_vue_type_template_id_35ea9bd0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cek_vue_vue_type_template_id_35ea9bd0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);