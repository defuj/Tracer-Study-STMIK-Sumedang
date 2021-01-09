(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/alumni/Template.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/alumni/Template.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Template",
  data: function data() {
    return {
      navCollapse: false
    };
  },
  mounted: function mounted() {},
  methods: {
    navCollapseHandler: function navCollapseHandler() {
      if (this.navCollapse) {
        this.navCollapse = false;
        $("#navCollapse").hide();
      } else {
        this.navCollapse = true;
        $("#navCollapse").show();
      }
    },
    logoutHandler: function logoutHandler() {
      Swal.fire({
        title: "Are you sure?",
        text: "apakah kamu ayakin akan keluar??",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, Keluar!",
        cancelButtonText: "Batal"
      }).then(function (result) {
        if (result.isConfirmed) {
          window.location.href = "/log-out";
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/alumni/Template.vue?vue&type=template&id=cec94e06&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/alumni/Template.vue?vue&type=template&id=cec94e06& ***!
  \*******************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c(
        "nav",
        {
          staticClass:
            "navbar shadow navbar-expand-lg fixed-top navbar-light bg-light"
        },
        [
          _c("div", { staticClass: "container" }, [
            _c(
              "button",
              {
                staticClass: "navbar-toggler",
                attrs: {
                  type: "button",
                  "data-toggle": "collapse",
                  "data-target": "#navCollapse",
                  "aria-controls": "navCollapse",
                  "aria-expanded": "false",
                  "aria-label": "Toggle navigation"
                },
                on: { click: _vm.navCollapseHandler }
              },
              [_c("span", { staticClass: "navbar-toggler-icon" })]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "collapse navbar-collapse",
                attrs: { id: "navCollapse" }
              },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "navbar-brand mr-auto",
                    attrs: { to: "/Dashboard" }
                  },
                  [
                    _c("img", {
                      staticStyle: { visibility: "visible" },
                      attrs: {
                        src:
                          "https://lh3.googleusercontent.com/-tkeArbkXtw4/AAAAAAAAAAI/AAAAAAAAAAA/SxD1W8p4878/s44-p-k-no-ns-nd/photo.jpg"
                      }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "ml-2" }, [
                      _vm._v("Tracer Study")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("form", { staticClass: "form-inline my-2 my-lg-0" }, [
                  _c(
                    "div",
                    [
                      _c("span", { staticClass: "h6" }, [_vm._v("Hi,")]),
                      _vm._v(" "),
                      _c(
                        "b-dropdown",
                        {
                          staticClass: "m-2",
                          attrs: {
                            id: "dropdown-right",
                            right: "",
                            text: "Moh",
                            variant: "primary"
                          }
                        },
                        [
                          _c("b-dropdown-item", { attrs: { to: "/Setting" } }, [
                            _vm._v("Setting\n                            ")
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.logoutHandler()
                                }
                              }
                            },
                            [_vm._v("Logout")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ])
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("router-view")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/alumni/Template.vue":
/*!******************************************!*\
  !*** ./resources/js/alumni/Template.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Template_vue_vue_type_template_id_cec94e06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Template.vue?vue&type=template&id=cec94e06& */ "./resources/js/alumni/Template.vue?vue&type=template&id=cec94e06&");
/* harmony import */ var _Template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Template.vue?vue&type=script&lang=js& */ "./resources/js/alumni/Template.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Template_vue_vue_type_template_id_cec94e06___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Template_vue_vue_type_template_id_cec94e06___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/alumni/Template.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/alumni/Template.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/alumni/Template.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Template.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/alumni/Template.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/alumni/Template.vue?vue&type=template&id=cec94e06&":
/*!*************************************************************************!*\
  !*** ./resources/js/alumni/Template.vue?vue&type=template&id=cec94e06& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Template_vue_vue_type_template_id_cec94e06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Template.vue?vue&type=template&id=cec94e06& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/alumni/Template.vue?vue&type=template&id=cec94e06&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Template_vue_vue_type_template_id_cec94e06___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Template_vue_vue_type_template_id_cec94e06___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);