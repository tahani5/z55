function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/register/register.component */
    "./src/app/components/register/register.component.ts");
    /* harmony import */


    var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/cart/cart.component */
    "./src/app/components/cart/cart.component.ts");
    /* harmony import */


    var _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/checkout/checkout.component */
    "./src/app/components/checkout/checkout.component.ts");
    /* harmony import */


    var _components_product_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/product/product.component */
    "./src/app/components/product/product.component.ts");
    /* harmony import */


    var _components_thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/thankyou/thankyou.component */
    "./src/app/components/thankyou/thankyou.component.ts");
    /* harmony import */


    var _components_clothes_clothes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/clothes/clothes.component */
    "./src/app/components/clothes/clothes.component.ts");
    /* harmony import */


    var _components_accessories_accessories_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/accessories/accessories.component */
    "./src/app/components/accessories/accessories.component.ts");
    /* harmony import */


    var _components_shoes_shoes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/shoes/shoes.component */
    "./src/app/components/shoes/shoes.component.ts");

    var routes = [{
      path: '',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'login',
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'register',
      component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    }, {
      path: 'product/:id',
      component: _components_product_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"]
    }, {
      path: 'cart',
      component: _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"]
    }, {
      path: 'checkout',
      component: _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_6__["CheckoutComponent"]
    }, {
      path: 'thankyou',
      component: _components_thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_8__["ThankyouComponent"]
    }, {
      path: 'clothes',
      component: _components_clothes_clothes_component__WEBPACK_IMPORTED_MODULE_9__["ClothesComponent"]
    }, {
      path: 'Accessories',
      component: _components_accessories_accessories_component__WEBPACK_IMPORTED_MODULE_10__["AccessoriesComponent"]
    }, {
      path: 'Shoes',
      component: _components_shoes_shoes_component__WEBPACK_IMPORTED_MODULE_11__["ShoesComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Shopping-online';
    };

    AppComponent.??fac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AppComponent,
      selectors: [["mg-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "mg-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "mg-footer");
        }
      },
      directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mg-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/register/register.component */
    "./src/app/components/register/register.component.ts");
    /* harmony import */


    var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/cart/cart.component */
    "./src/app/components/cart/cart.component.ts");
    /* harmony import */


    var _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/checkout/checkout.component */
    "./src/app/components/checkout/checkout.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _components_product_product_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/product/product.component */
    "./src/app/components/product/product.component.ts");
    /* harmony import */


    var _components_thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/thankyou/thankyou.component */
    "./src/app/components/thankyou/thankyou.component.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _components_clothes_clothes_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/clothes/clothes.component */
    "./src/app/components/clothes/clothes.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["NoopAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_17__["ToastrModule"].forRoot()]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"], _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_9__["CartComponent"], _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_10__["CheckoutComponent"], _components_product_product_component__WEBPACK_IMPORTED_MODULE_12__["ProductComponent"], _components_thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_13__["ThankyouComponent"], _components_clothes_clothes_component__WEBPACK_IMPORTED_MODULE_18__["ClothesComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["NoopAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_17__["ToastrModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"], _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_9__["CartComponent"], _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_10__["CheckoutComponent"], _components_product_product_component__WEBPACK_IMPORTED_MODULE_12__["ProductComponent"], _components_thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_13__["ThankyouComponent"], _components_clothes_clothes_component__WEBPACK_IMPORTED_MODULE_18__["ClothesComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["NoopAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_17__["ToastrModule"].forRoot()],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/accessories/accessories.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/accessories/accessories.component.ts ***!
    \*****************************************************************/

  /*! exports provided: AccessoriesComponent */

  /***/
  function srcAppComponentsAccessoriesAccessoriesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccessoriesComponent", function () {
      return AccessoriesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AccessoriesComponent = /*#__PURE__*/function () {
      function AccessoriesComponent() {
        _classCallCheck(this, AccessoriesComponent);
      }

      _createClass(AccessoriesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AccessoriesComponent;
    }();

    AccessoriesComponent.??fac = function AccessoriesComponent_Factory(t) {
      return new (t || AccessoriesComponent)();
    };

    AccessoriesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AccessoriesComponent,
      selectors: [["mg-accessories"]],
      decls: 28,
      vars: 0,
      consts: [[1, "row", "row-cols-1", "row-cols-md-3", "g-4", 2, "padding", "5rem"], [1, "card", 2, "width", "5rem"], ["src", "./../../../assets/img/m3.png", "alt", "...", "height", "300px", 1, "card-img-top"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "btn", "btn-primary"]],
      template: function AccessoriesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Accessories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Christmas pack of 3 earrings in mixed christmas tree design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Add to cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Accessories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " pack of 4 styling clips in resin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Add to cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Accessories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "pack of 7 earrings in mixed designs in gold tone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Add to cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjZXNzb3JpZXMvYWNjZXNzb3JpZXMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AccessoriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mg-accessories',
          templateUrl: './accessories.component.html',
          styleUrls: ['./accessories.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/cart/cart.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/cart/cart.component.ts ***!
    \***************************************************/

  /*! exports provided: CartComponent */

  /***/
  function srcAppComponentsCartCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
      return CartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function CartComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Your Cart Is Empty");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "GO TO SHOP");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function CartComponent_ng_container_2_tr_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CartComponent_ng_container_2_tr_17_Template_i_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11);

          var i_r9 = ctx.index;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r10.cartService.DeleteProductFromCart(i_r9);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](11, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "form");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CartComponent_ng_container_2_tr_17_Template_div_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11);

          var i_r9 = ctx.index;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r12.ChangeQuantity(i_r9, false);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "i", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CartComponent_ng_container_2_tr_17_Template_div_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11);

          var i_r9 = ctx.index;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r13.ChangeQuantity(i_r9, true);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](22, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var c_r8 = ctx.$implicit;
        var i_r9 = ctx.index;

        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("alt", c_r8.product.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", c_r8.product.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](c_r8.product.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](11, 7, c_r8.product.price, "USD"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", c_r8.numInCart)("max", c_r8.product.quantity);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](22, 10, ctx_r7.cartService.CalculateSubTotal(i_r9), "USD"));
      }
    }

    function CartComponent_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "table", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "thead", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "tr", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Image");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Price");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Quantity");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Subtotal");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, CartComponent_ng_container_2_tr_17_Template, 23, 13, "tr", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "tr", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "td", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "TOTAL");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](26, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Checkout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Continue Shopping");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r6.cartData.data);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](26, 2, ctx_r6.cartTotal, "USD"));
      }
    }

    var CartComponent = /*#__PURE__*/function () {
      function CartComponent(cartService) {
        _classCallCheck(this, CartComponent);

        this.cartService = cartService;
      }

      _createClass(CartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.cartService.cartDataObs$.subscribe(function (data) {
            return _this.cartData = data;
          });
          this.cartService.cartTotal$.subscribe(function (total) {
            return _this.cartTotal = total;
          });
        }
      }, {
        key: "ChangeQuantity",
        value: function ChangeQuantity(id, increaseQuantity) {
          this.cartService.UpdateCartData(id, increaseQuantity);
        }
      }]);

      return CartComponent;
    }();

    CartComponent.??fac = function CartComponent_Factory(t) {
      return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]));
    };

    CartComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: CartComponent,
      selectors: [["mg-cart"]],
      decls: 3,
      vars: 2,
      consts: [[1, "container"], ["class", "text-center my-5", 4, "ngIf"], [4, "ngIf"], [1, "text-center", "my-5"], ["routerLink", "/", 1, "btn", "btn-primary", "btn-lg", "mt-3"], [1, "row"], [1, "col", "my-4"], [1, "table"], [1, "table-dark"], [1, "text-center"], [4, "ngFor", "ngForOf"], [1, "border-0"], [2, "border", "none"], [1, "col-md-12", "d-flex", "mb-5"], [1, "d-flex", "w-100", "justify-content-between", "flex-sm-column", "flex-md-row"], ["routerLink", "/checkout", 1, "btn", "btn-danger", "btn-sm", "order-1"], ["routerLink", "/", 1, "btn", "btn-success", "btn-sm", "order-0"], [1, "d-flex", "align-items-center", "justify-content-around"], ["height", "60", 1, "order-1", 3, "src", "alt"], [1, "text-danger", 2, "cursor", "pointer"], [1, "fa", "fa-trash", 3, "click"], ["id", "decrease", 1, "value-button", 3, "click"], [1, "fa", "fa-minus"], ["type", "number", "id", "number", "readonly", "", 3, "value", "max"], ["id", "increase", 1, "value-button", 3, "click"], [1, "fa", "fa-plus"]],
      template: function CartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CartComponent_div_1_Template, 5, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, CartComponent_ng_container_2_Template, 33, 5, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.cartData.data[0].numInCart === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.cartData.data[0].numInCart !== 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]],
      styles: [".increase_quantity[_ngcontent-%COMP%], .decrease_quantity[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\nform[_ngcontent-%COMP%] {\n  width: 300px;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.value-button[_ngcontent-%COMP%] {\n  display: inline-block;\n  border: 1px solid #ddd;\n  margin: 0px;\n  width: 40px;\n  height: 40px;\n  vertical-align: middle;\n  padding: 10px 0 12px;\n  text-align: center;\n  background: #eee;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.value-button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\nform[_ngcontent-%COMP%]   #decrease[_ngcontent-%COMP%] {\n  margin-right: -4px;\n  border-radius: 8px 0 0 8px;\n  background: red;\n  color: white;\n}\n\nform[_ngcontent-%COMP%]   #increase[_ngcontent-%COMP%] {\n  margin-left: -4px;\n  border-radius: 0 8px 8px 0;\n  background: green;\n  color: white;\n}\n\n\n\ninput#number[_ngcontent-%COMP%] {\n  text-align: center;\n  border: none;\n  border-top: 1px solid #ddd;\n  border-bottom: 1px solid #ddd;\n  margin: 0px;\n  width: 40px;\n  height: 40px;\n}\n\ninput[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:not(:last-of-type)   td[_ngcontent-%COMP%] {\n  border-right: 1px solid #dee2e6;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:not(:last-of-type)   td[_ngcontent-%COMP%]:first-of-type {\n  border-left: 1px solid #dee2e6;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-of-type   td[_ngcontent-%COMP%]:first-child {\n  border-top: 1px solid #dee2e6 !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-of-type   td[_ngcontent-%COMP%]:nth-child(4), tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-of-type   td[_ngcontent-%COMP%]:nth-child(5) {\n  border-left: 1px solid #dee2e6;\n  border-right: 1px solid #dee2e6;\n  border-bottom: 1px solid #dee2e6;\n  font-weight: bold;\n  font-size: 1.3rem;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWhhbmlhL0Rlc2t0b3Avdmk0L3Byb2plY3RfNS9wcm9qZWN0NSAoZnJvbnRlbmQpL3NyYy9hcHAvY29tcG9uZW50cy9jYXJ0L2NhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2FydC9jYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUVBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7OztHQUFBOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBOztFQUVFLHdCQUFBO0VBQ0EsU0FBQTtBQ0FGOztBRE1NO0VBQ0UsK0JBQUE7QUNIUjs7QURLUTtFQUNFLDhCQUFBO0FDSFY7O0FEV1E7RUFDRSx3Q0FBQTtBQ1RWOztBRFlRO0VBQ0UsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDVlYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhcnQvY2FydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmNyZWFzZV9xdWFudGl0eSwgLmRlY3JlYXNlX3F1YW50aXR5IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5mb3JtIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udmFsdWUtYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBtYXJnaW46IDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZzogMTBweCAwIDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi52YWx1ZS1idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmZvcm0gI2RlY3JlYXNlIHtcbiAgbWFyZ2luLXJpZ2h0OiAtNHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHggMCAwIDhweDtcbiAgYmFja2dyb3VuZDogcmVkO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmZvcm0gI2luY3JlYXNlIHtcbiAgbWFyZ2luLWxlZnQ6IC00cHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgOHB4IDhweCAwO1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiBmb3JtICNpbnB1dC13cmFwIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn0gKi9cblxuaW5wdXQjbnVtYmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgbWFyZ2luOiAwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuXG50Ym9keSB7XG4gIHRyIHtcbiAgICAmOm5vdCg6bGFzdC1vZi10eXBlKSB7XG4gICAgICB0ZCB7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZWUyZTY7XG5cbiAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZWUyZTY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgICB0ZCB7XG5cbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTYgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bnRoLWNoaWxkKDQpLCAmOm50aC1jaGlsZCg1KSB7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGVlMmU2O1xuICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZWUyZTY7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cblxuICAgICAgfVxuXG4gICAgfVxuXG4gIH1cbn1cbiIsIi5pbmNyZWFzZV9xdWFudGl0eSwgLmRlY3JlYXNlX3F1YW50aXR5IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5mb3JtIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udmFsdWUtYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBtYXJnaW46IDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZzogMTBweCAwIDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi52YWx1ZS1idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmZvcm0gI2RlY3JlYXNlIHtcbiAgbWFyZ2luLXJpZ2h0OiAtNHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHggMCAwIDhweDtcbiAgYmFja2dyb3VuZDogcmVkO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmZvcm0gI2luY3JlYXNlIHtcbiAgbWFyZ2luLWxlZnQ6IC00cHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgOHB4IDhweCAwO1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiBmb3JtICNpbnB1dC13cmFwIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn0gKi9cbmlucHV0I251bWJlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIG1hcmdpbjogMHB4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cblxudGJvZHkgdHI6bm90KDpsYXN0LW9mLXR5cGUpIHRkIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RlZTJlNjtcbn1cbnRib2R5IHRyOm5vdCg6bGFzdC1vZi10eXBlKSB0ZDpmaXJzdC1vZi10eXBlIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGVlMmU2O1xufVxudGJvZHkgdHI6bGFzdC1vZi10eXBlIHRkOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTYgIWltcG9ydGFudDtcbn1cbnRib2R5IHRyOmxhc3Qtb2YtdHlwZSB0ZDpudGgtY2hpbGQoNCksIHRib2R5IHRyOmxhc3Qtb2YtdHlwZSB0ZDpudGgtY2hpbGQoNSkge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZWUyZTY7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZWUyZTY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mg-cart',
          templateUrl: './cart.component.html',
          styleUrls: ['./cart.component.scss']
        }]
      }], function () {
        return [{
          type: _services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/checkout/checkout.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/checkout/checkout.component.ts ***!
    \***********************************************************/

  /*! exports provided: CheckoutComponent */

  /***/
  function srcAppComponentsCheckoutCheckoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function () {
      return CheckoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var _services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/order.service */
    "./src/app/services/order.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CheckoutComponent_div_3_div_75_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](5, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var c_r17 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", c_r17.numInCart, "x ", c_r17.product.name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](5, 3, c_r17.product.price * c_r17.numInCart, "USD"));
      }
    }

    function CheckoutComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h3", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Billing address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "input", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "input", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "input", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "input", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "input", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "input", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "label", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, " Create Account? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "input", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "h3", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Shiping address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "input", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "label", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, " Ship to a diffrent address? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "input", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "input", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "input", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "input", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "input", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "textarea", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "h3", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Your Order");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "PRODUCT");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "SubTotal");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](75, CheckoutComponent_div_3_div_75_Template, 6, 6, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "Shipping");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "FREE");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "TOTAL");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "strong", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](89, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](92, "input", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "label", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](94, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, " Direct Bank Transfer ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](100, "input", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "label", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](102, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, " Cheque Payment ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](108, "input", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "label", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](110, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, " Paypal System ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](116, "input", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "label", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](118, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, " I've read and accept the ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "a", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "terms & conditions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "button", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CheckoutComponent_div_3_Template_button_click_122_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r19);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r18.onCheckout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "Place order");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r14.cartData.data);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](89, 3, ctx_r14.cartTotal, "USD"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx_r14.cartTotal <= 0);
      }
    }

    function CheckoutComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Your Cart Is Empty");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "GO TO SHOP");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    var CheckoutComponent = /*#__PURE__*/function () {
      function CheckoutComponent(cartService, orderService, router, spinner, fb) {
        _classCallCheck(this, CheckoutComponent);

        this.cartService = cartService;
        this.orderService = orderService;
        this.router = router;
        this.spinner = spinner;
        this.fb = fb;
        this.checkoutForm = this.fb.group({
          firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
          lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
          phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
      }

      _createClass(CheckoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.cartService.cartDataObs$.subscribe(function (data) {
            return _this2.cartData = data;
          });
          this.cartService.cartTotal$.subscribe(function (total) {
            return _this2.cartTotal = total;
          });
        }
      }, {
        key: "onCheckout",
        value: function onCheckout() {
          var _this3 = this;

          this.spinner.show().then(function (p) {
            _this3.cartService.CheckoutFromCart(1);
          }); //console.log(this.checkoutForm.value);
        }
      }]);

      return CheckoutComponent;
    }();

    CheckoutComponent.??fac = function CheckoutComponent_Factory(t) {
      return new (t || CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    CheckoutComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: CheckoutComponent,
      selectors: [["mg-checkout"]],
      decls: 5,
      vars: 2,
      consts: [["bdColor", "rgba(151,149,149,0.4)", "size", "large", "color", "orange", "type", "ball-clip-rotate-pulse", "fullScreen", "true"], [2, "font-size", "20px", "color", "black"], ["class", "section", 4, "ngIf"], ["class", "text-center my-5", 4, "ngIf"], [1, "section"], [1, "container"], [1, "row"], [1, "col-md-7"], [1, "billing-details"], [1, "section-title"], [1, "title"], [1, "form-group"], ["type", "text", "name", "first-name", "placeholder", "First Name", 1, "input"], ["type", "text", "name", "last-name", "placeholder", "Last Name", 1, "input"], ["type", "email", "name", "email", "placeholder", "Email", 1, "input"], ["type", "text", "name", "address", "placeholder", "Address", 1, "input"], ["type", "text", "name", "city", "placeholder", "City", 1, "input"], ["type", "text", "name", "country", "placeholder", "Country", 1, "input"], ["type", "text", "name", "zip-code", "placeholder", "ZIP Code", 1, "input"], ["type", "tel", "name", "tel", "placeholder", "Telephone", 1, "input"], [1, "input-checkbox"], ["type", "checkbox", "id", "create-account"], ["for", "create-account"], [1, "caption"], ["type", "password", "name", "password", "placeholder", "Enter Your Password", 1, "input"], [1, "shiping-details"], ["type", "checkbox", "id", "shiping-address"], ["for", "shiping-address"], [1, "order-notes"], ["placeholder", "Order Notes", 1, "input"], [1, "col-md-5", "order-details"], [1, "section-title", "text-center"], [1, "order-summary"], [1, "order-col"], [1, "order-products"], ["class", "order-col", 4, "ngFor", "ngForOf"], [1, "order-col", "dropdown-divider"], [1, "order-total"], [1, "payment-method"], [1, "input-radio"], ["type", "radio", "name", "payment", "id", "payment-1"], ["for", "payment-1"], ["type", "radio", "name", "payment", "id", "payment-2"], ["for", "payment-2"], ["type", "radio", "name", "payment", "id", "payment-3"], ["for", "payment-3"], ["type", "checkbox", "id", "terms"], ["for", "terms"], ["href", "#"], ["type", "submit", 1, "btn-outline-danger", "btn-sm", "my-2", "btn-block", 3, "disabled", "click"], [1, "text-center", "my-5"], ["routerLink", "/", 1, "btn", "btn-primary", "btn-lg", "mt-3"]],
      template: function CheckoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ngx-spinner", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Booking Order...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, CheckoutComponent_div_3_Template, 124, 6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, CheckoutComponent_div_4_Template, 5, 0, "div", 3);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.cartData.total > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.cartData.total <= 0);
        }
      },
      directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CheckoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mg-checkout',
          templateUrl: './checkout.component.html',
          styleUrls: ['./checkout.component.scss']
        }]
      }], function () {
        return [{
          type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
        }, {
          type: _services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/clothes/clothes.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/clothes/clothes.component.ts ***!
    \*********************************************************/

  /*! exports provided: ClothesComponent */

  /***/
  function srcAppComponentsClothesClothesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClothesComponent", function () {
      return ClothesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ClothesComponent = /*#__PURE__*/function () {
      function ClothesComponent() {
        _classCallCheck(this, ClothesComponent);
      }

      _createClass(ClothesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ClothesComponent;
    }();

    ClothesComponent.??fac = function ClothesComponent_Factory(t) {
      return new (t || ClothesComponent)();
    };

    ClothesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ClothesComponent,
      selectors: [["mg-clothes"]],
      decls: 28,
      vars: 0,
      consts: [[1, "row", "row-cols-1", "row-cols-md-3", "g-4", 2, "padding", "5rem"], [1, "card", 2, "width", "5rem"], ["src", "./../../../assets/img/m1.png", "alt", "...", "height", "300px", 1, "card-img-top"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "btn", "btn-primary"]],
      template: function ClothesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "T-shert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Francesca Vneck T-shert.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Add to cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "T-shert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Francesca Vneck T-shert.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Add to cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "T-shert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Francesca Vneck T-shert.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Add to cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xvdGhlcy9jbG90aGVzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ClothesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mg-clothes',
          templateUrl: './clothes.component.html',
          styleUrls: ['./clothes.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.??fac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: FooterComponent,
      selectors: [["mg-footer"]],
      decls: 105,
      vars: 0,
      consts: [["id", "footer"], [1, "section"], [1, "container"], [1, "row"], [1, "col-md-3", "col-xs-6"], [1, "footer"], [1, "footer-title"], [1, "footer-links"], ["href", "#"], [1, "fa", "fa-map-marker"], [1, "fa", "fa-phone"], [1, "fa", "fa-envelope-o"], [1, "clearfix", "visible-xs"], ["id", "bottom-footer", 1, "section"], [1, "col-md-12", "text-center"], [1, "footer-payments"], [1, "fa", "fa-cc-visa"], [1, "fa", "fa-credit-card"], [1, "fa", "fa-cc-paypal"], [1, "fa", "fa-cc-mastercard"], [1, "fa", "fa-cc-discover"], [1, "fa", "fa-cc-amex"], [1, "copyright"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h3", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Company interested in fashion and accessories.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "0000 Riyadh");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "+012-34-56-78");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "examble@email.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "h3", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Categories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Hot deals");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Clothes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Accessories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Shoes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "h3", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Privacy Policy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Orders and Returns");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Terms & Conditions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "h3", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Service");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "My Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "View Cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "Wishlist");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Track My Order");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Help");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "ul", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](88, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](91, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](94, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](97, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](100, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](103, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](104, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mg-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HeaderComponent_div_64_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h3", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h4", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](11, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "button", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_div_64_div_1_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r39);

          var i_r37 = ctx.index;

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r38.cartService.DeleteProductFromCart(i_r37);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "i", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var c_r36 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", c_r36.product == null ? null : c_r36.product.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](c_r36.product == null ? null : c_r36.product.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", c_r36.numInCart, " x ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](11, 4, c_r36.product == null ? null : c_r36.product.price, "USD"));
      }
    }

    function HeaderComponent_div_64_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, HeaderComponent_div_64_div_1_Template, 14, 7, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r34.cartData.data);
      }
    }

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(cartService) {
        _classCallCheck(this, HeaderComponent);

        this.cartService = cartService;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.cartService.cartTotal$.subscribe(function (total) {
            _this4.cartTotal = total;
          });
          this.cartService.cartDataObs$.subscribe(function (data) {
            return _this4.cartData = data;
          });
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.??fac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]));
    };

    HeaderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: HeaderComponent,
      selectors: [["mg-header"]],
      decls: 98,
      vars: 7,
      consts: [["id", "top-header"], [1, "container"], [1, "header-links", "pull-left"], ["href", "#"], [1, "fa", "fa-phone"], [1, "fa", "fa-envelope-o"], [1, "fa", "fa-map-marker"], [1, "header-links", "pull-right"], [1, "fa", "fa-dollar"], [1, "fa", "fa-user-o"], ["id", "header"], [1, "row"], [1, "col-md-3"], [1, "header-logo"], ["routerLink", "/", 1, "logo"], ["src", "../../../assets/img/logo.png", "alt", "", "width", "120px"], [1, "col-md-6"], [1, "header-search"], [1, "input-select"], ["value", "0"], ["value", "1"], ["value", "2"], ["placeholder", "Search here", 1, "input"], [1, "search-btn"], [1, "col-md-3", "clearfix"], [1, "header-ctn"], [1, "fa", "fa-heart-o"], [1, "qty"], [1, "dropdown"], ["data-toggle", "dropdown", "aria-expanded", "true", 1, "dropdown-toggle", 2, "cursor", "pointer"], [1, "fa", "fa-shopping-cart"], [1, "cart-dropdown"], ["class", "cart-list", 4, "ngIf"], [1, "cart-summary"], [1, "cart-btns"], ["routerLink", "/cart"], ["routerLink", "/checkout"], [1, "fa", "fa-arrow-circle-right"], [1, "menu-toggle"], [1, "fa", "fa-bars"], ["id", "navigation"], ["id", "responsive-nav"], [1, "main-nav", "nav", "py-3"], [1, "active"], ["href", "/clothes"], ["href", "/Accessories"], ["href", "/Shoes"], [1, "cart-list"], ["class", "product-widget", 4, "ngFor", "ngForOf"], [1, "product-widget"], [1, "product-img"], ["alt", "", "width", "20px", 3, "src"], [1, "product-body"], [1, "product-name"], [1, "product-price"], [1, "delete", 3, "click"], [1, "fa", "fa-close"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " +012-34-56-78");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " examble@email.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, " 0000 Riyadh");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " SAR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " My Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "select", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "All Categories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Category 01");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Category 02");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Your Wishlist");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Your Cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](64, HeaderComponent_div_64_Template, 2, 1, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](70, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "View Cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "Checkout ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](76, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](79, "i", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "Menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "nav", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "ul", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "li", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "a", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "Clothes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "Accessories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "a", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "Shoes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.cartData.data[0].numInCart !== 0 ? ctx.cartData.data.length : 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.cartData.data[0].numInCart !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.cartData.data[0].numInCart !== 0 ? ctx.cartData.data.length : 0, " Item(s) selected");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("TOTAL : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](70, 4, ctx.cartTotal, "USD"), "");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??angular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mg-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [{
          type: _services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/product.service */
    "./src/app/services/product.service.ts");
    /* harmony import */


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function HomeComponent_div_44_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "img", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_div_44_Template_img_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3);

          var p_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r2.selectProduct(p_r1.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](7, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](13, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "button", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_div_44_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3);

          var p_r1 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r4.AddProduct(p_r1.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var p_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("alt", p_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", p_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](7, 11, p_r1.name));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", p_r1.description.substr(0, 40), " ....");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](13, 13, p_r1.price, "ARS"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("disabled", p_r1.quantity < 1)("btn-outline-danger", p_r1.quantity < 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", p_r1.quantity < 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", p_r1.quantity < 1 ? "NO STOCK" : "Add To Cart", " ");
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(productService, cartService, router) {
        _classCallCheck(this, HomeComponent);

        this.productService = productService;
        this.cartService = cartService;
        this.router = router;
        this.products = [];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.productService.getAllProducts(8).subscribe(function (prods) {
            _this5.products = prods.products;
            console.log(_this5.products);
          });
        }
      }, {
        key: "AddProduct",
        value: function AddProduct(id) {
          this.cartService.AddProductToCart(id);
        }
      }, {
        key: "selectProduct",
        value: function selectProduct(id) {
          this.router.navigate(['/product', id]).then();
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.??fac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: HomeComponent,
      selectors: [["mg-home"]],
      decls: 115,
      vars: 1,
      consts: [[1, "section"], [1, "container"], [1, "row"], [1, "col-md-4", "col-xs-6"], [1, "shop"], [1, "shop-img"], ["src", "./../../../assets/img/Clothes.png", "alt", "", "height", "300px"], [1, "shop-body"], ["routerLink", "/clothes", 1, "cta-btn"], [1, "fa", "fa-arrow-circle-right"], ["src", "./../../../assets/img/Ac.png", "alt", "", "height", "300px"], ["routerLink", "/Accessories", 1, "cta-btn"], ["src", "./../../../assets/img/Shoes.png", "alt", "", "height", "300px"], ["routerLink", "/Shoes", 1, "cta-btn"], [1, "col-md-12"], ["class", "col-md-4 col-sm-6", 4, "ngFor", "ngForOf"], ["id", "hot-deal", 2, "background-color", "rgb(192, 190, 190)", "padding-top", "2rem", "padding-bottom", "1rem"], [1, "section-title"], [1, "title"], [1, "hot-deal"], ["src", "./../../../assets/img/m1.png", "alt", "", 2, "width", "200px", "float", "left"], ["src", "./../../../assets/img/m2.png", "alt", "", 2, "width", "250px", "float", "right"], [1, "hot-deal-countdown"], [1, "text-uppercase"], ["href", "#", 1, "primary-btn", "cta-btn"], ["id", "newsletter", 1, "section"], [1, "newsletter"], ["type", "email", "placeholder", "Enter Your Email", 1, "input"], [1, "newsletter-btn"], [1, "fa", "fa-envelope"], [1, "newsletter-follow"], ["href", "#"], [1, "fa", "fa-facebook"], [1, "fa", "fa-twitter"], [1, "fa", "fa-instagram"], [1, "fa", "fa-pinterest"], [1, "col-md-4", "col-sm-6"], [1, "card", "my-2"], ["width", "200px", 1, "card-img-top", 2, "cursor", "pointer", 3, "src", "alt", "click"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "lead"], [1, "row", "d-flex", "justify-content-center", "border-primary", "my-3"], [1, "col-md-6"], [1, "btn", "btn-outline-primary", "btn-sm", "btn-block", 3, "disabled", "click"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Clothes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Collection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Shop now ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Accessories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Collection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Shop now ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Shoes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Collection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Shop now ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](44, HomeComponent_div_44_Template, 18, 16, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "h3", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "sale");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "ul", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "02");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Days");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Hours");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "34");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "Mins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "60");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "Secs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "h2", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "hot deal this week");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "New Collection Up to 50% OFF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "Shop now");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "Sign Up for the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "NEWSLETTER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](98, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](100, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, " Subscribe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "ul", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](105, "i", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](108, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](111, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](114, "i", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.products);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]],
      styles: [".disabled[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWhhbmlhL0Rlc2t0b3Avdmk0L3Byb2plY3RfNS9wcm9qZWN0NSAoZnJvbnRlbmQpL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc2FibGVkIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbiIsIi5kaXNhYmxlZCB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mg-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [{
          type: _services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]
        }, {
          type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent() {
        _classCallCheck(this, LoginComponent);
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponent;
    }();

    LoginComponent.??fac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)();
    };

    LoginComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: LoginComponent,
      selectors: [["mg-login"]],
      decls: 0,
      vars: 0,
      template: function LoginComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mg-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/product/product.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/product/product.component.ts ***!
    \*********************************************************/

  /*! exports provided: ProductComponent */

  /***/
  function srcAppComponentsProductProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductComponent", function () {
      return ProductComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/product.service */
    "./src/app/services/product.service.ts");
    /* harmony import */


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = ["quantity"];

    function ProductComponent_ng_template_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 111);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx_r20.product.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
      }
    }

    function ProductComponent_ng_template_25_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 111);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var t_r27 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", t_r27, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
      }
    }

    function ProductComponent_ng_template_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, ProductComponent_ng_template_25_div_0_Template, 2, 1, "div", 112);
      }

      if (rf & 2) {
        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r21.thumbimages);
      }
    }

    function ProductComponent_ng_template_27_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 111);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var t_r29 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", t_r29, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
      }
    }

    function ProductComponent_ng_template_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 113);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ProductComponent_ng_template_27_div_1_Template, 2, 1, "div", 112);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r22.thumbimages);
      }
    }

    function ProductComponent_ng_template_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 113);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 111);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx_r23.product.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
      }
    }

    function ProductComponent_button_60_Template(rf, ctx) {
      if (rf & 1) {
        var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 114);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductComponent_button_60_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r31);

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r30.addToCart(ctx_r30.product == null ? null : ctx_r30.product.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Add To Cart ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    var ProductComponent = /*#__PURE__*/function () {
      function ProductComponent(route, productService, cartService) {
        _classCallCheck(this, ProductComponent);

        this.route = route;
        this.productService = productService;
        this.cartService = cartService;
        this.thumbimages = [];
      }

      _createClass(ProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (param) {
            // @ts-ignore
            return param.params.id;
          })).subscribe(function (prodId) {
            _this6.id = prodId;

            _this6.productService.getSingleProduct(_this6.id).subscribe(function (prod) {
              _this6.product = prod;

              if (prod.images !== null) {
                _this6.thumbimages = prod.images.split(';');
              }
            });
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          // Product Main img Slick
          $('#product-main-img').slick({
            infinite: true,
            speed: 300,
            dots: false,
            arrows: true,
            fade: true,
            asNavFor: '#product-imgs'
          }); // Product imgs Slick

          $('#product-imgs').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            centerMode: true,
            focusOnSelect: true,
            centerPadding: 0,
            vertical: true,
            asNavFor: '#product-main-img',
            responsive: [{
              breakpoint: 991,
              settings: {
                vertical: false,
                arrows: false,
                dots: true
              }
            }]
          }); // Product img zoom

          var zoomMainProduct = document.getElementById('product-main-img');

          if (zoomMainProduct) {
            $('#product-main-img .product-preview').zoom();
          }
        }
      }, {
        key: "addToCart",
        value: function addToCart(id) {
          this.cartService.AddProductToCart(id, this.quantityInput.nativeElement.value);
        }
      }, {
        key: "Increase",
        value: function Increase() {
          var value = parseInt(this.quantityInput.nativeElement.value);

          if (this.product.quantity >= 1) {
            value++;

            if (value > this.product.quantity) {
              // @ts-ignore
              value = this.product.quantity;
            }
          } else {
            return;
          }

          this.quantityInput.nativeElement.value = value.toString();
        }
      }, {
        key: "Decrease",
        value: function Decrease() {
          var value = parseInt(this.quantityInput.nativeElement.value);

          if (this.product.quantity > 0) {
            value--;

            if (value <= 0) {
              // @ts-ignore
              value = 0;
            }
          } else {
            return;
          }

          this.quantityInput.nativeElement.value = value.toString();
        }
      }]);

      return ProductComponent;
    }();

    ProductComponent.??fac = function ProductComponent_Factory(t) {
      return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]));
    };

    ProductComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ProductComponent,
      selectors: [["mg-product"]],
      viewQuery: function ProductComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.quantityInput = _t.first);
        }
      },
      decls: 411,
      vars: 17,
      consts: [["id", "breadcrumb", 1, "section"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "breadcrumb-tree"], ["href", "#"], [1, "active"], [1, "section"], [1, "row", "d-flex"], [1, "col-md-5", "col-md-push-2"], ["id", "product-main-img"], [3, "ngIf"], [1, "col-md-2", "col-md-pull-5"], [1, "col-md-5"], [1, "product-details"], [1, "product-name"], [1, "product-rating"], [1, "fa", "fa-star"], [1, "fa", "fa-star-o"], ["href", "#", 1, "review-link"], [1, "product-price"], [1, "product-available"], [1, "add-to-cart"], [1, "qty-label"], [1, "input-number"], ["readonly", "", "type", "number", 3, "max", "min", "value"], ["quantity", ""], [1, "qty-up", 3, "click"], [1, "qty-down", 3, "click"], ["class", "add-to-cart-btn", 3, "click", 4, "ngIf"], [1, "product-links"], [1, "fa", "fa-facebook"], [1, "fa", "fa-twitter"], [1, "fa", "fa-google-plus"], [1, "fa", "fa-envelope"], ["id", "product-tab"], ["role", "tablist", 1, "tab-nav"], ["role", "presentation", 1, "active"], ["data-toggle", "tab", "href", "#tab1", "role", "tab"], ["role", "presentation"], ["data-toggle", "tab", "href", "#tab2", "role", "tab"], ["data-toggle", "tab", "href", "#tab3", "role", "tab"], [1, "tab-content"], ["id", "tab1", "role", "tabpanel", 1, "tab-pane", "fade", "in", "active"], ["id", "tab2", "role", "tabpanel", 1, "tab-pane", "fade", "in"], ["id", "tab3", "role", "tabpanel", 1, "tab-pane", "fade", "in"], [1, "col-md-3"], ["id", "rating"], [1, "rating-avg"], [1, "rating-stars"], [1, "rating"], [1, "rating-progress"], [2, "width", "80%"], [1, "sum"], [2, "width", "60%"], [1, "col-md-6"], ["id", "reviews"], [1, "reviews"], [1, "review-heading"], [1, "name"], [1, "date"], [1, "review-rating"], [1, "fa", "fa-star-o", "empty"], [1, "review-body"], [1, "reviews-pagination"], [1, "fa", "fa-angle-right"], ["id", "review-form"], [1, "review-form"], ["placeholder", "Your Name", "type", "text", 1, "input"], ["placeholder", "Your Email", "type", "email", 1, "input"], ["placeholder", "Your Review", 1, "input"], [1, "input-rating"], [1, "stars"], ["id", "star5", "name", "rating", "type", "radio", "value", "5"], ["for", "star5"], ["id", "star4", "name", "rating", "type", "radio", "value", "4"], ["for", "star4"], ["id", "star3", "name", "rating", "type", "radio", "value", "3"], ["for", "star3"], ["id", "star2", "name", "rating", "type", "radio", "value", "2"], ["for", "star2"], ["id", "star1", "name", "rating", "type", "radio", "value", "1"], ["for", "star1"], [1, "primary-btn"], [1, "section-title", "text-center"], [1, "title"], [1, "col-md-3", "col-xs-6"], [1, "product"], [1, "product-img"], ["alt", "", "src", "assets/img/product01.png"], [1, "product-label"], [1, "sale"], [1, "product-body"], [1, "product-category"], [1, "product-old-price"], [1, "product-btns"], [1, "add-to-wishlist"], [1, "fa", "fa-heart-o"], [1, "tooltipp"], [1, "add-to-compare"], [1, "fa", "fa-exchange"], [1, "quick-view"], [1, "fa", "fa-eye"], [1, "add-to-cart-btn"], [1, "fa", "fa-shopping-cart"], ["alt", "", "src", "assets/img/product02.png"], [1, "new"], [1, "clearfix", "visible-sm", "visible-xs"], ["alt", "", "src", "assets/img/product03.png"], ["alt", "", "src", "assets/img/product04.png"], [1, "product-preview"], ["alt", "", 3, "src"], ["class", "product-preview", 4, "ngFor", "ngForOf"], ["id", "product-imgs"], [1, "add-to-cart-btn", 3, "click"]],
      template: function ProductComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "All Categories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Accessories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, ProductComponent_ng_template_24_Template, 2, 1, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, ProductComponent_ng_template_25_Template, 1, 1, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, ProductComponent_ng_template_27_Template, 2, 1, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, ProductComponent_ng_template_28_Template, 3, 1, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "h2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "10 Review(s) | Add your review");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "h3", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](45, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "In Stock");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, " Qty ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "input", 25, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductComponent_Template_span_click_56_listener() {
            return ctx.Increase();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductComponent_Template_span_click_58_listener() {
            return ctx.Decrease();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](60, ProductComponent_button_60_Template, 3, 0, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "ul", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Category:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "ul", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Share:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](72, "i", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "i", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](78, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](81, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "ul", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "li", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "li", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "a", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "li", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "Reviews (3)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "4.5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](113, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](114, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](115, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](116, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](117, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "ul", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](121, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](122, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](123, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](124, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](125, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](127, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "span", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](132, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](133, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](134, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](135, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](136, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](138, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "span", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](143, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](144, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](145, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](146, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](147, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](149, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "span", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](154, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](155, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](156, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](157, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](158, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](160, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "span", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](165, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](166, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](167, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](168, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](169, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](171, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "span", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "ul", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "h5", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, "John");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "p", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](182, "27 DEC 2018, 8:0 PM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](184, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](185, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](186, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](187, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](188, "i", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "h5", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](195, "John");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "p", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](197, "27 DEC 2018, 8:0 PM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](199, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](200, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](201, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](202, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](203, "i", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](206, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "h5", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](210, "John");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "p", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](212, "27 DEC 2018, 8:0 PM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](214, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](215, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](216, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](217, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](218, "i", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](221, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "ul", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](224, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](230, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](231, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](233, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](235, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](236, "i", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "form", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](240, "input", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](241, "input", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](242, "textarea", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](244, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](245, "Your Rating: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](247, "input", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](248, "label", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](249, "input", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](250, "label", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](251, "input", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](252, "label", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](253, "input", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](254, "label", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](255, "input", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](256, "label", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](257, "button", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](258, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](259, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](261, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](262, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](263, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "h3", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](265, "Related Products");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](266, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](267, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](268, "div", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](269, "img", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](270, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "span", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](272, "-30%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](274, "p", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](275, "Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](276, "h3", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](277, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](278, "product name goes here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](279, "h4", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](280, "$980.00 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](281, "del", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](282, "$990.00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](283, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](284, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](285, "button", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](286, "i", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](287, "span", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](288, "add to wishlist");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](289, "button", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](290, "i", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](291, "span", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](292, "add to compare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](293, "button", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](294, "i", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](295, "span", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](296, "quick view");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](297, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](298, "button", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](299, "i", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](300, " add to cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](301, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](303, "div", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](304, "img", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](305, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "span", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](307, "NEW");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](308, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](309, "p", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](310, "Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](311, "h3", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](313, "product name goes here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](314, "h4", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](315, "$980.00 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](316, "del", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](317, "$990.00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](318, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](319, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](320, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](321, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](322, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](323, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](324, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](325, "button", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](326, "i", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](327, "span", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](328, "add to wishlist");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](329, "button", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](330, "i", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](331, "span", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](332, "add to compare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](333, "button", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](334, "i", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](335, "span", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](336, "quick view");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](337, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](338, "button", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](339, "i", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](340, " add to cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](341, "div", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](342, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](343, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](344, "div", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](345, "img", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](346, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](347, "p", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](348, "Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](349, "h3", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](350, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](351, "product name goes here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](352, "h4", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](353, "$980.00 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](354, "del", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](355, "$990.00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](356, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](357, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](358, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](359, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](360, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](361, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](362, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](363, "button", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](364, "i", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](365, "span", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](366, "add to wishlist");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](367, "button", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](368, "i", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](369, "span", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](370, "add to compare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](371, "button", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](372, "i", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](373, "span", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](374, "quick view");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](375, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](376, "button", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](377, "i", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](378, " add to cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](379, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](380, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](381, "div", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](382, "img", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](383, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](384, "p", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](385, "Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](386, "h3", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](387, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](388, "product name goes here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](389, "h4", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](390, "$980.00 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](391, "del", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](392, "$990.00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](393, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](394, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](395, "button", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](396, "i", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](397, "span", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](398, "add to wishlist");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](399, "button", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](400, "i", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](401, "span", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](402, "add to compare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](403, "button", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](404, "i", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](405, "span", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](406, "quick view");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](407, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](408, "button", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](409, "i", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](410, " add to cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.product.category);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.product.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.thumbimages.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.thumbimages.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.thumbimages.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.thumbimages.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.product == null ? null : ctx.product.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](45, 14, ctx.product == null ? null : ctx.product.price, "USD"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.product == null ? null : ctx.product.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", (ctx.product == null ? null : ctx.product.quantity) >= 1 ? 1 : 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("max", ctx.product == null ? null : ctx.product.quantity)("min", (ctx.product == null ? null : ctx.product.quantity) >= 1 ? ctx.product == null ? null : ctx.product.quantity : 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx.product == null ? null : ctx.product.quantity) >= 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.product == null ? null : ctx.product.category);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mg-product',
          templateUrl: './product.component.html',
          styleUrls: ['./product.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
        }, {
          type: _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]
        }];
      }, {
        quantityInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['quantity']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/register/register.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/register/register.component.ts ***!
    \***********************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppComponentsRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent() {
        _classCallCheck(this, RegisterComponent);
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.??fac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)();
    };

    RegisterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: RegisterComponent,
      selectors: [["mg-register"]],
      decls: 0,
      vars: 0,
      template: function RegisterComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mg-register',
          templateUrl: './register.component.html',
          styleUrls: ['./register.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/shoes/shoes.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/shoes/shoes.component.ts ***!
    \*****************************************************/

  /*! exports provided: ShoesComponent */

  /***/
  function srcAppComponentsShoesShoesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShoesComponent", function () {
      return ShoesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ShoesComponent = /*#__PURE__*/function () {
      function ShoesComponent() {
        _classCallCheck(this, ShoesComponent);
      }

      _createClass(ShoesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ShoesComponent;
    }();

    ShoesComponent.??fac = function ShoesComponent_Factory(t) {
      return new (t || ShoesComponent)();
    };

    ShoesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ShoesComponent,
      selectors: [["mg-shoes"]],
      decls: 28,
      vars: 0,
      consts: [[1, "row", "row-cols-1", "row-cols-md-3", "g-4", 2, "padding", "5rem"], [1, "card", 2, "width", "5rem"], ["src", "./../../../assets/img/m4.png", "alt", "...", "height", "300px", 1, "card-img-top"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "btn", "btn-primary"]],
      template: function ShoesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Shoes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "schuh Aniston chunky chelsea boots in beige");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Add to cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Shoes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Fschuh Aniston chunky chelsea boots in beige");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Add to cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Shoes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "schuh Aniston chunky chelsea boots in beige");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Add to cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvZXMvc2hvZXMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ShoesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mg-shoes',
          templateUrl: './shoes.component.html',
          styleUrls: ['./shoes.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/thankyou/thankyou.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/thankyou/thankyou.component.ts ***!
    \***********************************************************/

  /*! exports provided: ThankyouComponent */

  /***/
  function srcAppComponentsThankyouThankyouComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThankyouComponent", function () {
      return ThankyouComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/order.service */
    "./src/app/services/order.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ThankyouComponent_tr_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](7, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var p_r33 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("alt", p_r33.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", p_r33.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](p_r33.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](7, 5, p_r33.price, "USD"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](p_r33.quantityOrdered);
      }
    }

    var ThankyouComponent = /*#__PURE__*/function () {
      function ThankyouComponent(router, orderService) {
        _classCallCheck(this, ThankyouComponent);

        this.router = router;
        this.orderService = orderService;
        var navigation = this.router.getCurrentNavigation();
        var state = navigation.extras.state;
        this.message = state.message;
        this.orderId = state.orderId;
        this.products = state.products;
        this.cartTotal = state.total;
        console.log(this.products);
      }

      _createClass(ThankyouComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ThankyouComponent;
    }();

    ThankyouComponent.??fac = function ThankyouComponent_Factory(t) {
      return new (t || ThankyouComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"]));
    };

    ThankyouComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ThankyouComponent,
      selectors: [["mg-thankyou"]],
      decls: 37,
      vars: 6,
      consts: [[1, "container"], [1, "row"], [1, "col-md-12"], [1, "jumbotron", "text-center"], [1, "display-3"], [1, "lead"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"], [1, "border-0"], [2, "border", "none"], ["width", "100px", 1, "img-thumbnail", 3, "src", "alt"]],
      template: function ThankyouComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Thank You!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Please check your email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " for order confirmation.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Order Id : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Quantity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, ThankyouComponent_tr_28_Template, 10, 8, "tr", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "tr", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "TOTAL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](36, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.orderId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.products);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](36, 3, ctx.cartTotal, "USD"));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGhhbmt5b3UvdGhhbmt5b3UuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ThankyouComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mg-thankyou',
          templateUrl: './thankyou.component.html',
          styleUrls: ['./thankyou.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/cart.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/cart.service.ts ***!
    \******************************************/

  /*! exports provided: CartService */

  /***/
  function srcAppServicesCartServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartService", function () {
      return CartService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./product.service */
    "./src/app/services/product.service.ts");
    /* harmony import */


    var _order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./order.service */
    "./src/app/services/order.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var CartService = /*#__PURE__*/function () {
      function CartService(productService, orderService, httpClient, router, spinner, toast) {
        var _this7 = this;

        _classCallCheck(this, CartService);

        this.productService = productService;
        this.orderService = orderService;
        this.httpClient = httpClient;
        this.router = router;
        this.spinner = spinner;
        this.toast = toast;
        this.ServerURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverURL;
        this.cartDataClient = {
          prodData: [{
            incart: 0,
            id: 0
          }],
          total: 0
        }; // This will be sent to the backend Server as post data
        // Cart Data variable to store the cart information on the server

        this.cartDataServer = {
          data: [{
            product: undefined,
            numInCart: 0
          }],
          total: 0
        };
        this.cartTotal$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0); // Data variable to store the cart information on the client's local storage

        this.cartDataObs$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.cartDataServer);
        this.cartTotal$.next(this.cartDataServer.total);
        this.cartDataObs$.next(this.cartDataServer);
        var info = JSON.parse(localStorage.getItem('cart'));

        if (info !== null && info !== undefined && info.prodData[0].incart !== 0) {
          // assign the value to our data variable which corresponds to the LocalStorage data format
          this.cartDataClient = info; // Loop through each entry and put it in the cartDataServer object

          this.cartDataClient.prodData.forEach(function (p) {
            _this7.productService.getSingleProduct(p.id).subscribe(function (actualProdInfo) {
              if (_this7.cartDataServer.data[0].numInCart === 0) {
                _this7.cartDataServer.data[0].numInCart = p.incart;
                _this7.cartDataServer.data[0].product = actualProdInfo;

                _this7.CalculateTotal();

                _this7.cartDataClient.total = _this7.cartDataServer.total;
                localStorage.setItem('cart', JSON.stringify(_this7.cartDataClient));
              } else {
                _this7.cartDataServer.data.push({
                  numInCart: p.incart,
                  product: actualProdInfo
                });

                _this7.CalculateTotal();

                _this7.cartDataClient.total = _this7.cartDataServer.total;
                localStorage.setItem('cart', JSON.stringify(_this7.cartDataClient));
              }

              _this7.cartDataObs$.next(Object.assign({}, _this7.cartDataServer));
            });
          });
        }
      }

      _createClass(CartService, [{
        key: "CalculateSubTotal",
        value: function CalculateSubTotal(index) {
          var subTotal = 0;
          var p = this.cartDataServer.data[index]; // @ts-ignore

          subTotal = p.product.price * p.numInCart;
          return subTotal;
        }
      }, {
        key: "AddProductToCart",
        value: function AddProductToCart(id, quantity) {
          var _this8 = this;

          this.productService.getSingleProduct(id).subscribe(function (prod) {
            // If the cart is empty
            if (_this8.cartDataServer.data[0].product === undefined) {
              _this8.cartDataServer.data[0].product = prod;
              _this8.cartDataServer.data[0].numInCart = quantity !== undefined ? quantity : 1;

              _this8.CalculateTotal();

              _this8.cartDataClient.prodData[0].incart = _this8.cartDataServer.data[0].numInCart;
              _this8.cartDataClient.prodData[0].id = prod.id;
              _this8.cartDataClient.total = _this8.cartDataServer.total;
              localStorage.setItem('cart', JSON.stringify(_this8.cartDataClient));

              _this8.cartDataObs$.next(Object.assign({}, _this8.cartDataServer));

              _this8.toast.success("".concat(prod.name, " added to the cart."), "Product Added", {
                timeOut: 1500,
                progressBar: true,
                progressAnimation: 'increasing',
                positionClass: 'toast-top-right'
              });
            } // END of IF
            // Cart is not empty
            else {
                var index = _this8.cartDataServer.data.findIndex(function (p) {
                  return p.product.id === prod.id;
                }); // 1. If chosen product is already in cart array


                if (index !== -1) {
                  if (quantity !== undefined && quantity <= prod.quantity) {
                    // @ts-ignore
                    _this8.cartDataServer.data[index].numInCart = _this8.cartDataServer.data[index].numInCart < prod.quantity ? quantity : prod.quantity;
                  } else {
                    // @ts-ignore
                    _this8.cartDataServer.data[index].numInCart < prod.quantity ? _this8.cartDataServer.data[index].numInCart++ : prod.quantity;
                  }

                  _this8.cartDataClient.prodData[index].incart = _this8.cartDataServer.data[index].numInCart;

                  _this8.toast.info("".concat(prod.name, " quantity updated in the cart."), "Product Updated", {
                    timeOut: 1500,
                    progressBar: true,
                    progressAnimation: 'increasing',
                    positionClass: 'toast-top-right'
                  });
                } // 2. If chosen product is not in cart array
                else {
                    _this8.cartDataServer.data.push({
                      product: prod,
                      numInCart: 1
                    });

                    _this8.cartDataClient.prodData.push({
                      incart: 1,
                      id: prod.id
                    });

                    _this8.toast.success("".concat(prod.name, " added to the cart."), "Product Added", {
                      timeOut: 1500,
                      progressBar: true,
                      progressAnimation: 'increasing',
                      positionClass: 'toast-top-right'
                    });
                  }

                _this8.CalculateTotal();

                _this8.cartDataClient.total = _this8.cartDataServer.total;
                localStorage.setItem('cart', JSON.stringify(_this8.cartDataClient));

                _this8.cartDataObs$.next(Object.assign({}, _this8.cartDataServer));
              } // END of ELSE

          });
        }
      }, {
        key: "UpdateCartData",
        value: function UpdateCartData(index, increase) {
          var data = this.cartDataServer.data[index];

          if (increase) {
            // @ts-ignore
            data.numInCart < data.product.quantity ? data.numInCart++ : data.product.quantity;
            this.cartDataClient.prodData[index].incart = data.numInCart;
            this.CalculateTotal();
            this.cartDataClient.total = this.cartDataServer.total;
            this.cartDataObs$.next(Object.assign({}, this.cartDataServer));
            localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
          } else {
            // @ts-ignore
            data.numInCart--; // @ts-ignore

            if (data.numInCart < 1) {
              this.DeleteProductFromCart(index);
              this.cartDataObs$.next(Object.assign({}, this.cartDataServer));
            } else {
              // @ts-ignore
              this.cartDataObs$.next(Object.assign({}, this.cartDataServer));
              this.cartDataClient.prodData[index].incart = data.numInCart;
              this.CalculateTotal();
              this.cartDataClient.total = this.cartDataServer.total;
              localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
            }
          }
        }
      }, {
        key: "DeleteProductFromCart",
        value: function DeleteProductFromCart(index) {
          /*    console.log(this.cartDataClient.prodData[index].prodId);
              console.log(this.cartDataServer.data[index].product.id);*/
          if (window.confirm('Are you sure you want to delete the item?')) {
            this.cartDataServer.data.splice(index, 1);
            this.cartDataClient.prodData.splice(index, 1);
            this.CalculateTotal();
            this.cartDataClient.total = this.cartDataServer.total;

            if (this.cartDataClient.total === 0) {
              this.cartDataClient = {
                prodData: [{
                  incart: 0,
                  id: 0
                }],
                total: 0
              };
              localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
            } else {
              localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
            }

            if (this.cartDataServer.total === 0) {
              this.cartDataServer = {
                data: [{
                  product: undefined,
                  numInCart: 0
                }],
                total: 0
              };
              this.cartDataObs$.next(Object.assign({}, this.cartDataServer));
            } else {
              this.cartDataObs$.next(Object.assign({}, this.cartDataServer));
            }
          } // If the user doesn't want to delete the product, hits the CANCEL button
          else {
              return;
            }
        }
      }, {
        key: "CheckoutFromCart",
        value: function CheckoutFromCart(userId) {
          var _this9 = this;

          this.httpClient.post("".concat(this.ServerURL, "orders/payment"), null).subscribe(function (res) {
            console.clear();

            if (res.success) {
              _this9.resetServerData();

              _this9.httpClient.post("".concat(_this9.ServerURL, "orders/new"), {
                userId: userId,
                products: _this9.cartDataClient.prodData
              }).subscribe(function (data) {
                _this9.orderService.getSingleOrder(data.order_id).then(function (prods) {
                  if (data.success) {
                    var navigationExtras = {
                      state: {
                        message: data.message,
                        products: prods,
                        orderId: data.order_id,
                        total: _this9.cartDataClient.total
                      }
                    };

                    _this9.spinner.hide().then();

                    _this9.router.navigate(['/thankyou'], navigationExtras).then(function (p) {
                      _this9.cartDataClient = {
                        prodData: [{
                          incart: 0,
                          id: 0
                        }],
                        total: 0
                      };

                      _this9.cartTotal$.next(0);

                      localStorage.setItem('cart', JSON.stringify(_this9.cartDataClient));
                    });
                  }
                });
              });
            } else {
              _this9.spinner.hide().then();

              _this9.router.navigateByUrl('/checkout').then();

              _this9.toast.error("Sorry, failed to book the order", "Order Status", {
                timeOut: 1500,
                progressBar: true,
                progressAnimation: 'increasing',
                positionClass: 'toast-top-right'
              });
            }
          });
        }
      }, {
        key: "CalculateTotal",
        value: function CalculateTotal() {
          var Total = 0;
          this.cartDataServer.data.forEach(function (p) {
            var numInCart = p.numInCart;
            var price = p.product.price; // @ts-ignore

            Total += numInCart * price;
          });
          this.cartDataServer.total = Total;
          this.cartTotal$.next(this.cartDataServer.total);
        }
      }, {
        key: "resetServerData",
        value: function resetServerData() {
          this.cartDataServer = {
            data: [{
              product: undefined,
              numInCart: 0
            }],
            total: 0
          };
          this.cartDataObs$.next(Object.assign({}, this.cartDataServer));
        }
      }]);

      return CartService;
    }();

    CartService.??fac = function CartService_Factory(t) {
      return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]));
    };

    CartService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: CartService,
      factory: CartService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
        }, {
          type: _order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/order.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/order.service.ts ***!
    \*******************************************/

  /*! exports provided: OrderService */

  /***/
  function srcAppServicesOrderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderService", function () {
      return OrderService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var OrderService = /*#__PURE__*/function () {
      function OrderService(http) {
        _classCallCheck(this, OrderService);

        this.http = http;
        this.products = [];
        this.ServerURL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].serverURL;
      }

      _createClass(OrderService, [{
        key: "getSingleOrder",
        value: function getSingleOrder(orderId) {
          return this.http.get("".concat(this.ServerURL, "orders/").concat(orderId)).toPromise();
        }
      }]);

      return OrderService;
    }();

    OrderService.??fac = function OrderService_Factory(t) {
      return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    OrderService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: OrderService,
      factory: OrderService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](OrderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/product.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/product.service.ts ***!
    \*********************************************/

  /*! exports provided: ProductService */

  /***/
  function srcAppServicesProductServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductService", function () {
      return ProductService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ProductService = /*#__PURE__*/function () {
      function ProductService(http) {
        _classCallCheck(this, ProductService);

        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].serverURL;
      }

      _createClass(ProductService, [{
        key: "getAllProducts",
        value: function getAllProducts() {
          var limitOfResults = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
          return this.http.get(this.url + 'products', {
            params: {
              limit: limitOfResults.toString()
            }
          });
        }
      }, {
        key: "getSingleProduct",
        value: function getSingleProduct(id) {
          return this.http.get(this.url + 'products/' + id);
        }
      }, {
        key: "getProductsFromCategory",
        value: function getProductsFromCategory(catName) {
          return this.http.get(this.url + 'products/category/' + catName);
        }
      }]);

      return ProductService;
    }();

    ProductService.??fac = function ProductService_Factory(t) {
      return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    ProductService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: ProductService,
      factory: ProductService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      serverURL: 'http://localhost:3636/api/'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/tahania/Desktop/vi4/project_5/project5 (frontend)/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map