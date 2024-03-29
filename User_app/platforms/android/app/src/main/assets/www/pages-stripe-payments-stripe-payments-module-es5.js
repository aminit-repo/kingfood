function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-stripe-payments-stripe-payments-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stripe-payments/stripe-payments.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stripe-payments/stripe-payments.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesStripePaymentsStripePaymentsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"util.back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{util.translate('Pay with Stripe')}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onAdd()\">\n        <ion-icon slot=\"end\" name=\"add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"div_content\">\n    <div *ngIf=\"!cards?.length && !dummy?.length\">\n      <p class=\"ion-text-center\">{{util.translate('No Card Found Please Add Card')}}</p>\n    </div>\n    <ion-item *ngFor=\"let item of dummy\">\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-radio-group [(ngModel)]=\"token\">\n      <ion-item class=\"div_inner\" lines=\"none\" *ngFor=\"let card of cards;let i = index\">\n        <ion-thumbnail slot=\"end\"\n          style=\"display: flex; flex-direction: column; justify-content: center; align-items: center;\">\n          <ion-label>{{card.brand}} </ion-label>\n        </ion-thumbnail>\n        <ion-radio (ionSelect)=\"changeMethod(card.id)\" [value]=\"card.id\" slot=\"start\"></ion-radio>\n        <ion-label>XXXX{{card.last4}} <br> {{util.translate('Expiry')}} {{card.exp_month}} / {{card.exp_year}}\n        </ion-label>\n      </ion-item>\n    </ion-radio-group>\n    <ion-button expand=\"block\" *ngIf=\"cards?.length\" class=\"btn_addcard\" (click)=\"payment()\">\n      {{util.translate('Payment')}}\n      <span *ngIf=\"util.cside === 'left'\"> {{util.currecny}} {{cart.grandTotal}}</span>\n      <span *ngIf=\"util.cside === 'right'\"> {{cart.grandTotal}} {{util.currecny}}</span>\n\n    </ion-button>\n\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/stripe-payments/stripe-payments-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/stripe-payments/stripe-payments-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: StripePaymentsPageRoutingModule */

  /***/
  function srcAppPagesStripePaymentsStripePaymentsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StripePaymentsPageRoutingModule", function () {
      return StripePaymentsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _stripe_payments_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./stripe-payments.page */
    "./src/app/pages/stripe-payments/stripe-payments.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var routes = [{
      path: '',
      component: _stripe_payments_page__WEBPACK_IMPORTED_MODULE_3__["StripePaymentsPage"]
    }];

    var StripePaymentsPageRoutingModule = function StripePaymentsPageRoutingModule() {
      _classCallCheck(this, StripePaymentsPageRoutingModule);
    };

    StripePaymentsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], StripePaymentsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/stripe-payments/stripe-payments.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/stripe-payments/stripe-payments.module.ts ***!
    \*****************************************************************/

  /*! exports provided: StripePaymentsPageModule */

  /***/
  function srcAppPagesStripePaymentsStripePaymentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StripePaymentsPageModule", function () {
      return StripePaymentsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _stripe_payments_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./stripe-payments-routing.module */
    "./src/app/pages/stripe-payments/stripe-payments-routing.module.ts");
    /* harmony import */


    var _stripe_payments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./stripe-payments.page */
    "./src/app/pages/stripe-payments/stripe-payments.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var StripePaymentsPageModule = function StripePaymentsPageModule() {
      _classCallCheck(this, StripePaymentsPageModule);
    };

    StripePaymentsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _stripe_payments_routing_module__WEBPACK_IMPORTED_MODULE_5__["StripePaymentsPageRoutingModule"]],
      declarations: [_stripe_payments_page__WEBPACK_IMPORTED_MODULE_6__["StripePaymentsPage"]]
    })], StripePaymentsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/stripe-payments/stripe-payments.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/stripe-payments/stripe-payments.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesStripePaymentsStripePaymentsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.btn_right {\n  position: relative;\n  z-index: 999999;\n}\n.img_menu {\n  width: 17px;\n  position: absolute;\n  right: 20px;\n}\n.div_content {\n  width: 100%;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.div_content .div_inner {\n  width: 100%;\n  margin-top: 15px;\n  padding-bottom: 15px;\n}\n.div_content .div_inner .r {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.div_content .div_inner .lbl_number {\n  display: block;\n  font-size: 17px;\n  color: gray;\n  margin-left: 10px;\n}\n.div_content .div_inner .img_visa {\n  float: right;\n  position: absolute;\n  top: 50%;\n  display: block;\n  font-size: 17px;\n  color: gray;\n  margin-left: 10px;\n  transform: translateY(-50%);\n  height: 15px !important;\n  width: 50px !important;\n}\n.btn_addcard {\n  margin-top: 30px;\n  --box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3RyaXBlLXBheW1lbnRzL3N0cmlwZS1wYXltZW50cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3N0cmlwZS1wYXltZW50cy9DOlxcVXNlcnNcXGFscGhhXFxzb3VyY2VcXHJlcG9zXFxraW5nZm9vZFxcVXNlcl9hcHAvc3JjXFxhcHBcXHBhZ2VzXFxzdHJpcGUtcGF5bWVudHNcXHN0cmlwZS1wYXltZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7OztDQUFBO0FBU0E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QURFSjtBQ0FBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBREdKO0FDREE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBRElKO0FDRkk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBRElSO0FDRlE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBRElaO0FDRlE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBRElaO0FDRlE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QURJWjtBQ0FBO0VBQ0ksZ0JBQUE7RUFDQSw2QkFBQTtBREdKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3RyaXBlLXBheW1lbnRzL3N0cmlwZS1wYXltZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGZvb2RpZXMgYXBwXG4gIENyZWF0ZWQgOiAyOC1GZWItMjAyMVxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbi5idG5fcmlnaHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk5OTk5OTtcbn1cblxuLmltZ19tZW51IHtcbiAgd2lkdGg6IDE3cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG59XG5cbi5kaXZfY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG4uZGl2X2NvbnRlbnQgLmRpdl9pbm5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cbi5kaXZfY29udGVudCAuZGl2X2lubmVyIC5yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuLmRpdl9jb250ZW50IC5kaXZfaW5uZXIgLmxibF9udW1iZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uZGl2X2NvbnRlbnQgLmRpdl9pbm5lciAuaW1nX3Zpc2Ege1xuICBmbG9hdDogcmlnaHQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiBncmF5O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBoZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcbn1cblxuLmJ0bl9hZGRjYXJkIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgLS1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59IiwiLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBmb29kaWVzIGFwcFxuICBDcmVhdGVkIDogMjgtRmViLTIwMjFcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4uYnRuX3JpZ2h0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogOTk5OTk5O1xufVxuLmltZ19tZW51IHtcbiAgICB3aWR0aDogMTdweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDIwcHg7XG59XG4uZGl2X2NvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuXG4gICAgLmRpdl9pbm5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcblxuICAgICAgICAuciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgfVxuICAgICAgICAubGJsX251bWJlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmltZ192aXNhIHtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgICAgaGVpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuLmJ0bl9hZGRjYXJkIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIC0tYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/stripe-payments/stripe-payments.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/stripe-payments/stripe-payments.page.ts ***!
    \***************************************************************/

  /*! exports provided: StripePaymentsPage */

  /***/
  function srcAppPagesStripePaymentsStripePaymentsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StripePaymentsPage", function () {
      return StripePaymentsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/apis.service */
    "./src/app/services/apis.service.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var StripePaymentsPage = /*#__PURE__*/function () {
      function StripePaymentsPage(router, api, util, navCtrl, cart) {
        var _this = this;

        _classCallCheck(this, StripePaymentsPage);

        this.router = router;
        this.api = api;
        this.util = util;
        this.navCtrl = navCtrl;
        this.cart = cart;
        this.cards = [];
        this.dummy = [];
        var param = {
          id: this.cart.cartStoreInfo.uid
        };
        this.api.post('users/getById', param).then(function (data) {
          console.log('*******************', data);

          if (data && data.status === 200 && data.data && data.data.length) {
            _this.storeFCM = data.data[0].fcm_token;
          }
        }, function (error) {
          console.log(error);
        });
      }

      _createClass(StripePaymentsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getCards",
        value: function getCards() {
          var _this2 = this;

          this.dummy = Array(10);
          console.log(this.util.userInfo.stripe_key);
          this.api.httpGet('https://api.stripe.com/v1/customers/' + this.util.userInfo.stripe_key + '/sources?object=card', this.util.stripe).subscribe(function (cards) {
            console.log(cards);
            _this2.dummy = [];

            if (cards && cards.data) {
              _this2.cards = cards.data;
              _this2.token = _this2.cards[0].id;
            }
          }, function (error) {
            _this2.dummy = [];
            console.log(error);

            if (error && error.error && error.error.error && error.error.error.message) {
              _this2.util.showErrorAlert(error.error.error.message);

              return false;
            }

            _this2.util.errorToast(_this2.util.translate('Something went wrong'));
          });
        }
      }, {
        key: "payment",
        value: function payment() {
          var _this3 = this;

          console.log('place order');
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: this.util.translate('Are you sure?'),
            text: this.util.translate('Orders once placed cannot be cancelled and are non-refundable'),
            icon: 'question',
            confirmButtonText: this.util.translate('Yes'),
            cancelButtonText: this.util.translate('cancel'),
            showCancelButton: true,
            backdrop: false,
            background: 'white'
          }).then(function (data) {
            console.log(data);

            if (data && data.value) {
              console.log('go to procesed,,');
              var options = {
                amount: parseInt(_this3.cart.grandTotal) * 100,
                currency: _this3.util.stripeCode,
                customer: _this3.util.userInfo.stripe_key,
                card: _this3.token
              };
              console.log('options', options);
              var url = 'https://api.stripe.com/v1/charges';

              _this3.util.show();

              _this3.api.externalPost(url, options, _this3.util.stripe).subscribe(function (data) {
                console.log('------------------------->', data);
                _this3.paykey = data.id;

                _this3.util.hide();

                _this3.util.showToast(_this3.util.translate('Payment Success'), 'success', 'bottom');

                _this3.createOrder();
              }, function (error) {
                _this3.util.hide();

                console.log(error);

                _this3.util.hide();

                if (error && error.error && error.error.error && error.error.error.message) {
                  _this3.util.showErrorAlert(error.error.error.message);

                  return false;
                }

                _this3.util.errorToast(_this3.util.translate('Something went wrong'));
              });
            }
          });
        }
      }, {
        key: "createOrder",
        value: function createOrder() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this4 = this;

            var param;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    param = {
                      address: JSON.stringify(this.cart.deliveryAddress),
                      applied_coupon: this.cart.coupon && this.cart.coupon.discount ? 1 : 0,
                      coupon_id: this.cart.coupon && this.cart.coupon.discount ? this.cart.coupon.id : 0,
                      pay_method: 'stripe',
                      did: '',
                      delivery_charge: this.cart.deliveryPrice,
                      discount: this.cart.discount,
                      grand_total: this.cart.grandTotal,
                      orders: JSON.stringify(this.cart.cart),
                      paid: this.paykey,
                      restId: this.cart.cartStoreInfo.uid,
                      serviceTax: this.cart.orderTax,
                      status: 'created',
                      time: moment__WEBPACK_IMPORTED_MODULE_7__().format('YYYY-MM-DD HH:mm:ss'),
                      total: this.cart.totalPrice,
                      uid: localStorage.getItem('uid'),
                      notes: this.cart.orderNotes
                    };
                    console.log('param----->', param);
                    this.util.show();
                    this.api.post('orders/save', param).then(function (data) {
                      console.log(data);

                      _this4.util.hide();

                      _this4.cart.orderNotes = '';

                      _this4.api.sendNotification('You have received new order', 'New Order Received', _this4.storeFCM);

                      _this4.util.publishNewOrder();

                      _this4.cart.clearCart();

                      _this4.navCtrl.navigateRoot(['/success']);
                    }, function (error) {
                      console.log(error);

                      _this4.util.hide();

                      _this4.util.showToast(_this4.util.translate('Something went wrong'), 'danger', 'bottom');
                    });

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onAdd",
        value: function onAdd() {
          this.router.navigate(['add-card']);
        }
      }, {
        key: "back",
        value: function back() {
          this.navCtrl.back();
        }
      }, {
        key: "changeMethod",
        value: function changeMethod(id) {
          this.token = id;
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          if (this.util.userInfo && this.util.userInfo.stripe_key) {
            this.getCards();
          }
        }
      }]);

      return StripePaymentsPage;
    }();

    StripePaymentsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_8__["ApisService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }, {
        type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"]
      }];
    };

    StripePaymentsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-stripe-payments',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./stripe-payments.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stripe-payments/stripe-payments.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./stripe-payments.page.scss */
      "./src/app/pages/stripe-payments/stripe-payments.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_8__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"]])], StripePaymentsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-stripe-payments-stripe-payments-module-es5.js.map