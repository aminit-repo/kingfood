(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-choose-restaurant-choose-restaurant-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/choose-restaurant/choose-restaurant.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/choose-restaurant/choose-restaurant.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"util.back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{util.translate('Select Restaurant')}}</ion-title>\n  </ion-toolbar>\n  <ion-searchbar [placeholder]=\"util.translate('Search by restaurant')\" mode=\"ios\" (ionChange)=\"onSearchChange($event)\"\n    [debounce]=\"250\" showCancelButton=\"never\"></ion-searchbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <div class=\"card_div\" *ngFor=\"let item of restaurants\" (click)=\"goToAddReview(item)\">\n      <div class=\"resto_detail\">\n        <img [src]=\"api.mediaURL+item.cover\" onError=\"this.src='assets/placeholder.jpg'\" class=\"back_image\" alt=\"\">\n        <!-- <div class=\"back_image\"\n          [ngStyle]=\"{'background-image':'url('+api.mediaURL+item.cover+'),url(assets/placeholder.jpg)'}\"></div> -->\n        <div style=\"padding-left: 20px;\">\n          <ion-label class=\"res_name\">{{item.name}}</ion-label>\n          <ion-label class=\"res_location\">{{item.address}}</ion-label>\n        </div>\n      </div>\n      <div class=\"line_div\"></div>\n    </div>\n\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/choose-restaurant/choose-restaurant-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/choose-restaurant/choose-restaurant-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ChooseRestaurantPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseRestaurantPageRoutingModule", function() { return ChooseRestaurantPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _choose_restaurant_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./choose-restaurant.page */ "./src/app/pages/choose-restaurant/choose-restaurant.page.ts");

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
        component: _choose_restaurant_page__WEBPACK_IMPORTED_MODULE_3__["ChooseRestaurantPage"]
    }
];
let ChooseRestaurantPageRoutingModule = class ChooseRestaurantPageRoutingModule {
};
ChooseRestaurantPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChooseRestaurantPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/choose-restaurant/choose-restaurant.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/choose-restaurant/choose-restaurant.module.ts ***!
  \*********************************************************************/
/*! exports provided: ChooseRestaurantPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseRestaurantPageModule", function() { return ChooseRestaurantPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _choose_restaurant_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./choose-restaurant-routing.module */ "./src/app/pages/choose-restaurant/choose-restaurant-routing.module.ts");
/* harmony import */ var _choose_restaurant_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./choose-restaurant.page */ "./src/app/pages/choose-restaurant/choose-restaurant.page.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 foodies app
  Created : 28-Feb-2021
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/






let ChooseRestaurantPageModule = class ChooseRestaurantPageModule {
};
ChooseRestaurantPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _choose_restaurant_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChooseRestaurantPageRoutingModule"],
        ],
        declarations: [_choose_restaurant_page__WEBPACK_IMPORTED_MODULE_6__["ChooseRestaurantPage"]]
    })
], ChooseRestaurantPageModule);



/***/ }),

/***/ "./src/app/pages/choose-restaurant/choose-restaurant.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/choose-restaurant/choose-restaurant.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.header_div {\n  display: flex;\n  flex-direction: column;\n}\n.header_div .head_lbl {\n  margin-left: 16px;\n  font-size: 18px;\n  font-weight: 600;\n}\n.header_div ion-searchbar {\n  margin-top: 15px;\n}\n.main_content_div {\n  width: 100%;\n  padding: 20px;\n}\n.main_content_div .resto_detail {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.main_content_div .resto_detail ion-label {\n  display: block;\n}\n.main_content_div .resto_detail .back_image {\n  height: 50px;\n  width: 50px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 5px;\n}\n.main_content_div .resto_detail .res_name {\n  font-weight: 600;\n}\n.main_content_div .resto_detail .res_location {\n  color: lightgray;\n  font-size: 14px;\n}\n.main_content_div .line_div {\n  width: 100%;\n  height: 1px;\n  background: lightgray;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hvb3NlLXJlc3RhdXJhbnQvY2hvb3NlLXJlc3RhdXJhbnQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jaG9vc2UtcmVzdGF1cmFudC9DOlxcVXNlcnNcXGFscGhhXFxzb3VyY2VcXHJlcG9zXFxraW5nZm9vZFxcVXNlcl9hcHAvc3JjXFxhcHBcXHBhZ2VzXFxjaG9vc2UtcmVzdGF1cmFudFxcY2hvb3NlLXJlc3RhdXJhbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7Q0FBQTtBQVNBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FERUo7QUNESTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FER1I7QUNBSTtFQUNJLGdCQUFBO0FERVI7QUNFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FEQ0o7QUNDSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FEQ1I7QUNDUTtFQUNJLGNBQUE7QURDWjtBQ0VRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBREFaO0FDR1E7RUFDSSxnQkFBQTtBRERaO0FDR1E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUREWjtBQ0lJO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QURGUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Nob29zZS1yZXN0YXVyYW50L2Nob29zZS1yZXN0YXVyYW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZm9vZGllcyBhcHBcbiAgQ3JlYXRlZCA6IDI4LUZlYi0yMDIxXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLmhlYWRlcl9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmhlYWRlcl9kaXYgLmhlYWRfbGJsIHtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5oZWFkZXJfZGl2IGlvbi1zZWFyY2hiYXIge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnJlc3RvX2RldGFpbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmVzdG9fZGV0YWlsIGlvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1haW5fY29udGVudF9kaXYgLnJlc3RvX2RldGFpbCAuYmFja19pbWFnZSB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnJlc3RvX2RldGFpbCAucmVzX25hbWUge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLm1haW5fY29udGVudF9kaXYgLnJlc3RvX2RldGFpbCAucmVzX2xvY2F0aW9uIHtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxpbmVfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59IiwiLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBmb29kaWVzIGFwcFxuICBDcmVhdGVkIDogMjgtRmViLTIwMjFcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4uaGVhZGVyX2RpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC5oZWFkX2xibCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuXG4gICAgaW9uLXNlYXJjaGJhciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgfVxufVxuXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMjBweDtcblxuICAgIC5yZXN0b19kZXRhaWwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIC5iYWNrX2ltYWdlIHtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAucmVzX25hbWUge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuICAgICAgICAucmVzX2xvY2F0aW9uIHtcbiAgICAgICAgICAgIGNvbG9yOiBsaWdodGdyYXk7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmxpbmVfZGl2IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/choose-restaurant/choose-restaurant.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/choose-restaurant/choose-restaurant.page.ts ***!
  \*******************************************************************/
/*! exports provided: ChooseRestaurantPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseRestaurantPage", function() { return ChooseRestaurantPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 foodies app
  Created : 28-Feb-2021
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/




let ChooseRestaurantPage = class ChooseRestaurantPage {
    constructor(router, api, util) {
        this.router = router;
        this.api = api;
        this.util = util;
        this.restaurants = [];
        this.dummyRest = [];
        this.resetChanges = () => {
            this.restaurants = this.dummyRest;
        };
        this.getRestaurant();
    }
    ngOnInit() {
    }
    goToAddReview(item) {
        const navData = {
            queryParams: {
                id: item.uid,
                name: item.name
            }
        };
        this.router.navigate(['/add-review'], navData);
    }
    setFilteredItems() {
        console.log('clear');
        this.restaurants = [];
        this.restaurants = this.dummyRest;
    }
    filterItems(searchTerm) {
        return this.restaurants.filter((item) => {
            return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    }
    onSearchChange(event) {
        this.resetChanges();
        this.restaurants = this.filterItems(event.detail.value);
    }
    getRestaurant() {
        const param = {
            lat: localStorage.getItem('lat'),
            lng: localStorage.getItem('lng'),
            distance: 10,
            type: 1
        };
        this.api.post('stores/nearMe', param).then((data) => {
            console.log(data);
            if (data && data.status === 200 && data.data.length > 0) {
                data.data = data.data.filter(x => x.status === '1');
                data.data.forEach(element => {
                    element.rating = parseFloat(element.rating);
                    element.time = parseInt(element.time);
                    element.dish = parseInt(element.dish);
                    this.restaurants.push(element);
                    this.dummyRest.push(element);
                });
            }
        }, error => {
            console.log(error);
            this.dummyRest = [];
        }).catch(error => {
            console.log(error);
            this.dummyRest = [];
        });
    }
};
ChooseRestaurantPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] }
];
ChooseRestaurantPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-choose-restaurant',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./choose-restaurant.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/choose-restaurant/choose-restaurant.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./choose-restaurant.page.scss */ "./src/app/pages/choose-restaurant/choose-restaurant.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]])
], ChooseRestaurantPage);



/***/ })

}]);
//# sourceMappingURL=pages-choose-restaurant-choose-restaurant-module-es2015.js.map