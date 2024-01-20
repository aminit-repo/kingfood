(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-rest-details-rest-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rest-details/rest-details.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rest-details/rest-details.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"util.back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n    <div class=\"upper_div\">\n\n      <div class=\"back_image\"\n        [ngStyle]=\"{'background-image':'url('+api.mediaURL+cover+'),url(assets/placeholder.jpg)'}\">\n\n        <div class=\"open_div\" *ngIf=\"isOpen\">{{util.translate('open')}}</div>\n        <div class=\"close_div\" *ngIf=\"!isOpen\">{{util.translate('Closed')}}</div>\n        <ion-badge class=\"menu_badge\"\n          [ngStyle]=\"{'background-color': ratting>=80?'#00a573':ratting>=70 && ratting<79?'#fcb813':'#d24141'}\"\n          mode=\"ios\">\n          {{ratting}}</ion-badge>\n\n        <div class=\"abs_div\">\n          <ion-label class=\"bold_lbl\">{{name}}</ion-label>\n          <ion-label class=\"small_lbl\">{{cusine}}</ion-label>\n        </div>\n      </div>\n\n      <div class=\"content_div\">\n        <ion-label class=\"addr_lbl\">\n          <ion-icon name=\"navigate-outline\"></ion-icon> : {{address}}\n        </ion-label>\n        <ion-label class=\"addr_lbl\">\n          <ion-icon name=\"alarm-outline\"></ion-icon>: {{open}} : {{close}}\n        </ion-label>\n        <ion-label class=\"addr_lbl\">\n          <ion-icon name=\"call-outline\"></ion-icon>: {{phone}}\n        </ion-label>\n      </div>\n    </div>\n\n    <div class=\"slider_div\">\n      <ion-slides [options]=\"slideOpts\">\n        <ion-slide *ngFor=\"let item of images\">\n          <div class=\"slide_image\" [ngStyle]=\"{'background-image':'url('+api.mediaURL+item+')'}\"></div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n\n    <ion-label class=\"desc\">{{descritions}}</ion-label>\n\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/rest-details/rest-details-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/rest-details/rest-details-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: RestDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestDetailsPageRoutingModule", function() { return RestDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _rest_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rest-details.page */ "./src/app/pages/rest-details/rest-details.page.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 foodies app
  Created : 28-Feb-2021
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/



const routes = [
    {
        path: '',
        component: _rest_details_page__WEBPACK_IMPORTED_MODULE_3__["RestDetailsPage"]
    }
];
let RestDetailsPageRoutingModule = class RestDetailsPageRoutingModule {
};
RestDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RestDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/rest-details/rest-details.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/rest-details/rest-details.module.ts ***!
  \***********************************************************/
/*! exports provided: RestDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestDetailsPageModule", function() { return RestDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _rest_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rest-details-routing.module */ "./src/app/pages/rest-details/rest-details-routing.module.ts");
/* harmony import */ var _rest_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rest-details.page */ "./src/app/pages/rest-details/rest-details.page.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 foodies app
  Created : 28-Feb-2021
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/






let RestDetailsPageModule = class RestDetailsPageModule {
};
RestDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _rest_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["RestDetailsPageRoutingModule"],
        ],
        declarations: [_rest_details_page__WEBPACK_IMPORTED_MODULE_6__["RestDetailsPage"]]
    })
], RestDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/rest-details/rest-details.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/rest-details/rest-details.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.main_content_div {\n  width: 100%;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .flex_lbl {\n  display: flex;\n  align-items: center;\n  margin-bottom: 5px;\n}\n.main_content_div .flex_lbl img {\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n}\n.main_content_div .flex_lbl ion-label {\n  font-weight: 600;\n}\n.main_content_div .flex_lbl .uber {\n  margin-left: 30px;\n  --background: black;\n  --color: white;\n  margin-right: 10px;\n}\n.main_content_div .flex_lbl .light_lbl {\n  color: gray;\n  font-weight: normal;\n  font-size: 12px;\n}\n.main_content_div .addr_lbl {\n  padding-left: 30px;\n  font-size: 13px;\n  color: gray;\n  margin-bottom: 10px;\n}\n.main_content_div .upper_div {\n  padding: 16px;\n  padding-bottom: 0px;\n}\n.main_content_div .upper_div .back_image {\n  height: 180px;\n  width: 100%;\n  border-radius: 5px;\n  min-width: 100px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n}\n.main_content_div .upper_div .back_image .open_div {\n  background: var(--ion-color-success);\n  position: absolute;\n  border-radius: 25px;\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px;\n  color: white;\n  top: 5%;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-right: 10px;\n  padding-left: 5px;\n}\n.main_content_div .upper_div .back_image .close_div {\n  background: var(--ion-color-danger);\n  position: absolute;\n  border-radius: 25px;\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px;\n  color: white;\n  top: 5%;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-right: 10px;\n  padding-left: 5px;\n}\n.main_content_div .upper_div .back_image .menu_badge {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  width: 50px;\n  padding: 10px;\n}\n.main_content_div .upper_div .back_image .abs_div {\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  padding: 10px;\n  background-image: linear-gradient(-230deg, #17181a63, #827777);\n}\n.main_content_div .upper_div .back_image .abs_div .bold_lbl {\n  font-weight: bold;\n  color: white;\n  font-size: 22px;\n}\n.main_content_div .upper_div .back_image .abs_div .small_lbl {\n  font-size: 14px;\n  color: white;\n}\n.main_content_div .upper_div .back_image .abs_div .number_badge {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n  padding: 10px;\n  --background: #ed6d6d;\n}\n.main_content_div .upper_div .content_div {\n  margin-top: 20px;\n  position: relative;\n}\n.main_content_div .upper_div .content_div ion-button {\n  color: #402773;\n}\n.main_content_div .upper_div .content_div .abs_btn {\n  position: absolute;\n  right: 0;\n  top: -5px;\n  color: #402773;\n  font-size: 0.6rem;\n}\n.main_content_div .upper_div .content_div .direction_btn {\n  color: #402773;\n  margin-left: 20px;\n}\n.main_content_div .slider_div {\n  margin-top: 30px;\n}\n.main_content_div .slider_div ion-slide {\n  margin-left: 10px;\n}\n.main_content_div .slider_div .slide_image {\n  height: 125px;\n  width: 100%;\n  border-radius: 5px;\n  min-width: 100px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.main_content_div .desc {\n  margin-top: 30px;\n  padding-left: 30px;\n  font-size: 13px;\n  color: gray;\n}\n.main_content_div .lower_div {\n  padding: 16px;\n}\n.main_content_div .lower_div .flex_div {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-top: 20px;\n}\n.main_content_div .lower_div .flex_div ion-label {\n  font-size: 12px;\n  color: gray;\n  margin-bottom: 10px;\n}\n.main_content_div .lower_div .flex_div .head_lbl {\n  font-weight: 600;\n  color: black;\n  font-size: 14px;\n}\n.main_content_div .lower_div .btn_flex {\n  margin-top: 20px;\n  display: flex;\n  width: 100%;\n  justify-content: space-evenly;\n}\n.main_content_div .lower_div .btn_flex ion-button {\n  width: 130px;\n  --background: #402773;\n}\n.main_content_div .lower_div .thumbs {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVzdC1kZXRhaWxzL3Jlc3QtZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Jlc3QtZGV0YWlscy9DOlxcVXNlcnNcXGFscGhhXFxzb3VyY2VcXHJlcG9zXFxraW5nZm9vZFxcVXNlcl9hcHAvc3JjXFxhcHBcXHBhZ2VzXFxyZXN0LWRldGFpbHNcXHJlc3QtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7OztDQUFBO0FBU0E7RUFDSSxXQUFBO0FERUo7QUNBSTtFQUNJLGNBQUE7QURFUjtBQ0NJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QURDUjtBQ0FRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBREVaO0FDQVE7RUFDSSxnQkFBQTtBREVaO0FDQVE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FERVo7QUNBUTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QURFWjtBQ0NJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FEQ1I7QUNFSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBREFSO0FDRVE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBREFaO0FDRVk7RUFDSSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBREFoQjtBQ0VZO0VBQ0ksbUNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QURBaEI7QUNFWTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBREFoQjtBQ0dZO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSw4REFBQTtBRERoQjtBQ0VnQjtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QURBcEI7QUNFZ0I7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBREFwQjtBQ0dnQjtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUREcEI7QUNNUTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QURKWjtBQ01ZO0VBQ0ksY0FBQTtBREpoQjtBQ09ZO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBRExoQjtBQ1FZO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FETmhCO0FDV0k7RUFDSSxnQkFBQTtBRFRSO0FDVVE7RUFDSSxpQkFBQTtBRFJaO0FDVVE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QURSWjtBQ1dJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FEVFI7QUNZSTtFQUNJLGFBQUE7QURWUjtBQ1lRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QURWWjtBQ1lZO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBRFZoQjtBQ2FZO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBRFhoQjtBQ2VRO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0FEYlo7QUNlWTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtBRGJoQjtBQ2dCUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QURkWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jlc3QtZGV0YWlscy9yZXN0LWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBmb29kaWVzIGFwcFxuICBDcmVhdGVkIDogMjgtRmViLTIwMjFcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9sYmwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9sYmwgaW1nIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfbGJsIGlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9sYmwgLnViZXIge1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgLS1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2xibCAubGlnaHRfbGJsIHtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5hZGRyX2xibCB7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC51cHBlcl9kaXYge1xuICBwYWRkaW5nOiAxNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnVwcGVyX2RpdiAuYmFja19pbWFnZSB7XG4gIGhlaWdodDogMTgwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fY29udGVudF9kaXYgLnVwcGVyX2RpdiAuYmFja19pbWFnZSAub3Blbl9kaXYge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdG9wOiA1JTtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudXBwZXJfZGl2IC5iYWNrX2ltYWdlIC5jbG9zZV9kaXYge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0b3A6IDUlO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC51cHBlcl9kaXYgLmJhY2tfaW1hZ2UgLm1lbnVfYmFkZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDEwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnVwcGVyX2RpdiAuYmFja19pbWFnZSAuYWJzX2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0yMzBkZWcsICMxNzE4MWE2MywgIzgyNzc3Nyk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudXBwZXJfZGl2IC5iYWNrX2ltYWdlIC5hYnNfZGl2IC5ib2xkX2xibCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC51cHBlcl9kaXYgLmJhY2tfaW1hZ2UgLmFic19kaXYgLnNtYWxsX2xibCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1haW5fY29udGVudF9kaXYgLnVwcGVyX2RpdiAuYmFja19pbWFnZSAuYWJzX2RpdiAubnVtYmVyX2JhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICAtLWJhY2tncm91bmQ6ICNlZDZkNmQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudXBwZXJfZGl2IC5jb250ZW50X2RpdiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC51cHBlcl9kaXYgLmNvbnRlbnRfZGl2IGlvbi1idXR0b24ge1xuICBjb2xvcjogIzQwMjc3Mztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC51cHBlcl9kaXYgLmNvbnRlbnRfZGl2IC5hYnNfYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAtNXB4O1xuICBjb2xvcjogIzQwMjc3MztcbiAgZm9udC1zaXplOiAwLjZyZW07XG59XG4ubWFpbl9jb250ZW50X2RpdiAudXBwZXJfZGl2IC5jb250ZW50X2RpdiAuZGlyZWN0aW9uX2J0biB7XG4gIGNvbG9yOiAjNDAyNzczO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5zbGlkZXJfZGl2IHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5zbGlkZXJfZGl2IGlvbi1zbGlkZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnNsaWRlcl9kaXYgLnNsaWRlX2ltYWdlIHtcbiAgaGVpZ2h0OiAxMjVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLm1haW5fY29udGVudF9kaXYgLmRlc2Mge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IGdyYXk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubG93ZXJfZGl2IHtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sb3dlcl9kaXYgLmZsZXhfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sb3dlcl9kaXYgLmZsZXhfZGl2IGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubG93ZXJfZGl2IC5mbGV4X2RpdiAuaGVhZF9sYmwge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sb3dlcl9kaXYgLmJ0bl9mbGV4IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiAuYnRuX2ZsZXggaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMzBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjNDAyNzczO1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiAudGh1bWJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59IiwiLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBmb29kaWVzIGFwcFxuICBDcmVhdGVkIDogMjgtRmViLTIwMjFcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAuZmxleF9sYmwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuICAgICAgICAudWJlciB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAubGlnaHRfbGJsIHtcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuYWRkcl9sYmwge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuXG4gICAgLnVwcGVyX2RpdiB7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG5cbiAgICAgICAgLmJhY2tfaW1hZ2Uge1xuICAgICAgICAgICAgaGVpZ2h0OiAxODBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICAub3Blbl9kaXYge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDUlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNsb3NlX2RpdiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgdG9wOiA1JTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51X2JhZGdlIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5hYnNfZGl2IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0yMzBkZWcsICMxNzE4MWE2MywgIzgyNzc3Nyk7XG4gICAgICAgICAgICAgICAgLmJvbGRfbGJsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc21hbGxfbGJsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm51bWJlcl9iYWRnZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZWQ2ZDZkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50X2RpdiB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzQwMjc3MztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmFic19idG4ge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICB0b3A6IC01cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM0MDI3NzM7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjZyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5kaXJlY3Rpb25fYnRuIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzQwMjc3MztcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zbGlkZXJfZGl2IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgaW9uLXNsaWRlIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5zbGlkZV9pbWFnZSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEyNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmRlc2Mge1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgfVxuXG4gICAgLmxvd2VyX2RpdiB7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG5cbiAgICAgICAgLmZsZXhfZGl2IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuXG4gICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGVhZF9sYmwge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5idG5fZmxleCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG5cbiAgICAgICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMzBweDtcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6ICM0MDI3NzM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnRodW1icyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/rest-details/rest-details.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/rest-details/rest-details.page.ts ***!
  \*********************************************************/
/*! exports provided: RestDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestDetailsPage", function() { return RestDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 foodies app
  Created : 28-Feb-2021
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/





let RestDetailsPage = class RestDetailsPage {
    constructor(route, api, util) {
        this.route = route;
        this.api = api;
        this.util = util;
        this.slideOpts = {
            slidesPerView: 2.3,
        };
        this.cover = '';
        this.cusine = [];
        this.foods = [];
        this.dummyFoods = [];
        this.categories = [];
        this.dummy = Array(50);
        this.veg = true;
        this.totalItem = 0;
        this.totalPrice = 0;
        this.deliveryAddress = '';
        this.images = [];
        this.isOpen = false;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(data => {
            console.log('data=>', data);
            if (data.hasOwnProperty('id')) {
                this.id = data.id;
                this.getVenueDetails();
            }
        });
    }
    getVenueDetails() {
        const body = {
            id: this.id
        };
        this.api.post('stores/getByUid', body).then((datas) => {
            console.log(datas);
            if (datas && datas.status === 200 && datas.data.length > 0) {
                const data = datas.data[0];
                if (data) {
                    this.name = data.name;
                    this.descritions = data.descriptions;
                    this.cover = data.cover;
                    this.address = data.address;
                    this.ratting = data.rating ? data.rating : 0;
                    this.totalRatting = data.total_rating ? data.total_rating : 0;
                    this.dishPrice = data.dish;
                    this.time = data.time;
                    if (data.cusine && data.cusine !== '') {
                        this.cusine = JSON.parse(data.cusine);
                    }
                    else {
                        this.cusine = [];
                    }
                    this.images = JSON.parse(data.images);
                    this.open = moment__WEBPACK_IMPORTED_MODULE_5__('10-10-2020 ' + data.open_time).format('LT');
                    this.close = moment__WEBPACK_IMPORTED_MODULE_5__('10-10-2020 ' + data.close_time).format('LT');
                    this.phone = data.mobile;
                    const format = 'HH:mm:ss';
                    const currentTime = moment__WEBPACK_IMPORTED_MODULE_5__().format(format);
                    console.log(currentTime);
                    const time = moment__WEBPACK_IMPORTED_MODULE_5__(currentTime, format);
                    const beforeTime = moment__WEBPACK_IMPORTED_MODULE_5__(data.open_time, format);
                    const afterTime = moment__WEBPACK_IMPORTED_MODULE_5__(data.close_time, format);
                    if (time.isBetween(beforeTime, afterTime)) {
                        console.log('is between');
                        this.isOpen = true;
                    }
                    else {
                        this.isOpen = false;
                        console.log('is not between');
                    }
                }
            }
        }, error => {
            console.log(error);
            this.util.errorToast(this.util.translate('Something went wrong'));
        }).catch(error => {
            console.log(error);
            this.util.errorToast(this.util.translate('Something went wrong'));
        });
    }
};
RestDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] }
];
RestDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rest-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rest-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rest-details/rest-details.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rest-details.page.scss */ "./src/app/pages/rest-details/rest-details.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]])
], RestDetailsPage);



/***/ })

}]);
//# sourceMappingURL=pages-rest-details-rest-details-module-es2015.js.map