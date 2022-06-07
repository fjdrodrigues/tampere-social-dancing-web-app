(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  (self["webpackChunkrauma_social_dancing_web_app"] = self["webpackChunkrauma_social_dancing_web_app"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
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
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _components_dance_dance_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components/dance/dance-routing.module */
      40185);
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home/home.component */
      45067);
      /* harmony import */


      var _components_about_about_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/about/about-routing.module */
      46386);
      /* harmony import */


      var _components_classes_classes_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/classes/classes-routing.module */
      15132);
      /* harmony import */


      var _components_contacts_contacts_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/contacts/contacts-routing.module */
      63083);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [].concat(_toConsumableArray(_components_about_about_routing_module__WEBPACK_IMPORTED_MODULE_2__.aboutRoute), _toConsumableArray(_components_dance_dance_routing_module__WEBPACK_IMPORTED_MODULE_0__.danceRoutes), _toConsumableArray(_components_classes_classes_routing_module__WEBPACK_IMPORTED_MODULE_3__.classesRoute), _toConsumableArray(_components_contacts_contacts_routing_module__WEBPACK_IMPORTED_MODULE_4__.contactsRoute), [{
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent
      }, {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }]);

      var _AppRoutingModule = /*#__PURE__*/_createClass(function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      });

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      87514);
      /* harmony import */


      var _layout_app_navbar_app_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./layout/app-navbar/app-navbar.component */
      94752);
      /* harmony import */


      var _layout_app_mobile_header_app_mobile_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./layout/app-mobile-header/app-mobile-header.component */
      58108);
      /* harmony import */


      var _layout_app_leftpane_app_leftpane_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./layout/app-leftpane/app-leftpane.component */
      53293);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _layout_app_rightpane_app_rightpane_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./layout/app-rightpane/app-rightpane.component */
      25619);
      /* harmony import */


      var _layout_app_mobile_footer_app_mobile_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./layout/app-mobile-footer/app-mobile-footer.component */
      65287);
      /* harmony import */


      var _layout_app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./layout/app-footer/app-footer.component */
      84121);

      var _AppComponent = /*#__PURE__*/function () {
        function _AppComponent(translate) {
          _classCallCheck(this, _AppComponent);

          this.translate = translate;
          translate.setDefaultLang('en');
          translate.addLangs(['en', 'fi']);
          translate.use('en');
        }

        _createClass(_AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _AppComponent;
      }();

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService));
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 15,
        vars: 0,
        consts: [[1, "page-container"], ["role", "main", 1, "main-container", "safari_only"], [1, "main-row"], [1, "col-12", "d-md-none", "mobile-header"], [1, "col-md-2", "d-none", "d-md-block", "sidenav"], [1, "col-12", "col-md-8", "text-left", "main-content"], [1, "col-12", "d-md-none", "mobile-footer"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "main", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "app-mobile-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "app-leftpane");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "app-rightpane");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "app-mobile-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }
        },
        directives: [_layout_app_navbar_app_navbar_component__WEBPACK_IMPORTED_MODULE_0__.AppNavbarComponent, _layout_app_mobile_header_app_mobile_header_component__WEBPACK_IMPORTED_MODULE_1__.AppMobileHeaderComponent, _layout_app_leftpane_app_leftpane_component__WEBPACK_IMPORTED_MODULE_2__.AppLeftPaneComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet, _layout_app_rightpane_app_rightpane_component__WEBPACK_IMPORTED_MODULE_3__.AppRightPaneComponent, _layout_app_mobile_footer_app_mobile_footer_component__WEBPACK_IMPORTED_MODULE_4__.AppMobileFooterComponent, _layout_app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_5__.AppFooterComponent],
        styles: [".main-row[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 5.5rem 0 3.5rem 0;\n  width: 100%;\n  min-height: calc(100vh - 9rem);\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 768px) and (max-width: 899px) and (min-height: 450px) {\n  .main-row[_ngcontent-%COMP%] {\n    padding: 5rem 0 3.5rem 0;\n    min-height: calc(100vh - 8.5rem);\n  }\n}\n@media (min-width: 677px) and (max-width: 767px), (min-height: 400px) and (max-height: 449px) {\n  .main-row[_ngcontent-%COMP%] {\n    padding: 4rem 0 3.5rem 0;\n    min-height: calc(100vh - 7.5rem);\n  }\n}\n@media (min-width: 360px) and (max-width: 676px), (min-height: 380px) and (max-height: 399px) {\n  .main-row[_ngcontent-%COMP%] {\n    padding: 4rem 0 3.5rem 0;\n    min-height: calc(100vh);\n  }\n}\n@media (min-width: 273px) and (max-width: 359px), (max-height: 379px) {\n  .main-row[_ngcontent-%COMP%] {\n    padding: 3rem 0 3.5rem 0;\n    min-height: calc(100vh);\n  }\n}\n@media (min-width: 0px) and (max-width: 272px)  {\n  .main-row[_ngcontent-%COMP%] {\n    padding: 3rem 0 3.5rem 0;\n    min-height: calc(100vh);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFO0lBQ0Usd0JBQXdCO0lBQ3hCLGdDQUFnQztFQUNsQztBQUNGO0FBQ0E7RUFDRTtJQUNFLHdCQUF3QjtJQUN4QixnQ0FBZ0M7RUFDbEM7QUFDRjtBQUNBO0VBQ0U7SUFDRSx3QkFBd0I7SUFDeEIsdUJBQXVCO0VBQ3pCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0Usd0JBQXdCO0lBQ3hCLHVCQUF1QjtFQUN6QjtBQUNGO0FBQ0E7RUFDRTtJQUNFLHdCQUF3QjtJQUN4Qix1QkFBdUI7RUFDekI7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLXJvdyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogNS41cmVtIDAgMy41cmVtIDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gOXJlbSk7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA4OTlweCkgYW5kIChtaW4taGVpZ2h0OiA0NTBweCkge1xuICAubWFpbi1yb3cge1xuICAgIHBhZGRpbmc6IDVyZW0gMCAzLjVyZW0gMDtcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gOC41cmVtKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDY3N3B4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpLCAobWluLWhlaWdodDogNDAwcHgpIGFuZCAobWF4LWhlaWdodDogNDQ5cHgpIHtcbiAgLm1haW4tcm93IHtcbiAgICBwYWRkaW5nOiA0cmVtIDAgMy41cmVtIDA7XG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDcuNXJlbSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzNjBweCkgYW5kIChtYXgtd2lkdGg6IDY3NnB4KSwgKG1pbi1oZWlnaHQ6IDM4MHB4KSBhbmQgKG1heC1oZWlnaHQ6IDM5OXB4KSB7XG4gIC5tYWluLXJvdyB7XG4gICAgcGFkZGluZzogNHJlbSAwIDMuNXJlbSAwO1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmgpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjczcHgpIGFuZCAobWF4LXdpZHRoOiAzNTlweCksICAobWF4LWhlaWdodDogMzc5cHgpIHtcbiAgLm1haW4tcm93IHtcbiAgICBwYWRkaW5nOiAzcmVtIDAgMy41cmVtIDA7XG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAwcHgpIGFuZCAobWF4LXdpZHRoOiAyNzJweCkgIHtcbiAgLm1haW4tcm93IHtcbiAgICBwYWRkaW5nOiAzcmVtIDAgMy41cmVtIDA7XG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCk7XG4gIH1cbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HttpLoaderFactory": function HttpLoaderFactory() {
          return (
            /* binding */
            _HttpLoaderFactory
          );
        },

        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/core */
      32220);
      /* harmony import */


      var _angular_material_datepicker___WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/datepicker/ */
      42937);
      /* harmony import */


      var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material-moment-adapter */
      63737);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      20718);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @ng-select/ng-select */
      36868);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/about/about.component */
      22468);
      /* harmony import */


      var _components_dance_dance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/dance/dance.component */
      44868);
      /* harmony import */


      var _components_dance_kizomba_kizomba_dance_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/dance/kizomba/kizomba-dance.component */
      18313);
      /* harmony import */


      var _components_dance_bachata_bachata_dance_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/dance/bachata/bachata-dance.component */
      68088);
      /* harmony import */


      var _components_dance_cuban_salsa_cuban_salsa_dance_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/dance/cuban-salsa/cuban-salsa-dance.component */
      32945);
      /* harmony import */


      var _components_dance_other_other_dance_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/dance/other/other-dance.component */
      65637);
      /* harmony import */


      var _components_classes_classes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/classes/classes.component */
      60382);
      /* harmony import */


      var _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/contacts/contacts.component */
      68970);
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./home/home.component */
      45067);
      /* harmony import */


      var _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/shared/shared.module */
      4065);
      /* harmony import */


      var _layout_layout_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./layout/layout.module */
      4805);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @ngx-translate/core */
      87514);
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      75347);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/core */
      2316);

      function _HttpLoaderFactory(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__.TranslateHttpLoader(http);
      }

      var _AppModule = /*#__PURE__*/_createClass(function _AppModule() {
        _classCallCheck(this, _AppModule);
      });

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
        providers: [{
          provide: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_15__.MAT_MOMENT_DATE_ADAPTER_OPTIONS,
          useValue: {
            useUtc: true
          }
        }, {
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MAT_DATE_LOCALE,
          useValue: 'en-GB'
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_21__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule, _angular_material_datepicker___WEBPACK_IMPORTED_MODULE_22__.MatDatepickerModule, _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_15__.MatMomentDateModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__.BrowserAnimationsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbDropdownModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _layout_layout_module__WEBPACK_IMPORTED_MODULE_12__.LayoutModule, _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__.SharedModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslateModule.forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslateLoader,
            useFactory: _HttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClient]
          },
          defaultLanguage: 'en'
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_10__.HomeComponent, _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__.AboutComponent, _components_dance_dance_component__WEBPACK_IMPORTED_MODULE_3__.DanceComponent, _components_dance_kizomba_kizomba_dance_component__WEBPACK_IMPORTED_MODULE_4__.KizombaDanceComponent, _components_dance_bachata_bachata_dance_component__WEBPACK_IMPORTED_MODULE_5__.BachataDanceComponent, _components_dance_cuban_salsa_cuban_salsa_dance_component__WEBPACK_IMPORTED_MODULE_6__.CubanSalsaDanceComponent, _components_dance_other_other_dance_component__WEBPACK_IMPORTED_MODULE_7__.OtherDanceComponent, _components_classes_classes_component__WEBPACK_IMPORTED_MODULE_8__.ClassesComponent, _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_9__.ContactsComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_21__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule, _angular_material_datepicker___WEBPACK_IMPORTED_MODULE_22__.MatDatepickerModule, _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_15__.MatMomentDateModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__.BrowserAnimationsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbDropdownModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _layout_layout_module__WEBPACK_IMPORTED_MODULE_12__.LayoutModule, _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__.SharedModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslateModule]
        });
      })();
      /***/

    },

    /***/
    46386:
    /*!**********************************************************!*\
      !*** ./src/app/components/about/about-routing.module.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "aboutRoute": function aboutRoute() {
          return (
            /* binding */
            _aboutRoute
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./about.component */
      22468);

      var _aboutRoute = [{
        path: 'about',
        component: _about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent
      }];
      /***/
    },

    /***/
    22468:
    /*!*****************************************************!*\
      !*** ./src/app/components/about/about.component.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AboutComponent": function AboutComponent() {
          return (
            /* binding */
            _AboutComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AboutComponent = /*#__PURE__*/function () {
        function _AboutComponent() {
          _classCallCheck(this, _AboutComponent);
        }

        _createClass(_AboutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.applyStyleToDescriptions();
          }
        }, {
          key: "applyStyleToDescriptions",
          value: function applyStyleToDescriptions() {
            var descriptions = document.getElementsByClassName("teacher-description");

            for (var i = 0; i < descriptions.length; i++) {
              var htmlDescription = descriptions.item(i);

              if (htmlDescription.clientWidth < htmlDescription.scrollWidth || htmlDescription.clientHeight < htmlDescription.scrollHeight) {
                htmlDescription.style.paddingRight = "5px";
                htmlDescription.style.boxShadow = "inset 0 -12px 10px -7px #31343f66";
              } else {
                htmlDescription.style.paddingRight = "none";
                htmlDescription.style.boxShadow = "none";
              }
            }
          }
        }, {
          key: "onScroll",
          value: function onScroll(event) {
            if (event.target.scrollTop > 0 && event.target.scrollTop < event.target.scrollHeight - 240) {
              var element = event.target;
              element.style.boxShadow = "inset 0 12px 10px -7px #31343f66, inset 0 -12px 10px -7px #31343f66";
            } else if (event.target.scrollTop > 0) {
              var _element = event.target;
              _element.style.boxShadow = "inset 0 12px 10px -7px #31343f66";
            } else if (event.target.scrollTop <= 0) {
              var _element2 = event.target;
              _element2.style.boxShadow = "inset 0 -12px 10px -7px #31343f66";
            }
          }
        }, {
          key: "onResize",
          value: function onResize(event) {
            this.applyStyleToDescriptions();
          }
        }]);

        return _AboutComponent;
      }();

      _AboutComponent.ɵfac = function AboutComponent_Factory(t) {
        return new (t || _AboutComponent)();
      };

      _AboutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _AboutComponent,
        selectors: [["about"]],
        hostBindings: function AboutComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function AboutComponent_scroll_HostBindingHandler($event) {
              return ctx.onScroll($event);
            })("resize", function AboutComponent_resize_HostBindingHandler($event) {
              return ctx.onResize($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
          }
        },
        decls: 84,
        vars: 0,
        consts: [[1, "page-content"], [1, "title"], [1, "content"], [1, "content-text"], [1, "team"], [1, "teacher-odd"], ["src", "https://i.ibb.co/cNGjJ8V/fabio1-216x300.jpg", 1, "teacher-pic"], [1, "teacher-bio"], [1, "teacher-name"], ["src", "https://gist.githubusercontent.com/fjdrodrigues/a459b2bb3f324cd58dba394997193ab8/raw/1b81acb309d128ebcfe694120c7757a58c4ce5fb/portugal-flag.svg", 1, "flag"], [1, "teacher-styles"], [1, "teacher-description", 3, "scroll"], ["href", "https://www.facebook.com/OsbanisAnneta", "target", "_blank"], ["href", "https://www.facebook.com/olivqa88", "target", "_blank"], [1, "teacher-even"], ["src", "https://i.ibb.co/2tM5t5w/Pauli1-234x300.jpg", 1, "teacher-pic"], ["src", "https://gist.githubusercontent.com/fjdrodrigues/754d755130677f32b42db37c142a4088/raw/034725ad3f618e6015ddac96181b9e55bb39fb6f/finland-flag.svg", 1, "flag"], ["href", "https://www.facebook.com/raumasalsaevents", "target", "_blank"]],
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "About Us");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "It was in October 2020 that F\xE1bio and Pauli - a freshly arrived dance enthusiast and a local cuban salsa promoter - decided to join forces to develop the social dance scene in Rauma, by introducing a regular event for new people to join salsa and for existing dancers to continue practicing.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "R\xE9da - an experienced cuban salsa dancer - joined the team as an invited teacher in March 2021, bringing knowledge and experience to the team. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Our goal is to share our passion for afro-latin dances and music, by organising events and teaching low-cost dance classes.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Team");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "F\xE1bio Rodrigues ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Styles:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Kizomba, Semba, Cuban Salsa, Bachata");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function AboutComponent_Template_div_scroll_30_listener($event) {
              return ctx.onScroll($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Original from Portugal, F\xE1bio joined social dancing in 2016, when he started to learn Cuban Salsa with Ramon Yudimir Noa Caraballo in Zagreb, Croatia. Since then, he has been learning with many influent teachers in festivals around Europe. Main inspiration comes from ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Osbanis & Anneta - Deakocan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " - and from ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Oliwia Szewczak-Rylska");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " - a very talented teacher based in Warsaw.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Though he has been dancing Kizomba since 2010, he didn't attend classes until 2017, when he decided to further develop his skills. He has been learning from the biggest names in the Kizomba scene, and in 2019 completed his first Kizomba and Semba Teacher Training, organised by The Fantastic 4 - Paulo & Lanna and Miguel & Susana.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "He tought Kizomba and Semba in Poland and in Germany, before coming to Finland");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Bachata came along while in Zagreb, in 2017, and he has learned Bachata from some of the top teachers in the world. Though he trained Bachata Sensual as well, his real passion is for Dominican Bachata. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Pauli Laaksonen ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Styles:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Cuban Salsa, Rumba, Son");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function AboutComponent_Template_div_scroll_60_listener($event) {
              return ctx.onScroll($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\"Hi, I\u2019m Pauli, local Salsa addict who has been trying to maintain Salsa dancing and culture alive in the Rauma region over ten years.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "I was dragged to Salsa lessons early 2000\u2019s and after a slow start, it has became a great part of my life.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "My heart lies in the Cuban Salsa and I try to endorse the original heritage of Cuban culture, music and dance. Fast Timba, Rumba, Reggaeton and Son are my favourites. The energy of the music is unbelievably strong.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "I Attended many Salsa festivals and concerts in Finland and visited Cuba a few times, focusing on dance lessons with the best teachers in the island.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "I\u2019m not a professional teacher, but I try to pass my knowledge to newcomers and I\u2019m happy to help you improve your basics. Style and looks are important to me, as well as music interpretation.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "I\u2019m also hosting ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Rauma Salsa Events");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Facebook page, which is used for promoting all latin music/dance activities in the Rauma area.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "We have organized Salsa Open Air social dancing evenings at the seaside during the summertime since 2017.\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".team[_ngcontent-%COMP%] {\n\n}\n\n.teacher-odd[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto auto ;\n  grid-template-rows: auto;\n  grid-template-areas: \n    \"photo bio\";\n  grid-column-gap: 5px;\n  -moz-column-gap: 5px;\n       column-gap: 5px;\n  max-height: 300px;\n  overflow: hidden;\n}\n\n.teacher-odd[_ngcontent-%COMP%]:not(:first-of-type) {\n  margin-top: 2rem;\n}\n\n.teacher-even[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  display: grid;\n  grid-template-columns: auto auto ;\n  grid-template-rows: auto;\n  grid-template-areas: \n    \"bio photo\";\n  grid-column-gap: 5px;\n  -moz-column-gap: 5px;\n       column-gap: 5px;\n  max-height: 300px;\n  overflow: hidden;\n}\n\n.teacher-pic[_ngcontent-%COMP%] {\n  max-height: 300px;\n  max-width: 300px;\n  grid-area: photo;\n}\n\n.teacher-bio[_ngcontent-%COMP%] {\n  grid-area: bio;\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: 30px 30px auto;\n  grid-template-areas: \n    \"name\"\n    \"styles\"\n    \"description\";\n  max-height: 300px;\n  overflow: hidden;\n}\n\n.teacher-name[_ngcontent-%COMP%] {\n  grid-area: name;\n  font-weight: 700;\n}\n\n.flag[_ngcontent-%COMP%] {\n  height: 20px;\n}\n\n.teacher-styles[_ngcontent-%COMP%] {\n  grid-area: styles;\n}\n\n.teacher-description[_ngcontent-%COMP%] {\n  grid-area: description;\n  text-align: justify;\n  max-height: 240px;\n  overflow: hidden scroll;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 9999px;\n  background-color: #31343f66;\n}\n\n@media (max-width: 600px) {\n  .teacher-odd[_ngcontent-%COMP%], .teacher-even[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: auto;\n    grid-template-rows: auto auto;\n    grid-template-areas: \n      \"photo\"\n      \"bio\";\n    grid-column-gap: 5px;\n    -moz-column-gap: 5px;\n         column-gap: 5px;\n    max-height: 600px;\n    overflow: hidden;\n  }\n  \n  .teacher-odd[_ngcontent-%COMP%]:not(:first-of-type), .teacher-even[_ngcontent-%COMP%] {\n    margin-top: 1.5rem;\n  }\n\n  .teacher-pic[_ngcontent-%COMP%] {\n    justify-self: center;\n  }\n\n  .teacher-name[_ngcontent-%COMP%] {\n    justify-self: center;\n  }\n\n  .teacher-styles[_ngcontent-%COMP%] {\n    justify-self: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLHdCQUF3QjtFQUN4QjtlQUNhO0VBQ2Isb0JBQWU7RUFBZixvQkFBZTtPQUFmLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMsd0JBQXdCO0VBQ3hCO2VBQ2E7RUFDYixvQkFBZTtFQUFmLG9CQUFlO09BQWYsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBR0E7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGtDQUFrQztFQUNsQzs7O2lCQUdlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQix1QkFBdUI7QUFDekI7O0FBR0E7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3Qjs7V0FFTztJQUNQLG9CQUFlO0lBQWYsb0JBQWU7U0FBZixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLG9CQUFvQjtFQUN0QjtBQUNGIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVhbSB7XG5cbn1cblxuLnRlYWNoZXItb2RkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgIFwicGhvdG8gYmlvXCI7XG4gIGNvbHVtbi1nYXA6IDVweDtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50ZWFjaGVyLW9kZDpub3QoOmZpcnN0LW9mLXR5cGUpIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLnRlYWNoZXItZXZlbiB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgICBcImJpbyBwaG90b1wiO1xuICBjb2x1bW4tZ2FwOiA1cHg7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5cbi50ZWFjaGVyLXBpYyB7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBncmlkLWFyZWE6IHBob3RvO1xufVxuXG4udGVhY2hlci1iaW8ge1xuICBncmlkLWFyZWE6IGJpbztcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwcHggMzBweCBhdXRvO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgICBcIm5hbWVcIlxuICAgIFwic3R5bGVzXCJcbiAgICBcImRlc2NyaXB0aW9uXCI7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnRlYWNoZXItbmFtZSB7XG4gIGdyaWQtYXJlYTogbmFtZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmZsYWcge1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi50ZWFjaGVyLXN0eWxlcyB7XG4gIGdyaWQtYXJlYTogc3R5bGVzO1xufVxuXG4udGVhY2hlci1kZXNjcmlwdGlvbiB7XG4gIGdyaWQtYXJlYTogZGVzY3JpcHRpb247XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIG1heC1oZWlnaHQ6IDI0MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuIHNjcm9sbDtcbn1cblxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDNweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxMzQzZjY2O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnRlYWNoZXItb2RkLCAudGVhY2hlci1ldmVuIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgICAgIFwicGhvdG9cIlxuICAgICAgXCJiaW9cIjtcbiAgICBjb2x1bW4tZ2FwOiA1cHg7XG4gICAgbWF4LWhlaWdodDogNjAwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBcbiAgLnRlYWNoZXItb2RkOm5vdCg6Zmlyc3Qtb2YtdHlwZSksIC50ZWFjaGVyLWV2ZW4ge1xuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgfVxuXG4gIC50ZWFjaGVyLXBpYyB7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIH1cblxuICAudGVhY2hlci1uYW1lIHtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgfVxuXG4gIC50ZWFjaGVyLXN0eWxlcyB7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIH1cbn0iXX0= */"]
      });
      /***/
    },

    /***/
    15132:
    /*!**************************************************************!*\
      !*** ./src/app/components/classes/classes-routing.module.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "classesRoute": function classesRoute() {
          return (
            /* binding */
            _classesRoute
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _classes_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./classes.component */
      60382);

      var _classesRoute = [{
        path: 'classes',
        component: _classes_component__WEBPACK_IMPORTED_MODULE_0__.ClassesComponent
      }];
      /***/
    },

    /***/
    60382:
    /*!*********************************************************!*\
      !*** ./src/app/components/classes/classes.component.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ClassesComponent": function ClassesComponent() {
          return (
            /* binding */
            _ClassesComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ClassesComponent = /*#__PURE__*/_createClass(function _ClassesComponent() {
        _classCallCheck(this, _ClassesComponent);
      });

      _ClassesComponent.ɵfac = function ClassesComponent_Factory(t) {
        return new (t || _ClassesComponent)();
      };

      _ClassesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ClassesComponent,
        selectors: [["classes"]],
        decls: 99,
        vars: 0,
        consts: [[1, "page-content"], [1, "title"], [1, "content"], [1, "info"], [1, "class-schedule"], [1, "adk-table-container", "all-level-classes"], [1, "adk-table-top-header"], [1, "adk-table-content"], [1, "adk-table-item"], [1, "adk-table-container"], [1, "class-levels"], [1, "level-indicator"], [1, "class-level-box", "all-level-classes"], [1, "class-level-box", "beginner-classes"], [1, "class-level-box", "intermediate-classes"], [1, "prices"], [1, "adk-table-item", "adk-col-1", "highlighted-cell", 2, "margin-top", "8px"], [1, "adk-table-item", "adk-col-2", "highlighted-cell", 2, "margin-top", "8px"], [1, "adk-table-item", "adk-col-1"], [1, "adk-table-item", "adk-col-2"], [1, "adk-table-middle-header"]],
        template: function ClassesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Weekly Schedule");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "It is ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "not");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " necessary to bring a partner.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Monday");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "19:00-21:00");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Kizomba & Semba");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Friday (Every 2nd Week)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "19:00-22:00");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Social Dancing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Sunday");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "18:00-19:30");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Cuban Salsa");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "19:30-21:00");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Bachata");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "All Levels");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Beginners & Improvers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Intermediate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Prices");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Individual Classes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "First Class");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "FREE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "1 Class (Any Day)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "10\u20AC");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "2 Classes (Same Day)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "15\u20AC");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Socials");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Single Entry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "5\u20AC");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Payments can be done via Cash, Bank Transfer and Mobile Pay.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".info[_ngcontent-%COMP%]:not(:last-of-type) {\n  margin-bottom: 0.5rem;\n}\n.info[_ngcontent-%COMP%]:not(:first-of-type) {\n  margin-top: 0.5rem;\n}\n.class-schedule[_ngcontent-%COMP%] {\n  margin: -5px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.all-level-classes[_ngcontent-%COMP%] {\n  background-color: #f8f1f1;\n}\n.beginner-classes[_ngcontent-%COMP%] {\n  background-color: #f3e795;\n}\n.intermediate-classes[_ngcontent-%COMP%] {\n  background-color: #f13c20;\n}\n.asterisk[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  text-align: justify;\n  color: #31343f;\n}\n.class-schedule[_ngcontent-%COMP%]   .adk-table-container[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n.class-levels[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: row;\n}\n.level-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 1px 5px 1px 5px;\n}\n.class-level-box[_ngcontent-%COMP%] {\n  width: 2.2rem;\n  height: 1.5rem;\n  margin-right: 3px;\n  box-shadow: inset 0px 0px 2px 0px #4056a1;\n}\n.prices[_ngcontent-%COMP%]   .adk-col-2[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n@media (max-width: 300px) {\n  .class-schedule[_ngcontent-%COMP%]   .adk-table-container[_ngcontent-%COMP%]   .adk-table-content[_ngcontent-%COMP%] {\n    grid-template-columns: 110px 100px !important;\n  }\n  .prices[_ngcontent-%COMP%]   .adk-table-container[_ngcontent-%COMP%]   .adk-table-content[_ngcontent-%COMP%] {\n    grid-template-columns: 170px auto;\n  }\n}\n@media (max-width: 550px) {\n  .class-schedule[_ngcontent-%COMP%]   .adk-table-container[_ngcontent-%COMP%]   .adk-table-content[_ngcontent-%COMP%] {\n    grid-template-columns: 110px auto;\n  }\n  .prices[_ngcontent-%COMP%]   .adk-table-container[_ngcontent-%COMP%]   .adk-table-content[_ngcontent-%COMP%] {\n    grid-template-columns: 170px auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIseUNBQXlDO0FBQzNDO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFO0lBQ0UsNkNBQTZDO0VBQy9DO0VBQ0E7SUFDRSxpQ0FBaUM7RUFDbkM7QUFDRjtBQUNBO0VBQ0U7SUFDRSxpQ0FBaUM7RUFDbkM7RUFDQTtJQUNFLGlDQUFpQztFQUNuQztBQUNGIiwiZmlsZSI6ImNsYXNzZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmZvOm5vdCg6bGFzdC1vZi10eXBlKSB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbi5pbmZvOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG4uY2xhc3Mtc2NoZWR1bGUge1xuICBtYXJnaW46IC01cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYWxsLWxldmVsLWNsYXNzZXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmMWYxO1xufVxuLmJlZ2lubmVyLWNsYXNzZXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNlNzk1O1xufVxuLmludGVybWVkaWF0ZS1jbGFzc2VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxM2MyMDtcbn1cbi5hc3RlcmlzayB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgY29sb3I6ICMzMTM0M2Y7XG59XG4uY2xhc3Mtc2NoZWR1bGUgLmFkay10YWJsZS1jb250YWluZXIge1xuICBtYXJnaW46IDVweDtcbn1cbi5jbGFzcy1sZXZlbHMge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLmxldmVsLWluZGljYXRvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxcHggNXB4IDFweCA1cHg7XG59XG4uY2xhc3MtbGV2ZWwtYm94IHtcbiAgd2lkdGg6IDIuMnJlbTtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIG1hcmdpbi1yaWdodDogM3B4O1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDJweCAwcHggIzQwNTZhMTtcbn1cbi5wcmljZXMgLmFkay1jb2wtMiB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDMwMHB4KSB7XG4gIC5jbGFzcy1zY2hlZHVsZSAuYWRrLXRhYmxlLWNvbnRhaW5lciAuYWRrLXRhYmxlLWNvbnRlbnQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTEwcHggMTAwcHggIWltcG9ydGFudDtcbiAgfVxuICAucHJpY2VzIC5hZGstdGFibGUtY29udGFpbmVyIC5hZGstdGFibGUtY29udGVudCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNzBweCBhdXRvO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcbiAgLmNsYXNzLXNjaGVkdWxlIC5hZGstdGFibGUtY29udGFpbmVyIC5hZGstdGFibGUtY29udGVudCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMTBweCBhdXRvO1xuICB9XG4gIC5wcmljZXMgLmFkay10YWJsZS1jb250YWluZXIgLmFkay10YWJsZS1jb250ZW50IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE3MHB4IGF1dG87XG4gIH1cbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    63083:
    /*!****************************************************************!*\
      !*** ./src/app/components/contacts/contacts-routing.module.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "contactsRoute": function contactsRoute() {
          return (
            /* binding */
            _contactsRoute
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _contacts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./contacts.component */
      68970);

      var _contactsRoute = [{
        path: 'contacts',
        component: _contacts_component__WEBPACK_IMPORTED_MODULE_0__.ContactsComponent
      }];
      /***/
    },

    /***/
    68970:
    /*!***********************************************************!*\
      !*** ./src/app/components/contacts/contacts.component.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContactsComponent": function ContactsComponent() {
          return (
            /* binding */
            _ContactsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ContactsComponent = /*#__PURE__*/_createClass(function _ContactsComponent() {
        _classCallCheck(this, _ContactsComponent);
      });

      _ContactsComponent.ɵfac = function ContactsComponent_Factory(t) {
        return new (t || _ContactsComponent)();
      };

      _ContactsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ContactsComponent,
        selectors: [["contacts"]],
        decls: 34,
        vars: 0,
        consts: [[1, "page-content"], [1, "title"], [1, "content"], [1, "phone-block"], ["href", "tel:+358-0-40-8542468", 1, "contact-item", "link"], ["aria-hidden", "true", 1, "fas", "fa-phone", "fa-border", "contact-icon"], ["href", "https://api.whatsapp.com/send?phone=358408542468", "target", "_blank", 1, "contact-item"], ["aria-hidden", "true", 1, "fab", "fa-whatsapp", "contact-icon"], ["href", "https://t.me/fjdrodrigues", "target", "_blank", 1, "contact-item"], ["aria-hidden", "true", 1, "fab", "fa-telegram", "contact-icon"], [1, "email-block"], ["href", "mailto:info@raumasocialdancing.fi", "target", "_blank", 1, "contact-item", "link"], ["aria-hidden", "true", 1, "fas", "fa-envelope", "fa-border", "contact-icon"], [1, "location-block"], [1, "icon-address"], ["aria-hidden", "true", 1, "fas", "fa-map-marker-alt", "fa-border", "contact-icon"], [1, "address", "contact-item"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1926.0421124124823!2d21.487034716335504!3d61.1355364719437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46897e147a67f35b%3A0x77263e499466f482!2sHoito.Naturelli!5e0!3m2!1sen!2sfi!4v1622761230653!5m2!1sen!2sfi", "allowfullscreen", "", "loading", "lazy", 1, "map", 2, "border", "0"]],
        template: function ContactsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Contacts");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "+358 (0) 40 8542468");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " info@raumasocialdancing.fi ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Naturelli");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Syv\xE4raumankatu 14");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Rauma");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "iframe", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".contact-icon[_ngcontent-%COMP%]:not(:first-of-type) {\n  margin-left: 5px;\n}\n\n.contact-item[_ngcontent-%COMP%] {\n  word-break: break-all;\n}\n\n.contact-item[_ngcontent-%COMP%]:not(:first-of-type) {\n  margin-left: 10px;\n}\n\n.phone-block[_ngcontent-%COMP%], .whatsapp-group-block[_ngcontent-%COMP%]   .email-block[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.link[_ngcontent-%COMP%] {\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n}\n\n.whatsapp-group-block[_ngcontent-%COMP%], .email-block[_ngcontent-%COMP%], .location-block[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.location-block[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.icon-address[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.address[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n}\n\n@media (min-height: 800px) {\n  .map[_ngcontent-%COMP%] {\n    height: 400px;\n  }\n}\n\n@media (min-height: 900px) {\n  .map[_ngcontent-%COMP%] {\n    height: 500px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVDQUErQjtVQUEvQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoiY29udGFjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWN0LWljb246bm90KDpmaXJzdC1vZi10eXBlKSB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5jb250YWN0LWl0ZW0ge1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG5cbi5jb250YWN0LWl0ZW06bm90KDpmaXJzdC1vZi10eXBlKSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ucGhvbmUtYmxvY2ssIC53aGF0c2FwcC1ncm91cC1ibG9jayAuZW1haWwtYmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcbn1cblxuLndoYXRzYXBwLWdyb3VwLWJsb2NrLCAuZW1haWwtYmxvY2ssIC5sb2NhdGlvbi1ibG9jayB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi5sb2NhdGlvbi1ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5pY29uLWFkZHJlc3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hZGRyZXNzIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5tYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMDBweDtcbn1cblxuQG1lZGlhIChtaW4taGVpZ2h0OiA4MDBweCkge1xuICAubWFwIHtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWluLWhlaWdodDogOTAwcHgpIHtcbiAgLm1hcCB7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgfVxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    68088:
    /*!*********************************************************************!*\
      !*** ./src/app/components/dance/bachata/bachata-dance.component.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BachataDanceComponent": function BachataDanceComponent() {
          return (
            /* binding */
            _BachataDanceComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _shared_gallery_gallery_item_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shared/gallery/gallery-item.interface */
      24582);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _shared_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/gallery/gallery.component */
      31735);

      var _BachataDanceComponent = /*#__PURE__*/_createClass(function _BachataDanceComponent() {
        _classCallCheck(this, _BachataDanceComponent);

        this.modernBachataVideos = [{
          itemType: _shared_gallery_gallery_item_interface__WEBPACK_IMPORTED_MODULE_0__.GalleryItemType.video,
          url: "50phNVoO6bk",
          title: "Modern Bachata",
          description: "Sol & Nasti"
        }, {
          itemType: _shared_gallery_gallery_item_interface__WEBPACK_IMPORTED_MODULE_0__.GalleryItemType.video,
          url: "cm5j4Zbvqag",
          title: "Modern Bachata",
          description: "Grupo Extra - Me Emborrachare con Ataca, Alemana, Daniel y Desiree"
        }, {
          itemType: _shared_gallery_gallery_item_interface__WEBPACK_IMPORTED_MODULE_0__.GalleryItemType.video,
          url: "LfLD5if6VEU",
          title: "Modern Bachata",
          description: "Aimane & Brigitte",
          start: 8
        }];
        this.dominicanBachataVideos = [{
          itemType: _shared_gallery_gallery_item_interface__WEBPACK_IMPORTED_MODULE_0__.GalleryItemType.video,
          url: "abftct3_6Zo",
          title: "Dominican Bachata",
          description: "Christina and Junior",
          start: 16
        }, {
          itemType: _shared_gallery_gallery_item_interface__WEBPACK_IMPORTED_MODULE_0__.GalleryItemType.video,
          url: "6x4Nmn9RrAg",
          title: "Dominican Bachata",
          description: "Samy el Magico & Carolina",
          start: 8
        }, {
          itemType: _shared_gallery_gallery_item_interface__WEBPACK_IMPORTED_MODULE_0__.GalleryItemType.video,
          url: "yRZ0Lt0wb54",
          title: "Dominican Bachata",
          description: "Argenis & Carolina",
          start: 10,
          end: 183
        }, {
          itemType: _shared_gallery_gallery_item_interface__WEBPACK_IMPORTED_MODULE_0__.GalleryItemType.video,
          url: "MSZDfQTK1MA",
          title: "Dominican Bachata",
          description: "Oscar Nino & Carla"
        }, {
          itemType: _shared_gallery_gallery_item_interface__WEBPACK_IMPORTED_MODULE_0__.GalleryItemType.video,
          url: "sfmSw4lDMgw",
          title: "Dominican Bachata",
          description: "Pablo & Raquel"
        }];
        this.sensualBachataVideos = [{
          itemType: _shared_gallery_gallery_item_interface__WEBPACK_IMPORTED_MODULE_0__.GalleryItemType.video,
          url: "dX8yPE_0S5k",
          title: "Sensual Bachata",
          description: "Pablo & Raquel"
        }, {
          itemType: _shared_gallery_gallery_item_interface__WEBPACK_IMPORTED_MODULE_0__.GalleryItemType.video,
          url: "hXL_y30Dx-s",
          title: "Sensual Bachata",
          description: "Cornel & Rithika"
        }, {
          itemType: _shared_gallery_gallery_item_interface__WEBPACK_IMPORTED_MODULE_0__.GalleryItemType.video,
          url: "h9SGu96YgVw",
          title: "Sensual Bachata",
          description: "Korke & Judith"
        }, {
          itemType: _shared_gallery_gallery_item_interface__WEBPACK_IMPORTED_MODULE_0__.GalleryItemType.video,
          url: "ogzxiPx3Isc",
          title: "Sensual Bachata",
          description: "Daniel & Desiree",
          start: 8
        }];
      });

      _BachataDanceComponent.ɵfac = function BachataDanceComponent_Factory(t) {
        return new (t || _BachataDanceComponent)();
      };

      _BachataDanceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _BachataDanceComponent,
        selectors: [["bachata-dance"]],
        decls: 30,
        vars: 3,
        consts: [[1, "page-content"], [1, "title"], [1, "content"], [1, "intro"], [1, "gallery-title"], ["index", "0", 3, "items"], ["index", "1", 3, "items"], ["index", "2", 3, "items"]],
        template: function BachataDanceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Bachata");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Bachata is a dance form which originated in the Dominican Republic in the second half of the 20th century. It has its roots in Bolero and is traditionally danced in a square.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Its expansion to the Western civilisation brought influences from Salsa and Ballroom dances, and, consequently, the creation of ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Modern Bachata");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, ", which is danced side to side and involves turning patterns and dips. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Eventually, influences from Brazilian Zouk led to the creation of a widely popular dance style, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Bachata Sensual");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, ", which includes body waves, body isolations and dips. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Traditional/Dominican Bachata");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "adk-gallery", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Modern Bachata");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "adk-gallery", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Sensual Bachata");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "adk-gallery", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("items", ctx.dominicanBachataVideos);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("items", ctx.modernBachataVideos);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("items", ctx.sensualBachataVideos);
          }
        },
        directives: [_shared_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__.GalleryComponent],
        styles: [".gallery-title[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.gallery-title[_ngcontent-%COMP%]:not(:first-of-type) {\n  margin-top: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhY2hhdGEtZGFuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6ImJhY2hhdGEtZGFuY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nYWxsZXJ5LXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbi5nYWxsZXJ5LXRpdGxlOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG59Il19 */"]
      });
      /***/
    },

    /***/
    32945:
    /*!*****************************************************************************!*\
      !*** ./src/app/components/dance/cuban-salsa/cuban-salsa-dance.component.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CubanSalsaDanceComponent": function CubanSalsaDanceComponent() {
          return (
            /* binding */
            _CubanSalsaDanceComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _shared_gallery_gallery_item_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shared/gallery/gallery-item.interface */
      24582);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _shared_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/gallery/gallery.component */
      31735);

      var _CubanSalsaDanceComponent = /*#__PURE__*/_createClass(function _CubanSalsaDanceComponent() {
        _classCallCheck(this, _CubanSalsaDanceComponent);

        this.cubanSalsaVideos = [{
          itemType: _shared_gallery_gallery_item_interface__WEBPACK_IMPORTED_MODULE_0__.GalleryItemType.video,
          url: "5CLqh-pPzwQ",
          title: "Cuban Salsa",
          description: "Adonis Santiago & Cristina Bolbat"
        }, {
          itemType: _shared_gallery_gallery_item_interface__WEBPACK_IMPORTED_MODULE_0__.GalleryItemType.video,
          url: "M8XlkjUM00U",
          title: "Cuban Salsa",
          description: "Jonar Gonzalez & Pamela Brillet"
        }, {
          itemType: _shared_gallery_gallery_item_interface__WEBPACK_IMPORTED_MODULE_0__.GalleryItemType.video,
          url: "K9ffbbWJ2eY",
          title: "Cuban Salsa",
          description: "Lisandra & Victor"
        }, {
          itemType: _shared_gallery_gallery_item_interface__WEBPACK_IMPORTED_MODULE_0__.GalleryItemType.video,
          url: "_-GCRvTC5zk",
          title: "Cuban Salsa",
          description: "Osmani Segura & Desiree"
        }, {
          itemType: _shared_gallery_gallery_item_interface__WEBPACK_IMPORTED_MODULE_0__.GalleryItemType.video,
          url: "ECYWTfgGzlY",
          title: "Cuban Salsa",
          description: "Osbanis & Anneta"
        }, {
          itemType: _shared_gallery_gallery_item_interface__WEBPACK_IMPORTED_MODULE_0__.GalleryItemType.video,
          url: "U1WgrUQ1rJo",
          title: "Cuban Salsa",
          description: "Osbanis & Anneta"
        }];
      });

      _CubanSalsaDanceComponent.ɵfac = function CubanSalsaDanceComponent_Factory(t) {
        return new (t || _CubanSalsaDanceComponent)();
      };

      _CubanSalsaDanceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _CubanSalsaDanceComponent,
        selectors: [["cuban-salsa-dance"]],
        decls: 11,
        vars: 1,
        consts: [[1, "page-content"], [1, "title"], [1, "content"], [1, "intro"], ["index", "0", 3, "items"]],
        template: function CubanSalsaDanceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Cuban Salsa");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Cuban Salsa, also known as \"Casino\", is a dance form which originated in Cuba in the second half of the 20th century. It has its roots in the Cuban Son, with influences of Cuban Mambo, Cha Cha Cha, Danz\xF3n, Afro-Cuban Rumba and Afro-Cuban Folklore. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Contrasting with the North-American Salsa styles (L.A. and N.Y.), which are known as \"Line Salsa\" and danced in a linear fashion, Cuban Salsa is danced in a circular fashion, with complex patterns of arms and body movement. Body and muscle isolations are highly emphasised, with men and women playing strong masculine and feminine roles. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "adk-gallery", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("items", ctx.cubanSalsaVideos);
          }
        },
        directives: [_shared_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__.GalleryComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdWJhbi1zYWxzYS1kYW5jZS5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    40185:
    /*!**********************************************************!*\
      !*** ./src/app/components/dance/dance-routing.module.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "danceRoutes": function danceRoutes() {
          return (
            /* binding */
            _danceRoutes
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _kizomba_kizomba_dance_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./kizomba/kizomba-dance.component */
      18313);
      /* harmony import */


      var _bachata_bachata_dance_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./bachata/bachata-dance.component */
      68088);
      /* harmony import */


      var _cuban_salsa_cuban_salsa_dance_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cuban-salsa/cuban-salsa-dance.component */
      32945);
      /* harmony import */


      var _other_other_dance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./other/other-dance.component */
      65637);

      var _danceRoutes = [{
        path: 'dance/cubansalsa',
        component: _cuban_salsa_cuban_salsa_dance_component__WEBPACK_IMPORTED_MODULE_2__.CubanSalsaDanceComponent
      }, {
        path: 'dance/bachata',
        component: _bachata_bachata_dance_component__WEBPACK_IMPORTED_MODULE_1__.BachataDanceComponent
      }, {
        path: 'dance/kizomba',
        component: _kizomba_kizomba_dance_component__WEBPACK_IMPORTED_MODULE_0__.KizombaDanceComponent
      }, {
        path: 'dance/others',
        component: _other_other_dance_component__WEBPACK_IMPORTED_MODULE_3__.OtherDanceComponent
      }];
      /***/
    },

    /***/
    44868:
    /*!*****************************************************!*\
      !*** ./src/app/components/dance/dance.component.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DanceComponent": function DanceComponent() {
          return (
            /* binding */
            _DanceComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _DanceComponent = /*#__PURE__*/_createClass(function _DanceComponent() {
        _classCallCheck(this, _DanceComponent);
      });

      _DanceComponent.ɵfac = function DanceComponent_Factory(t) {
        return new (t || _DanceComponent)();
      };

      _DanceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _DanceComponent,
        selectors: [["dance"]],
        decls: 4,
        vars: 0,
        template: function DanceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Dance");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Dance is Life.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYW5jZS5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    18313:
    /*!*********************************************************************!*\
      !*** ./src/app/components/dance/kizomba/kizomba-dance.component.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "KizombaDanceComponent": function KizombaDanceComponent() {
          return (
            /* binding */
            _KizombaDanceComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _shared_gallery_gallery_item_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shared/gallery/gallery-item.interface */
      24582);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _shared_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/gallery/gallery.component */
      31735);

      var _KizombaDanceComponent = /*#__PURE__*/_createClass(function _KizombaDanceComponent() {
        _classCallCheck(this, _KizombaDanceComponent);

        this.kizombaVideos = [{
          itemType: _shared_gallery_gallery_item_interface__WEBPACK_IMPORTED_MODULE_0__.GalleryItemType.video,
          url: "8uNx-Yh1Mus",
          title: "Kizomba",
          description: "Giedre & João"
        }, {
          itemType: _shared_gallery_gallery_item_interface__WEBPACK_IMPORTED_MODULE_0__.GalleryItemType.video,
          url: "RZcbZ2-Gn10",
          title: "Kizomba",
          description: "###"
        }];
        this.sembaVideos = [{
          itemType: _shared_gallery_gallery_item_interface__WEBPACK_IMPORTED_MODULE_0__.GalleryItemType.video,
          url: "7Up9QHPUVW0",
          title: "Semba",
          description: "Bonifácio Áurio"
        }, {
          itemType: _shared_gallery_gallery_item_interface__WEBPACK_IMPORTED_MODULE_0__.GalleryItemType.video,
          url: "i6-RJsQfIEw",
          title: "Semba",
          description: "???"
        }, {
          itemType: _shared_gallery_gallery_item_interface__WEBPACK_IMPORTED_MODULE_0__.GalleryItemType.video,
          url: "-5s_jfnYWtg",
          title: "Semba",
          description: "!!!"
        }];
        this.tarraxinhaVideos = [{
          itemType: _shared_gallery_gallery_item_interface__WEBPACK_IMPORTED_MODULE_0__.GalleryItemType.video,
          url: "NtEZ8a39u48",
          title: "Tarraxinha",
          description: "$$$"
        }, {
          itemType: _shared_gallery_gallery_item_interface__WEBPACK_IMPORTED_MODULE_0__.GalleryItemType.video,
          url: "HuQfuutKlzE",
          title: "Tarraxinha",
          description: "%%%"
        }];
      });

      _KizombaDanceComponent.ɵfac = function KizombaDanceComponent_Factory(t) {
        return new (t || _KizombaDanceComponent)();
      };

      _KizombaDanceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _KizombaDanceComponent,
        selectors: [["kizomba-dance"]],
        decls: 35,
        vars: 3,
        consts: [[1, "page-content"], [1, "title"], [1, "content"], [1, "intro"], [1, "gallery-title"], ["index", "0", 3, "items"], ["index", "1", 3, "items"], ["index", "2", 3, "items"]],
        template: function KizombaDanceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Kizomba");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Kizomba");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " is a word in Kimbundu, an Angolan language, which means \"Party\". Though the word was first attributed to a music style, coined from the influence of Caribbean Zouk music in Angolan ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Semba");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " music, the adaptation of Semba dance to this new music style gave origin to Kizomba as a dance.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Though the origin of the name is undisputed, both the music and the dance have in reality different origins, inside the PALOP (Portuguese-speaking African countries). The dance had been known simply as \"Passada\", which means \"step\" or a pattern of steps. The music in PALOP countries other than Angola was equally influenced by Zouk, giving origin to an umbrella of music, today labeled Kizomba.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " The Kizomba dance is characterised by a strong connection to the ground, close connection between partners and using smooth body movement to express the music.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Tarraxinha");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, ", Portuguese word which refers us to \"a screw in a bolt\", is a dance which is danced in the same place, through smooth hip movements, which are in contact with the partner. Originally, this dance was practiced between romantic couples. However, today it became a social form of dance and is often used in beatless parts of the music.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " The expansion of Kizomba, Semba and Tarraxinha to the Western civilisation, in particular France, where Zouk was already popular, brought influences from electronic music and different dance styles, which led to the creation of a different dance style, today labeled as Urban Kiz. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Kizomba");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "adk-gallery", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Semba");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "adk-gallery", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Tarraxinha");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "adk-gallery", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("items", ctx.kizombaVideos);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("items", ctx.sembaVideos);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("items", ctx.tarraxinhaVideos);
          }
        },
        directives: [_shared_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__.GalleryComponent],
        styles: [".gallery-title[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.gallery-title[_ngcontent-%COMP%]:not(:first-of-type) {\n  margin-top: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtpem9tYmEtZGFuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6Imtpem9tYmEtZGFuY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nYWxsZXJ5LXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbi5nYWxsZXJ5LXRpdGxlOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG59Il19 */"]
      });
      /***/
    },

    /***/
    65637:
    /*!*****************************************************************!*\
      !*** ./src/app/components/dance/other/other-dance.component.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OtherDanceComponent": function OtherDanceComponent() {
          return (
            /* binding */
            _OtherDanceComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _shared_video_video_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shared/video/video.component */
      48522);

      var _OtherDanceComponent = /*#__PURE__*/_createClass(function _OtherDanceComponent() {
        _classCallCheck(this, _OtherDanceComponent);
      });

      _OtherDanceComponent.ɵfac = function OtherDanceComponent_Factory(t) {
        return new (t || _OtherDanceComponent)();
      };

      _OtherDanceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _OtherDanceComponent,
        selectors: [["other-dance"]],
        decls: 43,
        vars: 0,
        consts: [[1, "page-content"], [1, "title"], [1, "content"], [1, "content-header"], [1, "dance-style-block"], [1, "dance-style-name"], ["src", "https://gist.githubusercontent.com/fjdrodrigues/b44ca4fd865f2bb0cc9d6271d607e6b1/raw/9f38beffbcfb5547f10458692fe2e066456c8949/dominican-republic-flag.svg", 1, "flag"], [1, "dance-style-video"], ["videoIndex", "0", "videoSource", "LRIpkHuCagw"], ["src", "https://gist.githubusercontent.com/fjdrodrigues/de17acff197fd9cb5b5c90698e1e3d28/raw/e4a2a2ca4e2a144ce1766492fa140c931c54fed6/cuba-flag.svg", 1, "flag"], ["videoIndex", "1", "videoSource", "ooxY2wIBhq4"], ["videoIndex", "2", "videoSource", "JaNfdh0iWCg"], ["videoIndex", "3", "videoSource", "-M4f5X0zdCk", "start", "80", "end", "314"], ["src", "https://gist.githubusercontent.com/fjdrodrigues/f60c74284718fa38ceb8877505b68555/raw/5d4d9152a6ef46da014d73d964aae1a3803afdd1/angola-flag.svg", 1, "flag"], ["videoIndex", "4", "videoSource", "C1TgsOLaEXg"], ["src", "https://gist.githubusercontent.com/fjdrodrigues/5ed1c4c0109b16aed64c6651793ff6b0/raw/010417da6298169c38e4ae1b8411198486734eac/cape-verde-flag.svg", 1, "flag"], ["videoIndex", "5", "videoSource", "4ZT57ujIHLA"]],
        template: function OtherDanceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Other Dance Styles");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Other dance styles we practice are:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Merengue - Dominican Republic ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "adk-video", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Son - Cuba ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "adk-video", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Cuban Rumba - Cuba ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "adk-video", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Afro-Cuban Orishas - Cuba ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "adk-video", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "AfroKuduro - Angola ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "adk-video", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Funana - Cape Verde ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "adk-video", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        directives: [_shared_video_video_component__WEBPACK_IMPORTED_MODULE_0__.VideoComponent],
        styles: [".content-header[_ngcontent-%COMP%] {\n\n}\n\n.dance-style-block[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n\n.dance-style-block[_ngcontent-%COMP%]:not(:last-of-type) {\n  border-bottom: 2px solid #d79922;\n}\n\n.dance-style-name[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  font-weight: 700;\n}\n\n.flag[_ngcontent-%COMP%] {\n  height: 20px;\n}\n\n.dance-style-video[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-bottom: 1.5rem;\n  width: 100%;\n  height: calc((8/12 * 100vw - 10px) * 0.5625);\n  box-sizing: border-box;\n  position: relative;\n  overflow: hidden;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n\n@media (max-width: 767px) {\n  .dance-style-video[_ngcontent-%COMP%] {\n    width: 100%;\n    height: calc((100vw - 20px) * 0.5625);\n  }\n}\n\nadk-video.dance-style-video[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90aGVyLWRhbmNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsNENBQTRDO0VBQzVDLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRTtJQUNFLFdBQVc7SUFDWCxxQ0FBcUM7RUFDdkM7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6Im90aGVyLWRhbmNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1oZWFkZXIge1xuXG59XG5cbi5kYW5jZS1zdHlsZS1ibG9jayB7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbn1cblxuLmRhbmNlLXN0eWxlLWJsb2NrOm5vdCg6bGFzdC1vZi10eXBlKSB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZDc5OTIyO1xufVxuXG4uZGFuY2Utc3R5bGUtbmFtZSB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5mbGFnIHtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uZGFuY2Utc3R5bGUtdmlkZW8ge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoKDgvMTIgKiAxMDB2dyAtIDEwcHgpICogMC41NjI1KTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5kYW5jZS1zdHlsZS12aWRlbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBjYWxjKCgxMDB2dyAtIDIwcHgpICogMC41NjI1KTtcbiAgfVxufVxuXG5hZGstdmlkZW8uZGFuY2Utc3R5bGUtdmlkZW8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    32983:
    /*!****************************************************************************!*\
      !*** ./src/app/components/shared/carousel-item/carousel-item.component.ts ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CarouselItemComponent": function CarouselItemComponent() {
          return (
            /* binding */
            _CarouselItemComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _CarouselItemComponent = /*#__PURE__*/_createClass(function _CarouselItemComponent(elementRef) {
        _classCallCheck(this, _CarouselItemComponent);

        this.elementRef = elementRef;
      });

      _CarouselItemComponent.ɵfac = function CarouselItemComponent_Factory(t) {
        return new (t || _CarouselItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
      };

      _CarouselItemComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _CarouselItemComponent,
        selectors: [["adk-carousel-item"]],
        inputs: {
          itemIndex: "itemIndex",
          imgSrc: "imgSrc",
          imgHyperlink: "imgHyperlink",
          title: "title",
          description: "description"
        },
        decls: 9,
        vars: 7,
        consts: [[1, "carousel-grid"], [1, "carousel-title", 3, "href"], [1, "carousel-h3"], [1, "carousel-description", 3, "href"], [1, "carousel-h5"], [1, "image-link", 3, "href"], [1, "image", 3, "src", "alt"]],
        template: function CarouselItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.imgHyperlink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.imgHyperlink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.imgHyperlink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.description);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          }
        },
        styles: [".carousel-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template: [row1] \". . . . . . .\" auto [row1-end]\n    [row2] \". . . title . . .\" auto [row2-end]\n    [row3] \". . . . . . .\" 0.3rem [row3-end]\n    [row4] \". . description description description . .\" auto [row4-end]\n    [row5] \". . . . . . .\" 2.5rem [row5-end] / 0.3rem 1fr auto auto auto 1fr 0.3rem;\n}\n.carousel-title[_ngcontent-%COMP%], .carousel-description[_ngcontent-%COMP%] {\n  z-index: 11;\n  text-align: center;\n  color: #4056a1;\n  background-color: #efe2ba;\n  padding: 0 0.2rem 0 0.2rem;\n  text-decoration: none;\n  border-radius: 0.25rem;\n}\n.carousel-title[_ngcontent-%COMP%] {\n  grid-area: title;\n}\n.carousel-description[_ngcontent-%COMP%] {\n  grid-area: description;\n}\n.carousel-h3[_ngcontent-%COMP%], .carousel-h5[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem;\n}\n.carousel-title[_ngcontent-%COMP%]   .carousel-h3[_ngcontent-%COMP%] {\n  line-height: 1;\n  font-weight: 800;\n}\n.carousel-description[_ngcontent-%COMP%]   .carousel-h5[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n.image-link[_ngcontent-%COMP%] {\n  grid-area: 1 / 1 / 6 / 8;\n  border-radius: 0.25rem;\n}\n.image[_ngcontent-%COMP%] {\n  z-index: 10;\n  width: 100%;\n  display: block;\n  border-radius: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYjs7OzttRkFJaUY7QUFDbkY7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7RUFDZCxzQkFBc0I7QUFDeEIiLCJmaWxlIjoiY2Fyb3VzZWwtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcm91c2VsLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlOiBbcm93MV0gXCIuIC4gLiAuIC4gLiAuXCIgYXV0byBbcm93MS1lbmRdXG4gICAgW3JvdzJdIFwiLiAuIC4gdGl0bGUgLiAuIC5cIiBhdXRvIFtyb3cyLWVuZF1cbiAgICBbcm93M10gXCIuIC4gLiAuIC4gLiAuXCIgMC4zcmVtIFtyb3czLWVuZF1cbiAgICBbcm93NF0gXCIuIC4gZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gLiAuXCIgYXV0byBbcm93NC1lbmRdXG4gICAgW3JvdzVdIFwiLiAuIC4gLiAuIC4gLlwiIDIuNXJlbSBbcm93NS1lbmRdIC8gMC4zcmVtIDFmciBhdXRvIGF1dG8gYXV0byAxZnIgMC4zcmVtO1xufVxuLmNhcm91c2VsLXRpdGxlLCAuY2Fyb3VzZWwtZGVzY3JpcHRpb24ge1xuICB6LWluZGV4OiAxMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzQwNTZhMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZTJiYTtcbiAgcGFkZGluZzogMCAwLjJyZW0gMCAwLjJyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbn1cbi5jYXJvdXNlbC10aXRsZSB7XG4gIGdyaWQtYXJlYTogdGl0bGU7XG59XG4uY2Fyb3VzZWwtZGVzY3JpcHRpb24ge1xuICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xufVxuLmNhcm91c2VsLWgzLCAuY2Fyb3VzZWwtaDUge1xuICBtYXJnaW4tYm90dG9tOiAwLjNyZW07XG59XG4uY2Fyb3VzZWwtdGl0bGUgLmNhcm91c2VsLWgzIHtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4uY2Fyb3VzZWwtZGVzY3JpcHRpb24gLmNhcm91c2VsLWg1IHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5pbWFnZS1saW5rIHtcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDYgLyA4O1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuLmltYWdlIHtcbiAgei1pbmRleDogMTA7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    88114:
    /*!******************************************************************!*\
      !*** ./src/app/components/shared/carousel/carousel.component.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CarouselComponent": function CarouselComponent() {
          return (
            /* binding */
            _CarouselComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs_internal_observable_interval__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/internal/observable/interval */
      25490);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _carousel_item_carousel_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../carousel-item/carousel-item.component */
      32983);

      var _c0 = ["carouselItem"];

      function CarouselComponent_li_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarouselComponent_li_6_Template_li_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

            var i_r5 = restoredCtx.index;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r6.select(i_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r5 = ctx.index;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", i_r5 === ctx_r2.selectedIndex);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-selected", i_r5 === ctx_r2.selectedIndex);
        }
      }

      function CarouselComponent_adk_carousel_item_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "adk-carousel-item", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("touchstart", function CarouselComponent_adk_carousel_item_8_Template_adk_carousel_item_touchstart_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r11.swipe($event, "start");
          })("touchmove", function CarouselComponent_adk_carousel_item_8_Template_adk_carousel_item_touchmove_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r13.moveItem($event);
          })("touchend", function CarouselComponent_adk_carousel_item_8_Template_adk_carousel_item_touchend_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r14.swipe($event, "end");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r8 = ctx.$implicit;
          var i_r9 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", i_r9 === ctx_r3.selectedIndex);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("itemIndex", i_r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("imgSrc", item_r8.url);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", item_r8.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("imgHyperlink", item_r8.hyperlink);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("description", item_r8.description);
        }
      }

      var _CarouselComponent = /*#__PURE__*/function () {
        function _CarouselComponent() {
          _classCallCheck(this, _CarouselComponent);

          this.hoovered = false;
          this.selectedIndex = 0;
          this.itemDraggedToRight = false;
          this.itemDraggedToLeft = false;
          this.currentItemLeftProperty = 0;
          this.nextItemLeftProperty = 100;
          this.prevItemLeftProperty = -100;
        }

        _createClass(_CarouselComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            //in 10 seconds do something
            (0, rxjs_internal_observable_interval__WEBPACK_IMPORTED_MODULE_2__.interval)(5000).subscribe(function (x) {
              var nextSlideIndex = _this.selectedIndex == _this.items.length - 1 ? 0 : _this.selectedIndex + 1;

              if (!_this.hoovered) {
                _this.select(nextSlideIndex);
              }
            });
          }
        }, {
          key: "select",
          value: function select(index) {
            var _this2 = this;

            if (this.selectedIndex !== index) {
              var previousSelectedIndex = this.selectedIndex;
              var previousItem = this.carouselItems.find(function (carouselItem) {
                return carouselItem.itemIndex == previousSelectedIndex;
              }).elementRef.nativeElement;
              previousItem.classList.add("carousel-prev-item");
              this.selectedIndex = index;
              var newItem = this.carouselItems.find(function (carouselItem) {
                return carouselItem.itemIndex == _this2.selectedIndex;
              }).elementRef.nativeElement;

              if (previousSelectedIndex < this.selectedIndex) {
                previousItem.animate([{
                  left: '0'
                }, {
                  left: '-100%'
                }], {
                  duration: 500,
                  fill: "forwards"
                }).onfinish = function () {
                  previousItem.classList.remove("carousel-prev-item");
                };

                newItem.style.left = "100%";
                newItem.animate([{
                  left: '100%'
                }, {
                  left: '0'
                }], {
                  duration: 500,
                  fill: "forwards"
                });
              } else {
                previousItem.animate([{
                  left: '0'
                }, {
                  left: '100%'
                }], {
                  duration: 500,
                  fill: "forwards"
                }).onfinish = function () {
                  previousItem.classList.remove("carousel-prev-item");
                };

                newItem.style.left = "-100%";
                newItem.animate([{
                  left: '-100%'
                }, {
                  left: '0'
                }], {
                  duration: 500,
                  fill: "forwards"
                });
              }
            }
          }
        }, {
          key: "slideRight",
          value: function slideRight() {
            var _this3 = this;

            var previousSelectedIndex = this.selectedIndex;
            var previousItem = this.carouselItems.find(function (carouselItem) {
              return carouselItem.itemIndex == previousSelectedIndex;
            }).elementRef.nativeElement;
            previousItem.classList.add("carousel-prev-item");
            this.selectedIndex = this.selectedIndex >= this.items.length - 1 ? 0 : ++this.selectedIndex;

            previousItem.animate([{
              left: '0'
            }, {
              left: '-100%'
            }], {
              duration: 500,
              fill: "forwards"
            }).onfinish = function () {
              previousItem.classList.remove("carousel-prev-item");
            };

            var newItem = this.carouselItems.find(function (carouselItem) {
              return carouselItem.itemIndex == _this3.selectedIndex;
            }).elementRef.nativeElement;
            newItem.style.left = "100%";
            newItem.animate([{
              left: '100%'
            }, {
              left: '0'
            }], {
              duration: 500,
              fill: "forwards"
            });
            this.itemDraggedToRight = false;
            this.itemDraggedToLeft = false;
            this.currentItemLeftProperty = 0;
            this.nextItemLeftProperty = 100;
            this.prevItemLeftProperty = -100;
          }
        }, {
          key: "slideLeft",
          value: function slideLeft() {
            var _this4 = this;

            var previousSelectedIndex = this.selectedIndex;
            var previousItem = this.carouselItems.find(function (carouselItem) {
              return carouselItem.itemIndex == previousSelectedIndex;
            }).elementRef.nativeElement;
            previousItem.classList.add("carousel-prev-item");
            this.selectedIndex = this.selectedIndex === 0 ? this.items.length - 1 : --this.selectedIndex;

            previousItem.animate([{
              left: '0'
            }, {
              left: '100%'
            }], {
              duration: 500,
              fill: "forwards"
            }).onfinish = function () {
              previousItem.classList.remove("carousel-prev-item");
            };

            var newItem = this.carouselItems.find(function (carouselItem) {
              return carouselItem.itemIndex == _this4.selectedIndex;
            }).elementRef.nativeElement;
            newItem.style.left = "-100%";
            newItem.animate([{
              left: '-100%'
            }, {
              left: '0'
            }], {
              duration: 500,
              fill: "forwards"
            });
            this.itemDraggedToRight = false;
            this.itemDraggedToLeft = false;
            this.currentItemLeftProperty = 0;
            this.nextItemLeftProperty = 100;
            this.prevItemLeftProperty = -100;
          }
        }, {
          key: "completeSwipeRight",
          value: function completeSwipeRight() {
            var _this5 = this;

            var previousSelectedIndex = this.selectedIndex;
            var previousItem = this.carouselItems.find(function (carouselItem) {
              return carouselItem.itemIndex == previousSelectedIndex;
            }).elementRef.nativeElement;
            previousItem.classList.add("carousel-prev-item");
            this.selectedIndex = this.selectedIndex === 0 ? this.items.length - 1 : --this.selectedIndex;

            previousItem.animate([{
              left: this.currentItemLeftProperty.toString(10) + '%'
            }, {
              left: '100%'
            }], {
              duration: 500,
              fill: "forwards"
            }).onfinish = function () {
              previousItem.classList.remove("carousel-prev-item");
            };

            var newItem = this.carouselItems.find(function (carouselItem) {
              return carouselItem.itemIndex == _this5.selectedIndex;
            }).elementRef.nativeElement;
            newItem.animate([{
              left: this.prevItemLeftProperty.toString(10) + '%'
            }, {
              left: '0'
            }], {
              duration: 500,
              fill: "forwards"
            });
            this.currentItemLeftProperty = 0;
            this.prevItemLeftProperty = -100;
          }
        }, {
          key: "completeSwipeLeft",
          value: function completeSwipeLeft() {
            var _this6 = this;

            var previousSelectedIndex = this.selectedIndex;
            var previousItem = this.carouselItems.find(function (carouselItem) {
              return carouselItem.itemIndex == previousSelectedIndex;
            }).elementRef.nativeElement;
            previousItem.classList.add("carousel-prev-item");
            this.selectedIndex = this.selectedIndex >= this.items.length - 1 ? 0 : ++this.selectedIndex;

            previousItem.animate([{
              left: this.currentItemLeftProperty.toString(10) + '%'
            }, {
              left: '-100%'
            }], {
              duration: 500,
              fill: "forwards"
            }).onfinish = function () {
              previousItem.classList.remove("carousel-prev-item");
            };

            var newItem = this.carouselItems.find(function (carouselItem) {
              return carouselItem.itemIndex == _this6.selectedIndex;
            }).elementRef.nativeElement;
            newItem.animate([{
              left: this.nextItemLeftProperty.toString(10) + '%'
            }, {
              left: '0'
            }], {
              duration: 500,
              fill: "forwards"
            });
            this.currentItemLeftProperty = 0;
            this.nextItemLeftProperty = 100;
          }
        }, {
          key: "dragItem",
          value: function dragItem(direction) {
            var _this7 = this;

            if (direction > 0) {
              //right, next ++
              this.itemDraggedToRight = true;
              var currentItem = this.carouselItems.find(function (carouselItem) {
                return carouselItem.itemIndex == _this7.selectedIndex;
              }).elementRef.nativeElement;
              var prevItem = this.carouselItems.find(function (carouselItem) {
                return carouselItem.itemIndex == (_this7.selectedIndex === 0 ? _this7.items.length - 1 : _this7.selectedIndex - 1);
              }).elementRef.nativeElement;
              prevItem.classList.add("carousel-prev-item");
              prevItem.style.left = "-100%";
              var percentageToMove = direction / currentItem.offsetWidth * 100;

              if (percentageToMove <= 100) {
                this.currentItemLeftProperty = 0 + percentageToMove;
                var value = this.currentItemLeftProperty.toString(10) + '%';
                currentItem.animate([{
                  left: '0'
                }, {
                  left: value
                }], {
                  duration: 0,
                  fill: "forwards"
                });
                this.prevItemLeftProperty = -100 + percentageToMove;
                value = this.prevItemLeftProperty.toString(10) + '%';
                prevItem.animate([{
                  left: '-100%'
                }, {
                  left: value
                }], {
                  duration: 0,
                  fill: "forwards"
                });
              }
            } else {
              //left, next --
              this.itemDraggedToLeft = true;
              var _currentItem = this.carouselItems.find(function (carouselItem) {
                return carouselItem.itemIndex == _this7.selectedIndex;
              }).elementRef.nativeElement;
              var nextItem = this.carouselItems.find(function (carouselItem) {
                return carouselItem.itemIndex == (_this7.selectedIndex >= _this7.items.length - 1 ? 0 : _this7.selectedIndex + 1);
              }).elementRef.nativeElement;
              nextItem.classList.add("carousel-next-item");
              nextItem.style.left = "100%";

              var _percentageToMove = direction / _currentItem.offsetWidth * 100;

              if (_percentageToMove >= -100) {
                this.currentItemLeftProperty = 0 + _percentageToMove;

                var _value = this.currentItemLeftProperty.toString(10) + '%';

                _currentItem.animate([{
                  left: '0'
                }, {
                  left: _value
                }], {
                  duration: 0,
                  fill: "forwards"
                });

                this.nextItemLeftProperty = 100 + _percentageToMove;
                _value = this.nextItemLeftProperty.toString(10) + '%';
                console.log(_value);
                nextItem.animate([{
                  left: '100%'
                }, {
                  left: _value
                }], {
                  duration: 0,
                  fill: "forwards"
                });
              }
            }
          }
        }, {
          key: "swipe",
          value: function swipe(e, when) {
            var _this8 = this;

            var coord = [e.changedTouches[0].clientX, e.changedTouches[0].clientY];
            var time = new Date().getTime();

            if (when === 'start') {
              this.swipeCoord = coord;
              this.swipeTime = time;
            } else if (when === 'end') {
              var direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
              var duration = time - this.swipeTime;
              var currentItem = this.carouselItems.find(function (carouselItem) {
                return carouselItem.itemIndex == _this8.selectedIndex;
              }).elementRef.nativeElement;
              var percentageToMove = direction[0] / currentItem.offsetWidth * 100;

              if (Math.abs(percentageToMove) > 30) {
                // Long enough
                var swipe = direction[0] < 0 ? 'next' : 'previous'; // Do whatever you want with swipe

                if (swipe === "next") {
                  this.completeSwipeLeft();
                } else {
                  this.completeSwipeRight();
                }
              } else {
                if (this.itemDraggedToRight) {
                  var _currentItem2 = this.carouselItems.find(function (carouselItem) {
                    return carouselItem.itemIndex == _this8.selectedIndex;
                  }).elementRef.nativeElement;
                  var prevItem = this.carouselItems.find(function (carouselItem) {
                    return carouselItem.itemIndex == (_this8.selectedIndex === 0 ? _this8.items.length - 1 : _this8.selectedIndex - 1);
                  }).elementRef.nativeElement;

                  _currentItem2.animate([{
                    left: this.currentItemLeftProperty.toString(10) + '%'
                  }, {
                    left: '0'
                  }], {
                    duration: 300,
                    fill: "forwards"
                  });

                  prevItem.animate([{
                    left: this.prevItemLeftProperty.toString(10) + '%'
                  }, {
                    left: '-100%'
                  }], {
                    duration: 300,
                    fill: "forwards"
                  }).onfinish = function () {
                    prevItem.classList.remove("carousel-prev-item");
                  };
                } else if (this.itemDraggedToLeft) {
                  var _currentItem3 = this.carouselItems.find(function (carouselItem) {
                    return carouselItem.itemIndex == _this8.selectedIndex;
                  }).elementRef.nativeElement;
                  var nextItem = this.carouselItems.find(function (carouselItem) {
                    return carouselItem.itemIndex == (_this8.selectedIndex >= _this8.items.length - 1 ? 0 : _this8.selectedIndex + 1);
                  }).elementRef.nativeElement;

                  _currentItem3.animate([{
                    left: this.currentItemLeftProperty.toString(10) + '%'
                  }, {
                    left: '0'
                  }], {
                    duration: 300,
                    fill: "forwards"
                  });

                  nextItem.animate([{
                    left: this.nextItemLeftProperty.toString(10) + '%'
                  }, {
                    left: '100%'
                  }], {
                    duration: 300,
                    fill: "forwards"
                  }).onfinish = function () {
                    nextItem.classList.remove("carousel-next-item");
                  };
                }

                this.itemDraggedToRight = false;
                this.itemDraggedToLeft = false;
                this.currentItemLeftProperty = 0;
                this.nextItemLeftProperty = 100;
                this.prevItemLeftProperty = -100;
              }
            }
          }
        }, {
          key: "moveItem",
          value: function moveItem(e) {
            var coord = [e.changedTouches[0].clientX, e.changedTouches[0].clientY];
            var direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
            this.dragItem(direction[0]);
          }
        }]);

        return _CarouselComponent;
      }();

      _CarouselComponent.ɵfac = function CarouselComponent_Factory(t) {
        return new (t || _CarouselComponent)();
      };

      _CarouselComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _CarouselComponent,
        selectors: [["adk-carousel"]],
        viewQuery: function CarouselComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.carouselItems = _t);
          }
        },
        inputs: {
          items: "items"
        },
        decls: 9,
        vars: 2,
        consts: [[1, "carousel", 3, "mouseover", "mouseout"], [1, "fas", "fa-chevron-left", "left-arrow", "arrow", 3, "click"], ["arrows", ""], [1, "fas", "fa-chevron-right", "right-arrow", "arrow", 3, "click"], [1, "adk-carousel-indicators"], [3, "active", "click", 4, "ngFor", "ngForOf"], [1, "carousel-inner"], ["class", "slide", 3, "active", "itemIndex", "imgSrc", "title", "imgHyperlink", "description", "touchstart", "touchmove", "touchend", 4, "ngFor", "ngForOf"], [3, "click"], [1, "fas", "fa-minus", "indicator"], [1, "slide", 3, "itemIndex", "imgSrc", "title", "imgHyperlink", "description", "touchstart", "touchmove", "touchend"], ["carouselItem", ""]],
        template: function CarouselComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseover", function CarouselComponent_Template_div_mouseover_0_listener() {
              return ctx.hoovered = true;
            })("mouseout", function CarouselComponent_Template_div_mouseout_0_listener() {
              return ctx.hoovered = false;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarouselComponent_Template_i_click_1_listener() {
              return ctx.slideLeft();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "i", 3, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarouselComponent_Template_i_click_3_listener() {
              return ctx.slideRight();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ol", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CarouselComponent_li_6_Template, 2, 3, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CarouselComponent_adk_carousel_item_8_Template, 2, 7, "adk-carousel-item", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _carousel_item_carousel_item_component__WEBPACK_IMPORTED_MODULE_0__.CarouselItemComponent],
        styles: [".carousel[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n\nol.adk-carousel-indicators[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin-bottom: 1rem;\n  margin-left: 15%;\n  margin-right: 15%;\n  z-index: 11;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  list-style: none;\n  padding-left: 0;\n}\n\nol.adk-carousel-indicators[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%], ol.adk-carousel-indicators[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%] {\n   color: white;\n   padding: 0.3rem;\n   cursor: pointer;\n   font-size: x-large;\n}\n\nol.adk-carousel-indicators[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%] {\n  color: rgba(255,255,255,0.39);\n}\n\nol.adk-carousel-indicators[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(.active)   .indicator[_ngcontent-%COMP%]:hover {\n  color: rgba(255, 255, 255, 0.733);\n}\n\n@media (max-width: 767px) {\n  .carousel[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: 20% 0 20% 0;\n  display: flex;\n  align-items: center;\n  z-index: 11;\n  color: white;\n  font-size: x-large;\n  cursor: pointer;\n  padding: 0.3rem 0.9rem 0.3rem 0.9rem;\n}\n\n.arrow[_ngcontent-%COMP%]:hover {\n  color: #ffffffbb;\n}\n\n.left-arrow[_ngcontent-%COMP%] {\n  left: 10px;\n}\n\n.right-arrow[_ngcontent-%COMP%] {\n  right: 10px;\n}\n\n.slide[_ngcontent-%COMP%] {\n  position: relative;\n  float: left;\n  margin-right: -100%;\n  width: 100%;\n  overflow: hidden;\n  z-index: 10;\n  display: none;\n}\n\n.carousel-next-item[_ngcontent-%COMP%], .carousel-prev-item[_ngcontent-%COMP%], .slide.active[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.slide[_ngcontent-%COMP%]:first-of-type{\n  left: 0;\n}\n\n.carousel-inner[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBQ0E7O0dBRUcsWUFBWTtHQUNaLGVBQWU7R0FDZixlQUFlO0dBQ2Ysa0JBQWtCO0FBQ3JCOztBQUNBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUNBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUNBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixvQ0FBb0M7QUFDdEM7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsT0FBTztBQUNUOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvdXNlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxub2wuYWRrLWNhcm91c2VsLWluZGljYXRvcnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIG1hcmdpbi1sZWZ0OiAxNSU7XG4gIG1hcmdpbi1yaWdodDogMTUlO1xuICB6LWluZGV4OiAxMTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbm9sLmFkay1jYXJvdXNlbC1pbmRpY2F0b3JzIGxpIC5pbmRpY2F0b3IsXG5vbC5hZGstY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaS5hY3RpdmUgLmluZGljYXRvciB7XG4gICBjb2xvcjogd2hpdGU7XG4gICBwYWRkaW5nOiAwLjNyZW07XG4gICBjdXJzb3I6IHBvaW50ZXI7XG4gICBmb250LXNpemU6IHgtbGFyZ2U7XG59XG5vbC5hZGstY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSAuaW5kaWNhdG9yIHtcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4zOSk7XG59XG5vbC5hZGstY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaTpub3QoLmFjdGl2ZSkgLmluZGljYXRvcjpob3ZlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzMzKTtcbn0gXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNhcm91c2VsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLmFycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiAyMCUgMCAyMCUgMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMTE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDAuM3JlbSAwLjlyZW0gMC4zcmVtIDAuOXJlbTtcbn1cbi5hcnJvdzpob3ZlciB7XG4gIGNvbG9yOiAjZmZmZmZmYmI7XG59XG4ubGVmdC1hcnJvdyB7XG4gIGxlZnQ6IDEwcHg7XG59XG4ucmlnaHQtYXJyb3cge1xuICByaWdodDogMTBweDtcbn1cbi5zbGlkZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogLTEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAxMDtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5jYXJvdXNlbC1uZXh0LWl0ZW0sIC5jYXJvdXNlbC1wcmV2LWl0ZW0sIC5zbGlkZS5hY3RpdmUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5zbGlkZTpmaXJzdC1vZi10eXBle1xuICBsZWZ0OiAwO1xufVxuLmNhcm91c2VsLWlubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    24582:
    /*!*********************************************************************!*\
      !*** ./src/app/components/shared/gallery/gallery-item.interface.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GalleryItemType": function GalleryItemType() {
          return (
            /* binding */
            _GalleryItemType
          );
        }
        /* harmony export */

      });

      var _GalleryItemType;

      (function (GalleryItemType) {
        GalleryItemType["image"] = "image";
        GalleryItemType["video"] = "video";
      })(_GalleryItemType || (_GalleryItemType = {}));
      /***/

    },

    /***/
    31735:
    /*!****************************************************************!*\
      !*** ./src/app/components/shared/gallery/gallery.component.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GalleryComponent": function GalleryComponent() {
          return (
            /* binding */
            _GalleryComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _video_video_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../video/video.component */
      48522);

      var _c0 = ["arrows"];
      var _c1 = ["video"];

      function GalleryComponent_adk_video_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "adk-video", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("videoStarted", function GalleryComponent_adk_video_5_Template_adk_video_videoStarted_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r6.videoStarted($event);
          })("videoStopped", function GalleryComponent_adk_video_5_Template_adk_video_videoStopped_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r8.videoStopped($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;
          var i_r4 = ctx.index;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("videoIndex", i_r4 + ctx_r2.index * 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("galleryIndex", ctx_r2.index);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("videoSource", item_r3.url);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("start", item_r3.start);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("end", item_r3.end);
        }
      }

      var _GalleryComponent = /*#__PURE__*/function () {
        function _GalleryComponent() {
          _classCallCheck(this, _GalleryComponent);

          this.selectedIndex = 0;
        }

        _createClass(_GalleryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _iterator = _createForOfIteratorHelper(this.arrows),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var item = _step.value;
                var htmlItem = item.nativeElement;
                htmlItem.style.visibility = "visible";
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "videoStarted",
          value: function videoStarted(galleryIndex) {
            this.hideArrows(galleryIndex);
          }
        }, {
          key: "videoStopped",
          value: function videoStopped(galleryIndex) {
            this.showArrows(galleryIndex);
          }
        }, {
          key: "showArrows",
          value: function showArrows(galleryIndex) {
            if (this.videos.length > 1) {
              var _iterator2 = _createForOfIteratorHelper(document.getElementById("gallery" + galleryIndex).getElementsByClassName("arrow")),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var item = _step2.value;
                  var htmlItem = item;
                  htmlItem.style.visibility = "visible";
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
          }
        }, {
          key: "hideArrows",
          value: function hideArrows(galleryIndex) {
            var _iterator3 = _createForOfIteratorHelper(document.getElementById("gallery" + galleryIndex).getElementsByClassName("arrow")),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var item = _step3.value;
                var htmlItem = item;
                htmlItem.style.visibility = "hidden";
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        }, {
          key: "slideLeft",
          value: function slideLeft() {
            var _this9 = this;

            this.stopVideo(this.selectedIndex);
            var previousSelectedIndex = this.selectedIndex;
            this.selectedIndex = this.selectedIndex === 0 ? this.items.length - 1 : --this.selectedIndex;
            var previousVideo = this.videos.find(function (video) {
              return video.videoIndex == previousSelectedIndex + 10 * _this9.index;
            }).elementRef.nativeElement;
            previousVideo.animate([{
              left: '0'
            }, {
              left: '100%'
            }], {
              duration: 500,
              fill: "forwards"
            });
            var newVideo = this.videos.find(function (video) {
              return video.videoIndex == _this9.selectedIndex + 10 * _this9.index;
            }).elementRef.nativeElement;
            newVideo.style.left = "-100%";
            newVideo.animate([{
              left: '-100%'
            }, {
              left: '0'
            }], {
              duration: 500,
              fill: "forwards"
            });
          }
        }, {
          key: "slideRight",
          value: function slideRight() {
            var _this10 = this;

            this.stopVideo(this.selectedIndex);
            var previousSelectedIndex = this.selectedIndex;
            this.selectedIndex = this.selectedIndex >= this.items.length - 1 ? 0 : ++this.selectedIndex;
            var previousVideo = this.videos.find(function (video) {
              return video.videoIndex == previousSelectedIndex + 10 * _this10.index;
            }).elementRef.nativeElement;
            previousVideo.animate([{
              left: '0'
            }, {
              left: '-100%'
            }], {
              duration: 500,
              fill: "forwards"
            });
            var newVideo = this.videos.find(function (video) {
              return video.videoIndex == _this10.selectedIndex + 10 * _this10.index;
            }).elementRef.nativeElement;
            newVideo.style.left = "100%";
            newVideo.animate([{
              left: '100%'
            }, {
              left: '0'
            }], {
              duration: 500,
              fill: "forwards"
            });
          }
        }, {
          key: "stopVideo",
          value: function stopVideo(index) {
            var _this11 = this;

            var currentVideo = this.videos.find(function (video) {
              return video.videoIndex == index + 10 * _this11.index;
            });
            currentVideo.stopVideo();
          }
        }]);

        return _GalleryComponent;
      }();

      _GalleryComponent.ɵfac = function GalleryComponent_Factory(t) {
        return new (t || _GalleryComponent)();
      };

      _GalleryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _GalleryComponent,
        selectors: [["adk-gallery"]],
        viewQuery: function GalleryComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.arrows = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.videos = _t);
          }
        },
        inputs: {
          items: "items",
          index: "index"
        },
        decls: 6,
        vars: 2,
        consts: [[1, "gallery", 3, "id"], [1, "fas", "fa-chevron-left", "left-arrow", "arrow", 3, "click"], ["arrows", ""], [1, "fas", "fa-chevron-right", "right-arrow", "arrow", 3, "click"], ["class", "slide", 3, "videoIndex", "galleryIndex", "videoSource", "start", "end", "videoStarted", "videoStopped", 4, "ngFor", "ngForOf"], [1, "slide", 3, "videoIndex", "galleryIndex", "videoSource", "start", "end", "videoStarted", "videoStopped"], ["video", ""]],
        template: function GalleryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GalleryComponent_Template_i_click_1_listener() {
              return ctx.slideLeft();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "i", 3, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GalleryComponent_Template_i_click_3_listener() {
              return ctx.slideRight();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, GalleryComponent_adk_video_5_Template, 2, 5, "adk-video", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "gallery", ctx.index, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _video_video_component__WEBPACK_IMPORTED_MODULE_0__.VideoComponent],
        styles: [".gallery[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc((8/12 * 100vw - 10px) * 0.5625);\n  box-sizing: border-box;\n  position: relative;\n  overflow: hidden;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n@media (max-width: 767px) {\n  .gallery[_ngcontent-%COMP%] {\n    width: 100%;\n    height: calc((100vw - 20px) * 0.5625);\n  }\n}\n.arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  z-index: 11;\n  color: white;\n  font-size: x-large;\n  cursor: pointer;\n  padding: 0.5rem;\n}\n.arrow[_ngcontent-%COMP%]:hover {\n  color: #ffffffbb;\n}\n.left-arrow[_ngcontent-%COMP%] {\n  left: 10px;\n}\n.right-arrow[_ngcontent-%COMP%] {\n  right: 10px;\n}\n.slide[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 100%;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  z-index: 10;\n}\n.slide[_ngcontent-%COMP%]:first-of-type{\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbGxlcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCw0Q0FBNEM7RUFDNUMsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gscUNBQXFDO0VBQ3ZDO0FBQ0Y7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsT0FBTztBQUNUIiwiZmlsZSI6ImdhbGxlcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nYWxsZXJ5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygoOC8xMiAqIDEwMHZ3IC0gMTBweCkgKiAwLjU2MjUpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmdhbGxlcnkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogY2FsYygoMTAwdncgLSAyMHB4KSAqIDAuNTYyNSk7XG4gIH1cbn1cbi5hcnJvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHotaW5kZXg6IDExO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG4uYXJyb3c6aG92ZXIge1xuICBjb2xvcjogI2ZmZmZmZmJiO1xufVxuLmxlZnQtYXJyb3cge1xuICBsZWZ0OiAxMHB4O1xufVxuLnJpZ2h0LWFycm93IHtcbiAgcmlnaHQ6IDEwcHg7XG59XG4uc2xpZGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogMTA7XG59XG4uc2xpZGU6Zmlyc3Qtb2YtdHlwZXtcbiAgbGVmdDogMDtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    8795:
    /*!*********************************************************!*\
      !*** ./src/app/components/shared/shared-libs.module.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SharedLibsModule": function SharedLibsModule() {
          return (
            /* binding */
            _SharedLibsModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ng-select/ng-select */
      36868);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/checkbox */
      74058);
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/chips */
      79243);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      80181);
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/radio */
      15644);
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/sidenav */
      86608);
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      65924);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/tooltip */
      50298);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/datepicker */
      42937);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _SharedLibsModule = /*#__PURE__*/_createClass(function _SharedLibsModule() {
        _classCallCheck(this, _SharedLibsModule);
      });

      _SharedLibsModule.ɵfac = function SharedLibsModule_Factory(t) {
        return new (t || _SharedLibsModule)();
      };

      _SharedLibsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _SharedLibsModule
      });
      _SharedLibsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__.MatCheckboxModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__.MatProgressSpinnerModule], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__.MatCheckboxModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__.MatProgressSpinnerModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__.MatChipsModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__.MatAutocompleteModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__.MatRadioModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatSidenavModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltipModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__.MatChipsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgSelectModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_SharedLibsModule, {
          imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__.MatCheckboxModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__.MatProgressSpinnerModule],
          exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__.MatCheckboxModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__.MatProgressSpinnerModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__.MatChipsModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__.MatAutocompleteModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__.MatRadioModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatSidenavModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltipModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__.MatChipsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgSelectModule]
        });
      })();
      /***/

    },

    /***/
    4065:
    /*!****************************************************!*\
      !*** ./src/app/components/shared/shared.module.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SharedModule": function SharedModule() {
          return (
            /* binding */
            _SharedModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _video_video_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./video/video.component */
      48522);
      /* harmony import */


      var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./gallery/gallery.component */
      31735);
      /* harmony import */


      var _shared_libs_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shared-libs.module */
      8795);
      /* harmony import */


      var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./carousel/carousel.component */
      88114);
      /* harmony import */


      var _carousel_item_carousel_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./carousel-item/carousel-item.component */
      32983);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      87514);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _SharedModule = /*#__PURE__*/_createClass(function _SharedModule() {
        _classCallCheck(this, _SharedModule);
      });

      _SharedModule.ɵfac = function SharedModule_Factory(t) {
        return new (t || _SharedModule)();
      };

      _SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _SharedModule
      });
      _SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_shared_libs_module__WEBPACK_IMPORTED_MODULE_2__.SharedLibsModule], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_SharedModule, {
          declarations: [_video_video_component__WEBPACK_IMPORTED_MODULE_0__.VideoComponent, _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__.GalleryComponent, _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__.CarouselComponent, _carousel_item_carousel_item_component__WEBPACK_IMPORTED_MODULE_4__.CarouselItemComponent],
          imports: [_shared_libs_module__WEBPACK_IMPORTED_MODULE_2__.SharedLibsModule],
          exports: [_video_video_component__WEBPACK_IMPORTED_MODULE_0__.VideoComponent, _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__.GalleryComponent, _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__.CarouselComponent, _carousel_item_carousel_item_component__WEBPACK_IMPORTED_MODULE_4__.CarouselItemComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule]
        });
      })();
      /***/

    },

    /***/
    48522:
    /*!************************************************************!*\
      !*** ./src/app/components/shared/video/video.component.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VideoComponent": function VideoComponent() {
          return (
            /* binding */
            _VideoComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_youtube_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/youtube.service */
      32767);

      var _VideoComponent = /*#__PURE__*/function () {
        function _VideoComponent(elementRef, youtubeService) {
          _classCallCheck(this, _VideoComponent);

          this.elementRef = elementRef;
          this.youtubeService = youtubeService;
          this.videoStarted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
          this.videoStopped = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        }

        _createClass(_VideoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            this.init();
            var iFrameID = "video" + this.videoIndex;
            this.youtubeService.onReady(function (resolve) {
              _this12.player = new window.YT.Player(iFrameID, {
                height: '100%',
                width: '100%',
                videoId: _this12.videoSource,
                playerVars: {
                  start: _this12.start,
                  end: _this12.end
                },
                events: {
                  'onReady': _this12.onPlayerReady,
                  'onStateChange': _this12.onPlayerStateChange.bind(_this12)
                }
              });
              console.log(_this12.player);
            });
          }
        }, {
          key: "init",
          value: function init() {
            var scriptLoaded = false;

            for (var i = 0; i < document.getElementsByTagName('script').length; i++) {
              var htmlScript = document.getElementsByTagName('script')[i];

              if (htmlScript.src == "https://www.youtube.com/iframe_api") {
                scriptLoaded = true;
              }
            }

            if (!scriptLoaded) {
              var tag = document.createElement('script');
              tag.src = 'https://www.youtube.com/iframe_api';
              var firstScriptTag = document.getElementsByTagName('script')[0];
              firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            }
          }
        }, {
          key: "onPlayerReady",
          value: function onPlayerReady(evt) {}
        }, {
          key: "onPlayerStateChange",
          value: function onPlayerStateChange(event) {
            if (event.data === 1) {
              this.videoStarted.emit(this.galleryIndex);
            } else if (event.data === 2) {
              this.videoStopped.emit(this.galleryIndex);
            }
          }
        }, {
          key: "stopVideo",
          value: function stopVideo() {
            this.player.stopVideo();
          }
        }]);

        return _VideoComponent;
      }();

      _VideoComponent.ɵfac = function VideoComponent_Factory(t) {
        return new (t || _VideoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_youtube_service__WEBPACK_IMPORTED_MODULE_0__.YoutubeService));
      };

      _VideoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _VideoComponent,
        selectors: [["adk-video"]],
        inputs: {
          videoSource: "videoSource",
          videoIndex: "videoIndex",
          galleryIndex: "galleryIndex",
          start: "start",
          end: "end"
        },
        outputs: {
          videoStarted: "videoStarted",
          videoStopped: "videoStopped"
        },
        decls: 1,
        vars: 1,
        consts: [[1, "adk-frame", 3, "id"]],
        template: function VideoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "video", ctx.videoIndex, "");
          }
        },
        encapsulation: 2
      });
      /***/
    },

    /***/
    45067:
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeComponent": function HomeComponent() {
          return (
            /* binding */
            _HomeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _components_shared_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../components/shared/carousel/carousel.component */
      88114);

      var _HomeComponent = /*#__PURE__*/_createClass(function _HomeComponent() {
        _classCallCheck(this, _HomeComponent);

        this.itemsContent = [{
          verticalURL: "https://i.ibb.co/tBvbpcV/collage-1-800x1000.png",
          horizontalURL: "https://i.ibb.co/Rp1YXn8/collage-1-900x425.png",
          title: "2022",
          description: "Classes on Sundays and Mondays for Beginners and more Advanced dancers",
          hyperlink: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "/classes"
        }, {
          verticalURL: "https://i.ibb.co/Dtg04P7/collage-2-800x1000.png",
          horizontalURL: "https://i.ibb.co/fDxJNhC/collage-2-900x425.png",
          title: "Salsa & Bachata",
          description: "Couple classes on Sundays",
          hyperlink: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "/classes"
        }, {
          verticalURL: "https://i.ibb.co/mbKcM8G/collage-3-800x1000.png",
          horizontalURL: "https://i.ibb.co/F6D1Vs4/collage-3-900x425.png",
          title: "Kizomba & Semba",
          description: "Couple classes on Mondays",
          hyperlink: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "/classes"
        }, {
          verticalURL: "https://i.ibb.co/sm6jqht/social-2021-06-17-960x1200.png",
          horizontalURL: "https://i.ibb.co/R2CpHW2/social-2021-06-17-900x425.png",
          title: "Socials",
          description: "Every 2nd Friday",
          hyperlink: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "/classes"
        }];
        this.verticalCarouselItems = [{
          url: this.itemsContent[0].verticalURL,
          title: this.itemsContent[0].title,
          description: this.itemsContent[0].description,
          hyperlink: this.itemsContent[0].hyperlink
        }, {
          url: this.itemsContent[1].verticalURL,
          title: this.itemsContent[1].title,
          description: this.itemsContent[1].description,
          hyperlink: this.itemsContent[1].hyperlink
        }, {
          url: this.itemsContent[2].verticalURL,
          title: this.itemsContent[2].title,
          description: this.itemsContent[2].description,
          hyperlink: this.itemsContent[2].hyperlink
        }, {
          url: this.itemsContent[3].verticalURL,
          title: this.itemsContent[3].title,
          description: this.itemsContent[3].description,
          hyperlink: this.itemsContent[3].hyperlink
        }];
        this.horizontalCarouselItems = [{
          url: this.itemsContent[0].horizontalURL,
          title: this.itemsContent[0].title,
          description: this.itemsContent[0].description,
          hyperlink: this.itemsContent[0].hyperlink
        }, {
          url: this.itemsContent[1].horizontalURL,
          title: this.itemsContent[1].title,
          description: this.itemsContent[1].description,
          hyperlink: this.itemsContent[1].hyperlink
        }, {
          url: this.itemsContent[2].horizontalURL,
          title: this.itemsContent[2].title,
          description: this.itemsContent[2].description,
          hyperlink: this.itemsContent[2].hyperlink
        }, {
          url: this.itemsContent[3].horizontalURL,
          title: this.itemsContent[3].title,
          description: this.itemsContent[3].description,
          hyperlink: this.itemsContent[3].hyperlink
        }];
      });

      _HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || _HomeComponent)();
      };

      _HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _HomeComponent,
        selectors: [["home"]],
        decls: 3,
        vars: 2,
        consts: [[1, "page-content"], [1, "horizontal", 3, "items"], [1, "vertical", 3, "items"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "adk-carousel", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "adk-carousel", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("items", ctx.horizontalCarouselItems);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("items", ctx.verticalCarouselItems);
          }
        },
        directives: [_components_shared_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__.CarouselComponent],
        styles: ["@media all and (orientation:portrait) {\n  .horizontal[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .vertical[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media all and (orientation:landscape) {\n  .horizontal[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .vertical[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIGFsbCBhbmQgKG9yaWVudGF0aW9uOnBvcnRyYWl0KSB7XG4gIC5ob3Jpem9udGFsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC52ZXJ0aWNhbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kIChvcmllbnRhdGlvbjpsYW5kc2NhcGUpIHtcbiAgLmhvcml6b250YWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC52ZXJ0aWNhbCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIl19 */"]
      });
      /***/
    },

    /***/
    84121:
    /*!***********************************************************!*\
      !*** ./src/app/layout/app-footer/app-footer.component.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppFooterComponent": function AppFooterComponent() {
          return (
            /* binding */
            _AppFooterComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AppFooterComponent = /*#__PURE__*/_createClass(function _AppFooterComponent() {
        _classCallCheck(this, _AppFooterComponent);
      });

      _AppFooterComponent.ɵfac = function AppFooterComponent_Factory(t) {
        return new (t || _AppFooterComponent)();
      };

      _AppFooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _AppFooterComponent,
        selectors: [["app-footer"]],
        decls: 3,
        vars: 0,
        template: function AppFooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xA92021 Rauma Social Dancing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["footer[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: calc(100% - 40px);\n  height: 3.5rem; \n  border-top-style: solid;\n  margin-left: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 0.5rem;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1Qsd0JBQXdCO0VBQ3hCLGNBQWMsRUFBRSxrQkFBa0I7RUFDbEMsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6ImFwcC1mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG4gIGhlaWdodDogMy41cmVtOyAvKiBGb290ZXIgaGVpZ2h0ICovXG4gIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    53293:
    /*!***************************************************************!*\
      !*** ./src/app/layout/app-leftpane/app-leftpane.component.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppLeftPaneComponent": function AppLeftPaneComponent() {
          return (
            /* binding */
            _AppLeftPaneComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngx-translate/core */
      87514);

      var _AppLeftPaneComponent = /*#__PURE__*/function () {
        function _AppLeftPaneComponent() {
          _classCallCheck(this, _AppLeftPaneComponent);
        }

        _createClass(_AppLeftPaneComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _AppLeftPaneComponent;
      }();

      _AppLeftPaneComponent.ɵfac = function AppLeftPaneComponent_Factory(t) {
        return new (t || _AppLeftPaneComponent)();
      };

      _AppLeftPaneComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _AppLeftPaneComponent,
        selectors: [["app-leftpane"]],
        decls: 3,
        vars: 3,
        consts: [[1, "column"], [1, "note", 3, "innerHTML"]],
        template: function AppLeftPaneComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "note.current"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
          }
        },
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
        styles: [".note[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-left: 3px;\n  margin-right: 3px;\n  margin-bottom: 0;\n  padding: 1px;\n  border: #d79922;\n  border-style: dotted;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1sZWZ0cGFuZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCIiwiZmlsZSI6ImFwcC1sZWZ0cGFuZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdGUge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBtYXJnaW4tbGVmdDogM3B4O1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZzogMXB4O1xuICBib3JkZXI6ICNkNzk5MjI7XG4gIGJvcmRlci1zdHlsZTogZG90dGVkO1xufSJdfQ== */"]
      });
      /***/
    },

    /***/
    65287:
    /*!*************************************************************************!*\
      !*** ./src/app/layout/app-mobile-footer/app-mobile-footer.component.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppMobileFooterComponent": function AppMobileFooterComponent() {
          return (
            /* binding */
            _AppMobileFooterComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AppMobileFooterComponent = /*#__PURE__*/_createClass(function _AppMobileFooterComponent() {
        _classCallCheck(this, _AppMobileFooterComponent);
      });

      _AppMobileFooterComponent.ɵfac = function AppMobileFooterComponent_Factory(t) {
        return new (t || _AppMobileFooterComponent)();
      };

      _AppMobileFooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _AppMobileFooterComponent,
        selectors: [["app-mobile-footer"]],
        decls: 5,
        vars: 0,
        consts: [[1, "mobile-footer"], [1, "column"], [1, "facebook-block"], ["href", "https://www.facebook.com/raumasocialdancing/", "target", "_blank"], ["aria-hidden", "true", 1, "fab", "fa-facebook"]],
        template: function AppMobileFooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".facebook-block[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1tb2JpbGUtZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoiYXBwLW1vYmlsZS1mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYWNlYm9vay1ibG9jayB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    58108:
    /*!*************************************************************************!*\
      !*** ./src/app/layout/app-mobile-header/app-mobile-header.component.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppMobileHeaderComponent": function AppMobileHeaderComponent() {
          return (
            /* binding */
            _AppMobileHeaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngx-translate/core */
      87514);

      function AppMobileHeaderComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "adk-admin-selector");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _AppMobileHeaderComponent = /*#__PURE__*/_createClass(function _AppMobileHeaderComponent() {
        _classCallCheck(this, _AppMobileHeaderComponent);
      });

      _AppMobileHeaderComponent.ɵfac = function AppMobileHeaderComponent_Factory(t) {
        return new (t || _AppMobileHeaderComponent)();
      };

      _AppMobileHeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _AppMobileHeaderComponent,
        selectors: [["app-mobile-header"]],
        decls: 12,
        vars: 4,
        consts: [[1, "mobile-header"], [1, "column"], ["class", "row", 4, "adkHasAnyRole"], [1, "whatsapp-group-block"], ["href", "https://chat.whatsapp.com/JKGNm4sN3Au6yCPJG4KmWe", "target", "_blank", 1, "contact-item"], ["aria-hidden", "true", 1, "fab", "fa-whatsapp", "contact-icon"], [1, "contact-item"], [1, "note", 3, "innerHTML"], [1, "row"]],
        template: function AppMobileHeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppMobileHeaderComponent_div_2_Template, 2, 0, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Join our Whatsapp Group!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "adk-events-comingup");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("adkHasAnyRole", "admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 2, "note.current"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
          }
        },
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
        styles: [".whatsapp-group-block[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.note[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-left: 3px;\n  margin-right: 3px;\n  margin-bottom: 0;\n  padding: 1px;\n  border: #d79922;\n  border-style: dotted;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1tb2JpbGUtaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJhcHAtbW9iaWxlLWhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndoYXRzYXBwLWdyb3VwLWJsb2NrIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm5vdGUge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBtYXJnaW4tbGVmdDogM3B4O1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZzogMXB4O1xuICBib3JkZXI6ICNkNzk5MjI7XG4gIGJvcmRlci1zdHlsZTogZG90dGVkO1xufSJdfQ== */"]
      });
      /***/
    },

    /***/
    94752:
    /*!***********************************************************!*\
      !*** ./src/app/layout/app-navbar/app-navbar.component.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppNavbarComponent": function AppNavbarComponent() {
          return (
            /* binding */
            _AppNavbarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      87514);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);

      var _AppNavbarComponent = /*#__PURE__*/function () {
        function _AppNavbarComponent(router, translate) {
          _classCallCheck(this, _AppNavbarComponent);

          this.router = router;
          this.translate = translate;
          this.isCollapsed = true;
        }

        _createClass(_AppNavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            this.router.events.subscribe(function (ev) {
              if (ev instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__.NavigationStart) {
                _this13.isCollapsed = true;
              }
            });
          }
        }, {
          key: "onScroll",
          value: function onScroll(event) {
            if (window.scrollY === 0) {
              document.getElementById("adk-navbar").style.boxShadow = "none";
            } else {
              document.getElementById("adk-navbar").style.boxShadow = "0px 2px 4px 2px #d799226e";
            }
          }
        }, {
          key: "toggleCollapsed",
          value: function toggleCollapsed() {
            this.isCollapsed = !this.isCollapsed;
          }
        }, {
          key: "closeCollapsed",
          value: function closeCollapsed() {
            this.isCollapsed = true;
          }
        }, {
          key: "closeDropdown",
          value: function closeDropdown(elem) {
            elem.classList.add('dropdown-closed');
            setTimeout(function () {
              elem.classList.remove('dropdown-closed');
            }, 150);
          }
        }, {
          key: "setLanguage",
          value: function setLanguage(language) {
            this.translate.use(language);
          }
        }]);

        return _AppNavbarComponent;
      }();

      _AppNavbarComponent.ɵfac = function AppNavbarComponent_Factory(t) {
        return new (t || _AppNavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService));
      };

      _AppNavbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _AppNavbarComponent,
        selectors: [["app-navbar"]],
        hostBindings: function AppNavbarComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function AppNavbarComponent_scroll_HostBindingHandler($event) {
              return ctx.onScroll($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
          }
        },
        decls: 39,
        vars: 1,
        consts: [["id", "adk-navbar", 1, "navbar", "navbar-expand-sm", "fixed-top", "adk-navbar"], ["routerLink", "/", "routerLinkActive", "active", 1, "navbar-brand", 3, "click"], ["src", "https://gist.githubusercontent.com/fjdrodrigues/6930ad15b03e04ba221b321b67c05d20/raw/e4e11c92ebda9855342188c1996179af4b63ad5a/raumasocialdancing.svg", 1, "logo"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarToggleExternalContent", "aria-controls", "navbarToggleExternalContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "navbar-toggler-right", 3, "click"], [1, "navbar-dark"], [1, "fas", "fa-bars", "adk-navbar-toggler-icon"], ["id", "navbarToggleExternalContent", 1, "navbar-collapse", "collapse", "text-right", 3, "ngbCollapse"], [1, "nav", "navbar-nav", "ml-auto", "my-0"], [1, "nav-item"], ["routerLink", "/about", "routerLinkActive", "active", 1, "nav-link", 3, "click"], ["ngbDropdown", ""], ["danceDrop", "ngbDropdown"], ["id", "danceDropdown", "ngbDropdownToggle", "", 1, "nav-link"], ["aria-labelledby", "danceDropdown", "ngbDropdownMenu", "", 1, "dropdown-menu"], ["danceMenu", ""], ["routerLink", "/dance/cubansalsa", "routerLinkActive", "active", "ngbDropdownItem", "", 1, "dropdown-item", 3, "click"], ["routerLink", "/dance/bachata", "routerLinkActive", "active", "ngbDropdownItem", "", 1, "dropdown-item", 3, "click"], ["routerLink", "/dance/kizomba", "routerLinkActive", "active", "ngbDropdownItem", "", 1, "dropdown-item", 3, "click"], ["routerLink", "/dance/others", "routerLinkActive", "active", "ngbDropdownItem", "", 1, "dropdown-item", 3, "click"], ["routerLink", "/classes", "routerLinkActive", "active", 1, "nav-link", 3, "click"], ["routerLink", "/contacts", "routerLinkActive", "active", 1, "nav-link", 3, "click"], [1, "nav-item", "lang"], [1, "nav-lang", 3, "click"], [1, "nav-lang-separator"]],
        template: function AppNavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppNavbarComponent_Template_a_click_1_listener() {
              return ctx.isCollapsed = true;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppNavbarComponent_Template_button_click_3_listener() {
              return ctx.toggleCollapsed();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppNavbarComponent_Template_a_click_9_listener() {
              return ctx.closeCollapsed();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "About");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Dance Styles");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 13, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppNavbarComponent_Template_a_click_18_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);

              ctx.closeDropdown(_r1);
              return ctx.closeCollapsed();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Cuban Salsa");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppNavbarComponent_Template_a_click_20_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);

              ctx.closeDropdown(_r1);
              return ctx.closeCollapsed();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Bachata");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppNavbarComponent_Template_a_click_22_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);

              ctx.closeDropdown(_r1);
              return ctx.closeCollapsed();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Kizomba");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppNavbarComponent_Template_a_click_24_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);

              ctx.closeDropdown(_r1);
              return ctx.closeCollapsed();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Others");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppNavbarComponent_Template_a_click_27_listener() {
              return ctx.closeCollapsed();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Classes");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppNavbarComponent_Template_a_click_30_listener() {
              return ctx.closeCollapsed();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Contacts");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppNavbarComponent_Template_a_click_33_listener() {
              return ctx.setLanguage("en");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "en");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "|");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppNavbarComponent_Template_a_click_37_listener() {
              return ctx.setLanguage("fi");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "fi");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavbar, _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterLinkActive, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbCollapse, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdownItem],
        styles: ["@media (max-width: 652px) {\n  .navbar-expand-sm[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n    display: inline;\n    display: initial;\n  }\n  .collapse[_ngcontent-%COMP%]:not(.show) {\n    display: none !important;\n  }\n  .navbar-expand-sm[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%] {\n    display: flex;\n    position: absolute;\n    top: 3.5rem;\n    right: 0;\n  }\n  .navbar-expand-sm[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .nav-link[_ngcontent-%COMP%] {\n    padding-left: 1rem;\n  }\n}\n.adk-navbar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 5.5rem;\n  max-height: 5.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0rem;\n}\n.navbar-expand-sm[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n@media (min-width: 900px) and (min-height: 450px) {\n  .navbar-brand[_ngcontent-%COMP%] {\n    margin-right: 0.1rem;\n    margin-left: 2.5rem;\n    padding-left: 0rem;\n    padding-right: 0rem;\n    padding-bottom: 0rem\n  }\n  .logo[_ngcontent-%COMP%] {\n    height: 4.5rem;\n  }\n  .collapse.show[_ngcontent-%COMP%] {\n    box-shadow: none !important;\n  }\n  .nav-item[_ngcontent-%COMP%]:last-of-type {\n    padding-right: 4rem;\n  }\n}\n@media (min-width: 768px) and (max-width: 899px) and (min-height: 450px) {\n  .adk-navbar[_ngcontent-%COMP%] {\n    height: 5rem;\n    max-height: 5rem;\n  }\n  .navbar-brand[_ngcontent-%COMP%] {\n    margin-right: 0.1rem;\n    margin-left: 1.5rem;\n    padding-left: 0rem;\n    padding-right: 0rem;\n    padding-bottom: 0rem\n  }\n  .logo[_ngcontent-%COMP%] {\n    height: 4rem;\n  }\n  .collapse.show[_ngcontent-%COMP%] {\n    box-shadow: none !important;\n  }\n  .nav-item[_ngcontent-%COMP%]:last-of-type {\n    padding-right: 1rem;\n  }\n}\n@media (min-width: 677px) and (max-width: 767px), (min-height: 400px) and (max-height: 449px) {\n  .adk-navbar[_ngcontent-%COMP%] {\n    height: 4rem;\n    max-height: 4rem;\n  }\n  .navbar-brand[_ngcontent-%COMP%] {\n    margin-right: 0.1rem;\n    margin-left: 1rem;\n    padding-left: 0rem;\n    padding-right: 0rem;\n    padding-bottom: 0rem\n  }\n  .logo[_ngcontent-%COMP%] {\n    height: 3rem;\n  }\n  .collapse.show[_ngcontent-%COMP%] {\n    box-shadow: none !important;\n  }\n  .nav-item[_ngcontent-%COMP%]:last-of-type {\n    padding-right: 1rem;\n  }\n}\n@media (min-width: 360px) and (max-width: 676px), (min-height: 380px) and (max-height: 399px) {\n  .adk-navbar[_ngcontent-%COMP%] {\n    height: 4rem;            \n    max-height: 4rem;\n  }\n  .navbar-brand[_ngcontent-%COMP%] {\n    margin-right: 0.1rem;\n    margin-left: 1rem;\n    padding-left: 0rem;\n    padding-right: 0rem;\n    padding-bottom: 0rem\n  }\n  .logo[_ngcontent-%COMP%] {\n    height: 3rem;\n  }\n  .nav-item[_ngcontent-%COMP%]:last-of-type {\n    padding-right: 0.5rem;\n  }\n}\n@media (min-width: 273px) and (max-width: 359px), (max-height: 379px) {\n  .adk-navbar[_ngcontent-%COMP%] {\n    height: 3rem;            \n    max-height: 3rem;\n  }\n  .navbar-brand[_ngcontent-%COMP%] {\n    padding-left: 0.5rem;\n    margin-right: 0.1rem;\n    margin-left: 1rem;\n    padding: 0rem;\n  }\n  .logo[_ngcontent-%COMP%] {\n    height: 2rem;\n  }\n}\n@media (min-width: 0px) and (max-width: 272px) {\n  .adk-navbar[_ngcontent-%COMP%] {\n    height: 3rem;            \n    max-height: 3rem;\n    justify-content: flex-end !important;\n  }\n  .navbar-brand[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.navbar-toggler[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.navbar-toggler[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n.collapse.show[_ngcontent-%COMP%] {\n  box-shadow: 0px 2px 5px 4px rgba(0,0,0,0.2);\n}\n.navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%], .navbar-nav[_ngcontent-%COMP%]   .nav-lang[_ngcontent-%COMP%] {\n  font-size: medium;\n  font-weight: bold;\n}\n.navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, .navbar-nav[_ngcontent-%COMP%]   .nav-lang[_ngcontent-%COMP%]:hover {\n  font-size: medium;\n  font-weight: bold;\n  border-radius: 0.25rem;\n}\n.dropdown[_ngcontent-%COMP%] {\n  cursor: default;\n}\n.nav-link[_ngcontent-%COMP%] {\n  padding-right: 1rem;\n}\n.nav-item.lang[_ngcontent-%COMP%] {\n  display: flex;\n}\n.nav-lang[_ngcontent-%COMP%], .nav-lang-separator[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0.5rem 0rem;\n  text-decoration: none;\n}\n.nav-lang[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.dropdown-toggle[_ngcontent-%COMP%]::after {\n  display:none;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  box-shadow: 0px 8px 10px 0px rgba(0,0,0,0.2);\n  border-radius: 0.25rem;\n  min-width: 100%;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:last-child {\n  border-bottom-left-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  text-decoration: none;\n  text-align: center;\n  display: block;\n  font-weight: 500;\n}\n.nav-link.logout[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n@media (hover: hover) {\n  .navbar-nav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]:hover   .nav-link[_ngcontent-%COMP%] {\n    font-size: medium;\n    font-weight: bold;\n    border-radius: 0.25rem;\n  }\n  .dropdown[_ngcontent-%COMP%]:hover > .dropdown-menu[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .dropdown-menu.show[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .dropdown-closed[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsZUFBZ0I7SUFBaEIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFFBQVE7RUFDVjtFQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRjtBQUNBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsYUFBYTtBQUNmO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFO0lBQ0Usb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CO0VBQ0Y7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0Usb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CO0VBQ0Y7RUFDQTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkI7RUFDRjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLFlBQVksYUFBYSxrQkFBa0I7SUFDM0MsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkI7RUFDRjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxZQUFZLGFBQWEsa0JBQWtCO0lBQzNDLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0Usb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsYUFBYTtFQUNmO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7QUFDRjtBQUNBO0VBQ0U7SUFDRSxZQUFZLGFBQWEsa0JBQWtCO0lBQzNDLGdCQUFnQjtJQUNoQixvQ0FBb0M7RUFDdEM7RUFDQTtJQUNFLGFBQWE7RUFDZjtBQUNGO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsMkNBQTJDO0FBQzdDO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7QUFDQTtFQUNFLDRDQUE0QztFQUM1QyxzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsK0JBQStCO0VBQy9CLGdDQUFnQztBQUNsQztBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLG1DQUFtQztBQUNyQztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtBQUNGIiwiZmlsZSI6ImFwcC1uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWF4LXdpZHRoOiA2NTJweCkge1xuICAubmF2YmFyLWV4cGFuZC1zbSAubmF2YmFyLXRvZ2dsZXIge1xuICAgIGRpc3BsYXk6IGluaXRpYWw7XG4gIH1cbiAgLmNvbGxhcHNlOm5vdCguc2hvdykge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuICAubmF2YmFyLWV4cGFuZC1zbSAubmF2YmFyLWNvbGxhcHNlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDMuNXJlbTtcbiAgICByaWdodDogMDtcbiAgfVxuICAubmF2YmFyLWV4cGFuZC1zbSAubmF2YmFyLW5hdiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAubmF2LWxpbmsge1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgfVxufVxuLmFkay1uYXZiYXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1LjVyZW07XG4gIG1heC1oZWlnaHQ6IDUuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwcmVtO1xufVxuLm5hdmJhci1leHBhbmQtc20gLm5hdmJhci1jb2xsYXBzZSB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIGFuZCAobWluLWhlaWdodDogNDUwcHgpIHtcbiAgLm5hdmJhci1icmFuZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjFyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDIuNXJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDByZW07XG4gICAgcGFkZGluZy1yaWdodDogMHJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHJlbVxuICB9XG4gIC5sb2dvIHtcbiAgICBoZWlnaHQ6IDQuNXJlbTtcbiAgfVxuICAuY29sbGFwc2Uuc2hvdyB7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIC5uYXYtaXRlbTpsYXN0LW9mLXR5cGUge1xuICAgIHBhZGRpbmctcmlnaHQ6IDRyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDg5OXB4KSBhbmQgKG1pbi1oZWlnaHQ6IDQ1MHB4KSB7XG4gIC5hZGstbmF2YmFyIHtcbiAgICBoZWlnaHQ6IDVyZW07XG4gICAgbWF4LWhlaWdodDogNXJlbTtcbiAgfVxuICAubmF2YmFyLWJyYW5kIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMXJlbTtcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtO1xuICAgIHBhZGRpbmctbGVmdDogMHJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAwcmVtXG4gIH1cbiAgLmxvZ28ge1xuICAgIGhlaWdodDogNHJlbTtcbiAgfVxuICAuY29sbGFwc2Uuc2hvdyB7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIC5uYXYtaXRlbTpsYXN0LW9mLXR5cGUge1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2NzdweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSwgKG1pbi1oZWlnaHQ6IDQwMHB4KSBhbmQgKG1heC1oZWlnaHQ6IDQ0OXB4KSB7XG4gIC5hZGstbmF2YmFyIHtcbiAgICBoZWlnaHQ6IDRyZW07XG4gICAgbWF4LWhlaWdodDogNHJlbTtcbiAgfVxuICAubmF2YmFyLWJyYW5kIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMXJlbTtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDByZW07XG4gICAgcGFkZGluZy1yaWdodDogMHJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHJlbVxuICB9XG4gIC5sb2dvIHtcbiAgICBoZWlnaHQ6IDNyZW07XG4gIH1cbiAgLmNvbGxhcHNlLnNob3cge1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuICAubmF2LWl0ZW06bGFzdC1vZi10eXBlIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzYwcHgpIGFuZCAobWF4LXdpZHRoOiA2NzZweCksIChtaW4taGVpZ2h0OiAzODBweCkgYW5kIChtYXgtaGVpZ2h0OiAzOTlweCkge1xuICAuYWRrLW5hdmJhciB7XG4gICAgaGVpZ2h0OiA0cmVtOyAgICAgICAgICAgIC8qIE5hdmJhciBoZWlnaHQgKi9cbiAgICBtYXgtaGVpZ2h0OiA0cmVtO1xuICB9XG4gIC5uYXZiYXItYnJhbmQge1xuICAgIG1hcmdpbi1yaWdodDogMC4xcmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgIHBhZGRpbmctbGVmdDogMHJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAwcmVtXG4gIH1cbiAgLmxvZ28ge1xuICAgIGhlaWdodDogM3JlbTtcbiAgfVxuICAubmF2LWl0ZW06bGFzdC1vZi10eXBlIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyNzNweCkgYW5kIChtYXgtd2lkdGg6IDM1OXB4KSwgKG1heC1oZWlnaHQ6IDM3OXB4KSB7XG4gIC5hZGstbmF2YmFyIHtcbiAgICBoZWlnaHQ6IDNyZW07ICAgICAgICAgICAgLyogTmF2YmFyIGhlaWdodCAqL1xuICAgIG1heC1oZWlnaHQ6IDNyZW07XG4gIH1cbiAgLm5hdmJhci1icmFuZCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjFyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgcGFkZGluZzogMHJlbTtcbiAgfVxuICAubG9nbyB7XG4gICAgaGVpZ2h0OiAycmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMHB4KSBhbmQgKG1heC13aWR0aDogMjcycHgpIHtcbiAgLmFkay1uYXZiYXIge1xuICAgIGhlaWdodDogM3JlbTsgICAgICAgICAgICAvKiBOYXZiYXIgaGVpZ2h0ICovXG4gICAgbWF4LWhlaWdodDogM3JlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm5hdmJhci1icmFuZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLm5hdmJhci10b2dnbGVyIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4ubmF2YmFyLXRvZ2dsZXI6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmNvbGxhcHNlLnNob3cge1xuICBib3gtc2hhZG93OiAwcHggMnB4IDVweCA0cHggcmdiYSgwLDAsMCwwLjIpO1xufVxuLm5hdmJhci1uYXYgLm5hdi1saW5rLCAubmF2YmFyLW5hdiAubmF2LWxhbmcge1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubmF2YmFyLW5hdiAubmF2LWxpbms6aG92ZXIsIC5uYXZiYXItbmF2IC5uYXYtbGFuZzpob3ZlciB7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbn1cbi5kcm9wZG93biB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbi5uYXYtbGluayB7XG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XG59XG4ubmF2LWl0ZW0ubGFuZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubmF2LWxhbmcsIC5uYXYtbGFuZy1zZXBhcmF0b3Ige1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMC41cmVtIDByZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5uYXYtbGFuZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgZGlzcGxheTpub25lO1xufVxuLmRyb3Bkb3duLW1lbnUge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG4uZHJvcGRvd24tbWVudSB7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTBweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBtaW4td2lkdGg6IDEwMCU7XG59XG4uZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuMjVyZW07XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjI1cmVtO1xufVxuLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW06bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuMjVyZW07XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjI1cmVtO1xufVxuLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW0ge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ubmF2LWxpbmsubG9nb3V0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcbiAgLm5hdmJhci1uYXYgLmRyb3Bkb3duOmhvdmVyIC5uYXYtbGluayB7XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgfVxuICAuZHJvcGRvd246aG92ZXI+IC5kcm9wZG93bi1tZW51IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuZHJvcGRvd24tbWVudS5zaG93IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5kcm9wZG93bi1jbG9zZWQge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuIl19 */"]
      });
      /***/
    },

    /***/
    25619:
    /*!*****************************************************************!*\
      !*** ./src/app/layout/app-rightpane/app-rightpane.component.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRightPaneComponent": function AppRightPaneComponent() {
          return (
            /* binding */
            _AppRightPaneComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AppRightPaneComponent = /*#__PURE__*/_createClass(function _AppRightPaneComponent() {
        _classCallCheck(this, _AppRightPaneComponent);
      });

      _AppRightPaneComponent.ɵfac = function AppRightPaneComponent_Factory(t) {
        return new (t || _AppRightPaneComponent)();
      };

      _AppRightPaneComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _AppRightPaneComponent,
        selectors: [["app-rightpane"]],
        decls: 10,
        vars: 0,
        consts: [[1, "rightpane"], [1, "whatsapp-group-block"], ["href", "https://chat.whatsapp.com/JKGNm4sN3Au6yCPJG4KmWe", "target", "_blank", 1, "contact-item"], ["aria-hidden", "true", 1, "fab", "fa-whatsapp", "contact-icon"], [1, "contact-item"], [1, "facebook-block"], ["href", "https://www.facebook.com/raumasocialdancing/", "target", "_blank"], ["aria-hidden", "true", 1, "fab", "fa-facebook"]],
        template: function AppRightPaneComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Join our Whatsapp Group!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".whatsapp-group-block[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  margin-left: 3px;\n  margin-right: 3px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n}\n.facebook-block[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1yaWdodHBhbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6ImFwcC1yaWdodHBhbmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aGF0c2FwcC1ncm91cC1ibG9jayB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZmFjZWJvb2stYmxvY2sge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"]
      });
      /***/
    },

    /***/
    4805:
    /*!*****************************************!*\
      !*** ./src/app/layout/layout.module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LayoutModule": function LayoutModule() {
          return (
            /* binding */
            _LayoutModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ng-select/ng-select */
      36868);
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/datepicker */
      42937);
      /* harmony import */


      var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material-moment-adapter */
      63737);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      20718);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _app_navbar_app_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-navbar/app-navbar.component */
      94752);
      /* harmony import */


      var _app_mobile_header_app_mobile_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app-mobile-header/app-mobile-header.component */
      58108);
      /* harmony import */


      var _app_leftpane_app_leftpane_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-leftpane/app-leftpane.component */
      53293);
      /* harmony import */


      var _app_rightpane_app_rightpane_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-rightpane/app-rightpane.component */
      25619);
      /* harmony import */


      var _app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-footer/app-footer.component */
      84121);
      /* harmony import */


      var _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../components/shared/shared.module */
      4065);
      /* harmony import */


      var _app_mobile_footer_app_mobile_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app-mobile-footer/app-mobile-footer.component */
      65287);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _LayoutModule = /*#__PURE__*/_createClass(function _LayoutModule() {
        _classCallCheck(this, _LayoutModule);
      });

      _LayoutModule.ɵfac = function LayoutModule_Factory(t) {
        return new (t || _LayoutModule)();
      };

      _LayoutModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: _LayoutModule
      });
      _LayoutModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgSelectModule, _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_13__.MatMomentDateModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownModule, _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](_LayoutModule, {
          declarations: [_app_navbar_app_navbar_component__WEBPACK_IMPORTED_MODULE_0__.AppNavbarComponent, _app_mobile_header_app_mobile_header_component__WEBPACK_IMPORTED_MODULE_1__.AppMobileHeaderComponent, _app_mobile_footer_app_mobile_footer_component__WEBPACK_IMPORTED_MODULE_6__.AppMobileFooterComponent, _app_leftpane_app_leftpane_component__WEBPACK_IMPORTED_MODULE_2__.AppLeftPaneComponent, _app_rightpane_app_rightpane_component__WEBPACK_IMPORTED_MODULE_3__.AppRightPaneComponent, _app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_4__.AppFooterComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgSelectModule, _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_13__.MatMomentDateModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownModule, _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule],
          exports: [_app_navbar_app_navbar_component__WEBPACK_IMPORTED_MODULE_0__.AppNavbarComponent, _app_mobile_header_app_mobile_header_component__WEBPACK_IMPORTED_MODULE_1__.AppMobileHeaderComponent, _app_mobile_footer_app_mobile_footer_component__WEBPACK_IMPORTED_MODULE_6__.AppMobileFooterComponent, _app_leftpane_app_leftpane_component__WEBPACK_IMPORTED_MODULE_2__.AppLeftPaneComponent, _app_rightpane_app_rightpane_component__WEBPACK_IMPORTED_MODULE_3__.AppRightPaneComponent, _app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_4__.AppFooterComponent]
        });
      })();
      /***/

    },

    /***/
    32767:
    /*!*********************************************!*\
      !*** ./src/app/services/youtube.service.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "YoutubeService": function YoutubeService() {
          return (
            /* binding */
            _YoutubeService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _YoutubeService = /*#__PURE__*/function () {
        function _YoutubeService() {
          _classCallCheck(this, _YoutubeService);

          this.apiReady = new Promise(function (resolve) {
            window['onYouTubeIframeAPIReady'] = function () {
              resolve(null);
            };
          });
        }

        _createClass(_YoutubeService, [{
          key: "onReady",
          value: function onReady(callback) {
            this.apiReady.then(callback);
          }
        }]);

        return _YoutubeService;
      }();

      _YoutubeService.ɵfac = function YoutubeService_Factory(t) {
        return new (t || _YoutubeService)();
      };

      _YoutubeService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _YoutubeService,
        factory: _YoutubeService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false,
        baseUrl: "http://localhost:4200",
        api: "http://localhost:8080/api"
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    46700:
    /*!***************************************************!*\
      !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
      \***************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var map = {
        "./af": 62275,
        "./af.js": 62275,
        "./ar": 90857,
        "./ar-dz": 11218,
        "./ar-dz.js": 11218,
        "./ar-kw": 14754,
        "./ar-kw.js": 14754,
        "./ar-ly": 66680,
        "./ar-ly.js": 66680,
        "./ar-ma": 92178,
        "./ar-ma.js": 92178,
        "./ar-sa": 56522,
        "./ar-sa.js": 56522,
        "./ar-tn": 95682,
        "./ar-tn.js": 95682,
        "./ar.js": 90857,
        "./az": 70164,
        "./az.js": 70164,
        "./be": 79774,
        "./be.js": 79774,
        "./bg": 60947,
        "./bg.js": 60947,
        "./bm": 21832,
        "./bm.js": 21832,
        "./bn": 89650,
        "./bn-bd": 74477,
        "./bn-bd.js": 74477,
        "./bn.js": 89650,
        "./bo": 66005,
        "./bo.js": 66005,
        "./br": 98492,
        "./br.js": 98492,
        "./bs": 70534,
        "./bs.js": 70534,
        "./ca": 52061,
        "./ca.js": 52061,
        "./cs": 84737,
        "./cs.js": 84737,
        "./cv": 61167,
        "./cv.js": 61167,
        "./cy": 77996,
        "./cy.js": 77996,
        "./da": 9528,
        "./da.js": 9528,
        "./de": 14540,
        "./de-at": 49430,
        "./de-at.js": 49430,
        "./de-ch": 67978,
        "./de-ch.js": 67978,
        "./de.js": 14540,
        "./dv": 83426,
        "./dv.js": 83426,
        "./el": 6616,
        "./el.js": 6616,
        "./en-au": 63816,
        "./en-au.js": 63816,
        "./en-ca": 32162,
        "./en-ca.js": 32162,
        "./en-gb": 83305,
        "./en-gb.js": 83305,
        "./en-ie": 61954,
        "./en-ie.js": 61954,
        "./en-il": 43060,
        "./en-il.js": 43060,
        "./en-in": 59923,
        "./en-in.js": 59923,
        "./en-nz": 13540,
        "./en-nz.js": 13540,
        "./en-sg": 16505,
        "./en-sg.js": 16505,
        "./eo": 41907,
        "./eo.js": 41907,
        "./es": 86640,
        "./es-do": 41246,
        "./es-do.js": 41246,
        "./es-mx": 56131,
        "./es-mx.js": 56131,
        "./es-us": 36430,
        "./es-us.js": 36430,
        "./es.js": 86640,
        "./et": 62551,
        "./et.js": 62551,
        "./eu": 32711,
        "./eu.js": 32711,
        "./fa": 54572,
        "./fa.js": 54572,
        "./fi": 33390,
        "./fi.js": 33390,
        "./fil": 87860,
        "./fil.js": 87860,
        "./fo": 48216,
        "./fo.js": 48216,
        "./fr": 99291,
        "./fr-ca": 98527,
        "./fr-ca.js": 98527,
        "./fr-ch": 58407,
        "./fr-ch.js": 58407,
        "./fr.js": 99291,
        "./fy": 47054,
        "./fy.js": 47054,
        "./ga": 49540,
        "./ga.js": 49540,
        "./gd": 73917,
        "./gd.js": 73917,
        "./gl": 51486,
        "./gl.js": 51486,
        "./gom-deva": 56245,
        "./gom-deva.js": 56245,
        "./gom-latn": 48868,
        "./gom-latn.js": 48868,
        "./gu": 59652,
        "./gu.js": 59652,
        "./he": 89019,
        "./he.js": 89019,
        "./hi": 42040,
        "./hi.js": 42040,
        "./hr": 63402,
        "./hr.js": 63402,
        "./hu": 79322,
        "./hu.js": 79322,
        "./hy-am": 27609,
        "./hy-am.js": 27609,
        "./id": 57942,
        "./id.js": 57942,
        "./is": 98275,
        "./is.js": 98275,
        "./it": 73053,
        "./it-ch": 4378,
        "./it-ch.js": 4378,
        "./it.js": 73053,
        "./ja": 46176,
        "./ja.js": 46176,
        "./jv": 679,
        "./jv.js": 679,
        "./ka": 92726,
        "./ka.js": 92726,
        "./kk": 72953,
        "./kk.js": 72953,
        "./km": 86957,
        "./km.js": 86957,
        "./kn": 59181,
        "./kn.js": 59181,
        "./ko": 47148,
        "./ko.js": 47148,
        "./ku": 27752,
        "./ku.js": 27752,
        "./ky": 65675,
        "./ky.js": 65675,
        "./lb": 41263,
        "./lb.js": 41263,
        "./lo": 65746,
        "./lo.js": 65746,
        "./lt": 11143,
        "./lt.js": 11143,
        "./lv": 38753,
        "./lv.js": 38753,
        "./me": 44054,
        "./me.js": 44054,
        "./mi": 31573,
        "./mi.js": 31573,
        "./mk": 30202,
        "./mk.js": 30202,
        "./ml": 68523,
        "./ml.js": 68523,
        "./mn": 79794,
        "./mn.js": 79794,
        "./mr": 56681,
        "./mr.js": 56681,
        "./ms": 56975,
        "./ms-my": 39859,
        "./ms-my.js": 39859,
        "./ms.js": 56975,
        "./mt": 3691,
        "./mt.js": 3691,
        "./my": 5152,
        "./my.js": 5152,
        "./nb": 7607,
        "./nb.js": 7607,
        "./ne": 21526,
        "./ne.js": 21526,
        "./nl": 86368,
        "./nl-be": 40076,
        "./nl-be.js": 40076,
        "./nl.js": 86368,
        "./nn": 68420,
        "./nn.js": 68420,
        "./oc-lnc": 51906,
        "./oc-lnc.js": 51906,
        "./pa-in": 94504,
        "./pa-in.js": 94504,
        "./pl": 54721,
        "./pl.js": 54721,
        "./pt": 74645,
        "./pt-br": 54548,
        "./pt-br.js": 54548,
        "./pt.js": 74645,
        "./ro": 71977,
        "./ro.js": 71977,
        "./ru": 26042,
        "./ru.js": 26042,
        "./sd": 78849,
        "./sd.js": 78849,
        "./se": 27739,
        "./se.js": 27739,
        "./si": 50084,
        "./si.js": 50084,
        "./sk": 92449,
        "./sk.js": 92449,
        "./sl": 23086,
        "./sl.js": 23086,
        "./sq": 33139,
        "./sq.js": 33139,
        "./sr": 30607,
        "./sr-cyrl": 30063,
        "./sr-cyrl.js": 30063,
        "./sr.js": 30607,
        "./ss": 40131,
        "./ss.js": 40131,
        "./sv": 21665,
        "./sv.js": 21665,
        "./sw": 5642,
        "./sw.js": 5642,
        "./ta": 33622,
        "./ta.js": 33622,
        "./te": 74825,
        "./te.js": 74825,
        "./tet": 48336,
        "./tet.js": 48336,
        "./tg": 39238,
        "./tg.js": 39238,
        "./th": 99463,
        "./th.js": 99463,
        "./tk": 39986,
        "./tk.js": 39986,
        "./tl-ph": 29672,
        "./tl-ph.js": 29672,
        "./tlh": 40043,
        "./tlh.js": 40043,
        "./tr": 51212,
        "./tr.js": 51212,
        "./tzl": 50110,
        "./tzl.js": 50110,
        "./tzm": 80482,
        "./tzm-latn": 38309,
        "./tzm-latn.js": 38309,
        "./tzm.js": 80482,
        "./ug-cn": 42495,
        "./ug-cn.js": 42495,
        "./uk": 54157,
        "./uk.js": 54157,
        "./ur": 80984,
        "./ur.js": 80984,
        "./uz": 64141,
        "./uz-latn": 43662,
        "./uz-latn.js": 43662,
        "./uz.js": 64141,
        "./vi": 12607,
        "./vi.js": 12607,
        "./x-pseudo": 66460,
        "./x-pseudo.js": 66460,
        "./yo": 92948,
        "./yo.js": 92948,
        "./zh-cn": 62658,
        "./zh-cn.js": 62658,
        "./zh-hk": 39352,
        "./zh-hk.js": 39352,
        "./zh-mo": 38274,
        "./zh-mo.js": 38274,
        "./zh-tw": 98451,
        "./zh-tw.js": 98451
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = 46700;
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map