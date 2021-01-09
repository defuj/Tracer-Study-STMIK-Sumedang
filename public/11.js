(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Data-responden.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Data-responden.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_google_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-google-charts */ "./node_modules/vue-google-charts/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Data-responden",
  components: {
    GChart: vue_google_charts__WEBPACK_IMPORTED_MODULE_1__["GChart"]
  },
  data: function data() {
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
  mounted: function mounted() {
    this.getIdPertanyaan();
  },
  methods: {
    getJawaban: function getJawaban() {
      var data = axios.get("/api/getJawaban").then(function (res) {
        return res.data;
      })["catch"](function (err) {
        console.log(err);
      });
      return data;
    },
    getIdPertanyaan: function getIdPertanyaan() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var data, array;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.getJawaban();

              case 2:
                data = _context.sent;
                _this.dataResponden = data;
                console.log(_this.dataResponden);
                array = [];
                data.forEach(function (e) {
                  array.push({
                    id: e.pertanyaan_id,
                    tipe: e.tipe_pertanyaan,
                    nama: e.pertanyaan
                  });
                });
                _this.idPertanyaan = array.filter(function (e, index, self) {
                  return index === self.findIndex(function (t) {
                    return t.id === e.id && t.tipe === e.tipe && t.nama === e.nama;
                  });
                });
                _this.loop = true;
                console.log(_this.idPertanyaan);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    chartData: function chartData(id) {
      var data = [["Nama Opsi", "Jumlah"]];
      this.dataResponden.forEach(function (e) {
        if (e.pertanyaan_id === id) {
          data.push([e.nama_opsi, e.jumlah_jawaban]);
        }
      });
      return data;
    },
    dataAlumnis: function dataAlumnis() {
      var data = {
        labels: ["Alumni yang mengisi", "Alumni yang belum mengisi"],
        datasets: [{
          label: "# of Votes",
          data: ["1", "2"],
          backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(54, 162, 235, 0.2)"],
          borderColor: ["rgba(75, 192, 192, 1)", "rgba(54, 162, 235, 1)"],
          borderWidth: 1
        }]
      };
      return data;
    },
    optionAlumnis: function optionAlumnis() {
      var options = {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      };
      return options;
    },
    filterResponden: function filterResponden(id) {
      var data = this.dataResponden.filter(function (e) {
        return e.pertanyaan_id === id;
      });
      console.log(data);
      return data;
    },
    dataLikert: function dataLikert(id) {
      var chartData = [["Nama Opsi", "Jumlah"]];
      var datas = this.dataResponden.filter(function (e) {
        return e.detail_id === id;
      });
      chartData.push(["Sangat Setuju", Number(datas[0].SS)]);
      chartData.push(["Setuju", Number(datas[0].S)]);
      chartData.push(["Tidak Setuju", Number(datas[0].TS)]);
      chartData.push(["Sangat Tidak Setuju", Number(datas[0].STS)]);
      console.log(chartData);
      return chartData;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Data-responden.vue?vue&type=template&id=5c016438&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Data-responden.vue?vue&type=template&id=5c016438& ***!
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
    _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "card container border-0" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "card-body" },
          _vm._l(_vm.idPertanyaan, function(id, index) {
            return _c("div", { key: index, staticClass: "row" }, [
              id.tipe === "Multi Choice"
                ? _c(
                    "div",
                    { staticClass: "col-12" },
                    [
                      _c("hr"),
                      _vm._v(" "),
                      _c("h3", [_vm._v(_vm._s(id.nama))]),
                      _vm._v(" "),
                      _c("GChart", {
                        staticStyle: { height: "25rem", width: "40rem" },
                        attrs: {
                          type: "ColumnChart",
                          data: _vm.chartData(id.id)
                        }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              id.tipe === "Single Choice"
                ? _c(
                    "div",
                    { staticClass: "col-12" },
                    [
                      _c("hr"),
                      _vm._v(" "),
                      _c("h3", [_vm._v(_vm._s(id.nama))]),
                      _vm._v(" "),
                      _c("GChart", {
                        staticStyle: { height: "25rem", width: "40rem" },
                        attrs: { type: "PieChart", data: _vm.chartData(id.id) }
                      })
                    ],
                    1
                  )
                : id.tipe === "Skala Likert"
                ? _c("div", { staticClass: "col-12" }, [
                    _c("hr"),
                    _vm._v(" "),
                    _c("h3", [_vm._v(_vm._s(id.nama))]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "row" },
                      _vm._l(_vm.filterResponden(id.id), function(data, index) {
                        return _c(
                          "div",
                          { key: index, staticClass: "col-12 pl-5" },
                          [
                            _c("h4", [_vm._v(_vm._s(data.nama_opsi))]),
                            _vm._v(" "),
                            _c("GChart", {
                              staticStyle: { height: "25rem", width: "40rem" },
                              attrs: {
                                type: "PieChart",
                                data: _vm.dataLikert(data.detail_id)
                              }
                            })
                          ],
                          1
                        )
                      }),
                      0
                    )
                  ])
                : _vm._e()
            ])
          }),
          0
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
    return _c(
      "div",
      { staticClass: "card-header bg-white row border-bottom-0" },
      [
        _c("div", { staticClass: "col" }, [
          _c("span", { staticClass: "h1" }, [_vm._v("Data Responden")])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Data-responden.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/Data-responden.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Data_responden_vue_vue_type_template_id_5c016438___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Data-responden.vue?vue&type=template&id=5c016438& */ "./resources/js/pages/Data-responden.vue?vue&type=template&id=5c016438&");
/* harmony import */ var _Data_responden_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Data-responden.vue?vue&type=script&lang=js& */ "./resources/js/pages/Data-responden.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Data_responden_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Data_responden_vue_vue_type_template_id_5c016438___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Data_responden_vue_vue_type_template_id_5c016438___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Data-responden.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Data-responden.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/Data-responden.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Data_responden_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Data-responden.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Data-responden.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Data_responden_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Data-responden.vue?vue&type=template&id=5c016438&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/Data-responden.vue?vue&type=template&id=5c016438& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Data_responden_vue_vue_type_template_id_5c016438___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Data-responden.vue?vue&type=template&id=5c016438& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Data-responden.vue?vue&type=template&id=5c016438&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Data_responden_vue_vue_type_template_id_5c016438___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Data_responden_vue_vue_type_template_id_5c016438___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);