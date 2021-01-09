(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layout.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Layout.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout_HeaderMobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout/HeaderMobile */ "./resources/js/components/Layout/HeaderMobile.vue");
/* harmony import */ var _Layout_Aside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout/Aside */ "./resources/js/components/Layout/Aside.vue");
/* harmony import */ var _Layout_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout/Header */ "./resources/js/components/Layout/Header.vue");
/* harmony import */ var _Layout_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layout/Footer */ "./resources/js/components/Layout/Footer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      nama_admin: "",
      BaseURL: "http://localhost:8000/",
      dataToggleAside: 0
    };
  },
  name: "Layout",
  components: {
    HeaderMobile: _Layout_HeaderMobile__WEBPACK_IMPORTED_MODULE_0__["default"],
    Aside: _Layout_Aside__WEBPACK_IMPORTED_MODULE_1__["default"],
    Header: _Layout_Header__WEBPACK_IMPORTED_MODULE_2__["default"],
    Footer: _Layout_Footer__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  methods: {
    clickToggleAside: function clickToggleAside(data) {
      this.dataToggleAside = data;
    },
    bodyToggleAside: function bodyToggleAside() {
      this.dataToggleAside = 0;
    }
  },
  mounted: function mounted() {
    var _this = this;

    axios.get(this.BaseURL + "dataAdmin").then(function (response) {
      _this.nama_admin = response.data.data;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layout/Aside.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Layout/Aside.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["dataToggleAside"],
  data: function data() {
    return {
      img: __webpack_require__(/*! ../../../../public/media/logos/logo-light.png */ "./public/media/logos/logo-light.png"),
      menuOpen: ""
    };
  },
  name: "Aside",
  methods: {
    menuHandler: function menuHandler(menuOpenText) {
      this.menuOpen == menuOpenText ? this.menuOpen = "" : this.menuOpen = menuOpenText;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layout/Footer.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Layout/Footer.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Footer"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layout/Header.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Layout/Header.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header/User */ "./resources/js/components/Layout/Header/User.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["namaAdmin"],
  data: function data() {
    return {};
  },
  name: "Header",
  components: {
    User: _Header_User__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layout/Header/User.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Layout/Header/User.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["namaAdmin"],
  data: function data() {
    return {
      img: __webpack_require__(/*! ../../../../../public/media/misc/bg-1.jpg */ "./public/media/misc/bg-1.jpg")
    };
  },
  name: "User",
  methods: {
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
          window.location.href = "/logout";
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layout/HeaderMobile.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Layout/HeaderMobile.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header/User */ "./resources/js/components/Layout/Header/User.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["namaAdmin", "dataToggle"],
  data: function data() {
    return {
      dataToggleAside: this.dataToggle
    };
  },
  name: "HeaderMobile",
  components: {
    User: _Header_User__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  watch: {
    dataToggle: function dataToggle(a) {
      this.dataToggleAside = a;
    }
  },
  methods: {
    asideToggle: function asideToggle() {
      this.dataToggleAside == 0 ? this.dataToggleAside = 1 : this.dataToggleAside = 0; // console.log(this.dataToggleAside);

      this.$emit("clicked", this.dataToggleAside);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PageLoader.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PageLoader.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PageLoader"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuickUser.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/QuickUser.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "QuickUser"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Scrolltop.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Scrolltop.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Scrolltop"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Templates.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Templates.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Layout */ "./resources/js/components/Layout.vue");
/* harmony import */ var _components_PageLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PageLoader */ "./resources/js/components/PageLoader.vue");
/* harmony import */ var _components_QuickUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/QuickUser */ "./resources/js/components/QuickUser.vue");
/* harmony import */ var _components_Scrolltop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Scrolltop */ "./resources/js/components/Scrolltop.vue");
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Templates",
  components: {
    Layout: _components_Layout__WEBPACK_IMPORTED_MODULE_0__["default"],
    PageLoader: _components_PageLoader__WEBPACK_IMPORTED_MODULE_1__["default"],
    QuickUser: _components_QuickUser__WEBPACK_IMPORTED_MODULE_2__["default"],
    Scrolltop: _components_Scrolltop__WEBPACK_IMPORTED_MODULE_3__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layout.vue?vue&type=template&id=e245f756&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Layout.vue?vue&type=template&id=e245f756& ***!
  \*********************************************************************************************************************************************************************************************************/
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
      _c("HeaderMobile", {
        attrs: { namaAdmin: _vm.nama_admin, dataToggle: _vm.dataToggleAside },
        on: { clicked: _vm.clickToggleAside }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "d-flex flex-column flex-root" }, [
        _c(
          "div",
          { staticClass: "d-flex flex-row flex-column-fluid page" },
          [
            _c("Aside", { attrs: { dataToggleAside: _vm.dataToggleAside } }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "d-flex flex-column flex-row-fluid wrapper",
                attrs: { id: "kt_wrapper" },
                on: {
                  click: function($event) {
                    return _vm.bodyToggleAside()
                  }
                }
              },
              [
                _c("Header", { attrs: { namaAdmin: _vm.nama_admin } }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "content d-flex flex-column flex-column-fluid",
                    attrs: { id: "kt_content" }
                  },
                  [_c("router-view")],
                  1
                ),
                _vm._v(" "),
                _c("Footer")
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layout/Aside.vue?vue&type=template&id=54bb505e&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Layout/Aside.vue?vue&type=template&id=54bb505e& ***!
  \***************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      {
        staticClass:
          "aside aside-left aside-fixed d-flex flex-column flex-row-auto",
        class: { "aside-on": _vm.dataToggleAside },
        attrs: { id: "kt_aside" }
      },
      [
        _c(
          "div",
          { staticClass: "brand flex-column-auto", attrs: { id: "kt_brand" } },
          [
            _c(
              "router-link",
              { staticClass: "brand-logo", attrs: { to: "/" } },
              [
                _c(
                  "span",
                  {
                    staticClass: "h2 font-weight-bold text-white",
                    staticStyle: { "font-family": "Quicksand" }
                  },
                  [_vm._v("Admin Page\n                ")]
                )
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "aside-menu-wrapper flex-column-fluid",
            attrs: { id: "kt_aside_menu_wrapper" }
          },
          [
            _c(
              "div",
              {
                staticClass: "aside-menu my-4",
                attrs: {
                  id: "kt_aside_menu",
                  "data-menu-vertical": "1",
                  "data-menu-scroll": "1",
                  "data-menu-dropdown-timeout": "500"
                }
              },
              [
                _c("ul", { staticClass: "menu-nav" }, [
                  _c(
                    "li",
                    {
                      class: [
                        {
                          "menu-item-active": this.$route.name == "dashboard"
                        },
                        "menu-item"
                      ],
                      attrs: { "aria-haspopup": "true" }
                    },
                    [
                      _c(
                        "router-link",
                        { staticClass: "menu-link", attrs: { to: "/" } },
                        [
                          _c("span", { staticClass: "svg-icon menu-icon" }, [
                            _c(
                              "svg",
                              {
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                  width: "24px",
                                  height: "24px",
                                  viewBox: "0 0 24 24",
                                  version: "1.1"
                                }
                              },
                              [
                                _c(
                                  "g",
                                  {
                                    attrs: {
                                      stroke: "none",
                                      "stroke-width": "1",
                                      fill: "none",
                                      "fill-rule": "evenodd"
                                    }
                                  },
                                  [
                                    _c("polygon", {
                                      attrs: { points: "0 0 24 0 24 24 0 24" }
                                    }),
                                    _vm._v(" "),
                                    _c("path", {
                                      attrs: {
                                        d:
                                          "M12.9336061,16.072447 L19.36,10.9564761 L19.5181585,10.8312381 C20.1676248,10.3169571 20.2772143,9.3735535 19.7629333,8.72408713 C19.6917232,8.63415859 19.6104327,8.55269514 19.5206557,8.48129411 L12.9336854,3.24257445 C12.3871201,2.80788259 11.6128799,2.80788259 11.0663146,3.24257445 L4.47482784,8.48488609 C3.82645598,9.00054628 3.71887192,9.94418071 4.23453211,10.5925526 C4.30500305,10.6811601 4.38527899,10.7615046 4.47382636,10.8320511 L4.63,10.9564761 L11.0659024,16.0730648 C11.6126744,16.5077525 12.3871218,16.5074963 12.9336061,16.072447 Z",
                                        fill: "#000000",
                                        "fill-rule": "nonzero"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("path", {
                                      attrs: {
                                        d:
                                          "M11.0563554,18.6706981 L5.33593024,14.122919 C4.94553994,13.8125559 4.37746707,13.8774308 4.06710397,14.2678211 C4.06471678,14.2708238 4.06234874,14.2738418 4.06,14.2768747 L4.06,14.2768747 C3.75257288,14.6738539 3.82516916,15.244888 4.22214834,15.5523151 C4.22358765,15.5534297 4.2250303,15.55454 4.22647627,15.555646 L11.0872776,20.8031356 C11.6250734,21.2144692 12.371757,21.2145375 12.909628,20.8033023 L19.7677785,15.559828 C20.1693192,15.2528257 20.2459576,14.6784381 19.9389553,14.2768974 C19.9376429,14.2751809 19.9363245,14.2734691 19.935,14.2717619 L19.935,14.2717619 C19.6266937,13.8743807 19.0546209,13.8021712 18.6572397,14.1104775 C18.654352,14.112718 18.6514778,14.1149757 18.6486172,14.1172508 L12.9235044,18.6705218 C12.377022,19.1051477 11.6029199,19.1052208 11.0563554,18.6706981 Z",
                                        fill: "#000000",
                                        opacity: "0.3"
                                      }
                                    })
                                  ]
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "menu-text" }, [
                            _vm._v("Dashboard")
                          ])
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      class: [
                        {
                          "menu-item-active":
                            this.$route.name == "datapertanyaan"
                        },
                        "menu-item"
                      ],
                      attrs: { "aria-haspopup": "true" }
                    },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "menu-link",
                          attrs: { to: "/data-pertanyaan" }
                        },
                        [
                          _c("span", { staticClass: "svg-icon menu-icon" }, [
                            _c(
                              "svg",
                              {
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                  width: "24px",
                                  height: "24px",
                                  viewBox: "0 0 24 24",
                                  version: "1.1"
                                }
                              },
                              [
                                _c(
                                  "g",
                                  {
                                    attrs: {
                                      stroke: "none",
                                      "stroke-width": "1",
                                      fill: "none",
                                      "fill-rule": "evenodd"
                                    }
                                  },
                                  [
                                    _c("polygon", {
                                      attrs: { points: "0 0 24 0 24 24 0 24" }
                                    }),
                                    _vm._v(" "),
                                    _c("path", {
                                      attrs: {
                                        d:
                                          "M12.9336061,16.072447 L19.36,10.9564761 L19.5181585,10.8312381 C20.1676248,10.3169571 20.2772143,9.3735535 19.7629333,8.72408713 C19.6917232,8.63415859 19.6104327,8.55269514 19.5206557,8.48129411 L12.9336854,3.24257445 C12.3871201,2.80788259 11.6128799,2.80788259 11.0663146,3.24257445 L4.47482784,8.48488609 C3.82645598,9.00054628 3.71887192,9.94418071 4.23453211,10.5925526 C4.30500305,10.6811601 4.38527899,10.7615046 4.47382636,10.8320511 L4.63,10.9564761 L11.0659024,16.0730648 C11.6126744,16.5077525 12.3871218,16.5074963 12.9336061,16.072447 Z",
                                        fill: "#000000",
                                        "fill-rule": "nonzero"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("path", {
                                      attrs: {
                                        d:
                                          "M11.0563554,18.6706981 L5.33593024,14.122919 C4.94553994,13.8125559 4.37746707,13.8774308 4.06710397,14.2678211 C4.06471678,14.2708238 4.06234874,14.2738418 4.06,14.2768747 L4.06,14.2768747 C3.75257288,14.6738539 3.82516916,15.244888 4.22214834,15.5523151 C4.22358765,15.5534297 4.2250303,15.55454 4.22647627,15.555646 L11.0872776,20.8031356 C11.6250734,21.2144692 12.371757,21.2145375 12.909628,20.8033023 L19.7677785,15.559828 C20.1693192,15.2528257 20.2459576,14.6784381 19.9389553,14.2768974 C19.9376429,14.2751809 19.9363245,14.2734691 19.935,14.2717619 L19.935,14.2717619 C19.6266937,13.8743807 19.0546209,13.8021712 18.6572397,14.1104775 C18.654352,14.112718 18.6514778,14.1149757 18.6486172,14.1172508 L12.9235044,18.6705218 C12.377022,19.1051477 11.6029199,19.1052208 11.0563554,18.6706981 Z",
                                        fill: "#000000",
                                        opacity: "0.3"
                                      }
                                    })
                                  ]
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "menu-text" }, [
                            _vm._v("Data Pertanyaan")
                          ])
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      class: [
                        {
                          "menu-item-active":
                            this.$route.name == "dataresponden"
                        },
                        "menu-item"
                      ],
                      attrs: { "aria-haspopup": "true" }
                    },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "menu-link",
                          attrs: { to: "/data-responden" }
                        },
                        [
                          _c("span", { staticClass: "svg-icon menu-icon" }, [
                            _c(
                              "svg",
                              {
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                  width: "24px",
                                  height: "24px",
                                  viewBox: "0 0 24 24",
                                  version: "1.1"
                                }
                              },
                              [
                                _c(
                                  "g",
                                  {
                                    attrs: {
                                      stroke: "none",
                                      "stroke-width": "1",
                                      fill: "none",
                                      "fill-rule": "evenodd"
                                    }
                                  },
                                  [
                                    _c("polygon", {
                                      attrs: { points: "0 0 24 0 24 24 0 24" }
                                    }),
                                    _vm._v(" "),
                                    _c("path", {
                                      attrs: {
                                        d:
                                          "M12.9336061,16.072447 L19.36,10.9564761 L19.5181585,10.8312381 C20.1676248,10.3169571 20.2772143,9.3735535 19.7629333,8.72408713 C19.6917232,8.63415859 19.6104327,8.55269514 19.5206557,8.48129411 L12.9336854,3.24257445 C12.3871201,2.80788259 11.6128799,2.80788259 11.0663146,3.24257445 L4.47482784,8.48488609 C3.82645598,9.00054628 3.71887192,9.94418071 4.23453211,10.5925526 C4.30500305,10.6811601 4.38527899,10.7615046 4.47382636,10.8320511 L4.63,10.9564761 L11.0659024,16.0730648 C11.6126744,16.5077525 12.3871218,16.5074963 12.9336061,16.072447 Z",
                                        fill: "#000000",
                                        "fill-rule": "nonzero"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("path", {
                                      attrs: {
                                        d:
                                          "M11.0563554,18.6706981 L5.33593024,14.122919 C4.94553994,13.8125559 4.37746707,13.8774308 4.06710397,14.2678211 C4.06471678,14.2708238 4.06234874,14.2738418 4.06,14.2768747 L4.06,14.2768747 C3.75257288,14.6738539 3.82516916,15.244888 4.22214834,15.5523151 C4.22358765,15.5534297 4.2250303,15.55454 4.22647627,15.555646 L11.0872776,20.8031356 C11.6250734,21.2144692 12.371757,21.2145375 12.909628,20.8033023 L19.7677785,15.559828 C20.1693192,15.2528257 20.2459576,14.6784381 19.9389553,14.2768974 C19.9376429,14.2751809 19.9363245,14.2734691 19.935,14.2717619 L19.935,14.2717619 C19.6266937,13.8743807 19.0546209,13.8021712 18.6572397,14.1104775 C18.654352,14.112718 18.6514778,14.1149757 18.6486172,14.1172508 L12.9235044,18.6705218 C12.377022,19.1051477 11.6029199,19.1052208 11.0563554,18.6706981 Z",
                                        fill: "#000000",
                                        opacity: "0.3"
                                      }
                                    })
                                  ]
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "menu-text" }, [
                            _vm._v("Data Responden")
                          ])
                        ]
                      )
                    ],
                    1
                  )
                ])
              ]
            )
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "menu-section" }, [
      _c("h4", { staticClass: "menu-text" }, [_vm._v("Data Kuesioner")]),
      _vm._v(" "),
      _c("i", { staticClass: "menu-icon ki ki-bold-more-hor icon-md" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layout/Footer.vue?vue&type=template&id=78547fe5&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Layout/Footer.vue?vue&type=template&id=78547fe5& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "div",
        {
          staticClass: "footer bg-white py-4 d-flex flex-lg-column",
          attrs: { id: "kt_footer" }
        },
        [
          _c(
            "div",
            {
              staticClass:
                "container-fluid d-flex flex-column flex-md-row align-items-center justify-content-between"
            },
            [
              _c("div", { staticClass: "text-dark order-2 order-md-1" }, [
                _c(
                  "span",
                  { staticClass: "text-muted font-weight-bold mr-2" },
                  [_vm._v("2020©")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "text-dark-75 text-hover-primary",
                    attrs: {
                      href: "http://keenthemes.com/metronic",
                      target: "_blank"
                    }
                  },
                  [_vm._v("Keenthemes")]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "nav nav-dark" }, [
                _c(
                  "a",
                  {
                    staticClass: "nav-link pl-0 pr-5",
                    attrs: {
                      href: "http://keenthemes.com/metronic",
                      target: "_blank"
                    }
                  },
                  [_vm._v("About")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "nav-link pl-0 pr-5",
                    attrs: {
                      href: "http://keenthemes.com/metronic",
                      target: "_blank"
                    }
                  },
                  [_vm._v("Team")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "nav-link pl-0 pr-0",
                    attrs: {
                      href: "http://keenthemes.com/metronic",
                      target: "_blank"
                    }
                  },
                  [_vm._v("Contact")]
                )
              ])
            ]
          )
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layout/Header.vue?vue&type=template&id=ccf23852&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Layout/Header.vue?vue&type=template&id=ccf23852& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      { staticClass: "header header-fixed", attrs: { id: "kt_header" } },
      [
        _c(
          "div",
          {
            staticClass:
              "container-fluid d-flex align-items-stretch justify-content-between"
          },
          [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "topbar" }, [
              _c("div", { staticClass: "dropdown" }, [
                _c(
                  "div",
                  {
                    staticClass: "topbar-item",
                    attrs: {
                      "data-toggle": "dropdown",
                      "data-offset": "0px,0px"
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2"
                      },
                      [
                        _c(
                          "span",
                          {
                            staticClass:
                              "text-muted font-weight-bold font-size-base d-none d-md-inline mr-1"
                          },
                          [_vm._v("Hi,")]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass:
                              "text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3"
                          },
                          [
                            _vm._v(
                              _vm._s(
                                _vm.namaAdmin
                                  .split(" ")
                                  .slice(0, 1)
                                  .join(" ")
                              )
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "symbol symbol-35 symbol-light-success"
                          },
                          [
                            _c(
                              "span",
                              {
                                staticClass:
                                  "symbol-label font-size-h5 font-weight-bold"
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.namaAdmin.substring(0, 1).toUpperCase()
                                  )
                                )
                              ]
                            )
                          ]
                        )
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-anim-up dropdown-menu-lg p-0"
                  },
                  [_c("User", { attrs: { namaAdmin: _vm.namaAdmin } })],
                  1
                )
              ])
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "header-menu-wrapper header-menu-wrapper-left",
        attrs: { id: "kt_header_menu_wrapper" }
      },
      [
        _c("div", {
          staticClass:
            "header-menu header-menu-mobile header-menu-layout-default",
          attrs: { id: "kt_header_menu" }
        })
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layout/Header/User.vue?vue&type=template&id=01ff4453&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Layout/Header/User.vue?vue&type=template&id=01ff4453& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      {
        staticClass:
          "d-flex align-items-center justify-content-between flex-wrap p-8 bgi-size-cover bgi-no-repeat rounded-top",
        style: { "background-image": "url(" + _vm.img + ")" }
      },
      [
        _c("div", { staticClass: "d-flex align-items-center mr-2" }, [
          _c("div", { staticClass: "symbol bg-white-o-15 mr-3" }, [
            _c(
              "span",
              {
                staticClass:
                  "symbol-label text-success font-weight-bold font-size-h4"
              },
              [_vm._v(_vm._s(_vm.namaAdmin.substring(0, 1).toUpperCase()))]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "text-white m-0 flex-grow-1 mr-3 font-size-h5" },
            [
              _vm._v(
                "\n                " + _vm._s(_vm.namaAdmin) + "\n            "
              )
            ]
          )
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "navi navi-spacer-x-0 pt-5" }, [
      _c("div", { staticClass: "navi-footer px-8 py-5" }, [
        _c(
          "a",
          {
            staticClass: "btn btn-light-primary font-weight-bold",
            on: {
              click: function($event) {
                return _vm.logoutHandler()
              }
            }
          },
          [_vm._v("Sign Out")]
        ),
        _vm._v(" "),
        _c("a", { staticClass: "btn btn-secondary font-weight-bold" }, [
          _vm._v("Close")
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layout/HeaderMobile.vue?vue&type=template&id=5873f74e&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Layout/HeaderMobile.vue?vue&type=template&id=5873f74e& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      {
        staticClass: "header-mobile align-items-center header-mobile-fixed",
        attrs: { id: "kt_header_mobile" }
      },
      [
        _c("a", { attrs: { href: "index.html" } }, [
          _c("img", {
            attrs: {
              alt: "Logo",
              src: __webpack_require__(/*! ../../../../public/media/logos/logo-light.png */ "./public/media/logos/logo-light.png")
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "d-flex align-items-center" }, [
          _c(
            "button",
            {
              staticClass: "btn p-0 burger-icon burger-icon-left",
              attrs: { id: "kt_aside_mobile_toggle" },
              on: { click: _vm.asideToggle }
            },
            [_c("span")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "dropdown" }, [
            _c(
              "div",
              {
                staticClass: "topbar-item",
                attrs: { "data-toggle": "dropdown", "data-offset": "0px,0px" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2"
                  },
                  [
                    _c(
                      "span",
                      {
                        staticClass:
                          "text-muted font-weight-bold font-size-base d-none d-md-inline mr-1"
                      },
                      [_vm._v("Hi,")]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass:
                          "text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3"
                      },
                      [
                        _vm._v(
                          _vm._s(
                            _vm.namaAdmin
                              .split(" ")
                              .slice(0, 1)
                              .join(" ")
                          )
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      { staticClass: "symbol symbol-35 symbol-light-success" },
                      [
                        _c(
                          "span",
                          {
                            staticClass:
                              "symbol-label font-size-h5 font-weight-bold"
                          },
                          [
                            _vm._v(
                              _vm._s(
                                _vm.namaAdmin.substring(0, 1).toUpperCase()
                              )
                            )
                          ]
                        )
                      ]
                    )
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-anim-up dropdown-menu-lg p-0"
              },
              [_c("User", { attrs: { namaAdmin: _vm.namaAdmin } })],
              1
            )
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PageLoader.vue?vue&type=template&id=1b86332d&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PageLoader.vue?vue&type=template&id=1b86332d& ***!
  \*************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "page-loader" }, [
        _c("div", { staticClass: "spinner spinner-primary" })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuickUser.vue?vue&type=template&id=7088057d&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/QuickUser.vue?vue&type=template&id=7088057d& ***!
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
    _c(
      "div",
      {
        staticClass: "offcanvas offcanvas-right p-10",
        attrs: { id: "kt_quick_user" }
      },
      [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "offcanvas-content pr-5 mr-n5" }, [
          _c("div", { staticClass: "d-flex align-items-center mt-5" }, [
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "d-flex flex-column" }, [
              _c(
                "a",
                {
                  staticClass:
                    "font-weight-bold font-size-h5 text-dark-75 text-hover-primary",
                  attrs: { href: "#" }
                },
                [_vm._v("James Jones")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "text-muted mt-1" }, [
                _vm._v("Application Developer")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "navi mt-2" }, [
                _c("a", { staticClass: "navi-item", attrs: { href: "#" } }, [
                  _c("span", { staticClass: "navi-link p-0 pb-2" }, [
                    _c("span", { staticClass: "navi-icon mr-1" }, [
                      _c(
                        "span",
                        {
                          staticClass: "svg-icon svg-icon-lg svg-icon-primary"
                        },
                        [
                          _c(
                            "svg",
                            {
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                width: "24px",
                                height: "24px",
                                viewBox: "0 0 24 24",
                                version: "1.1"
                              }
                            },
                            [
                              _c(
                                "g",
                                {
                                  attrs: {
                                    stroke: "none",
                                    "stroke-width": "1",
                                    fill: "none",
                                    "fill-rule": "evenodd"
                                  }
                                },
                                [
                                  _c("rect", {
                                    attrs: {
                                      x: "0",
                                      y: "0",
                                      width: "24",
                                      height: "24"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("path", {
                                    attrs: {
                                      d:
                                        "M21,12.0829584 C20.6747915,12.0283988 20.3407122,12 20,12 C16.6862915,12 14,14.6862915 14,18 C14,18.3407122 14.0283988,18.6747915 14.0829584,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,8 C3,6.8954305 3.8954305,6 5,6 L19,6 C20.1045695,6 21,6.8954305 21,8 L21,12.0829584 Z M18.1444251,7.83964668 L12,11.1481833 L5.85557487,7.83964668 C5.4908718,7.6432681 5.03602525,7.77972206 4.83964668,8.14442513 C4.6432681,8.5091282 4.77972206,8.96397475 5.14442513,9.16035332 L11.6444251,12.6603533 C11.8664074,12.7798822 12.1335926,12.7798822 12.3555749,12.6603533 L18.8555749,9.16035332 C19.2202779,8.96397475 19.3567319,8.5091282 19.1603533,8.14442513 C18.9639747,7.77972206 18.5091282,7.6432681 18.1444251,7.83964668 Z",
                                      fill: "#000000"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("circle", {
                                    attrs: {
                                      fill: "#000000",
                                      opacity: "0.3",
                                      cx: "19.5",
                                      cy: "17.5",
                                      r: "2.5"
                                    }
                                  })
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass: "navi-text text-muted text-hover-primary"
                      },
                      [_vm._v("jm@softplus.com")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass:
                      "btn btn-sm btn-light-primary font-weight-bolder py-2 px-5",
                    attrs: { href: "#" }
                  },
                  [_vm._v("Sign Out")]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "separator separator-dashed mt-8 mb-5" }),
          _vm._v(" "),
          _c("div", { staticClass: "navi navi-spacer-x-0 p-0" }, [
            _c(
              "a",
              {
                staticClass: "navi-item",
                attrs: {
                  href: "custom/apps/user/profile-1/personal-information.html"
                }
              },
              [
                _c("div", { staticClass: "navi-link" }, [
                  _c("div", { staticClass: "symbol symbol-40 bg-light mr-3" }, [
                    _c("div", { staticClass: "symbol-label" }, [
                      _c(
                        "span",
                        {
                          staticClass: "svg-icon svg-icon-md svg-icon-success"
                        },
                        [
                          _c(
                            "svg",
                            {
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                width: "24px",
                                height: "24px",
                                viewBox: "0 0 24 24",
                                version: "1.1"
                              }
                            },
                            [
                              _c(
                                "g",
                                {
                                  attrs: {
                                    stroke: "none",
                                    "stroke-width": "1",
                                    fill: "none",
                                    "fill-rule": "evenodd"
                                  }
                                },
                                [
                                  _c("rect", {
                                    attrs: {
                                      x: "0",
                                      y: "0",
                                      width: "24",
                                      height: "24"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("path", {
                                    attrs: {
                                      d:
                                        "M13.2070325,4 C13.0721672,4.47683179 13,4.97998812 13,5.5 C13,8.53756612 15.4624339,11 18.5,11 C19.0200119,11 19.5231682,10.9278328 20,10.7929675 L20,17 C20,18.6568542 18.6568542,20 17,20 L7,20 C5.34314575,20 4,18.6568542 4,17 L4,7 C4,5.34314575 5.34314575,4 7,4 L13.2070325,4 Z",
                                      fill: "#000000"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("circle", {
                                    attrs: {
                                      fill: "#000000",
                                      opacity: "0.3",
                                      cx: "18.5",
                                      cy: "5.5",
                                      r: "2.5"
                                    }
                                  })
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(2)
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "navi-item",
                attrs: { href: "custom/apps/user/profile-3.html" }
              },
              [
                _c("div", { staticClass: "navi-link" }, [
                  _c("div", { staticClass: "symbol symbol-40 bg-light mr-3" }, [
                    _c("div", { staticClass: "symbol-label" }, [
                      _c(
                        "span",
                        {
                          staticClass: "svg-icon svg-icon-md svg-icon-warning"
                        },
                        [
                          _c(
                            "svg",
                            {
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                width: "24px",
                                height: "24px",
                                viewBox: "0 0 24 24",
                                version: "1.1"
                              }
                            },
                            [
                              _c(
                                "g",
                                {
                                  attrs: {
                                    stroke: "none",
                                    "stroke-width": "1",
                                    fill: "none",
                                    "fill-rule": "evenodd"
                                  }
                                },
                                [
                                  _c("rect", {
                                    attrs: {
                                      x: "0",
                                      y: "0",
                                      width: "24",
                                      height: "24"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("rect", {
                                    attrs: {
                                      fill: "#000000",
                                      opacity: "0.3",
                                      x: "12",
                                      y: "4",
                                      width: "3",
                                      height: "13",
                                      rx: "1.5"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("rect", {
                                    attrs: {
                                      fill: "#000000",
                                      opacity: "0.3",
                                      x: "7",
                                      y: "9",
                                      width: "3",
                                      height: "8",
                                      rx: "1.5"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("path", {
                                    attrs: {
                                      d:
                                        "M5,19 L20,19 C20.5522847,19 21,19.4477153 21,20 C21,20.5522847 20.5522847,21 20,21 L4,21 C3.44771525,21 3,20.5522847 3,20 L3,4 C3,3.44771525 3.44771525,3 4,3 C4.55228475,3 5,3.44771525 5,4 L5,19 Z",
                                      fill: "#000000",
                                      "fill-rule": "nonzero"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("rect", {
                                    attrs: {
                                      fill: "#000000",
                                      opacity: "0.3",
                                      x: "17",
                                      y: "11",
                                      width: "3",
                                      height: "6",
                                      rx: "1.5"
                                    }
                                  })
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(3)
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "navi-item",
                attrs: { href: "custom/apps/user/profile-2.html" }
              },
              [
                _c("div", { staticClass: "navi-link" }, [
                  _c("div", { staticClass: "symbol symbol-40 bg-light mr-3" }, [
                    _c("div", { staticClass: "symbol-label" }, [
                      _c(
                        "span",
                        { staticClass: "svg-icon svg-icon-md svg-icon-danger" },
                        [
                          _c(
                            "svg",
                            {
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                width: "24px",
                                height: "24px",
                                viewBox: "0 0 24 24",
                                version: "1.1"
                              }
                            },
                            [
                              _c(
                                "g",
                                {
                                  attrs: {
                                    stroke: "none",
                                    "stroke-width": "1",
                                    fill: "none",
                                    "fill-rule": "evenodd"
                                  }
                                },
                                [
                                  _c("polygon", {
                                    attrs: { points: "0 0 24 0 24 24 0 24" }
                                  }),
                                  _vm._v(" "),
                                  _c("path", {
                                    attrs: {
                                      d:
                                        "M4.85714286,1 L11.7364114,1 C12.0910962,1 12.4343066,1.12568431 12.7051108,1.35473959 L17.4686994,5.3839416 C17.8056532,5.66894833 18,6.08787823 18,6.52920201 L18,19.0833333 C18,20.8738751 17.9795521,21 16.1428571,21 L4.85714286,21 C3.02044787,21 3,20.8738751 3,19.0833333 L3,2.91666667 C3,1.12612489 3.02044787,1 4.85714286,1 Z M8,12 C7.44771525,12 7,12.4477153 7,13 C7,13.5522847 7.44771525,14 8,14 L15,14 C15.5522847,14 16,13.5522847 16,13 C16,12.4477153 15.5522847,12 15,12 L8,12 Z M8,16 C7.44771525,16 7,16.4477153 7,17 C7,17.5522847 7.44771525,18 8,18 L11,18 C11.5522847,18 12,17.5522847 12,17 C12,16.4477153 11.5522847,16 11,16 L8,16 Z",
                                      fill: "#000000",
                                      "fill-rule": "nonzero",
                                      opacity: "0.3"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("path", {
                                    attrs: {
                                      d:
                                        "M6.85714286,3 L14.7364114,3 C15.0910962,3 15.4343066,3.12568431 15.7051108,3.35473959 L20.4686994,7.3839416 C20.8056532,7.66894833 21,8.08787823 21,8.52920201 L21,21.0833333 C21,22.8738751 20.9795521,23 19.1428571,23 L6.85714286,23 C5.02044787,23 5,22.8738751 5,21.0833333 L5,4.91666667 C5,3.12612489 5.02044787,3 6.85714286,3 Z M8,12 C7.44771525,12 7,12.4477153 7,13 C7,13.5522847 7.44771525,14 8,14 L15,14 C15.5522847,14 16,13.5522847 16,13 C16,12.4477153 15.5522847,12 15,12 L8,12 Z M8,16 C7.44771525,16 7,16.4477153 7,17 C7,17.5522847 7.44771525,18 8,18 L11,18 C11.5522847,18 12,17.5522847 12,17 C12,16.4477153 11.5522847,16 11,16 L8,16 Z",
                                      fill: "#000000",
                                      "fill-rule": "nonzero"
                                    }
                                  })
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(4)
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "navi-item",
                attrs: { href: "custom/apps/userprofile-1/overview.html" }
              },
              [
                _c("div", { staticClass: "navi-link" }, [
                  _c("div", { staticClass: "symbol symbol-40 bg-light mr-3" }, [
                    _c("div", { staticClass: "symbol-label" }, [
                      _c(
                        "span",
                        {
                          staticClass: "svg-icon svg-icon-md svg-icon-primary"
                        },
                        [
                          _c(
                            "svg",
                            {
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                width: "24px",
                                height: "24px",
                                viewBox: "0 0 24 24",
                                version: "1.1"
                              }
                            },
                            [
                              _c(
                                "g",
                                {
                                  attrs: {
                                    stroke: "none",
                                    "stroke-width": "1",
                                    fill: "none",
                                    "fill-rule": "evenodd"
                                  }
                                },
                                [
                                  _c("rect", {
                                    attrs: {
                                      x: "0",
                                      y: "0",
                                      width: "24",
                                      height: "24"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("path", {
                                    attrs: {
                                      d:
                                        "M6,2 L18,2 C18.5522847,2 19,2.44771525 19,3 L19,12 C19,12.5522847 18.5522847,13 18,13 L6,13 C5.44771525,13 5,12.5522847 5,12 L5,3 C5,2.44771525 5.44771525,2 6,2 Z M7.5,5 C7.22385763,5 7,5.22385763 7,5.5 C7,5.77614237 7.22385763,6 7.5,6 L13.5,6 C13.7761424,6 14,5.77614237 14,5.5 C14,5.22385763 13.7761424,5 13.5,5 L7.5,5 Z M7.5,7 C7.22385763,7 7,7.22385763 7,7.5 C7,7.77614237 7.22385763,8 7.5,8 L10.5,8 C10.7761424,8 11,7.77614237 11,7.5 C11,7.22385763 10.7761424,7 10.5,7 L7.5,7 Z",
                                      fill: "#000000",
                                      opacity: "0.3"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("path", {
                                    attrs: {
                                      d:
                                        "M3.79274528,6.57253826 L12,12.5 L20.2072547,6.57253826 C20.4311176,6.4108595 20.7436609,6.46126971 20.9053396,6.68513259 C20.9668779,6.77033951 21,6.87277228 21,6.97787787 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,6.97787787 C3,6.70173549 3.22385763,6.47787787 3.5,6.47787787 C3.60510559,6.47787787 3.70753836,6.51099993 3.79274528,6.57253826 Z",
                                      fill: "#000000"
                                    }
                                  })
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(5)
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "separator separator-dashed my-7" }),
          _vm._v(" "),
          _c("div", [
            _c("h5", { staticClass: "mb-5" }, [_vm._v("Recent Notifications")]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "d-flex align-items-center bg-light-warning rounded p-5 gutter-b"
              },
              [
                _c("span", { staticClass: "svg-icon svg-icon-warning mr-5" }, [
                  _c("span", { staticClass: "svg-icon svg-icon-lg" }, [
                    _c(
                      "svg",
                      {
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          "xmlns:xlink": "http://www.w3.org/1999/xlink",
                          width: "24px",
                          height: "24px",
                          viewBox: "0 0 24 24",
                          version: "1.1"
                        }
                      },
                      [
                        _c(
                          "g",
                          {
                            attrs: {
                              stroke: "none",
                              "stroke-width": "1",
                              fill: "none",
                              "fill-rule": "evenodd"
                            }
                          },
                          [
                            _c("rect", {
                              attrs: {
                                x: "0",
                                y: "0",
                                width: "24",
                                height: "24"
                              }
                            }),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                d:
                                  "M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z",
                                fill: "#000000"
                              }
                            }),
                            _vm._v(" "),
                            _c("rect", {
                              attrs: {
                                fill: "#000000",
                                opacity: "0.3",
                                transform:
                                  "translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519)",
                                x: "16.3255682",
                                y: "2.94551858",
                                width: "3",
                                height: "18",
                                rx: "1"
                              }
                            })
                          ]
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _vm._m(6),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticClass:
                      "font-weight-bolder text-warning py-1 font-size-lg"
                  },
                  [_vm._v("+28%")]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "d-flex align-items-center bg-light-success rounded p-5 gutter-b"
              },
              [
                _c("span", { staticClass: "svg-icon svg-icon-success mr-5" }, [
                  _c("span", { staticClass: "svg-icon svg-icon-lg" }, [
                    _c(
                      "svg",
                      {
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          "xmlns:xlink": "http://www.w3.org/1999/xlink",
                          width: "24px",
                          height: "24px",
                          viewBox: "0 0 24 24",
                          version: "1.1"
                        }
                      },
                      [
                        _c(
                          "g",
                          {
                            attrs: {
                              stroke: "none",
                              "stroke-width": "1",
                              fill: "none",
                              "fill-rule": "evenodd"
                            }
                          },
                          [
                            _c("rect", {
                              attrs: {
                                x: "0",
                                y: "0",
                                width: "24",
                                height: "24"
                              }
                            }),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                d:
                                  "M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z",
                                fill: "#000000",
                                "fill-rule": "nonzero",
                                transform:
                                  "translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)"
                              }
                            }),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                d:
                                  "M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z",
                                fill: "#000000",
                                "fill-rule": "nonzero",
                                opacity: "0.3"
                              }
                            })
                          ]
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _vm._m(7),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticClass:
                      "font-weight-bolder text-success py-1 font-size-lg"
                  },
                  [_vm._v("+50%")]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "d-flex align-items-center bg-light-danger rounded p-5 gutter-b"
              },
              [
                _c("span", { staticClass: "svg-icon svg-icon-danger mr-5" }, [
                  _c("span", { staticClass: "svg-icon svg-icon-lg" }, [
                    _c(
                      "svg",
                      {
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          "xmlns:xlink": "http://www.w3.org/1999/xlink",
                          width: "24px",
                          height: "24px",
                          viewBox: "0 0 24 24",
                          version: "1.1"
                        }
                      },
                      [
                        _c(
                          "g",
                          {
                            attrs: {
                              stroke: "none",
                              "stroke-width": "1",
                              fill: "none",
                              "fill-rule": "evenodd"
                            }
                          },
                          [
                            _c("rect", {
                              attrs: {
                                x: "0",
                                y: "0",
                                width: "24",
                                height: "24"
                              }
                            }),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                d:
                                  "M16,15.6315789 L16,12 C16,10.3431458 14.6568542,9 13,9 L6.16183229,9 L6.16183229,5.52631579 C6.16183229,4.13107011 7.29290239,3 8.68814808,3 L20.4776218,3 C21.8728674,3 23.0039375,4.13107011 23.0039375,5.52631579 L23.0039375,13.1052632 L23.0206157,17.786793 C23.0215995,18.0629336 22.7985408,18.2875874 22.5224001,18.2885711 C22.3891754,18.2890457 22.2612702,18.2363324 22.1670655,18.1421277 L19.6565168,15.6315789 L16,15.6315789 Z",
                                fill: "#000000"
                              }
                            }),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                d:
                                  "M1.98505595,18 L1.98505595,13 C1.98505595,11.8954305 2.88048645,11 3.98505595,11 L11.9850559,11 C13.0896254,11 13.9850559,11.8954305 13.9850559,13 L13.9850559,18 C13.9850559,19.1045695 13.0896254,20 11.9850559,20 L4.10078614,20 L2.85693427,21.1905292 C2.65744295,21.3814685 2.34093638,21.3745358 2.14999706,21.1750444 C2.06092565,21.0819836 2.01120804,20.958136 2.01120804,20.8293182 L2.01120804,18.32426 C1.99400175,18.2187196 1.98505595,18.1104045 1.98505595,18 Z M6.5,14 C6.22385763,14 6,14.2238576 6,14.5 C6,14.7761424 6.22385763,15 6.5,15 L11.5,15 C11.7761424,15 12,14.7761424 12,14.5 C12,14.2238576 11.7761424,14 11.5,14 L6.5,14 Z M9.5,16 C9.22385763,16 9,16.2238576 9,16.5 C9,16.7761424 9.22385763,17 9.5,17 L11.5,17 C11.7761424,17 12,16.7761424 12,16.5 C12,16.2238576 11.7761424,16 11.5,16 L9.5,16 Z",
                                fill: "#000000",
                                opacity: "0.3"
                              }
                            })
                          ]
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _vm._m(8),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticClass:
                      "font-weight-bolder text-danger py-1 font-size-lg"
                  },
                  [_vm._v("-27%")]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "d-flex align-items-center bg-light-info rounded p-5"
              },
              [
                _c("span", { staticClass: "svg-icon svg-icon-info mr-5" }, [
                  _c("span", { staticClass: "svg-icon svg-icon-lg" }, [
                    _c(
                      "svg",
                      {
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          "xmlns:xlink": "http://www.w3.org/1999/xlink",
                          width: "24px",
                          height: "24px",
                          viewBox: "0 0 24 24",
                          version: "1.1"
                        }
                      },
                      [
                        _c(
                          "g",
                          {
                            attrs: {
                              stroke: "none",
                              "stroke-width": "1",
                              fill: "none",
                              "fill-rule": "evenodd"
                            }
                          },
                          [
                            _c("rect", {
                              attrs: {
                                x: "0",
                                y: "0",
                                width: "24",
                                height: "24"
                              }
                            }),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                d:
                                  "M11.7573593,15.2426407 L8.75735931,15.2426407 C8.20507456,15.2426407 7.75735931,15.6903559 7.75735931,16.2426407 C7.75735931,16.7949254 8.20507456,17.2426407 8.75735931,17.2426407 L11.7573593,17.2426407 L11.7573593,18.2426407 C11.7573593,19.3472102 10.8619288,20.2426407 9.75735931,20.2426407 L5.75735931,20.2426407 C4.65278981,20.2426407 3.75735931,19.3472102 3.75735931,18.2426407 L3.75735931,14.2426407 C3.75735931,13.1380712 4.65278981,12.2426407 5.75735931,12.2426407 L9.75735931,12.2426407 C10.8619288,12.2426407 11.7573593,13.1380712 11.7573593,14.2426407 L11.7573593,15.2426407 Z",
                                fill: "#000000",
                                opacity: "0.3",
                                transform:
                                  "translate(7.757359, 16.242641) rotate(-45.000000) translate(-7.757359, -16.242641)"
                              }
                            }),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                d:
                                  "M12.2426407,8.75735931 L15.2426407,8.75735931 C15.7949254,8.75735931 16.2426407,8.30964406 16.2426407,7.75735931 C16.2426407,7.20507456 15.7949254,6.75735931 15.2426407,6.75735931 L12.2426407,6.75735931 L12.2426407,5.75735931 C12.2426407,4.65278981 13.1380712,3.75735931 14.2426407,3.75735931 L18.2426407,3.75735931 C19.3472102,3.75735931 20.2426407,4.65278981 20.2426407,5.75735931 L20.2426407,9.75735931 C20.2426407,10.8619288 19.3472102,11.7573593 18.2426407,11.7573593 L14.2426407,11.7573593 C13.1380712,11.7573593 12.2426407,10.8619288 12.2426407,9.75735931 L12.2426407,8.75735931 Z",
                                fill: "#000000",
                                transform:
                                  "translate(16.242641, 7.757359) rotate(-45.000000) translate(-16.242641, -7.757359)"
                              }
                            }),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                d:
                                  "M5.89339828,3.42893219 C6.44568303,3.42893219 6.89339828,3.87664744 6.89339828,4.42893219 L6.89339828,6.42893219 C6.89339828,6.98121694 6.44568303,7.42893219 5.89339828,7.42893219 C5.34111353,7.42893219 4.89339828,6.98121694 4.89339828,6.42893219 L4.89339828,4.42893219 C4.89339828,3.87664744 5.34111353,3.42893219 5.89339828,3.42893219 Z M11.4289322,5.13603897 C11.8194565,5.52656326 11.8194565,6.15972824 11.4289322,6.55025253 L10.0147186,7.96446609 C9.62419433,8.35499039 8.99102936,8.35499039 8.60050506,7.96446609 C8.20998077,7.5739418 8.20998077,6.94077682 8.60050506,6.55025253 L10.0147186,5.13603897 C10.4052429,4.74551468 11.0384079,4.74551468 11.4289322,5.13603897 Z M0.600505063,5.13603897 C0.991029355,4.74551468 1.62419433,4.74551468 2.01471863,5.13603897 L3.42893219,6.55025253 C3.81945648,6.94077682 3.81945648,7.5739418 3.42893219,7.96446609 C3.0384079,8.35499039 2.40524292,8.35499039 2.01471863,7.96446609 L0.600505063,6.55025253 C0.209980772,6.15972824 0.209980772,5.52656326 0.600505063,5.13603897 Z",
                                fill: "#000000",
                                opacity: "0.3",
                                transform:
                                  "translate(6.014719, 5.843146) rotate(-45.000000) translate(-6.014719, -5.843146)"
                              }
                            }),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                d:
                                  "M17.9142136,15.4497475 C18.4664983,15.4497475 18.9142136,15.8974627 18.9142136,16.4497475 L18.9142136,18.4497475 C18.9142136,19.0020322 18.4664983,19.4497475 17.9142136,19.4497475 C17.3619288,19.4497475 16.9142136,19.0020322 16.9142136,18.4497475 L16.9142136,16.4497475 C16.9142136,15.8974627 17.3619288,15.4497475 17.9142136,15.4497475 Z M23.4497475,17.1568542 C23.8402718,17.5473785 23.8402718,18.1805435 23.4497475,18.5710678 L22.0355339,19.9852814 C21.6450096,20.3758057 21.0118446,20.3758057 20.6213203,19.9852814 C20.2307961,19.5947571 20.2307961,18.9615921 20.6213203,18.5710678 L22.0355339,17.1568542 C22.4260582,16.76633 23.0592232,16.76633 23.4497475,17.1568542 Z M12.6213203,17.1568542 C13.0118446,16.76633 13.6450096,16.76633 14.0355339,17.1568542 L15.4497475,18.5710678 C15.8402718,18.9615921 15.8402718,19.5947571 15.4497475,19.9852814 C15.0592232,20.3758057 14.4260582,20.3758057 14.0355339,19.9852814 L12.6213203,18.5710678 C12.2307961,18.1805435 12.2307961,17.5473785 12.6213203,17.1568542 Z",
                                fill: "#000000",
                                opacity: "0.3",
                                transform:
                                  "translate(18.035534, 17.863961) scale(1, -1) rotate(45.000000) translate(-18.035534, -17.863961)"
                              }
                            })
                          ]
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _vm._m(9),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticClass:
                      "font-weight-bolder text-info py-1 font-size-lg"
                  },
                  [_vm._v("+8%")]
                )
              ]
            )
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "offcanvas-header d-flex align-items-center justify-content-between pb-5"
      },
      [
        _c("h3", { staticClass: "font-weight-bold m-0" }, [
          _vm._v("\n                User Profile\n                "),
          _c("small", { staticClass: "text-muted font-size-sm ml-2" }, [
            _vm._v("12 messages")
          ])
        ]),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "btn btn-xs btn-icon btn-light btn-hover-primary",
            attrs: { href: "#", id: "kt_quick_user_close" }
          },
          [_c("i", { staticClass: "ki ki-close icon-xs text-muted" })]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "symbol symbol-100 mr-5" }, [
      _c("div", {
        staticClass: "symbol-label",
        staticStyle: { "background-image": "url('media/users/300_21.jpg')" }
      }),
      _vm._v(" "),
      _c("i", { staticClass: "symbol-badge bg-success" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "navi-text" }, [
      _c("div", { staticClass: "font-weight-bold" }, [_vm._v("My Profile")]),
      _vm._v(" "),
      _c("div", { staticClass: "text-muted" }, [
        _vm._v(
          "\n                                Account settings and more\n                                "
        ),
        _c(
          "span",
          {
            staticClass:
              "label label-light-danger label-inline font-weight-bold"
          },
          [_vm._v("update")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "navi-text" }, [
      _c("div", { staticClass: "font-weight-bold" }, [_vm._v("My Messages")]),
      _vm._v(" "),
      _c("div", { staticClass: "text-muted" }, [_vm._v("Inbox and tasks")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "navi-text" }, [
      _c("div", { staticClass: "font-weight-bold" }, [
        _vm._v(
          "\n                                My Activities\n                            "
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "text-muted" }, [
        _vm._v(
          "\n                                Logs and notifications\n                            "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "navi-text" }, [
      _c("div", { staticClass: "font-weight-bold" }, [_vm._v("My Tasks")]),
      _vm._v(" "),
      _c("div", { staticClass: "text-muted" }, [
        _vm._v(
          "\n                                latest tasks and projects\n                            "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex flex-column flex-grow-1 mr-2" }, [
      _c(
        "a",
        {
          staticClass:
            "font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1",
          attrs: { href: "#" }
        },
        [_vm._v("Another purpose persuade")]
      ),
      _vm._v(" "),
      _c("span", { staticClass: "text-muted font-size-sm" }, [
        _vm._v("Due in 2 Days")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex flex-column flex-grow-1 mr-2" }, [
      _c(
        "a",
        {
          staticClass:
            "font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1",
          attrs: { href: "#" }
        },
        [_vm._v("Would be to people")]
      ),
      _vm._v(" "),
      _c("span", { staticClass: "text-muted font-size-sm" }, [
        _vm._v("Due in 2 Days")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex flex-column flex-grow-1 mr-2" }, [
      _c(
        "a",
        {
          staticClass:
            "font-weight-normel text-dark-75 text-hover-primary font-size-lg mb-1",
          attrs: { href: "#" }
        },
        [_vm._v("Purpose would be to persuade")]
      ),
      _vm._v(" "),
      _c("span", { staticClass: "text-muted font-size-sm" }, [
        _vm._v("Due in 2 Days")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex flex-column flex-grow-1 mr-2" }, [
      _c(
        "a",
        {
          staticClass:
            "font-weight-normel text-dark-75 text-hover-primary font-size-lg mb-1",
          attrs: { href: "#" }
        },
        [_vm._v("The best product")]
      ),
      _vm._v(" "),
      _c("span", { staticClass: "text-muted font-size-sm" }, [
        _vm._v("Due in 2 Days")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Scrolltop.vue?vue&type=template&id=bc33fce6&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Scrolltop.vue?vue&type=template&id=bc33fce6& ***!
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
    _c("div", { staticClass: "scrolltop", attrs: { id: "kt_scrolltop" } }, [
      _c("span", { staticClass: "svg-icon" }, [
        _c(
          "svg",
          {
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              "xmlns:xlink": "http://www.w3.org/1999/xlink",
              width: "24px",
              height: "24px",
              viewBox: "0 0 24 24",
              version: "1.1"
            }
          },
          [
            _c(
              "g",
              {
                attrs: {
                  stroke: "none",
                  "stroke-width": "1",
                  fill: "none",
                  "fill-rule": "evenodd"
                }
              },
              [
                _c("polygon", { attrs: { points: "0 0 24 0 24 24 0 24" } }),
                _vm._v(" "),
                _c("rect", {
                  attrs: {
                    fill: "#000000",
                    opacity: "0.3",
                    x: "11",
                    y: "10",
                    width: "2",
                    height: "10",
                    rx: "1"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    d:
                      "M6.70710678,12.7071068 C6.31658249,13.0976311 5.68341751,13.0976311 5.29289322,12.7071068 C4.90236893,12.3165825 4.90236893,11.6834175 5.29289322,11.2928932 L11.2928932,5.29289322 C11.6714722,4.91431428 12.2810586,4.90106866 12.6757246,5.26284586 L18.6757246,10.7628459 C19.0828436,11.1360383 19.1103465,11.7686056 18.7371541,12.1757246 C18.3639617,12.5828436 17.7313944,12.6103465 17.3242754,12.2371541 L12.0300757,7.38413782 L6.70710678,12.7071068 Z",
                    fill: "#000000",
                    "fill-rule": "nonzero"
                  }
                })
              ]
            )
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Templates.vue?vue&type=template&id=240b28de&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Templates.vue?vue&type=template&id=240b28de& ***!
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
  return _c(
    "div",
    [
      _c("PageLoader"),
      _vm._v(" "),
      _c("Layout"),
      _vm._v(" "),
      _c("QuickUser"),
      _vm._v(" "),
      _c("Scrolltop")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./public/media/logos/logo-light.png":
/*!*******************************************!*\
  !*** ./public/media/logos/logo-light.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/logo-light.png?1a9d17a0eac3fed9f6851ad4383bb5a6";

/***/ }),

/***/ "./public/media/misc/bg-1.jpg":
/*!************************************!*\
  !*** ./public/media/misc/bg-1.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/bg-1.jpg?78ed2040c21a3c1152696fcf378e690d";

/***/ }),

/***/ "./resources/js/components/Layout.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Layout.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout_vue_vue_type_template_id_e245f756___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue?vue&type=template&id=e245f756& */ "./resources/js/components/Layout.vue?vue&type=template&id=e245f756&");
/* harmony import */ var _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.vue?vue&type=script&lang=js& */ "./resources/js/components/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Layout_vue_vue_type_template_id_e245f756___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Layout_vue_vue_type_template_id_e245f756___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Layout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Layout.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Layout.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Layout.vue?vue&type=template&id=e245f756&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Layout.vue?vue&type=template&id=e245f756& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_e245f756___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=template&id=e245f756& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layout.vue?vue&type=template&id=e245f756&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_e245f756___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_e245f756___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Layout/Aside.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/Layout/Aside.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Aside_vue_vue_type_template_id_54bb505e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Aside.vue?vue&type=template&id=54bb505e& */ "./resources/js/components/Layout/Aside.vue?vue&type=template&id=54bb505e&");
/* harmony import */ var _Aside_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Aside.vue?vue&type=script&lang=js& */ "./resources/js/components/Layout/Aside.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Aside_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Aside_vue_vue_type_template_id_54bb505e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Aside_vue_vue_type_template_id_54bb505e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Layout/Aside.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Layout/Aside.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Layout/Aside.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Aside_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Aside.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layout/Aside.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Aside_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Layout/Aside.vue?vue&type=template&id=54bb505e&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Layout/Aside.vue?vue&type=template&id=54bb505e& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Aside_vue_vue_type_template_id_54bb505e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Aside.vue?vue&type=template&id=54bb505e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layout/Aside.vue?vue&type=template&id=54bb505e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Aside_vue_vue_type_template_id_54bb505e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Aside_vue_vue_type_template_id_54bb505e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Layout/Footer.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/Layout/Footer.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footer_vue_vue_type_template_id_78547fe5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=78547fe5& */ "./resources/js/components/Layout/Footer.vue?vue&type=template&id=78547fe5&");
/* harmony import */ var _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&lang=js& */ "./resources/js/components/Layout/Footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Footer_vue_vue_type_template_id_78547fe5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Footer_vue_vue_type_template_id_78547fe5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Layout/Footer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Layout/Footer.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Layout/Footer.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layout/Footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Layout/Footer.vue?vue&type=template&id=78547fe5&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Layout/Footer.vue?vue&type=template&id=78547fe5& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_78547fe5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=template&id=78547fe5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layout/Footer.vue?vue&type=template&id=78547fe5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_78547fe5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_78547fe5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Layout/Header.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/Layout/Header.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header_vue_vue_type_template_id_ccf23852___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=ccf23852& */ "./resources/js/components/Layout/Header.vue?vue&type=template&id=ccf23852&");
/* harmony import */ var _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&lang=js& */ "./resources/js/components/Layout/Header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Header_vue_vue_type_template_id_ccf23852___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Header_vue_vue_type_template_id_ccf23852___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Layout/Header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Layout/Header.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Layout/Header.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layout/Header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Layout/Header.vue?vue&type=template&id=ccf23852&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Layout/Header.vue?vue&type=template&id=ccf23852& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_ccf23852___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=template&id=ccf23852& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layout/Header.vue?vue&type=template&id=ccf23852&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_ccf23852___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_ccf23852___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Layout/Header/User.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/Layout/Header/User.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User_vue_vue_type_template_id_01ff4453___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User.vue?vue&type=template&id=01ff4453& */ "./resources/js/components/Layout/Header/User.vue?vue&type=template&id=01ff4453&");
/* harmony import */ var _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User.vue?vue&type=script&lang=js& */ "./resources/js/components/Layout/Header/User.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _User_vue_vue_type_template_id_01ff4453___WEBPACK_IMPORTED_MODULE_0__["render"],
  _User_vue_vue_type_template_id_01ff4453___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Layout/Header/User.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Layout/Header/User.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Layout/Header/User.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./User.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layout/Header/User.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Layout/Header/User.vue?vue&type=template&id=01ff4453&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Layout/Header/User.vue?vue&type=template&id=01ff4453& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_01ff4453___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./User.vue?vue&type=template&id=01ff4453& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layout/Header/User.vue?vue&type=template&id=01ff4453&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_01ff4453___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_01ff4453___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Layout/HeaderMobile.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Layout/HeaderMobile.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HeaderMobile_vue_vue_type_template_id_5873f74e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderMobile.vue?vue&type=template&id=5873f74e& */ "./resources/js/components/Layout/HeaderMobile.vue?vue&type=template&id=5873f74e&");
/* harmony import */ var _HeaderMobile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderMobile.vue?vue&type=script&lang=js& */ "./resources/js/components/Layout/HeaderMobile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HeaderMobile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HeaderMobile_vue_vue_type_template_id_5873f74e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HeaderMobile_vue_vue_type_template_id_5873f74e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Layout/HeaderMobile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Layout/HeaderMobile.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Layout/HeaderMobile.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderMobile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./HeaderMobile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layout/HeaderMobile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderMobile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Layout/HeaderMobile.vue?vue&type=template&id=5873f74e&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Layout/HeaderMobile.vue?vue&type=template&id=5873f74e& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderMobile_vue_vue_type_template_id_5873f74e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./HeaderMobile.vue?vue&type=template&id=5873f74e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Layout/HeaderMobile.vue?vue&type=template&id=5873f74e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderMobile_vue_vue_type_template_id_5873f74e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderMobile_vue_vue_type_template_id_5873f74e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/PageLoader.vue":
/*!************************************************!*\
  !*** ./resources/js/components/PageLoader.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageLoader_vue_vue_type_template_id_1b86332d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageLoader.vue?vue&type=template&id=1b86332d& */ "./resources/js/components/PageLoader.vue?vue&type=template&id=1b86332d&");
/* harmony import */ var _PageLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageLoader.vue?vue&type=script&lang=js& */ "./resources/js/components/PageLoader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PageLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageLoader_vue_vue_type_template_id_1b86332d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PageLoader_vue_vue_type_template_id_1b86332d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/PageLoader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/PageLoader.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/PageLoader.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PageLoader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PageLoader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/PageLoader.vue?vue&type=template&id=1b86332d&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/PageLoader.vue?vue&type=template&id=1b86332d& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageLoader_vue_vue_type_template_id_1b86332d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PageLoader.vue?vue&type=template&id=1b86332d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PageLoader.vue?vue&type=template&id=1b86332d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageLoader_vue_vue_type_template_id_1b86332d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageLoader_vue_vue_type_template_id_1b86332d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/QuickUser.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/QuickUser.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QuickUser_vue_vue_type_template_id_7088057d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuickUser.vue?vue&type=template&id=7088057d& */ "./resources/js/components/QuickUser.vue?vue&type=template&id=7088057d&");
/* harmony import */ var _QuickUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuickUser.vue?vue&type=script&lang=js& */ "./resources/js/components/QuickUser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _QuickUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuickUser_vue_vue_type_template_id_7088057d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QuickUser_vue_vue_type_template_id_7088057d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/QuickUser.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/QuickUser.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/QuickUser.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./QuickUser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuickUser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/QuickUser.vue?vue&type=template&id=7088057d&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/QuickUser.vue?vue&type=template&id=7088057d& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickUser_vue_vue_type_template_id_7088057d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./QuickUser.vue?vue&type=template&id=7088057d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuickUser.vue?vue&type=template&id=7088057d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickUser_vue_vue_type_template_id_7088057d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickUser_vue_vue_type_template_id_7088057d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Scrolltop.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/Scrolltop.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Scrolltop_vue_vue_type_template_id_bc33fce6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Scrolltop.vue?vue&type=template&id=bc33fce6& */ "./resources/js/components/Scrolltop.vue?vue&type=template&id=bc33fce6&");
/* harmony import */ var _Scrolltop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Scrolltop.vue?vue&type=script&lang=js& */ "./resources/js/components/Scrolltop.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Scrolltop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Scrolltop_vue_vue_type_template_id_bc33fce6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Scrolltop_vue_vue_type_template_id_bc33fce6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Scrolltop.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Scrolltop.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/Scrolltop.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Scrolltop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Scrolltop.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Scrolltop.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Scrolltop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Scrolltop.vue?vue&type=template&id=bc33fce6&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Scrolltop.vue?vue&type=template&id=bc33fce6& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Scrolltop_vue_vue_type_template_id_bc33fce6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Scrolltop.vue?vue&type=template&id=bc33fce6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Scrolltop.vue?vue&type=template&id=bc33fce6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Scrolltop_vue_vue_type_template_id_bc33fce6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Scrolltop_vue_vue_type_template_id_bc33fce6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Templates.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/Templates.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Templates_vue_vue_type_template_id_240b28de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Templates.vue?vue&type=template&id=240b28de& */ "./resources/js/components/Templates.vue?vue&type=template&id=240b28de&");
/* harmony import */ var _Templates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Templates.vue?vue&type=script&lang=js& */ "./resources/js/components/Templates.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Templates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Templates_vue_vue_type_template_id_240b28de___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Templates_vue_vue_type_template_id_240b28de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Templates.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Templates.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/Templates.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Templates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Templates.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Templates.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Templates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Templates.vue?vue&type=template&id=240b28de&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Templates.vue?vue&type=template&id=240b28de& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Templates_vue_vue_type_template_id_240b28de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Templates.vue?vue&type=template&id=240b28de& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Templates.vue?vue&type=template&id=240b28de&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Templates_vue_vue_type_template_id_240b28de___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Templates_vue_vue_type_template_id_240b28de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);