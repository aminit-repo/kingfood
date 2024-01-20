function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
      "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
      "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
      "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
      "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
      "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
      "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
      "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
      "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
      "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
      "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
      "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
      "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
      "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
      "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
      "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
      "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
      "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
      "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
      "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
      "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
      "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
      "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
      "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
      "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
      "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
      "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
      "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
      "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
      "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
      "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
      "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
      "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
      "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn-bd": "./node_modules/moment/locale/bn-bd.js",
      "./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-mx": "./node_modules/moment/locale/es-mx.js",
      "./es-mx.js": "./node_modules/moment/locale/es-mx.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
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
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\" side=\"end\">\n      <ion-content>\n        <div class=\"infoSection\">\n          <img class=\"userPhoto\" src=\"assets/icon.png\" onError=\"this.src='assets/imgs/icon.png'\" alt=\"\">\n          <p class=\"userName\">Foodies</p>\n        </div>\n        <ion-list id=\"inbox-list\" class=\"ion-no-padding\">\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <ion-item (click)=\"selectedIndex = i\" routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\"\n              detail=\"false\" [class.selected]=\"selectedIndex == i\">\n              <ion-icon slot=\"start\" name=\"{{p.icn}}\" [class.active]=\"selectedIndex == i\"></ion-icon>\n              <ion-label>{{ util.translate(p.title)  }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n          <ion-menu-toggle auto-hide=\"false\" (click)=\"logout()\">\n            <ion-item routerDirection=\"root\" lines=\"none\" detail=\"false\">\n              <ion-icon slot=\"start\" name=\"power-outline\"></ion-icon>\n              <ion-label> {{util.translate('Logout')}} </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu/menu.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu/menu.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMenuMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-item *ngFor=\"let item of cates\" lines=\"none\" (click)=\"selected(item)\">\n  <ion-label [ngClass]=\"id === item.id ? 'selected':'normal'\">{{item.name}}</ion-label>\n</ion-item>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popover/popover.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/popover/popover.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPopoverPopoverComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-list lines=\"none\">\n  <ion-item (click)=\"select('edit')\">\n    <ion-label color=\"secondary\">{{util.translate('EDIT')}}</ion-label>\n  </ion-item>\n  <ion-item (click)=\"select('delete')\">\n    <ion-label color=\"danger\">{{util.translate('DELETE')}}</ion-label>\n  </ion-item>\n</ion-list>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/choose-address/choose-address.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/choose-address/choose-address.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesChooseAddressChooseAddressPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"util.back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"from ==='cart'\">{{util.translate('Delivery Address')}}</ion-title>\n    <ion-title *ngIf=\"from ==='accont'\">{{util.translate('Manage Address')}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"group\">\n    <div class=\"mainContent\">\n      <ion-button (click)=\"addNew()\" expand=\"block\" fill=\"clear\">\n        <ion-icon slot=\"start\" name=\"add\"></ion-icon>\n        {{util.translate('Add Address')}}\n      </ion-button>\n      <div class=\"noData\" *ngIf=\"!dummy?.length && !myaddress?.length\"\n        [style.backgroundImage]=\"'url(assets/nothing.jpg)'\">\n      </div>\n      <div *ngFor=\"let item of dummy\">\n        <ion-list lines=\"none\">\n          <ion-item>\n            <ion-thumbnail slot=\"start\">\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </ion-thumbnail>\n            <ion-label>\n              <h3>\n                <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n              </h3>\n              <p>\n                <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n              </p>\n              <p>\n                <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n              </p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </div>\n      <ion-list *ngIf=\"from ==='cart'\">\n        <ion-radio-group [(ngModel)]=\"selectedAddress\">\n          <ion-item *ngFor=\"let item of myaddress\" class=\"list\">\n            <ion-label class=\"title\">{{item.title}} <br>\n              <span class=\"name\">{{item.house}} {{item.landmark}} {{item.address}}</span>\n            </ion-label>\n            <!-- <ion-label class=\"name\"></ion-label> -->\n            <ion-radio [value]=\"item.id\" slot=\"start\" mode=\"md\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n      </ion-list>\n      <div *ngIf=\"from ==='accont'\">\n        <div class=\"list\" *ngFor=\"let item of myaddress\" scrollX=\"true\">\n          <ion-label class=\"title\">{{item.title}}</ion-label>\n          <ion-label class=\"name\">{{item.house}} {{item.landmark}} {{item.address}}\n          </ion-label>\n          <ion-icon class=\"moreIcon\" (click)=\"openMenu(item,$event)\" name=\"ellipsis-vertical-outline\">\n          </ion-icon>\n        </div>\n      </div>\n    </div>\n  </div>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"selectedAddress\" (click)=\"selectAddress()\">\n    <ion-fab-button>\n      <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/driver-rating/driver-rating.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/driver-rating/driver-rating.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDriverRatingDriverRatingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title> {{name}} </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n    <div class=\"main_div\">\n      <div class=\"info_div\">\n        <div class=\"rattingBtns\">\n          <rating [(ngModel)]=\"rate\" readOnly=\"false\" max=\"5\" emptyStarIconName=\"star-outline\"\n            halfStarIconName=\"star-half\" starIconName=\"star\" nullable=\"false\" (ngModelChange)=\"onRatingChange($event)\">\n          </rating>\n        </div>\n        <div class=\"name\">\n          <div class=\"content_div\">\n            <ion-textarea row=\"8\" type=\"text\" [placeholder]=\"util.translate('Comment')\" [(ngModel)]=\"comment\">\n            </ion-textarea>\n          </div>\n        </div>\n        <ion-button (click)=\"submit()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n          {{util.translate('Submit')}}\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product-rating/product-rating.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product-rating/product-rating.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProductRatingProductRatingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title> {{name}} </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <div class=\"main_div\">\n\n      <div class=\"info_div\">\n        <div class=\"rattingBtns\">\n          <rating [(ngModel)]=\"rate\" readOnly=\"false\" max=\"5\" emptyStarIconName=\"star-outline\"\n            halfStarIconName=\"star-half\" starIconName=\"star\" nullable=\"false\" (ngModelChange)=\"onRatingChange($event)\">\n          </rating>\n        </div>\n        <div class=\"name\">\n          <div class=\"content_div\">\n            <ion-textarea row=\"8\" type=\"text\" [placeholder]=\"util.translate('Comment')\" [(ngModel)]=\"comment\">\n            </ion-textarea>\n          </div>\n        </div>\n        <ion-button (click)=\"submit()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n          {{util.translate('Submit')}}\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/select-country/select-country.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/select-country/select-country.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSelectCountrySelectCountryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar>\n    <ion-title>{{util.translate('Select country')}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"icon-only\" name=\"close-circle-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-searchbar placeholder=\"Search\" type=\"text\" (ionChange)=\"onSearchChange($event)\" [debounce]=\"250\"></ion-searchbar>\n</ion-header>\n\n<ion-content>\n  <ion-list lines=\"none\" *ngIf=\"dummyLoad?.length\">\n    <ion-item *ngFor=\"let item of dummyLoad\">\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-list *ngIf=\"dummy?.length\">\n    <ion-radio-group [(ngModel)]=\"ccCode\">\n      <ion-item *ngFor=\"let item of countries\">\n        <ion-label>+{{item.dialling_code}} {{item.country_name}} </ion-label>\n        <ion-radio [value]=\"item.dialling_code\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </ion-list>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"okay()\">\n    <ion-fab-button>\n      <ion-icon name=\"checkmark-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/select-drivers/select-drivers.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/select-drivers/select-drivers.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSelectDriversSelectDriversPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<div class=\"inner-content\">\n  <div class=\"div_content\">\n    <p class=\"title\">{{util.translate('Select Drivers')}}</p>\n  </div>\n  <div class=\"content\">\n    <ion-list>\n      <ion-radio-group [(ngModel)]=\"selectedDriver\">\n        <ion-list-header>\n          <ion-label>{{util.translate('Drivers')}}</ion-label>\n        </ion-list-header>\n        <ion-item *ngFor=\"let item of drivers\" lines=\"none\">\n          <ion-avatar slot=\"start\">\n            <img [src]=\"item.coverImage\" />\n          </ion-avatar>\n          <ion-label>{{item.fullname}}</ion-label>\n          <ion-radio [value]=\"item.id\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </ion-list>\n  </div>\n  <div class=\"div_btn\">\n    <ion-row>\n      <ion-col size=\"6\" class=\"cancel\">\n        <ion-button (click)=\"select()\" color=\"primary\" expand=\"full\">\n          {{util.translate('Select')}}\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\" class=\"cancel\">\n        <ion-button (click)=\"close()\" color=\"light\" expand=\"full\">\n          {{util.translate('Cancle')}}\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/variations/variations.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/variations/variations.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesVariationsVariationsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"ion-text-start\">{{productName}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"closeIt()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- Same Product -->\n  <div *ngIf=\"sameProduct\">\n    <div *ngFor=\"let item of sameCart;let i = index\" class=\"cartItems\">\n      <p class=\"name\">{{productName}}</p>\n      <div class=\"details\">\n        <div class=\"names\">\n          <p *ngFor=\"let sub of item.item\" class=\"subDetails\"> {{sub.name}} </p>\n        </div>\n        <div class=\"cartBtn2\">\n          <ion-button (click)=\"removeQ(i)\" fill=\"clear\" size=\"small\">\n            <ion-icon name=\"remove\"></ion-icon>\n          </ion-button>\n          <p class=\"qunitity\">{{item.total}}</p>\n          <ion-button (click)=\"addQ(i)\" fill=\"clear\" size=\"small\">\n            <ion-icon name=\"add\"></ion-icon>\n          </ion-button>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <!-- New Or diff variations -->\n  <div *ngIf=\"!sameProduct\" class=\"padder\">\n    <div *ngFor=\"let item of lists\">\n      <ion-list *ngIf=\"item.type == 'radio'\">\n        <ion-radio-group (ionChange)=\"radioGroupChange($event,item.title)\">\n          <ion-list-header>\n            <ion-label>{{item.title}}</ion-label>\n          </ion-list-header>\n          <ion-item *ngFor=\"let sub of item.items;let i = index;\">\n            <ion-label style=\"text-align: left\">{{sub.title}}</ion-label>\n            <ion-label style=\"text-align: right\" *ngIf=\"util.cside =='right'\"> {{sub.price}} {{util.currecny}}\n            </ion-label>\n            <ion-label style=\"text-align: right\" *ngIf=\"util.cside =='left'\"> {{util.currecny}} {{sub.price}}\n            </ion-label>\n            <ion-radio slot=\"start\" [value]=\"sub.title\" [name]=\"sub.title\" mode=\"md\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n      </ion-list>\n      <ion-list *ngIf=\"item.type =='check'\">\n        <ion-list-header>\n          <ion-label>{{item.title}}</ion-label>\n        </ion-list-header>\n        <ion-item *ngFor=\"let sub of item.items;let j = index;\">\n          <ion-label style=\"text-align: left\">{{sub.title}}</ion-label>\n          <ion-label style=\"text-align: right\" *ngIf=\"util.cside =='right'\"> {{sub.price}} {{util.currecny}}</ion-label>\n          <ion-label style=\"text-align: right\" *ngIf=\"util.cside =='left'\"> {{util.currecny}} {{sub.price}}</ion-label>\n          <ion-checkbox slot=\"start\" [value]=\"sub.price\" (ionChange)=\"checkedEvent($event,sub.title)\" mode=\"md\">\n          </ion-checkbox>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n  <div class=\"footers\">\n    <ion-button (click)=\"addToCart()\" expand=\"block\" *ngIf=\"!sameProduct\">\n      {{util.translate('Add')}} {{total ? this.util.currecny:'' }} {{total ? total : ''}}\n    </ion-button>\n    <ion-row *ngIf=\"sameProduct\">\n      <ion-col size=\"6\">\n        <ion-button (click)=\"sameChoise()\" expand=\"block\">\n          {{util.translate('OK')}}\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button (click)=\"sameProduct = !sameProduct;newItem = true\" expand=\"block\">\n          {{util.translate('Add new')}}\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verify/verify.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verify/verify.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesVerifyVerifyPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"icon-only\" name=\"close-circle-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> {{util.translate('Verify')}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"otpContainer\">\n    <h2 class=\"headerText\"> {{util.translate('Verification')}} </h2>\n    <p class=\"subTitleText\">{{util.translate('We texted you a code to verify')}}\n      <br> {{util.translate('your phone')}} {{mobile}}\n    </p>\n    <div class=\"otpInputs\">\n      <ng-otp-input (onInputChange)=\"onOtpChange($event)\"\n        [config]=\"{length:6,inputStyles:{'width': '30px','height': '30px'}}\">\n      </ng-otp-input>\n    </div>\n    <ion-button class=\"btn_class\" (click)=\"continue()\" type=\"submit\" expand=\"block\">{{util.translate('Continue')}}\n    </ion-button>\n\n    <ion-button (click)=\"resend()\" *ngIf=\"resendCode\" type=\"submit\" expand=\"block\" fill=\"clear\">\n      {{util.translate('Resend code')}}\n    </ion-button>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
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


    var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./guard/auth.guard */
    "./src/app/guard/auth.guard.ts");
    /* harmony import */


    var _locationGuard_location_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./locationGuard/location.guard */
    "./src/app/locationGuard/location.guard.ts");
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
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-tabs-tabs-module */
        "pages-tabs-tabs-module").then(__webpack_require__.bind(null,
        /*! ./pages/tabs/tabs.module */
        "./src/app/pages/tabs/tabs.module.ts")).then(function (m) {
          return m.TabsPageModule;
        });
      },
      canActivate: [_locationGuard_location_guard__WEBPACK_IMPORTED_MODULE_4__["LocationGuard"]]
    }, {
      path: 'tabs',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-tabs-tabs-module */
        "pages-tabs-tabs-module").then(__webpack_require__.bind(null,
        /*! ./pages/tabs/tabs.module */
        "./src/app/pages/tabs/tabs.module.ts")).then(function (m) {
          return m.TabsPageModule;
        });
      }
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-login-login-module */
        "pages-login-login-module").then(__webpack_require__.bind(null,
        /*! ./pages/login/login.module */
        "./src/app/pages/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'register',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-register-register-module */
        "pages-register-register-module").then(__webpack_require__.bind(null,
        /*! ./pages/register/register.module */
        "./src/app/pages/register/register.module.ts")).then(function (m) {
          return m.RegisterPageModule;
        });
      }
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-home-home-module */
        "home-home-module").then(__webpack_require__.bind(null,
        /*! ./pages/home/home.module */
        "./src/app/pages/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: 'cart',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-cart-cart-module */
        "cart-cart-module").then(__webpack_require__.bind(null,
        /*! ./pages/cart/cart.module */
        "./src/app/pages/cart/cart.module.ts")).then(function (m) {
          return m.CartPageModule;
        });
      },
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'category',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-category-category-module */
        "pages-category-category-module").then(__webpack_require__.bind(null,
        /*! ./pages/category/category.module */
        "./src/app/pages/category/category.module.ts")).then(function (m) {
          return m.CategoryPageModule;
        });
      }
    }, {
      path: 'account',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-account-account-module */
        "account-account-module").then(__webpack_require__.bind(null,
        /*! ./pages/account/account.module */
        "./src/app/pages/account/account.module.ts")).then(function (m) {
          return m.AccountPageModule;
        });
      },
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'history',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-history-history-module */
        "history-history-module").then(__webpack_require__.bind(null,
        /*! ./pages/history/history.module */
        "./src/app/pages/history/history.module.ts")).then(function (m) {
          return m.HistoryPageModule;
        });
      },
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'payments',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-payments-payments-module */
        "pages-payments-payments-module").then(__webpack_require__.bind(null,
        /*! ./pages/payments/payments.module */
        "./src/app/pages/payments/payments.module.ts")).then(function (m) {
          return m.PaymentsPageModule;
        });
      }
    }, {
      path: 'choose-address',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pages/choose-address/choose-address.module */
        "./src/app/pages/choose-address/choose-address.module.ts")).then(function (m) {
          return m.ChooseAddressPageModule;
        });
      }
    }, {
      path: 'add-new-address',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-add-new-address-add-new-address-module */
        "pages-add-new-address-add-new-address-module").then(__webpack_require__.bind(null,
        /*! ./pages/add-new-address/add-new-address.module */
        "./src/app/pages/add-new-address/add-new-address.module.ts")).then(function (m) {
          return m.AddNewAddressPageModule;
        });
      }
    }, {
      path: 'coupons',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-coupons-coupons-module */
        "pages-coupons-coupons-module").then(__webpack_require__.bind(null,
        /*! ./pages/coupons/coupons.module */
        "./src/app/pages/coupons/coupons.module.ts")).then(function (m) {
          return m.CouponsPageModule;
        });
      }
    }, {
      path: 'history-detail',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-history-detail-history-detail-module */
        "pages-history-detail-history-detail-module").then(__webpack_require__.bind(null,
        /*! ./pages/history-detail/history-detail.module */
        "./src/app/pages/history-detail/history-detail.module.ts")).then(function (m) {
          return m.HistoryDetailPageModule;
        });
      }
    }, {
      path: 'choose-restaurant',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-choose-restaurant-choose-restaurant-module */
        "pages-choose-restaurant-choose-restaurant-module").then(__webpack_require__.bind(null,
        /*! ./pages/choose-restaurant/choose-restaurant.module */
        "./src/app/pages/choose-restaurant/choose-restaurant.module.ts")).then(function (m) {
          return m.ChooseRestaurantPageModule;
        });
      }
    }, {
      path: 'add-review',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-add-review-add-review-module */
        "pages-add-review-add-review-module").then(__webpack_require__.bind(null,
        /*! ./pages/add-review/add-review.module */
        "./src/app/pages/add-review/add-review.module.ts")).then(function (m) {
          return m.AddReviewPageModule;
        });
      }
    }, {
      path: 'edit-profile',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-edit-profile-edit-profile-module */
        "pages-edit-profile-edit-profile-module").then(__webpack_require__.bind(null,
        /*! ./pages/edit-profile/edit-profile.module */
        "./src/app/pages/edit-profile/edit-profile.module.ts")).then(function (m) {
          return m.EditProfilePageModule;
        });
      }
    }, {
      path: 'tracker',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-tracker-tracker-module */
        "pages-tracker-tracker-module").then(__webpack_require__.bind(null,
        /*! ./pages/tracker/tracker.module */
        "./src/app/pages/tracker/tracker.module.ts")).then(function (m) {
          return m.TrackerPageModule;
        });
      }
    }, {
      path: 'stripe-payments',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-stripe-payments-stripe-payments-module */
        "pages-stripe-payments-stripe-payments-module").then(__webpack_require__.bind(null,
        /*! ./pages/stripe-payments/stripe-payments.module */
        "./src/app/pages/stripe-payments/stripe-payments.module.ts")).then(function (m) {
          return m.StripePaymentsPageModule;
        });
      }
    }, {
      path: 'add-card',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-add-card-add-card-module */
        "pages-add-card-add-card-module").then(__webpack_require__.bind(null,
        /*! ./pages/add-card/add-card.module */
        "./src/app/pages/add-card/add-card.module.ts")).then(function (m) {
          return m.AddCardPageModule;
        });
      }
    }, {
      path: 'select-drivers',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pages/select-drivers/select-drivers.module */
        "./src/app/pages/select-drivers/select-drivers.module.ts")).then(function (m) {
          return m.SelectDriversPageModule;
        });
      }
    }, {
      path: 'inbox',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-inbox-inbox-module */
        "pages-inbox-inbox-module").then(__webpack_require__.bind(null,
        /*! ./pages/inbox/inbox.module */
        "./src/app/pages/inbox/inbox.module.ts")).then(function (m) {
          return m.InboxPageModule;
        });
      }
    }, {
      path: 'rate',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-rate-rate-module */
        "pages-rate-rate-module").then(__webpack_require__.bind(null,
        /*! ./pages/rate/rate.module */
        "./src/app/pages/rate/rate.module.ts")).then(function (m) {
          return m.RatePageModule;
        });
      }
    }, {
      path: 'rest-details',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-rest-details-rest-details-module */
        "pages-rest-details-rest-details-module").then(__webpack_require__.bind(null,
        /*! ./pages/rest-details/rest-details.module */
        "./src/app/pages/rest-details/rest-details.module.ts")).then(function (m) {
          return m.RestDetailsPageModule;
        });
      }
    }, {
      path: 'cities',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-cities-cities-module */
        "pages-cities-cities-module").then(__webpack_require__.bind(null,
        /*! ./pages/cities/cities.module */
        "./src/app/pages/cities/cities.module.ts")).then(function (m) {
          return m.CitiesPageModule;
        });
      }
    }, {
      path: 'forgot',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-forgot-forgot-module */
        "pages-forgot-forgot-module").then(__webpack_require__.bind(null,
        /*! ./pages/forgot/forgot.module */
        "./src/app/pages/forgot/forgot.module.ts")).then(function (m) {
          return m.ForgotPageModule;
        });
      }
    }, {
      path: 'location',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-location-location-module */
        "pages-location-location-module").then(__webpack_require__.bind(null,
        /*! ./pages/location/location.module */
        "./src/app/pages/location/location.module.ts")).then(function (m) {
          return m.LocationPageModule;
        });
      }
    }, {
      path: 'pick-location',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-pick-location-pick-location-module */
        "pages-pick-location-pick-location-module").then(__webpack_require__.bind(null,
        /*! ./pages/pick-location/pick-location.module */
        "./src/app/pages/pick-location/pick-location.module.ts")).then(function (m) {
          return m.PickLocationPageModule;
        });
      }
    }, {
      path: 'languages',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-languages-languages-module */
        "languages-languages-module").then(__webpack_require__.bind(null,
        /*! ./pages/languages/languages.module */
        "./src/app/pages/languages/languages.module.ts")).then(function (m) {
          return m.LanguagesPageModule;
        });
      }
    }, {
      path: 'about',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-about-about-module */
        "about-about-module").then(__webpack_require__.bind(null,
        /*! ./pages/about/about.module */
        "./src/app/pages/about/about.module.ts")).then(function (m) {
          return m.AboutPageModule;
        });
      }
    }, {
      path: 'contacts',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-contacts-contacts-module */
        "contacts-contacts-module").then(__webpack_require__.bind(null,
        /*! ./pages/contacts/contacts.module */
        "./src/app/pages/contacts/contacts.module.ts")).then(function (m) {
          return m.ContactsPageModule;
        });
      }
    }, {
      path: 'faqs',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-faqs-faqs-module */
        "faqs-faqs-module").then(__webpack_require__.bind(null,
        /*! ./pages/faqs/faqs.module */
        "./src/app/pages/faqs/faqs.module.ts")).then(function (m) {
          return m.FaqsPageModule;
        });
      }
    }, {
      path: 'help',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-help-help-module */
        "help-help-module").then(__webpack_require__.bind(null,
        /*! ./pages/help/help.module */
        "./src/app/pages/help/help.module.ts")).then(function (m) {
          return m.HelpPageModule;
        });
      }
    }, {
      path: 'chats',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-chats-chats-module */
        "pages-chats-chats-module").then(__webpack_require__.bind(null,
        /*! ./pages/chats/chats.module */
        "./src/app/pages/chats/chats.module.ts")).then(function (m) {
          return m.ChatsPageModule;
        });
      }
    }, {
      path: 'driver-rating',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pages/driver-rating/driver-rating.module */
        "./src/app/pages/driver-rating/driver-rating.module.ts")).then(function (m) {
          return m.DriverRatingPageModule;
        });
      }
    }, {
      path: 'product-rating',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pages/product-rating/product-rating.module */
        "./src/app/pages/product-rating/product-rating.module.ts")).then(function (m) {
          return m.ProductRatingPageModule;
        });
      }
    }, {
      path: 'select-country',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pages/select-country/select-country.module */
        "./src/app/pages/select-country/select-country.module.ts")).then(function (m) {
          return m.SelectCountryPageModule;
        });
      }
    }, {
      path: 'success',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-success-success-module */
        "pages-success-success-module").then(__webpack_require__.bind(null,
        /*! ./pages/success/success.module */
        "./src/app/pages/success/success.module.ts")).then(function (m) {
          return m.SuccessPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.infoSection {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-top: 50px;\n}\n.infoSection .userPhoto {\n  width: 80px;\n  margin: 20px 0px;\n}\n.infoSection .userName {\n  margin: 0px;\n  padding: 0px;\n  font-size: 1.5rem;\n  font-weight: 500;\n  color: var(--ion-color-primary);\n  margin-bottom: 20px;\n}\n.version {\n  margin: 0px;\n  padding: 0px;\n  font-size: 1rem;\n  font-weight: 500;\n  color: black;\n  margin-bottom: 25px;\n  text-align: center;\n  position: absolute;\n  bottom: 0px;\n  transform: translate(-50%, -50%);\n  left: 50%;\n}\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\nion-menu.md ion-item ion-icon {\n  color: black;\n}\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\nion-item {\n  border-bottom: 1px solid lightgray;\n  --padding-start: 30px !important;\n  --min-height: 60px !important;\n}\n.filterItems ion-item {\n  border-bottom: none !important;\n}\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n}\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n.imgs {\n  height: 20px;\n  width: 20px;\n  margin-right: 10px;\n}\n.menu_user_image {\n  height: 90px;\n  width: 90px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 50%;\n  margin: auto;\n}\n.username {\n  margin-top: 20px;\n  font-weight: 600;\n  display: block;\n  text-align: center;\n  font-size: 20px;\n}\n.email {\n  margin-top: 5px;\n  display: block;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9DOlxcVXNlcnNcXGFscGhhXFxzb3VyY2VcXHJlcG9zXFxraW5nZm9vZFxcVXNlcl9hcHAvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7O0NBQUE7QUFhQTtFQUVFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBREhGO0FDSUU7RUFFRSxXQUFBO0VBQ0EsZ0JBQUE7QURISjtBQ0tFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtBREhKO0FDTUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0FESEY7QUNnQkE7RUFDRSxtQkFBQTtBRGJGO0FDZ0JBOztFQUVFLGtCQUFBO0FEYkY7QUNvQkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFFQSxnQkFBQTtBRGxCRjtBQ3FCQTtFQUNFLGVBQUE7RUFFQSxtQkFBQTtFQUVBLGNBQUE7RUFFQSxnQkFBQTtBRHJCRjtBQ3dCQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRHJCRjtBQ3dCQTtFQUNFLHNEQUFBO0FEckJGO0FDd0JBO0VBQ0UsK0JBQUE7QURyQkY7QUN3QkE7RUFHRSxZQUFBO0FEdkJGO0FDOEJBO0VBQ0Usc0JBQUE7QUQzQkY7QUNrQ0E7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FEL0JGO0FDaUNBO0VBQ0Usa0NBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0FEOUJGO0FDaUNFO0VBQ0UsOEJBQUE7QUQ5Qko7QUNpQ0E7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUQ5QkY7QUNpQ0E7RUFDRSwrQkFBQTtBRDlCRjtBQ2lDQTtFQUNFLGVBQUE7QUQ5QkY7QUNrQ0E7RUFDRSxrQkFBQTtBRC9CRjtBQ2tDQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FEL0JGO0FDa0NBO0VBQ0Usa0JBQUE7QUQvQkY7QUNrQ0E7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtBRGhDRjtBQ21DQTtFQUNFLGlDQUFBO0FEaENGO0FDbUNBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBRGhDRjtBQ2tDQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FEL0JGO0FDa0NBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUQvQkY7QUNpQ0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FEOUJGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBmb29kaWVzIGFwcFxuICBDcmVhdGVkIDogMjgtRmViLTIwMjFcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4uaW5mb1NlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG59XG4uaW5mb1NlY3Rpb24gLnVzZXJQaG90byB7XG4gIHdpZHRoOiA4MHB4O1xuICBtYXJnaW46IDIwcHggMHB4O1xufVxuLmluZm9TZWN0aW9uIC51c2VyTmFtZSB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4udmVyc2lvbiB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBsZWZ0OiA1MCU7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtaW4taGVpZ2h0OiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gIGNvbG9yOiAjNzU3NTc1O1xuICBtaW4taGVpZ2h0OiAyNnB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gIC0tbWluLWhlaWdodDogNjBweCAhaW1wb3J0YW50O1xufVxuXG4uZmlsdGVySXRlbXMgaW9uLWl0ZW0ge1xuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW5vdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuXG5pb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmltZ3Mge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5tZW51X3VzZXJfaW1hZ2Uge1xuICBoZWlnaHQ6IDkwcHg7XG4gIHdpZHRoOiA5MHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4udXNlcm5hbWUge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5lbWFpbCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iLCIvKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGZvb2RpZXMgYXBwXG4gIENyZWF0ZWQgOiAyOC1GZWItMjAyMVxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbmlvbi1tZW51IGlvbi1jb250ZW50IHtcbiAgLy8gICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XG59XG5cbi5pbmZvU2VjdGlvbiB7XG4gIC8vICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIC51c2VyUGhvdG8ge1xuICAgIC8vIGhlaWdodDogMTEwcHg7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgbWFyZ2luOiAyMHB4IDBweDtcbiAgfVxuICAudXNlck5hbWUge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxufVxuLnZlcnNpb24ge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgbGVmdDogNTAlO1xufVxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xuICAvLyAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLy8gLS1wYWRkaW5nLWVuZDogOHB4O1xuICAvLyAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAvLyAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIC8vIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XG4gIC8vICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuXG4gIG1pbi1oZWlnaHQ6IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuXG4gIGNvbG9yOiAjNzU3NTc1O1xuXG4gIG1pbi1oZWlnaHQ6IDI2cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTQpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgLy8gY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcblxuICBjb2xvcjogYmxhY2s7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIC8vIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCB7XG4gIC8vIHBhZGRpbmc6IDQwcHggMCAwIDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuaW9uLWl0ZW0ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAtLXBhZGRpbmctc3RhcnQ6IDMwcHggIWltcG9ydGFudDtcbiAgLS1taW4taGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG59XG4uZmlsdGVySXRlbXMge1xuICBpb24taXRlbSB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5pb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tbWluLWhlaWdodDogNTBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICAvLyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuXG5pb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmltZ3Mge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ubWVudV91c2VyX2ltYWdlIHtcbiAgaGVpZ2h0OiA5MHB4O1xuICB3aWR0aDogOTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnVzZXJuYW1lIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmVtYWlsIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */";
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/ngx/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _services_apis_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./services/cart.service */
    "./src/app/services/cart.service.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, router, oneSignal, actionSheetController, util, navCtrl, api, cart) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.router = router;
        this.oneSignal = oneSignal;
        this.actionSheetController = actionSheetController;
        this.util = util;
        this.navCtrl = navCtrl;
        this.api = api;
        this.cart = cart;
        this.appPages = [];
        this.selectedIndex = 0;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.backgroundColorByHexString('#ff384c');

            _this.splashScreen.hide();

            _this.util.cityAddress = localStorage.getItem('address');
            _this.appPages = _this.util.appPages;
            console.log('%c Copyright and Good Faith Purchasers © 2020-present initappz. ', 'background: #222; color: #bada55');
            var lng = localStorage.getItem('language');

            if (!lng || lng === null) {
              _this.api.get('users/getDefaultSettings').then(function (data) {
                console.log('----------------- app setting', data);

                if (data && data.status === 200 && data.data) {
                  var manage = data.data.manage;
                  var language = data.data.lang;

                  if (manage && manage.length > 0) {
                    if (manage[0].app_close === 0 || manage[0].app_close === '0') {
                      _this.util.appClosed = true;
                      _this.util.appClosedMessage = manage[0].message;
                    } else {
                      _this.util.appClosed = false;
                    }
                  } else {
                    _this.util.appClosed = false;
                  }

                  if (language) {
                    _this.util.translations = language;
                    localStorage.setItem('language', data.data.file);
                  }

                  var settings = data.data.settings;

                  if (settings && settings.length > 0) {
                    var info = settings[0];
                    _this.util.direction = info.appDirection;
                    _this.util.cside = info.currencySide;
                    _this.util.currecny = info.currencySymbol;
                    _this.util.logo = info.logo;
                    _this.util.twillo = info.twillo;
                    _this.util.delivery = info.delivery;
                    _this.util.user_login = info.user_login;
                    _this.util.home_type = info.home_ui;
                    _this.util.reset_pwd = info.reset_pwd;
                    document.documentElement.dir = _this.util.direction;
                  } else {
                    _this.util.direction = 'ltr';
                    _this.util.cside = 'right';
                    _this.util.currecny = '$';
                    document.documentElement.dir = _this.util.direction;
                  }

                  var general = data.data.general;
                  console.log('generalllll============================>', general);

                  if (general && general.length > 0) {
                    var _info = general[0];
                    _this.util.general = _info;
                    _this.cart.minOrderPrice = parseFloat(_info.min);
                    _this.cart.shipping = _info.shipping;
                    _this.cart.shippingPrice = parseFloat(_info.shippingPrice);
                    _this.cart.orderTax = parseFloat(_info.tax);
                    _this.cart.flatTax = parseInt(_info.tax);
                    _this.cart.freeShipping = parseFloat(_info.free);
                  }
                }
              }, function (error) {
                console.log('default settings', error);
              });
            } else {
              var param = {
                id: localStorage.getItem('language')
              };

              _this.api.post('users/getDefaultSettingsById', param).then(function (data) {
                console.log('----------------- app setting', data);

                if (data && data.status === 200 && data.data) {
                  var manage = data.data.manage;
                  var language = data.data.lang;

                  if (manage && manage.length > 0) {
                    if (manage[0].app_close === 0 || manage[0].app_close === '0') {
                      _this.util.appClosed = true;
                      _this.util.appClosedMessage = manage[0].message;
                    } else {
                      _this.util.appClosed = false;
                    }
                  } else {
                    _this.util.appClosed = false;
                  }

                  if (language) {
                    _this.util.translations = language;
                  }

                  var settings = data.data.settings;

                  if (settings && settings.length > 0) {
                    var info = settings[0];
                    _this.util.direction = info.appDirection;
                    _this.util.cside = info.currencySide;
                    _this.util.currecny = info.currencySymbol;
                    _this.util.logo = info.logo;
                    _this.util.twillo = info.twillo;
                    _this.util.delivery = info.delivery;
                    _this.util.user_login = info.user_login;
                    _this.util.home_type = info.home_ui;
                    _this.util.reset_pwd = info.reset_pwd;
                    document.documentElement.dir = _this.util.direction;
                  } else {
                    _this.util.direction = 'ltr';
                    _this.util.cside = 'right';
                    _this.util.currecny = '$';
                    document.documentElement.dir = _this.util.direction;
                  }

                  var general = data.data.general;
                  console.log('generalllll============================>', general);

                  if (general && general.length > 0) {
                    var _info2 = general[0];
                    _this.util.general = _info2;
                    _this.cart.minOrderPrice = parseFloat(_info2.min);
                    _this.cart.shipping = _info2.shipping;
                    _this.cart.shippingPrice = parseFloat(_info2.shippingPrice);
                    _this.cart.orderTax = parseFloat(_info2.tax);
                    _this.cart.flatTax = parseInt(_info2.tax);
                    _this.cart.freeShipping = parseFloat(_info2.free);
                  }
                }
              }, function (error) {
                console.log('default settings by id', error);
                _this.util.appClosed = false;
                _this.util.direction = 'ltr';
                _this.util.cside = 'right';
                _this.util.currecny = '$';
                document.documentElement.dir = _this.util.direction;
              });
            }

            if (_this.platform.is('cordova')) {
              console.log('cordova platform');
              setTimeout(function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  var _this2 = this;

                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return this.oneSignal.startInit(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].onesignal.appId, src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].onesignal.googleProjectNumber);

                        case 2:
                          this.oneSignal.getIds().then(function (data) {
                            console.log('iddddd', data);
                            localStorage.setItem('fcm', data.userId);
                            var uid = localStorage.getItem('uid');

                            if (uid && uid !== null && uid !== 'null') {
                              var _param = {
                                id: uid,
                                fcm_token: data.userId
                              };

                              _this2.api.post('users/edit_profile', _param).then(function (data) {
                                console.log('user info=>', data);
                              }, function (error) {
                                console.log(error);
                              });
                            }
                          });
                          this.oneSignal.enableSound(true);
                          _context.next = 6;
                          return this.oneSignal.endInit();

                        case 6:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                }));
              }, 1000);

              _this.oneSignal.inFocusDisplaying(2);
            }

            var uid = localStorage.getItem('uid');

            if (uid && uid !== null && uid !== 'null') {
              var _param2 = {
                id: uid
              };

              _this.api.post('users/getById', _param2).then(function (data) {
                console.log('*******************', data);

                if (data && data.status === 200 && data.data && data.data.length && data.data[0].type === 'user') {
                  _this.util.userInfo = data.data[0];
                } else {
                  localStorage.removeItem('uid');
                }
              }, function (error) {
                localStorage.removeItem('uid');
                console.log(error);
              });
            }

            _this.platform.backButton.subscribe(function () {
              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        console.log('asd', this.router.url, 'ad', this.router.isActive('/tabs/', true));

                        if (this.router.url.includes('/tabs/') || this.router.url.includes('/login')) {
                          navigator['app'].exitApp();
                        }

                      case 2:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            });
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.clear();
          this.navCtrl.navigateRoot(['/login']);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_6__["OneSignal"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
      }, {
        type: _services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _services_apis_service__WEBPACK_IMPORTED_MODULE_9__["ApisService"]
      }, {
        type: _services_cart_service__WEBPACK_IMPORTED_MODULE_10__["CartService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_6__["OneSignal"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_apis_service__WEBPACK_IMPORTED_MODULE_9__["ApisService"], _services_cart_service__WEBPACK_IMPORTED_MODULE_10__["CartService"]])], AppComponent);
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/android-permissions/ngx */
    "./node_modules/@ionic-native/android-permissions/ngx/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var src_app_pages_choose_address_choose_address_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/pages/choose-address/choose-address.module */
    "./src/app/pages/choose-address/choose-address.module.ts");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/ngx/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _pages_select_drivers_select_drivers_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pages/select-drivers/select-drivers.module */
    "./src/app/pages/select-drivers/select-drivers.module.ts");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/ngx/index.js");
    /* harmony import */


    var _pages_variations_variations_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./pages/variations/variations.module */
    "./src/app/pages/variations/variations.module.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _pages_verify_verify_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./pages/verify/verify.module */
    "./src/app/pages/verify/verify.module.ts");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
    /* harmony import */


    var _pages_product_rating_product_rating_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./pages/product-rating/product-rating.module */
    "./src/app/pages/product-rating/product-rating.module.ts");
    /* harmony import */


    var _pages_driver_rating_driver_rating_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./pages/driver-rating/driver-rating.module */
    "./src/app/pages/driver-rating/driver-rating.module.ts");
    /* harmony import */


    var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @ionic-native/diagnostic/ngx */
    "./node_modules/@ionic-native/diagnostic/ngx/index.js");
    /* harmony import */


    var _pages_select_country_select_country_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./pages/select-country/select-country.module */
    "./src/app/pages/select-country/select-country.module.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], src_app_pages_choose_address_choose_address_module__WEBPACK_IMPORTED_MODULE_11__["ChooseAddressPageModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _pages_select_drivers_select_drivers_module__WEBPACK_IMPORTED_MODULE_15__["SelectDriversPageModule"], _pages_variations_variations_module__WEBPACK_IMPORTED_MODULE_17__["VariationsPageModule"], _pages_verify_verify_module__WEBPACK_IMPORTED_MODULE_19__["VerifyPageModule"], _pages_product_rating_product_rating_module__WEBPACK_IMPORTED_MODULE_21__["ProductRatingPageModule"], _pages_driver_rating_driver_rating_module__WEBPACK_IMPORTED_MODULE_22__["DriverRatingPageModule"], _pages_select_country_select_country_module__WEBPACK_IMPORTED_MODULE_24__["SelectCountryPageModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_18__["IonicStorageModule"].forRoot()],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_9__["AndroidPermissions"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__["Geolocation"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_12__["OneSignal"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__["Camera"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_16__["HTTP"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_20__["InAppBrowser"], _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_23__["Diagnostic"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/components.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/components.module.ts ***!
    \*************************************************/

  /*! exports provided: ComponentsModule */

  /***/
  function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
      return ComponentsModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _components_popover_popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../components/popover/popover.component */
    "./src/app/components/popover/popover.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/components/menu/menu.component.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var components = [_components_popover_popover_component__WEBPACK_IMPORTED_MODULE_4__["PopoverComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"]];

    var ComponentsModule = function ComponentsModule() {
      _classCallCheck(this, ComponentsModule);
    };

    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [components],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
      exports: [].concat(components)
    })], ComponentsModule);
    /***/
  },

  /***/
  "./src/app/components/menu/menu.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/menu/menu.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMenuMenuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.selected {\n  color: var(--ion-color-primary);\n  font-weight: bold;\n}\n.normal {\n  color: var(--ion-color-dark);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS9DOlxcVXNlcnNcXGFscGhhXFxzb3VyY2VcXHJlcG9zXFxraW5nZm9vZFxcVXNlcl9hcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG1lbnVcXG1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7OztDQUFBO0FBU0E7RUFDSSwrQkFBQTtFQUNBLGlCQUFBO0FERUo7QUNBQTtFQUNJLDRCQUFBO0FER0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZm9vZGllcyBhcHBcbiAgQ3JlYXRlZCA6IDI4LUZlYi0yMDIxXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLnNlbGVjdGVkIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5ub3JtYWwge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufSIsIi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZm9vZGllcyBhcHBcbiAgQ3JlYXRlZCA6IDI4LUZlYi0yMDIxXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLnNlbGVjdGVkIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm5vcm1hbCB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/menu/menu.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/menu/menu.component.ts ***!
    \***************************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppComponentsMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var MenuComponent = /*#__PURE__*/function () {
      function MenuComponent(navParam, popoverController) {
        _classCallCheck(this, MenuComponent);

        this.navParam = navParam;
        this.popoverController = popoverController;
        this.id = this.navParam.get('id');
        this.cates = this.navParam.get('data');
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selected",
        value: function selected(item) {
          this.popoverController.dismiss(item, 'selected');
        }
      }]);

      return MenuComponent;
    }();

    MenuComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }];
    };

    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu/menu.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./menu.component.scss */
      "./src/app/components/menu/menu.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])], MenuComponent);
    /***/
  },

  /***/
  "./src/app/components/popover/popover.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/popover/popover.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPopoverPopoverComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3BvdmVyL3BvcG92ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcG9wb3Zlci9DOlxcVXNlcnNcXGFscGhhXFxzb3VyY2VcXHJlcG9zXFxraW5nZm9vZFxcVXNlcl9hcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBvcG92ZXJcXHBvcG92ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7OztDQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wb3BvdmVyL3BvcG92ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGZvb2RpZXMgYXBwXG4gIENyZWF0ZWQgOiAyOC1GZWItMjAyMVxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi8iLCIvKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGZvb2RpZXMgYXBwXG4gIENyZWF0ZWQgOiAyOC1GZWItMjAyMVxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/popover/popover.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/popover/popover.component.ts ***!
    \*********************************************************/

  /*! exports provided: PopoverComponent */

  /***/
  function srcAppComponentsPopoverPopoverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopoverComponent", function () {
      return PopoverComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var PopoverComponent = /*#__PURE__*/function () {
      function PopoverComponent(popoverController, util) {
        _classCallCheck(this, PopoverComponent);

        this.popoverController = popoverController;
        this.util = util;
      }

      _createClass(PopoverComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "select",
        value: function select(type) {
          this.popoverController.dismiss(type);
        }
      }]);

      return PopoverComponent;
    }();

    PopoverComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
      }, {
        type: _services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"]
      }];
    };

    PopoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-popover',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./popover.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popover/popover.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./popover.component.scss */
      "./src/app/components/popover/popover.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"], _services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"]])], PopoverComponent);
    /***/
  },

  /***/
  "./src/app/guard/auth.guard.ts":
  /*!*************************************!*\
    !*** ./src/app/guard/auth.guard.ts ***!
    \*************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
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


    var _services_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/apis.service */
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


    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(authServ, router) {
        _classCallCheck(this, AuthGuard);

        this.authServ = authServ;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route) {
          var uid = localStorage.getItem('uid');
          console.log('uid', localStorage.getItem('uid'));

          if (uid && uid != null && uid !== 'null') {
            return true;
          }

          this.router.navigate(['/login']);
          return false;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AuthGuard);
    /***/
  },

  /***/
  "./src/app/locationGuard/location.guard.ts":
  /*!*************************************************!*\
    !*** ./src/app/locationGuard/location.guard.ts ***!
    \*************************************************/

  /*! exports provided: LocationGuard */

  /***/
  function srcAppLocationGuardLocationGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocationGuard", function () {
      return LocationGuard;
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


    var _services_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/apis.service */
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


    var LocationGuard = /*#__PURE__*/function () {
      function LocationGuard(authServ, router) {
        _classCallCheck(this, LocationGuard);

        this.authServ = authServ;
        this.router = router;
      }

      _createClass(LocationGuard, [{
        key: "canActivate",
        value: function canActivate(route) {
          var location = localStorage.getItem('location');
          console.log('location', localStorage.getItem('location'));

          if (location && location != null && location !== 'null') {
            return true;
          }

          this.router.navigate(['/location']);
          return false;
        }
      }]);

      return LocationGuard;
    }();

    LocationGuard.ctorParameters = function () {
      return [{
        type: _services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    LocationGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], LocationGuard);
    /***/
  },

  /***/
  "./src/app/pages/choose-address/choose-address-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/choose-address/choose-address-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: ChooseAddressPageRoutingModule */

  /***/
  function srcAppPagesChooseAddressChooseAddressRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChooseAddressPageRoutingModule", function () {
      return ChooseAddressPageRoutingModule;
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


    var _choose_address_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./choose-address.page */
    "./src/app/pages/choose-address/choose-address.page.ts");
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
      component: _choose_address_page__WEBPACK_IMPORTED_MODULE_3__["ChooseAddressPage"]
    }];

    var ChooseAddressPageRoutingModule = function ChooseAddressPageRoutingModule() {
      _classCallCheck(this, ChooseAddressPageRoutingModule);
    };

    ChooseAddressPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ChooseAddressPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/choose-address/choose-address.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/choose-address/choose-address.module.ts ***!
    \***************************************************************/

  /*! exports provided: ChooseAddressPageModule */

  /***/
  function srcAppPagesChooseAddressChooseAddressModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChooseAddressPageModule", function () {
      return ChooseAddressPageModule;
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


    var _choose_address_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./choose-address-routing.module */
    "./src/app/pages/choose-address/choose-address-routing.module.ts");
    /* harmony import */


    var _choose_address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./choose-address.page */
    "./src/app/pages/choose-address/choose-address.page.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var src_app_components_popover_popover_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/components/popover/popover.component */
    "./src/app/components/popover/popover.component.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var ChooseAddressPageModule = function ChooseAddressPageModule() {
      _classCallCheck(this, ChooseAddressPageModule);
    };

    ChooseAddressPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      entryComponents: [src_app_components_popover_popover_component__WEBPACK_IMPORTED_MODULE_8__["PopoverComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _choose_address_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChooseAddressPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_choose_address_page__WEBPACK_IMPORTED_MODULE_6__["ChooseAddressPage"]]
    })], ChooseAddressPageModule);
    /***/
  },

  /***/
  "./src/app/pages/choose-address/choose-address.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/pages/choose-address/choose-address.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesChooseAddressChooseAddressPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\nion-label {\n  display: block;\n}\n.group {\n  padding: 10px 15px;\n  width: 100%;\n  background: #fff !important;\n}\n.group .mainContent {\n  padding: 5px 10px;\n}\n.group .mainContent .savedTitle {\n  font-weight: bold;\n}\n.group .mainContent .noData {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 100%;\n  height: 250px;\n}\n.group .mainContent .list {\n  margin-top: 20px;\n  position: relative;\n  overflow-x: auto;\n}\n.group .mainContent .list::-webkit-scrollbar {\n  display: none;\n}\n.group .mainContent .list .scroll-item {\n  flex: 0 0 auto;\n}\n.group .mainContent .list .title {\n  font-weight: bold;\n  color: black;\n  font-size: 14px;\n  white-space: pre-wrap;\n  text-transform: capitalize;\n  margin-bottom: 5px;\n}\n.group .mainContent .list .name {\n  color: gray;\n  font-size: 13px;\n}\n.group .mainContent .list .moreIcon {\n  position: absolute;\n  right: 0px;\n  top: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hvb3NlLWFkZHJlc3MvY2hvb3NlLWFkZHJlc3MucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jaG9vc2UtYWRkcmVzcy9DOlxcVXNlcnNcXGFscGhhXFxzb3VyY2VcXHJlcG9zXFxraW5nZm9vZFxcVXNlcl9hcHAvc3JjXFxhcHBcXHBhZ2VzXFxjaG9vc2UtYWRkcmVzc1xcY2hvb3NlLWFkZHJlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7Q0FBQTtBQVlBO0VBQ0ksY0FBQTtBRERKO0FDR0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBREFKO0FDQ0k7RUFDSSxpQkFBQTtBRENSO0FDQVE7RUFDSSxpQkFBQTtBREVaO0FDQVE7RUFDSSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FERVo7QUNBUTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFHQSxnQkFBQTtBREFaO0FDQ1k7RUFDSSxhQUFBO0FEQ2hCO0FDQ1k7RUFDSSxjQUFBO0FEQ2hCO0FDQ1k7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FEQ2hCO0FDQ1k7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBRENoQjtBQ0NZO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBRENoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Nob29zZS1hZGRyZXNzL2Nob29zZS1hZGRyZXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZm9vZGllcyBhcHBcbiAgQ3JlYXRlZCA6IDI4LUZlYi0yMDIxXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5ncm91cCB7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbn1cbi5ncm91cCAubWFpbkNvbnRlbnQge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cbi5ncm91cCAubWFpbkNvbnRlbnQgLnNhdmVkVGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5ncm91cCAubWFpbkNvbnRlbnQgLm5vRGF0YSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNTBweDtcbn1cbi5ncm91cCAubWFpbkNvbnRlbnQgLmxpc3Qge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG4uZ3JvdXAgLm1haW5Db250ZW50IC5saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZ3JvdXAgLm1haW5Db250ZW50IC5saXN0IC5zY3JvbGwtaXRlbSB7XG4gIGZsZXg6IDAgMCBhdXRvO1xufVxuLmdyb3VwIC5tYWluQ29udGVudCAubGlzdCAudGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5ncm91cCAubWFpbkNvbnRlbnQgLmxpc3QgLm5hbWUge1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLmdyb3VwIC5tYWluQ29udGVudCAubGlzdCAubW9yZUljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIHRvcDogMXB4O1xufSIsIi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZm9vZGllcyBhcHBcbiAgQ3JlYXRlZCA6IDI4LUZlYi0yMDIxXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuaW9uLWNvbnRlbnQge1xuICAgIC8vICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuaW9uLWxhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi5ncm91cCB7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbiAgICAubWFpbkNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgLnNhdmVkVGl0bGUge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgLm5vRGF0YSB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgfVxuICAgICAgICAubGlzdCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgLy8gZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIC8vIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNjcm9sbC1pdGVtIHtcbiAgICAgICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tb3JlSWNvbiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgICAgdG9wOiAxcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/choose-address/choose-address.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/choose-address/choose-address.page.ts ***!
    \*************************************************************/

  /*! exports provided: ChooseAddressPage */

  /***/
  function srcAppPagesChooseAddressChooseAddressPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChooseAddressPage", function () {
      return ChooseAddressPage;
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


    var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_components_popover_popover_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/components/popover/popover.component */
    "./src/app/components/popover/popover.component.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/cart.service */
    "./src/app/services/cart.service.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var ChooseAddressPage = /*#__PURE__*/function () {
      function ChooseAddressPage(router, api, util, navCtrl, route, popoverController, cart) {
        var _this3 = this;

        _classCallCheck(this, ChooseAddressPage);

        this.router = router;
        this.api = api;
        this.util = util;
        this.navCtrl = navCtrl;
        this.route = route;
        this.popoverController = popoverController;
        this.cart = cart;
        this.myaddress = [];
        this.dummy = Array(10);
        console.log('notes', this.cart.orderNotes);
        this.route.queryParams.subscribe(function (data) {
          console.log(data);

          if (data && data.from) {
            _this3.from = data.from;
          }
        });
        this.getAddress();
        this.util.getObservable().subscribe(function (data) {
          _this3.getAddress();
        });
      }

      _createClass(ChooseAddressPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getAddress",
        value: function getAddress() {
          var _this4 = this;

          var param = {
            id: localStorage.getItem('uid')
          };
          this.api.post('address/getByUid', param).then(function (data) {
            console.log(data);
            _this4.dummy = [];

            if (data && data.status === 200 && data.data.length > 0) {
              _this4.myaddress = data.data;
            }
          }, function (error) {
            console.log(error);
            _this4.dummy = [];

            _this4.util.errorToast(_this4.util.translate('Something went wrong'));
          })["catch"](function (error) {
            console.log(error);
            _this4.dummy = [];

            _this4.util.errorToast(_this4.util.translate('Something went wrong'));
          });
        }
      }, {
        key: "addNew",
        value: function addNew() {
          this.router.navigate(['add-new-address']);
        }
      }, {
        key: "selectAddress",
        value: function selectAddress() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this5 = this;

            var selected, item, distance, permittedDistance;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!(this.from === 'cart')) {
                      _context3.next = 13;
                      break;
                    }

                    console.log(this.util.general);
                    console.log(this.cart.cartStoreInfo);
                    selected = this.myaddress.filter(function (x) {
                      return x.id === _this5.selectedAddress;
                    });

                    if (!(selected && selected.length && this.cart.cartStoreInfo && this.cart.cartStoreInfo.lat)) {
                      _context3.next = 13;
                      break;
                    }

                    item = selected[0];
                    _context3.next = 8;
                    return this.distanceInKmBetweenEarthCoordinates(parseFloat(this.cart.cartStoreInfo.lat), parseFloat(this.cart.cartStoreInfo.lng), parseFloat(item.lat), parseFloat(item.lng));

                  case 8:
                    distance = _context3.sent;
                    console.log('distance', distance);
                    permittedDistance = parseInt(this.util.general.allowDistance);
                    console.log('--', permittedDistance);

                    if (distance <= permittedDistance) {
                      console.log('distance is ok... you can order now');
                      this.cart.deliveryAddress = item;
                      this.cart.calcuate();
                      this.router.navigate(['payments']);
                    } else {
                      this.util.errorToast('Distance between your address and restaurant address must be  ' + permittedDistance + ' KM');
                    }

                  case 13:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "degreesToRadians",
        value: function degreesToRadians(degrees) {
          return degrees * Math.PI / 180;
        }
      }, {
        key: "distanceInKmBetweenEarthCoordinates",
        value: function distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
          console.log(lat1, lon1, lat2, lon2);
          var earthRadiusKm = 6371;
          var dLat = this.degreesToRadians(lat2 - lat1);
          var dLon = this.degreesToRadians(lon2 - lon1);
          lat1 = this.degreesToRadians(lat1);
          lat2 = this.degreesToRadians(lat2);
          var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
          return earthRadiusKm * c;
        }
      }, {
        key: "openMenu",
        value: function openMenu(item, events) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this6 = this;

            var popover;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.popoverController.create({
                      component: src_app_components_popover_popover_component__WEBPACK_IMPORTED_MODULE_6__["PopoverComponent"],
                      event: events,
                      mode: 'ios'
                    });

                  case 2:
                    popover = _context4.sent;
                    popover.onDidDismiss().then(function (data) {
                      console.log(data.data);

                      if (data && data.data) {
                        if (data.data === 'edit') {
                          var navData = {
                            queryParams: {
                              from: 'edit',
                              data: JSON.stringify(item)
                            }
                          };

                          _this6.router.navigate(['add-new-address'], navData);
                        } else if (data.data === 'delete') {
                          console.log(item);
                          sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                            title: _this6.util.translate('Are you sure?'),
                            text: _this6.util.translate('to delete this address'),
                            icon: 'question',
                            confirmButtonText: _this6.util.translate('Yes'),
                            backdrop: false,
                            background: 'white',
                            showCancelButton: true,
                            showConfirmButton: true,
                            cancelButtonText: _this6.util.translate('cancel')
                          }).then(function (data) {
                            console.log(data);

                            if (data && data.value) {
                              _this6.util.show();

                              var param = {
                                id: item.id
                              };

                              _this6.api.post('address/deleteList', param).then(function (info) {
                                console.log(info);

                                _this6.util.hide();

                                _this6.getAddress();
                              }, function (error) {
                                console.log(error);

                                _this6.util.hide();

                                _this6.util.errorToast(_this6.util.translate('Something went wrong'));
                              })["catch"](function (error) {
                                console.log(error);

                                _this6.util.hide();

                                _this6.util.errorToast(_this6.util.translate('Something went wrong'));
                              });
                            }
                          });
                        }
                      }
                    });
                    _context4.next = 6;
                    return popover.present();

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return ChooseAddressPage;
    }();

    ChooseAddressPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"]
      }, {
        type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_8__["CartService"]
      }];
    };

    ChooseAddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-choose-address',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./choose-address.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/choose-address/choose-address.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./choose-address.page.scss */
      "./src/app/pages/choose-address/choose-address.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"], src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_8__["CartService"]])], ChooseAddressPage);
    /***/
  },

  /***/
  "./src/app/pages/driver-rating/driver-rating-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/driver-rating/driver-rating-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: DriverRatingPageRoutingModule */

  /***/
  function srcAppPagesDriverRatingDriverRatingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DriverRatingPageRoutingModule", function () {
      return DriverRatingPageRoutingModule;
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


    var _driver_rating_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./driver-rating.page */
    "./src/app/pages/driver-rating/driver-rating.page.ts");
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
      component: _driver_rating_page__WEBPACK_IMPORTED_MODULE_3__["DriverRatingPage"]
    }];

    var DriverRatingPageRoutingModule = function DriverRatingPageRoutingModule() {
      _classCallCheck(this, DriverRatingPageRoutingModule);
    };

    DriverRatingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DriverRatingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/driver-rating/driver-rating.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/driver-rating/driver-rating.module.ts ***!
    \*************************************************************/

  /*! exports provided: DriverRatingPageModule */

  /***/
  function srcAppPagesDriverRatingDriverRatingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DriverRatingPageModule", function () {
      return DriverRatingPageModule;
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


    var _driver_rating_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./driver-rating-routing.module */
    "./src/app/pages/driver-rating/driver-rating-routing.module.ts");
    /* harmony import */


    var _driver_rating_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./driver-rating.page */
    "./src/app/pages/driver-rating/driver-rating.page.ts");
    /* harmony import */


    var ionic4_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ionic4-rating */
    "./node_modules/ionic4-rating/dist/index.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var DriverRatingPageModule = function DriverRatingPageModule() {
      _classCallCheck(this, DriverRatingPageModule);
    };

    DriverRatingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _driver_rating_routing_module__WEBPACK_IMPORTED_MODULE_5__["DriverRatingPageRoutingModule"], ionic4_rating__WEBPACK_IMPORTED_MODULE_7__["IonicRatingModule"]],
      declarations: [_driver_rating_page__WEBPACK_IMPORTED_MODULE_6__["DriverRatingPage"]]
    })], DriverRatingPageModule);
    /***/
  },

  /***/
  "./src/app/pages/driver-rating/driver-rating.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/pages/driver-rating/driver-rating.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDriverRatingDriverRatingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.main_content_div {\n  padding: 20px;\n}\n.main_content_div .main_div {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.main_content_div .user_img {\n  height: 90px;\n  width: 90px;\n  border-radius: 50%;\n  border: 3px solid var(--ion-color-primary);\n  margin: auto;\n  margin-bottom: 30px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-width: 90px;\n  position: relative;\n}\n.main_content_div .rattingBtns {\n  margin: 20px 0px;\n}\n.main_content_div .name {\n  border-radius: 5px;\n  box-shadow: 0px 0px 20px -3px rgba(30, 98, 255, 0.3);\n  display: flex;\n  flex-direction: row;\n  padding: 10px;\n  justify-content: flex-start;\n  position: relative;\n  margin-bottom: 20px;\n}\n.main_content_div .name .image_div {\n  width: 20px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.main_content_div .name .icn {\n  max-width: 15px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.main_content_div .name .content_div {\n  position: relative;\n  display: flex;\n  flex-flow: row;\n  margin-left: 15px;\n}\n.main_content_div .name .content_div span {\n  font-size: 11px;\n  color: #8992aa;\n  padding-top: 5px;\n}\n.main_content_div .name .content_div ion-input {\n  font-size: 11px;\n  color: #454d62;\n}\n.main_content_div .btn_div {\n  display: block;\n  width: 100%;\n  text-align: center;\n}\n.main_content_div ion-button {\n  --background: var(--ion-color-primary);\n  --border-radius: 3px;\n  --color: white;\n  font-weight: bold;\n  font-size: 12px;\n  height: 40px;\n  width: 150px;\n  text-transform: capitalize;\n  --background-activated: rgba(159, 201, 165, 0.5);\n  --color-actived: white;\n}\n.main_content_div ion-button .logout_icon {\n  width: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZHJpdmVyLXJhdGluZy9kcml2ZXItcmF0aW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZHJpdmVyLXJhdGluZy9DOlxcVXNlcnNcXGFscGhhXFxzb3VyY2VcXHJlcG9zXFxraW5nZm9vZFxcVXNlcl9hcHAvc3JjXFxhcHBcXHBhZ2VzXFxkcml2ZXItcmF0aW5nXFxkcml2ZXItcmF0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7O0NBQUE7QUFTQTtFQUNJLGFBQUE7QURFSjtBQ0FJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QURFUjtBQ0FJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FERVI7QUNBSTtFQUNJLGdCQUFBO0FERVI7QUNBSTtFQUNJLGtCQUFBO0VBQ0Esb0RBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FERVI7QUNBUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QURFWjtBQ0FRO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FERVo7QUNBUTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBREVaO0FDQVk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FERWhCO0FDQVk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBREVoQjtBQ0dJO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBRERSO0FDR0k7RUFDSSxzQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxnREFBQTtFQUNBLHNCQUFBO0FERFI7QUNFUTtFQUNJLFdBQUE7QURBWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RyaXZlci1yYXRpbmcvZHJpdmVyLXJhdGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGZvb2RpZXMgYXBwXG4gIENyZWF0ZWQgOiAyOC1GZWItMjAyMVxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5tYWluX2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC51c2VyX2ltZyB7XG4gIGhlaWdodDogOTBweDtcbiAgd2lkdGg6IDkwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWluLXdpZHRoOiA5MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmF0dGluZ0J0bnMge1xuICBtYXJnaW46IDIwcHggMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLm5hbWUge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAtM3B4IHJnYmEoMzAsIDk4LCAyNTUsIDAuMyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLm5hbWUgLmltYWdlX2RpdiB7XG4gIHdpZHRoOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgLm5hbWUgLmljbiB7XG4gIG1heC13aWR0aDogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuLm1haW5fY29udGVudF9kaXYgLm5hbWUgLmNvbnRlbnRfZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdztcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubmFtZSAuY29udGVudF9kaXYgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICM4OTkyYWE7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubmFtZSAuY29udGVudF9kaXYgaW9uLWlucHV0IHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogIzQ1NGQ2Mjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5idG5fZGl2IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiByZ2JhKDE1OSwgMjAxLCAxNjUsIDAuNSk7XG4gIC0tY29sb3ItYWN0aXZlZDogd2hpdGU7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tYnV0dG9uIC5sb2dvdXRfaWNvbiB7XG4gIHdpZHRoOiAxMnB4O1xufSIsIi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZm9vZGllcyBhcHBcbiAgQ3JlYXRlZCA6IDI4LUZlYi0yMDIxXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLm1haW5fY29udGVudF9kaXYge1xuICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICAubWFpbl9kaXYge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuICAgIC51c2VyX2ltZyB7XG4gICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgbWluLXdpZHRoOiA5MHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIC5yYXR0aW5nQnRucyB7XG4gICAgICAgIG1hcmdpbjogMjBweCAwcHg7XG4gICAgfVxuICAgIC5uYW1lIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggLTNweCByZ2JhKDMwLCA5OCwgMjU1LCAwLjMpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgICAgICAuaW1hZ2VfZGl2IHtcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmljbiB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudF9kaXYge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogcm93O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG5cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzg5OTJhYTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWlucHV0IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM0NTRkNjI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYnRuX2RpdiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiByZ2JhKDE1OSwgMjAxLCAxNjUsIDAuNSk7XG4gICAgICAgIC0tY29sb3ItYWN0aXZlZDogd2hpdGU7XG4gICAgICAgIC5sb2dvdXRfaWNvbiB7XG4gICAgICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/driver-rating/driver-rating.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/driver-rating/driver-rating.page.ts ***!
    \***********************************************************/

  /*! exports provided: DriverRatingPage */

  /***/
  function srcAppPagesDriverRatingDriverRatingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DriverRatingPage", function () {
      return DriverRatingPage;
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


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var DriverRatingPage = /*#__PURE__*/function () {
      function DriverRatingPage(util, api, route) {
        var _this7 = this;

        _classCallCheck(this, DriverRatingPage);

        this.util = util;
        this.api = api;
        this.route = route;
        this.rate = 2;
        this.comment = '';
        this.rating = [];
        this.route.queryParams.subscribe(function (data) {
          console.log(data);

          if (data && data.id && data.name) {
            _this7.id = data.id;
            _this7.name = data.name;
            _this7.way = 'order';
            console.log('id', _this7.id);
            console.log('name', _this7.name);
            var param = {
              where: 'did = ' + _this7.id
            };

            _this7.util.show();

            _this7.api.post('rating/getFromCount', param).then(function (data) {
              _this7.util.hide();

              console.log('data', data);

              if (data && data.status === 200) {
                if (data && data.data && data.data.total) {
                  _this7.total = data.data.total;

                  if (data.data.rating) {
                    var rats = data.data.rating;
                    console.log(rats.split(','));
                    _this7.rating = rats.split(',');
                  } else {
                    _this7.rating = [];
                  }
                } else {
                  _this7.total = 0;
                  _this7.rating = [];
                }
              } else {
                _this7.total = 0;
                _this7.rating = [];
              }

              console.log('total', _this7.total);
            }, function (error) {
              console.log(error);

              _this7.util.hide();

              _this7.total = 0;
              _this7.rating = [];
            });
          }
        });
      }

      _createClass(DriverRatingPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close() {
          this.util.back();
        }
      }, {
        key: "onRatingChange",
        value: function onRatingChange(event) {
          console.log(event);
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this8 = this;

          this.rating.push(this.rate);
          var count = 0;
          var sum = this.rating.reduce(function (sum, item, index) {
            item = parseFloat(item);
            console.log(sum, item, index);
            count += item;
            return sum + item * (index + 1);
          }, 0);
          console.log(sum / count);
          var storeRating = (sum / count).toFixed(2);
          console.log('rate', this.rate, this.comment);

          if (this.comment === '') {
            this.util.errorToast(this.util.translate('Something went wrong'));
            return false;
          }

          var param = {
            uid: localStorage.getItem('uid'),
            pid: 0,
            did: this.id,
            sid: 0,
            rate: this.rate,
            msg: this.comment,
            way: this.way,
            status: 1,
            timestamp: moment__WEBPACK_IMPORTED_MODULE_3__().format('YYYY-MM-DD')
          };
          this.util.show();
          this.api.post('rating/save', param).then(function (data) {
            console.log(data);

            _this8.util.hide();

            if (data && data.status === 200) {
              _this8.util.showToast(_this8.util.translate('Rating added'), 'success', 'bottom');

              _this8.close();
            } else {
              _this8.util.errorToast(_this8.util.translate('Something went wrong'));
            }
          }, function (error) {
            _this8.util.hide();

            console.log(error);

            _this8.util.errorToast(_this8.util.translate('Something went wrong'));
          });
        }
      }]);

      return DriverRatingPage;
    }();

    DriverRatingPage.ctorParameters = function () {
      return [{
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]
      }, {
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }];
    };

    DriverRatingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-driver-rating',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./driver-rating.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/driver-rating/driver-rating.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./driver-rating.page.scss */
      "./src/app/pages/driver-rating/driver-rating.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])], DriverRatingPage);
    /***/
  },

  /***/
  "./src/app/pages/product-rating/product-rating-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/product-rating/product-rating-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: ProductRatingPageRoutingModule */

  /***/
  function srcAppPagesProductRatingProductRatingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductRatingPageRoutingModule", function () {
      return ProductRatingPageRoutingModule;
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


    var _product_rating_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./product-rating.page */
    "./src/app/pages/product-rating/product-rating.page.ts");
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
      component: _product_rating_page__WEBPACK_IMPORTED_MODULE_3__["ProductRatingPage"]
    }];

    var ProductRatingPageRoutingModule = function ProductRatingPageRoutingModule() {
      _classCallCheck(this, ProductRatingPageRoutingModule);
    };

    ProductRatingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProductRatingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/product-rating/product-rating.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/product-rating/product-rating.module.ts ***!
    \***************************************************************/

  /*! exports provided: ProductRatingPageModule */

  /***/
  function srcAppPagesProductRatingProductRatingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductRatingPageModule", function () {
      return ProductRatingPageModule;
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


    var _product_rating_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./product-rating-routing.module */
    "./src/app/pages/product-rating/product-rating-routing.module.ts");
    /* harmony import */


    var _product_rating_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./product-rating.page */
    "./src/app/pages/product-rating/product-rating.page.ts");
    /* harmony import */


    var ionic4_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ionic4-rating */
    "./node_modules/ionic4-rating/dist/index.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var ProductRatingPageModule = function ProductRatingPageModule() {
      _classCallCheck(this, ProductRatingPageModule);
    };

    ProductRatingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _product_rating_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductRatingPageRoutingModule"], ionic4_rating__WEBPACK_IMPORTED_MODULE_7__["IonicRatingModule"]],
      declarations: [_product_rating_page__WEBPACK_IMPORTED_MODULE_6__["ProductRatingPage"]]
    })], ProductRatingPageModule);
    /***/
  },

  /***/
  "./src/app/pages/product-rating/product-rating.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/pages/product-rating/product-rating.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProductRatingProductRatingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.main_content_div {\n  padding: 20px;\n}\n.main_content_div .main_div {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.main_content_div .user_img {\n  height: 90px;\n  width: 90px;\n  border-radius: 50%;\n  border: 3px solid var(--ion-color-primary);\n  margin: auto;\n  margin-bottom: 30px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-width: 90px;\n  position: relative;\n}\n.main_content_div .rattingBtns {\n  margin: 20px 0px;\n}\n.main_content_div .name {\n  border-radius: 5px;\n  box-shadow: 0px 0px 20px -3px rgba(30, 98, 255, 0.3);\n  display: flex;\n  flex-direction: row;\n  padding: 10px;\n  justify-content: flex-start;\n  position: relative;\n  margin-bottom: 20px;\n}\n.main_content_div .name .image_div {\n  width: 20px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.main_content_div .name .icn {\n  max-width: 15px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.main_content_div .name .content_div {\n  position: relative;\n  display: flex;\n  flex-flow: row;\n  margin-left: 15px;\n}\n.main_content_div .name .content_div span {\n  font-size: 11px;\n  color: #8992aa;\n  padding-top: 5px;\n}\n.main_content_div .name .content_div ion-input {\n  font-size: 11px;\n  color: #454d62;\n}\n.main_content_div .btn_div {\n  display: block;\n  width: 100%;\n  text-align: center;\n}\n.main_content_div ion-button {\n  --background: var(--ion-color-primary);\n  --border-radius: 3px;\n  --color: white;\n  font-weight: bold;\n  font-size: 12px;\n  height: 40px;\n  width: 150px;\n  text-transform: capitalize;\n  --background-activated: rgba(159, 201, 165, 0.5);\n  --color-actived: white;\n}\n.main_content_div ion-button .logout_icon {\n  width: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC1yYXRpbmcvcHJvZHVjdC1yYXRpbmcucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9kdWN0LXJhdGluZy9DOlxcVXNlcnNcXGFscGhhXFxzb3VyY2VcXHJlcG9zXFxraW5nZm9vZFxcVXNlcl9hcHAvc3JjXFxhcHBcXHBhZ2VzXFxwcm9kdWN0LXJhdGluZ1xccHJvZHVjdC1yYXRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7Q0FBQTtBQVNBO0VBQ0ksYUFBQTtBREVKO0FDQUk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBREVSO0FDQUk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QURFUjtBQ0FJO0VBQ0ksZ0JBQUE7QURFUjtBQ0FJO0VBQ0ksa0JBQUE7RUFDQSxvREFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURFUjtBQ0FRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBREVaO0FDQVE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QURFWjtBQ0FRO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FERVo7QUNBWTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QURFaEI7QUNBWTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FERWhCO0FDR0k7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FERFI7QUNHSTtFQUNJLHNDQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGdEQUFBO0VBQ0Esc0JBQUE7QUREUjtBQ0VRO0VBQ0ksV0FBQTtBREFaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZHVjdC1yYXRpbmcvcHJvZHVjdC1yYXRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBmb29kaWVzIGFwcFxuICBDcmVhdGVkIDogMjgtRmViLTIwMjFcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubWFpbl9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ubWFpbl9jb250ZW50X2RpdiAudXNlcl9pbWcge1xuICBoZWlnaHQ6IDkwcHg7XG4gIHdpZHRoOiA5MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG1pbi13aWR0aDogOTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fY29udGVudF9kaXYgLnJhdHRpbmdCdG5zIHtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5uYW1lIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggLTNweCByZ2JhKDMwLCA5OCwgMjU1LCAwLjMpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwYWRkaW5nOiAxMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5uYW1lIC5pbWFnZV9kaXYge1xuICB3aWR0aDogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5uYW1lIC5pY24ge1xuICBtYXgtd2lkdGg6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5uYW1lIC5jb250ZW50X2RpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3c7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLm5hbWUgLmNvbnRlbnRfZGl2IHNwYW4ge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjODk5MmFhO1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLm5hbWUgLmNvbnRlbnRfZGl2IGlvbi1pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICM0NTRkNjI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYnRuX2RpdiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEycHg7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogcmdiYSgxNTksIDIwMSwgMTY1LCAwLjUpO1xuICAtLWNvbG9yLWFjdGl2ZWQ6IHdoaXRlO1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWJ1dHRvbiAubG9nb3V0X2ljb24ge1xuICB3aWR0aDogMTJweDtcbn0iLCIvKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGZvb2RpZXMgYXBwXG4gIENyZWF0ZWQgOiAyOC1GZWItMjAyMVxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgLm1haW5fZGl2IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cbiAgICAudXNlcl9pbWcge1xuICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIG1pbi13aWR0aDogOTBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgICAucmF0dGluZ0J0bnMge1xuICAgICAgICBtYXJnaW46IDIwcHggMHB4O1xuICAgIH1cbiAgICAubmFtZSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IC0zcHggcmdiYSgzMCwgOTgsIDI1NSwgMC4zKTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICAgICAgLmltYWdlX2RpdiB7XG4gICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5pY24ge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnRfZGl2IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IHJvdztcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuXG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM4OTkyYWE7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNDU0ZDYyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmJ0bl9kaXYge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgLS1jb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogcmdiYSgxNTksIDIwMSwgMTY1LCAwLjUpO1xuICAgICAgICAtLWNvbG9yLWFjdGl2ZWQ6IHdoaXRlO1xuICAgICAgICAubG9nb3V0X2ljb24ge1xuICAgICAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/product-rating/product-rating.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/product-rating/product-rating.page.ts ***!
    \*************************************************************/

  /*! exports provided: ProductRatingPage */

  /***/
  function srcAppPagesProductRatingProductRatingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductRatingPage", function () {
      return ProductRatingPage;
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


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var ProductRatingPage = /*#__PURE__*/function () {
      function ProductRatingPage(util, api, route) {
        var _this9 = this;

        _classCallCheck(this, ProductRatingPage);

        this.util = util;
        this.api = api;
        this.route = route;
        this.rate = 2;
        this.comment = '';
        this.rating = [];
        this.route.queryParams.subscribe(function (data) {
          console.log(data);

          if (data && data.id && data.name) {
            _this9.id = data.id;
            _this9.name = data.name;
            _this9.way = 'order';
            console.log('id', _this9.id);
            console.log('name', _this9.name);
            var param = {
              where: 'pid = ' + _this9.id
            };

            _this9.util.show();

            _this9.api.post('rating/getFromCount', param).then(function (data) {
              _this9.util.hide();

              console.log('data', data);

              if (data && data.status === 200) {
                if (data && data.data && data.data.total) {
                  _this9.total = data.data.total;

                  if (data.data.rating) {
                    var rats = data.data.rating;
                    console.log(rats.split(','));
                    _this9.rating = rats.split(',');
                  } else {
                    _this9.rating = [];
                  }
                } else {
                  _this9.total = 0;
                  _this9.rating = [];
                }
              } else {
                _this9.total = 0;
                _this9.rating = [];
              }

              console.log('total', _this9.total);
            }, function (error) {
              console.log(error);

              _this9.util.hide();

              _this9.total = 0;
              _this9.rating = [];
            });
          }
        });
      }

      _createClass(ProductRatingPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close() {
          this.util.back();
        }
      }, {
        key: "onRatingChange",
        value: function onRatingChange(event) {
          console.log(event);
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this10 = this;

          this.rating.push(this.rate);
          var count = 0;
          var sum = this.rating.reduce(function (sum, item, index) {
            item = parseFloat(item);
            console.log(sum, item, index);
            count += item;
            return sum + item * (index + 1);
          }, 0);
          console.log(sum / count);
          var storeRating = (sum / count).toFixed(2);
          console.log('rate', this.rate, this.comment);

          if (this.comment === '') {
            this.util.errorToast(this.util.translate('Something went wrong'));
            return false;
          }

          var param = {
            uid: localStorage.getItem('uid'),
            pid: this.id,
            did: 0,
            sid: 0,
            rate: this.rate,
            msg: this.comment,
            way: this.way,
            status: 1,
            timestamp: moment__WEBPACK_IMPORTED_MODULE_3__().format('YYYY-MM-DD')
          };
          this.util.show();
          this.api.post('rating/save', param).then(function (data) {
            console.log(data);

            _this10.util.hide();

            if (data && data.status === 200) {
              _this10.util.showToast('Rating added', 'success', 'bottom');

              var storeParam = {
                id: _this10.id,
                rating: storeRating
              };

              _this10.api.post('products/editList', storeParam).then(function (stores) {
                console.log('products edit done', stores);
              }, function (error) {
                console.log(error);
              });

              _this10.close();
            } else {
              _this10.util.errorToast(_this10.util.translate('Something went wrong'));
            }
          }, function (error) {
            _this10.util.hide();

            console.log(error);

            _this10.util.errorToast(_this10.util.translate('Something went wrong'));
          });
        }
      }]);

      return ProductRatingPage;
    }();

    ProductRatingPage.ctorParameters = function () {
      return [{
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]
      }, {
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }];
    };

    ProductRatingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-rating',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-rating.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product-rating/product-rating.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-rating.page.scss */
      "./src/app/pages/product-rating/product-rating.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])], ProductRatingPage);
    /***/
  },

  /***/
  "./src/app/pages/select-country/select-country-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/select-country/select-country-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: SelectCountryPageRoutingModule */

  /***/
  function srcAppPagesSelectCountrySelectCountryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectCountryPageRoutingModule", function () {
      return SelectCountryPageRoutingModule;
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


    var _select_country_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./select-country.page */
    "./src/app/pages/select-country/select-country.page.ts");
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
      component: _select_country_page__WEBPACK_IMPORTED_MODULE_3__["SelectCountryPage"]
    }];

    var SelectCountryPageRoutingModule = function SelectCountryPageRoutingModule() {
      _classCallCheck(this, SelectCountryPageRoutingModule);
    };

    SelectCountryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SelectCountryPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/select-country/select-country.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/select-country/select-country.module.ts ***!
    \***************************************************************/

  /*! exports provided: SelectCountryPageModule */

  /***/
  function srcAppPagesSelectCountrySelectCountryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectCountryPageModule", function () {
      return SelectCountryPageModule;
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


    var _select_country_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./select-country-routing.module */
    "./src/app/pages/select-country/select-country-routing.module.ts");
    /* harmony import */


    var _select_country_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./select-country.page */
    "./src/app/pages/select-country/select-country.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var SelectCountryPageModule = function SelectCountryPageModule() {
      _classCallCheck(this, SelectCountryPageModule);
    };

    SelectCountryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _select_country_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectCountryPageRoutingModule"]],
      declarations: [_select_country_page__WEBPACK_IMPORTED_MODULE_6__["SelectCountryPage"]]
    })], SelectCountryPageModule);
    /***/
  },

  /***/
  "./src/app/pages/select-country/select-country.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/pages/select-country/select-country.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSelectCountrySelectCountryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VsZWN0LWNvdW50cnkvc2VsZWN0LWNvdW50cnkucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZWxlY3QtY291bnRyeS9DOlxcVXNlcnNcXGFscGhhXFxzb3VyY2VcXHJlcG9zXFxraW5nZm9vZFxcVXNlcl9hcHAvc3JjXFxhcHBcXHBhZ2VzXFxzZWxlY3QtY291bnRyeVxcc2VsZWN0LWNvdW50cnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7Q0FBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlbGVjdC1jb3VudHJ5L3NlbGVjdC1jb3VudHJ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZm9vZGllcyBhcHBcbiAgQ3JlYXRlZCA6IDI4LUZlYi0yMDIxXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qLyIsIi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZm9vZGllcyBhcHBcbiAgQ3JlYXRlZCA6IDI4LUZlYi0yMDIxXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/select-country/select-country.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/select-country/select-country.page.ts ***!
    \*************************************************************/

  /*! exports provided: SelectCountryPage */

  /***/
  function srcAppPagesSelectCountrySelectCountryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectCountryPage", function () {
      return SelectCountryPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var SelectCountryPage = /*#__PURE__*/function () {
      function SelectCountryPage(modalCtrl, util) {
        var _this11 = this;

        _classCallCheck(this, SelectCountryPage);

        this.modalCtrl = modalCtrl;
        this.util = util;
        this.ccCode = '91';
        this.countries = [];
        this.dummy = [];
        this.dummyLoad = [];
        this.dummyLoad = Array(10);
        setTimeout(function () {
          _this11.dummyLoad = [];
          _this11.dummy = _this11.util.countrys;
          _this11.countries = _this11.dummy;
          console.log(_this11.dummy);
        }, 500);
      }

      _createClass(SelectCountryPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close() {
          this.modalCtrl.dismiss();
        }
      }, {
        key: "onSearchChange",
        value: function onSearchChange(events) {
          console.log(events);

          if (events.value !== '') {
            this.countries = this.dummy.filter(function (item) {
              return item.country_name.toLowerCase().indexOf(events.detail.value.toLowerCase()) > -1;
            });
          } else {
            this.countries = [];
          }
        }
      }, {
        key: "okay",
        value: function okay() {
          console.log(this.ccCode);
          this.modalCtrl.dismiss(this.ccCode, 'selected');
        }
      }]);

      return SelectCountryPage;
    }();

    SelectCountryPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
      }];
    };

    SelectCountryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-select-country',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./select-country.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/select-country/select-country.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./select-country.page.scss */
      "./src/app/pages/select-country/select-country.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])], SelectCountryPage);
    /***/
  },

  /***/
  "./src/app/pages/select-drivers/select-drivers-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/select-drivers/select-drivers-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: SelectDriversPageRoutingModule */

  /***/
  function srcAppPagesSelectDriversSelectDriversRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectDriversPageRoutingModule", function () {
      return SelectDriversPageRoutingModule;
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


    var _select_drivers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./select-drivers.page */
    "./src/app/pages/select-drivers/select-drivers.page.ts");
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
      component: _select_drivers_page__WEBPACK_IMPORTED_MODULE_3__["SelectDriversPage"]
    }];

    var SelectDriversPageRoutingModule = function SelectDriversPageRoutingModule() {
      _classCallCheck(this, SelectDriversPageRoutingModule);
    };

    SelectDriversPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SelectDriversPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/select-drivers/select-drivers.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/select-drivers/select-drivers.module.ts ***!
    \***************************************************************/

  /*! exports provided: SelectDriversPageModule */

  /***/
  function srcAppPagesSelectDriversSelectDriversModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectDriversPageModule", function () {
      return SelectDriversPageModule;
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


    var _select_drivers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./select-drivers-routing.module */
    "./src/app/pages/select-drivers/select-drivers-routing.module.ts");
    /* harmony import */


    var _select_drivers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./select-drivers.page */
    "./src/app/pages/select-drivers/select-drivers.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var SelectDriversPageModule = function SelectDriversPageModule() {
      _classCallCheck(this, SelectDriversPageModule);
    };

    SelectDriversPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _select_drivers_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectDriversPageRoutingModule"]],
      declarations: [_select_drivers_page__WEBPACK_IMPORTED_MODULE_6__["SelectDriversPage"]]
    })], SelectDriversPageModule);
    /***/
  },

  /***/
  "./src/app/pages/select-drivers/select-drivers.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/pages/select-drivers/select-drivers.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSelectDriversSelectDriversPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\nion-modal.modalContact {\n  --height: auto;\n}\nion-modal.modalContact .modal-wrapper {\n  width: 90% !important;\n}\nion-modal.modalContact.bottom {\n  align-items: flex-end;\n}\nion-modal.modalContact .ion-page {\n  position: relative;\n  display: block;\n  contain: content;\n}\nion-modal.modalContact .ion-page .inner-content {\n  max-height: 80vh;\n  overflow: auto;\n  border-radius: 10px;\n}\n.div_header {\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 15px;\n  position: relative;\n}\n.div_header .img_cross {\n  width: 35px;\n  position: absolute;\n  right: 20px;\n}\n.div_header .lbl_contact {\n  font-size: 20px;\n  display: block;\n  text-align: center;\n  margin-top: 20px;\n}\n.div_content {\n  width: 100%;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px solid lightgray;\n  padding: 10px;\n}\n.div_content .iconPerson {\n  font-size: 3rem;\n}\n.div_content .title {\n  text-align: center;\n  font-size: 0.8rem;\n  color: black;\n  margin: 0px;\n}\n.div_content .your {\n  text-align: center;\n  font-size: 0.8rem;\n  color: black;\n  margin: 0px;\n}\n.div_content .score {\n  text-align: center;\n  font-size: 1.2rem;\n  color: black;\n  margin: 0px;\n  font-weight: bold;\n}\n.content {\n  padding: 10px;\n}\n.content .inputs {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.content .inputs ion-input {\n  border-radius: 5px;\n  border: 1px solid lightgray;\n  --padding-start: 10px;\n  margin: 15px 0px;\n}\n.content .tabs_prpl {\n  background: var(--ion-color-secondary);\n  color: white;\n  height: 30px;\n  line-height: 20px;\n  margin-bottom: 5px;\n  font-size: 11px;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n}\n.content .pdd_left {\n  padding-left: 20px;\n}\n.div_btn .cancel {\n  border-top: 1px solid lightgray;\n}\n.div_btn .save {\n  border-top: 1px solid lightgray;\n  border-left: 1px solid lightgray;\n  background: #f9f9f9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VsZWN0LWRyaXZlcnMvc2VsZWN0LWRyaXZlcnMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZWxlY3QtZHJpdmVycy9DOlxcVXNlcnNcXGFscGhhXFxzb3VyY2VcXHJlcG9zXFxraW5nZm9vZFxcVXNlcl9hcHAvc3JjXFxhcHBcXHBhZ2VzXFxzZWxlY3QtZHJpdmVyc1xcc2VsZWN0LWRyaXZlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7Q0FBQTtBQVNBO0VBT0ksY0FBQTtBREpKO0FDRkk7RUFDSSxxQkFBQTtBRElSO0FDRkk7RUFDSSxxQkFBQTtBRElSO0FDREk7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBREdSO0FDRlE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFFQSxtQkFBQTtBREdaO0FDRUE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FEQ0o7QUNBSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QURFUjtBQ0FJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FERVI7QUNDQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7QURFSjtBQ0RJO0VBQ0ksZUFBQTtBREdSO0FDREk7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QURHUjtBQ0RJO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FER1I7QUNESTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FER1I7QUNBQTtFQUNJLGFBQUE7QURHSjtBQ0ZJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBRElSO0FDSFE7RUFDSSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBREtaO0FDRkk7RUFDSSxzQ0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FESVI7QUNGSTtFQUNJLGtCQUFBO0FESVI7QUNDSTtFQUNJLCtCQUFBO0FERVI7QUNBSTtFQUNJLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtBREVSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VsZWN0LWRyaXZlcnMvc2VsZWN0LWRyaXZlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBmb29kaWVzIGFwcFxuICBDcmVhdGVkIDogMjgtRmViLTIwMjFcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG5pb24tbW9kYWwubW9kYWxDb250YWN0IHtcbiAgLS1oZWlnaHQ6IGF1dG87XG59XG5pb24tbW9kYWwubW9kYWxDb250YWN0IC5tb2RhbC13cmFwcGVyIHtcbiAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xufVxuaW9uLW1vZGFsLm1vZGFsQ29udGFjdC5ib3R0b20ge1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5pb24tbW9kYWwubW9kYWxDb250YWN0IC5pb24tcGFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbnRhaW46IGNvbnRlbnQ7XG59XG5pb24tbW9kYWwubW9kYWxDb250YWN0IC5pb24tcGFnZSAuaW5uZXItY29udGVudCB7XG4gIG1heC1oZWlnaHQ6IDgwdmg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uZGl2X2hlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kaXZfaGVhZGVyIC5pbWdfY3Jvc3Mge1xuICB3aWR0aDogMzVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbn1cbi5kaXZfaGVhZGVyIC5sYmxfY29udGFjdCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmRpdl9jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uZGl2X2NvbnRlbnQgLmljb25QZXJzb24ge1xuICBmb250LXNpemU6IDNyZW07XG59XG4uZGl2X2NvbnRlbnQgLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW46IDBweDtcbn1cbi5kaXZfY29udGVudCAueW91ciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luOiAwcHg7XG59XG4uZGl2X2NvbnRlbnQgLnNjb3JlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW46IDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jb250ZW50IHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5jb250ZW50IC5pbnB1dHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb250ZW50IC5pbnB1dHMgaW9uLWlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgbWFyZ2luOiAxNXB4IDBweDtcbn1cbi5jb250ZW50IC50YWJzX3BycGwge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuLmNvbnRlbnQgLnBkZF9sZWZ0IHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uZGl2X2J0biAuY2FuY2VsIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbi5kaXZfYnRuIC5zYXZlIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG59IiwiLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBmb29kaWVzIGFwcFxuICBDcmVhdGVkIDogMjgtRmViLTIwMjFcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG5pb24tbW9kYWwubW9kYWxDb250YWN0IHtcbiAgICAubW9kYWwtd3JhcHBlciB7XG4gICAgICAgIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgJi5ib3R0b20ge1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgfVxuICAgIC0taGVpZ2h0OiBhdXRvO1xuICAgIC5pb24tcGFnZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGNvbnRhaW46IGNvbnRlbnQ7XG4gICAgICAgIC5pbm5lci1jb250ZW50IHtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDgwdmg7XG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgIC8vIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZGl2X2hlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5pbWdfY3Jvc3Mge1xuICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMjBweDtcbiAgICB9XG4gICAgLmxibF9jb250YWN0IHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cbn1cbi5kaXZfY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICAuaWNvblBlcnNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICB9XG4gICAgLnRpdGxlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICB9XG4gICAgLnlvdXIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cbiAgICAuc2NvcmUge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59XG4uY29udGVudCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICAuaW5wdXRzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDE1cHggMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC50YWJzX3BycGwge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIH1cbiAgICAucGRkX2xlZnQge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgfVxufVxuXG4uZGl2X2J0biB7XG4gICAgLmNhbmNlbCB7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgfVxuICAgIC5zYXZlIHtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gICAgfVxufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/select-drivers/select-drivers.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/select-drivers/select-drivers.page.ts ***!
    \*************************************************************/

  /*! exports provided: SelectDriversPage */

  /***/
  function srcAppPagesSelectDriversSelectDriversPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectDriversPage", function () {
      return SelectDriversPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var SelectDriversPage = /*#__PURE__*/function () {
      function SelectDriversPage(navParam, modalController, util) {
        _classCallCheck(this, SelectDriversPage);

        this.navParam = navParam;
        this.modalController = modalController;
        this.util = util;
        this.drivers = [];
        this.selectedDriver = '';
        this.drivers = this.navParam.get('item');
        console.log('drivers->', this.drivers);

        if (this.drivers.length && this.drivers.length > 0) {
          this.selectedDriver = this.drivers[0].id;
        }
      }

      _createClass(SelectDriversPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "select",
        value: function select() {
          var _this12 = this;

          console.log(this.selectedDriver);
          var driver = this.drivers.filter(function (x) {
            return x.id === _this12.selectedDriver;
          });
          console.log(driver);
          this.modalController.dismiss(driver, 'selected');
        }
      }, {
        key: "close",
        value: function close() {
          this.modalController.dismiss([], 'close');
        }
      }]);

      return SelectDriversPage;
    }();

    SelectDriversPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"]
      }];
    };

    SelectDriversPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-select-drivers',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./select-drivers.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/select-drivers/select-drivers.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./select-drivers.page.scss */
      "./src/app/pages/select-drivers/select-drivers.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"]])], SelectDriversPage);
    /***/
  },

  /***/
  "./src/app/pages/variations/variations-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/variations/variations-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: VariationsPageRoutingModule */

  /***/
  function srcAppPagesVariationsVariationsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VariationsPageRoutingModule", function () {
      return VariationsPageRoutingModule;
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


    var _variations_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./variations.page */
    "./src/app/pages/variations/variations.page.ts");
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
      component: _variations_page__WEBPACK_IMPORTED_MODULE_3__["VariationsPage"]
    }];

    var VariationsPageRoutingModule = function VariationsPageRoutingModule() {
      _classCallCheck(this, VariationsPageRoutingModule);
    };

    VariationsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], VariationsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/variations/variations.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/variations/variations.module.ts ***!
    \*******************************************************/

  /*! exports provided: VariationsPageModule */

  /***/
  function srcAppPagesVariationsVariationsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VariationsPageModule", function () {
      return VariationsPageModule;
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


    var _variations_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./variations-routing.module */
    "./src/app/pages/variations/variations-routing.module.ts");
    /* harmony import */


    var _variations_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./variations.page */
    "./src/app/pages/variations/variations.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var VariationsPageModule = function VariationsPageModule() {
      _classCallCheck(this, VariationsPageModule);
    };

    VariationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _variations_routing_module__WEBPACK_IMPORTED_MODULE_5__["VariationsPageRoutingModule"]],
      declarations: [_variations_page__WEBPACK_IMPORTED_MODULE_6__["VariationsPage"]]
    })], VariationsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/variations/variations.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/variations/variations.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesVariationsVariationsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.header {\n  border-bottom: 1px solid lightgray;\n}\n.header .bts {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  padding-bottom: 10px;\n}\n.header .desc .title {\n  margin: 0px;\n  padding: 10px;\n  font-size: 18px;\n  font-weight: bold;\n}\n.header .desc .details {\n  margin: 0px;\n  padding: 0px 10px;\n  font-size: 14px;\n}\n.padder {\n  padding-bottom: 60px;\n}\n.cartItems {\n  padding: 10px 5px;\n}\n.cartItems .name {\n  font-size: 18px;\n  font-weight: bold;\n  margin: 0px;\n}\n.cartItems .details {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.cartItems .details .names .subDetails {\n  margin: 0px;\n  font-size: 14px;\n}\n.cartItems .details .cartBtn2 {\n  position: absolute;\n  right: 15px;\n  width: 80px;\n  display: flex;\n  background: white;\n}\n.cartItems .details .cartBtn2 .qunitity {\n  font-weight: bold;\n  margin-top: 8px;\n}\n.sameProduct {\n  padding: 5px;\n  padding: 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.sameProduct .desc {\n  padding: 0px 0px 10px 0px;\n}\n.sameProduct .desc .name {\n  font-size: 18px;\n  font-weight: bold;\n  margin: 0px;\n}\n.sameProduct .desc .selectedItem {\n  margin: 0px;\n  font-size: 14px;\n  display: flex;\n  flex-direction: column;\n}\n.sameProduct .desc .cartBtn2 {\n  position: absolute;\n  right: 15px;\n  width: 80px;\n  display: flex;\n  background: white;\n}\n.sameProduct .desc .cartBtn2 .qunitity {\n  font-weight: bold;\n  margin-top: 8px;\n}\n.footers {\n  position: fixed;\n  bottom: 10px;\n  width: 100%;\n  padding: 0px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmFyaWF0aW9ucy92YXJpYXRpb25zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdmFyaWF0aW9ucy9DOlxcVXNlcnNcXGFscGhhXFxzb3VyY2VcXHJlcG9zXFxraW5nZm9vZFxcVXNlcl9hcHAvc3JjXFxhcHBcXHBhZ2VzXFx2YXJpYXRpb25zXFx2YXJpYXRpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7O0NBQUE7QUFTQTtFQUNFLGtDQUFBO0FERUY7QUNERTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7QURHSjtBQ0FJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QURFTjtBQ0FJO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBREVOO0FDRUE7RUFDRSxvQkFBQTtBRENGO0FDQ0E7RUFDRSxpQkFBQTtBREVGO0FDREU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FER0o7QUNERTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FER0o7QUNETTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FER1I7QUNBSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QURFTjtBQ0RNO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FER1I7QUNFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QURDRjtBQ0FFO0VBQ0UseUJBQUE7QURFSjtBQ0RJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBREdOO0FDREk7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBREdOO0FDREk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FER047QUNGTTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBRElSO0FDQ0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBREVGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdmFyaWF0aW9ucy92YXJpYXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZm9vZGllcyBhcHBcbiAgQ3JlYXRlZCA6IDI4LUZlYi0yMDIxXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLmhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG4uaGVhZGVyIC5idHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4uaGVhZGVyIC5kZXNjIC50aXRsZSB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmhlYWRlciAuZGVzYyAuZGV0YWlscyB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ucGFkZGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDYwcHg7XG59XG5cbi5jYXJ0SXRlbXMge1xuICBwYWRkaW5nOiAxMHB4IDVweDtcbn1cbi5jYXJ0SXRlbXMgLm5hbWUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDBweDtcbn1cbi5jYXJ0SXRlbXMgLmRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uY2FydEl0ZW1zIC5kZXRhaWxzIC5uYW1lcyAuc3ViRGV0YWlscyB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uY2FydEl0ZW1zIC5kZXRhaWxzIC5jYXJ0QnRuMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG4gIHdpZHRoOiA4MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5jYXJ0SXRlbXMgLmRldGFpbHMgLmNhcnRCdG4yIC5xdW5pdGl0eSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5zYW1lUHJvZHVjdCB7XG4gIHBhZGRpbmc6IDVweDtcbiAgcGFkZGluZzogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uc2FtZVByb2R1Y3QgLmRlc2Mge1xuICBwYWRkaW5nOiAwcHggMHB4IDEwcHggMHB4O1xufVxuLnNhbWVQcm9kdWN0IC5kZXNjIC5uYW1lIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwcHg7XG59XG4uc2FtZVByb2R1Y3QgLmRlc2MgLnNlbGVjdGVkSXRlbSB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uc2FtZVByb2R1Y3QgLmRlc2MgLmNhcnRCdG4yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTVweDtcbiAgd2lkdGg6IDgwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLnNhbWVQcm9kdWN0IC5kZXNjIC5jYXJ0QnRuMiAucXVuaXRpdHkge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4uZm9vdGVycyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG59IiwiLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBmb29kaWVzIGFwcFxuICBDcmVhdGVkIDogMjgtRmViLTIwMjFcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4uaGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgLmJ0cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB9XG4gIC5kZXNjIHtcbiAgICAudGl0bGUge1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIC5kZXRhaWxzIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICB9XG59XG4ucGFkZGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDYwcHg7XG59XG4uY2FydEl0ZW1zIHtcbiAgcGFkZGluZzogMTBweCA1cHg7XG4gIC5uYW1lIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbiAgLmRldGFpbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgLm5hbWVzIHtcbiAgICAgIC5zdWJEZXRhaWxzIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmNhcnRCdG4yIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAucXVuaXRpdHkge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLnNhbWVQcm9kdWN0IHtcbiAgcGFkZGluZzogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLmRlc2Mge1xuICAgIHBhZGRpbmc6IDBweCAwcHggMTBweCAwcHg7XG4gICAgLm5hbWUge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICB9XG4gICAgLnNlbGVjdGVkSXRlbSB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgICAuY2FydEJ0bjIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICB3aWR0aDogODBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIC5xdW5pdGl0eSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4uZm9vdGVycyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/variations/variations.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/variations/variations.page.ts ***!
    \*****************************************************/

  /*! exports provided: VariationsPage */

  /***/
  function srcAppPagesVariationsVariationsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VariationsPage", function () {
      return VariationsPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var VariationsPage = /*#__PURE__*/function () {
      function VariationsPage(modalController, navParma, util) {
        _classCallCheck(this, VariationsPage);

        this.modalController = modalController;
        this.navParma = navParma;
        this.util = util;
        this.productName = '';
        this.desc = '';
        this.total = 0;
        this.cart = [];
        this.userCart = [];
        this.sameProduct = false;
        this.removeProduct = false;
        this.newItem = false;
        this.sameCart = [];
        this.currentFile = [];
        var info = this.navParma.get('food');
        this.foodInfo = info;
        this.selectedItem = info;
        console.log('info', info);
        this.productName = info.name;
        this.lists = info.variations;
        var userCart = localStorage.getItem('userCart');
        this.haveSize = info.size === '1';

        if (userCart && userCart !== 'null' && userCart !== undefined && userCart !== 'undefined') {
          this.userCart = JSON.parse(userCart);
          var sameItem = this.userCart.filter(function (x) {
            return x.id === info.id;
          });

          if (sameItem.length > 0) {
            this.sameProduct = true;
            this.sameCart = sameItem[0].selectedItem;
            this.currentFile.push(sameItem[0]);
          }
        } else {
          this.userCart = [];
        }
      }

      _createClass(VariationsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closeIt",
        value: function closeIt() {
          this.modalController.dismiss();
        }
      }, {
        key: "radioGroupChange",
        value: function radioGroupChange(event, title) {
          console.log(this.lists);
          var radioList = this.lists.filter(function (x) {
            return x.title === title;
          });
          var selectedItems = radioList[0].items.filter(function (x) {
            return x.title === event.detail.value;
          });
          var price = parseFloat(selectedItems[0].price);
          var param = {
            type: title,
            value: price,
            name: selectedItems[0].title
          };
          var item = this.cart.filter(function (x) {
            return x.type === title;
          });

          if (item && item.length) {
            var index = this.cart.findIndex(function (x) {
              return x.type === title;
            });
            this.cart[index].value = price;
            this.cart[index].name = selectedItems[0].title;
          } else {
            this.cart.push(param);
          }
        }
      }, {
        key: "sameChoise",
        value: function sameChoise() {
          this.modalController.dismiss(this.sameCart, 'sameChoice');
        }
      }, {
        key: "addToCart",
        value: function addToCart() {
          /*
            new
            sameChoice
            newCustom
            remove
            dismissed with no selection from extras.
          */
          var addedSize = this.cart.filter(function (x) {
            return x.type === 'size';
          });
          var role;

          if (this.haveSize && !addedSize.length) {
            this.util.errorToast('Please select size');
            return false;
          }

          if (this.cart.length && !this.userCart.length) {
            role = 'new';
          }

          if (this.cart.length && this.userCart.length) {
            role = 'new';
          }

          if (!this.cart.length) {
            role = 'dismissed';
          }

          if (this.newItem) {
            role = 'newCustom';
          }

          console.log(this.haveSize, '------------------', this.cart);

          if (this.haveSize === false) {
            var regularItem = {
              name: 'Regular',
              type: 'size',
              value: Number(this.foodInfo.price)
            };
            this.cart.push(regularItem);
          }

          this.modalController.dismiss(this.cart, role);
        }
      }, {
        key: "checkedEvent",
        value: function checkedEvent(event, title) {
          var price = parseFloat(event.detail.value);
          var param = {
            type: title,
            value: price,
            name: title
          };

          if (event.detail && event.detail.checked) {
            this.cart.push(param);
          } else {
            this.cart = this.cart.filter(function (x) {
              return x.type !== title;
            });
          }
        }
      }, {
        key: "addQ",
        value: function addQ(index) {
          this.sameCart[index].total = this.sameCart[index].total + 1;
        }
      }, {
        key: "removeQ",
        value: function removeQ(index) {
          this.sameCart[index].total = this.sameCart[index].total - 1;

          if (this.sameCart[index].total === 0) {
            this.sameCart = this.sameCart.filter(function (x) {
              return x.total !== 0;
            });
          }

          if (this.sameCart.length < 0) {
            this.modalController.dismiss(this.cart, 'remove');
          }
        }
      }]);

      return VariationsPage;
    }();

    VariationsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
      }];
    };

    VariationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-variations',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./variations.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/variations/variations.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./variations.page.scss */
      "./src/app/pages/variations/variations.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])], VariationsPage);
    /***/
  },

  /***/
  "./src/app/pages/verify/verify-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/verify/verify-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: VerifyPageRoutingModule */

  /***/
  function srcAppPagesVerifyVerifyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerifyPageRoutingModule", function () {
      return VerifyPageRoutingModule;
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


    var _verify_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./verify.page */
    "./src/app/pages/verify/verify.page.ts");
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
      component: _verify_page__WEBPACK_IMPORTED_MODULE_3__["VerifyPage"]
    }];

    var VerifyPageRoutingModule = function VerifyPageRoutingModule() {
      _classCallCheck(this, VerifyPageRoutingModule);
    };

    VerifyPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], VerifyPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/verify/verify.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/verify/verify.module.ts ***!
    \***********************************************/

  /*! exports provided: VerifyPageModule */

  /***/
  function srcAppPagesVerifyVerifyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerifyPageModule", function () {
      return VerifyPageModule;
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


    var _verify_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./verify-routing.module */
    "./src/app/pages/verify/verify-routing.module.ts");
    /* harmony import */


    var _verify_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./verify.page */
    "./src/app/pages/verify/verify.page.ts");
    /* harmony import */


    var ng_otp_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-otp-input */
    "./node_modules/ng-otp-input/fesm2015/ng-otp-input.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var VerifyPageModule = function VerifyPageModule() {
      _classCallCheck(this, VerifyPageModule);
    };

    VerifyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _verify_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerifyPageRoutingModule"], ng_otp_input__WEBPACK_IMPORTED_MODULE_7__["NgOtpInputModule"]],
      declarations: [_verify_page__WEBPACK_IMPORTED_MODULE_6__["VerifyPage"]]
    })], VerifyPageModule);
    /***/
  },

  /***/
  "./src/app/pages/verify/verify.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/verify/verify.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesVerifyVerifyPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.otpContainer {\n  margin-top: 50%;\n}\n.otpContainer .headerText {\n  text-align: center;\n  font-weight: bolder;\n  font-size: 2rem;\n}\n.otpContainer .subTitleText {\n  text-align: center;\n  font-weight: bold;\n  color: gray;\n  font-size: 1rem;\n}\n.otpContainer .otpInputs {\n  display: flex;\n  justify-content: center;\n  margin-top: 50px;\n}\n.otpContainer .btn_class {\n  color: white;\n  margin: 30px 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmVyaWZ5L3ZlcmlmeS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3ZlcmlmeS9DOlxcVXNlcnNcXGFscGhhXFxzb3VyY2VcXHJlcG9zXFxraW5nZm9vZFxcVXNlcl9hcHAvc3JjXFxhcHBcXHBhZ2VzXFx2ZXJpZnlcXHZlcmlmeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7OztDQUFBO0FBU0E7RUFDSSxlQUFBO0FERUo7QUNESTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FER1I7QUNESTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBREdSO0FDREk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBREdSO0FDREk7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QURHUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZlcmlmeS92ZXJpZnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBmb29kaWVzIGFwcFxuICBDcmVhdGVkIDogMjgtRmViLTIwMjFcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4ub3RwQ29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNTAlO1xufVxuLm90cENvbnRhaW5lciAuaGVhZGVyVGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuLm90cENvbnRhaW5lciAuc3ViVGl0bGVUZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5vdHBDb250YWluZXIgLm90cElucHV0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLm90cENvbnRhaW5lciAuYnRuX2NsYXNzIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDMwcHggNTBweDtcbn0iLCIvKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGZvb2RpZXMgYXBwXG4gIENyZWF0ZWQgOiAyOC1GZWItMjAyMVxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbi5vdHBDb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDUwJTtcbiAgICAuaGVhZGVyVGV4dCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgIH1cbiAgICAuc3ViVGl0bGVUZXh0IHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG4gICAgLm90cElucHV0cyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIH1cbiAgICAuYnRuX2NsYXNzIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBtYXJnaW46IDMwcHggNTBweDtcbiAgICB9XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/verify/verify.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/verify/verify.page.ts ***!
    \*********************************************/

  /*! exports provided: VerifyPage */

  /***/
  function srcAppPagesVerifyVerifyPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerifyPage", function () {
      return VerifyPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var VerifyPage = /*#__PURE__*/function () {
      function VerifyPage(api, util, navParam, navCtrl, modalCtrl) {
        var _this13 = this;

        _classCallCheck(this, VerifyPage);

        this.api = api;
        this.util = util;
        this.navParam = navParam;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.textCode = '';
        this.userCode = '';
        this.resendCode = false;
        console.log('cc code', this.navParam.get('code'));
        this.sendOTP();
        setTimeout(function () {
          _this13.resendCode = true;
        }, 30000);
      }

      _createClass(VerifyPage, [{
        key: "sendOTP",
        value: function sendOTP() {
          var _this14 = this;

          this.mobile = this.navParam.get('code') + this.navParam.get('phone');
          console.log('send on this number------<<<<<<<', this.mobile);
          console.log(this.mobile);
          var message = this.util.translate('Your Foodies app verification code : ');
          var param = {
            msg: message,
            to: this.mobile
          };
          console.log(param);
          this.util.show();
          this.api.post('users/twilloMessage', param).then(function (data) {
            console.log(data);
            _this14.id = data.data.id;

            _this14.util.hide();
          }, function (error) {
            console.log(error);

            _this14.util.hide();

            _this14.util.errorToast(_this14.util.translate('Something went wrong'));
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onOtpChange",
        value: function onOtpChange(event) {
          console.log(event);
          this.userCode = event;
        }
      }, {
        key: "resend",
        value: function resend() {
          this.sendOTP();
        }
      }, {
        key: "continue",
        value: function _continue() {
          var _this15 = this;

          console.log(this.userCode);

          if (this.userCode === '' || !this.userCode) {
            this.util.errorToast(this.util.translate('Not valid code'));
            return false;
          }

          if (this.userCode) {
            var param = {
              id: this.id,
              otp: this.userCode
            };
            this.util.show();
            this.api.post('users/verifyOTP', param).then(function (data) {
              console.log(data);

              _this15.util.hide();

              if (data && data.status === 200) {
                _this15.modalCtrl.dismiss('', 'ok');
              } else {
                if (data && data.status === 500 && data.data && data.data.message) {
                  _this15.util.errorToast(data.data.message);

                  return false;
                }

                _this15.util.errorToast(_this15.util.translate('Something went wrong'));

                return false;
              }
            }, function (error) {
              _this15.util.hide();

              console.log(error);

              _this15.util.errorToast(_this15.util.translate('Something went wrong'));
            });
          } else {
            this.util.errorToast(this.util.translate('Not valid code'));
            return false;
          }
        }
      }, {
        key: "close",
        value: function close() {
          this.modalCtrl.dismiss();
        }
      }]);

      return VerifyPage;
    }();

    VerifyPage.ctorParameters = function () {
      return [{
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    VerifyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-verify',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./verify.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verify/verify.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./verify.page.scss */
      "./src/app/pages/verify/verify.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], VerifyPage);
    /***/
  },

  /***/
  "./src/app/services/apis.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/apis.service.ts ***!
    \******************************************/

  /*! exports provided: ApisService */

  /***/
  function srcAppServicesApisServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApisService", function () {
      return ApisService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/ngx/index.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var ApisService = /*#__PURE__*/function () {
      function ApisService(http, nativeHttp) {
        _classCallCheck(this, ApisService);

        this.http = http;
        this.nativeHttp = nativeHttp;
        this.baseUrl = '';
        this.mediaURL = '';
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseURL;
        this.mediaURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].mediaURL;
      }

      _createClass(ApisService, [{
        key: "translate",
        value: function translate(str) {
          return str;
        }
      }, {
        key: "alerts",
        value: function alerts(title, message, type) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire(title, message, type);
        }
      }, {
        key: "uploadFile",
        value: function uploadFile(files) {
          var formData = new FormData();
          Array.from(files).forEach(function (f) {
            return formData.append('userfile', f);
          });
          return this.http.post(this.baseUrl + 'users/upload_image', formData);
        }
      }, {
        key: "instaPay",
        value: function instaPay(url, body, key, token) {
          return this.nativeHttp.post(url, body, {
            'X-Api-Key': "".concat(key),
            'X-Auth-Token': "".concat(token)
          });
        }
      }, {
        key: "getCurrencyCode",
        value: function getCurrencyCode() {
          return 'none';
        }
      }, {
        key: "getCurrecySymbol",
        value: function getCurrecySymbol() {
          return 'none';
        }
      }, {
        key: "sendNotification",
        value: function sendNotification(msg, title, id) {
          var body = {
            app_id: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].onesignal.appId,
            include_player_ids: [id],
            headings: {
              en: title
            },
            contents: {
              en: msg
            },
            data: {
              task: msg
            }
          };
          var header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json').set('Authorization', "Basic ".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].onesignal.restKey))
          };
          return this.http.post('https://onesignal.com/api/v1/notifications', body, header);
        }
      }, {
        key: "JSON_to_URLEncoded",
        value: function JSON_to_URLEncoded(element, key, list) {
          var new_list = list || [];

          if (typeof element === 'object') {
            for (var idx in element) {
              this.JSON_to_URLEncoded(element[idx], key ? key + '[' + idx + ']' : idx, new_list);
            }
          } else {
            new_list.push(key + '=' + encodeURIComponent(element));
          }

          return new_list.join('&');
        }
      }, {
        key: "post",
        value: function post(url, body) {
          var _this16 = this;

          return new Promise(function (resolve, reject) {
            var header = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded').set('Basic', "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].authToken))
            };

            var param = _this16.JSON_to_URLEncoded(body);

            console.log(param);

            _this16.http.post(_this16.baseUrl + url, param, header).subscribe(function (data) {
              resolve(data);
            }, function (error) {
              resolve(error);
            }); // return this.http.post(this.baseUrl + url, param, header);

          });
        }
      }, {
        key: "get",
        value: function get(url) {
          var _this17 = this;

          return new Promise(function (resolve, reject) {
            var header = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded').set('Basic', "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].authToken)) // .set('responseType', 'blob')

            };

            _this17.http.get(_this17.baseUrl + url, header).subscribe(function (data) {
              resolve(data);
            }, function (error) {
              resolve(error);
            });
          });
        }
      }, {
        key: "externalGet",
        value: function externalGet(url) {
          var _this18 = this;

          return new Promise(function (resolve, reject) {
            var header = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded').set('Basic', "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].authToken))
            };

            _this18.http.get(url, header).subscribe(function (data) {
              resolve(data);
            }, function (error) {
              resolve(error);
            });
          });
        }
      }, {
        key: "nativePost",
        value: function nativePost(url, post) {
          console.log(this.baseUrl + url, post);
          return this.nativeHttp.post(this.baseUrl + url, post, {
            Basic: "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].authToken)
          });
        }
      }, {
        key: "httpGet",
        value: function httpGet(url, key) {
          var header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', "Bearer ".concat(key))
          };
          return this.http.get(url, header);
        }
      }, {
        key: "externalPost",
        value: function externalPost(url, body, key) {
          var header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', "Bearer ".concat(key))
          };
          var order = this.JSON_to_URLEncoded(body);
          console.log(order);
          return this.http.post(url, order, header);
        }
      }]);

      return ApisService;
    }();

    ApisService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"]
      }];
    };

    ApisService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"]])], ApisService);
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./util.service */
    "./src/app/services/util.service.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var CartService = /*#__PURE__*/function () {
      function CartService(util) {
        var _this19 = this;

        _classCallCheck(this, CartService);

        this.util = util;
        this.cart = [];
        this.itemId = [];
        this.totalPrice = 0;
        this.grandTotal = 0;
        this.discount = 0;
        this.orderTax = 0;
        this.shippingPrice = 0;
        this.minOrderPrice = 0;
        this.freeShipping = 0;
        this.deliveryPrice = 0;
        this.stores = [];
        this.bulkOrder = [];
        this.util.getCouponObservable().subscribe(function (data) {
          if (data) {
            console.log('------------->>', data);
            _this19.coupon = data;
            _this19.coupon.discount = parseFloat(data.discount);
            _this19.coupon.min = parseFloat(data.min);

            _this19.calcuate();
          }
        });
        this.util.getKeys('userCart').then(function (data) {
          console.log('first???', data);

          if (data && data !== null && data !== 'null') {
            var userCart = JSON.parse(data);

            if (userCart && userCart.length > 0) {
              _this19.cart = userCart;
              _this19.itemId = _toConsumableArray(new Set(_this19.cart.map(function (item) {
                return item.id;
              })));

              _this19.calcuate();

              console.log('0???', data);
            } else {
              console.log('1???', data);

              _this19.calcuate();
            }
          } else {
            console.log('2???', data);

            _this19.calcuate();
          }
        });
      }

      _createClass(CartService, [{
        key: "clearCart",
        value: function clearCart() {
          this.cart = [];
          this.itemId = [];
          this.totalPrice = 0;
          this.grandTotal = 0;
          this.coupon = undefined;
          this.discount = 0;
          this.orderPrice = 0;
          this.datetime = undefined;
          this.stores = [];
          this.util.clearKeys('cart');
          this.totalItem = 0;
          this.calcuate();
        }
      }, {
        key: "addVariations",
        value: function addVariations(info, cart, type) {
          if (type === 'new') {
            console.log('-->> new--->>', info, cart);
            this.cart.push(info);
            this.itemId.push(info.id);
          } else if (type === 'sameChoice') {
            var index = this.cart.findIndex(function (x) {
              return x.id === info.id;
            });
            console.log('index--', index);
            this.cart[index].selectedItem = info.selectedItem;
          } else if (type === 'newCustom') {
            var _index = this.cart.findIndex(function (x) {
              return x.id === info.id;
            });

            console.log('index--', _index);
            this.cart[_index].selectedItem = info.selectedItem;
            this.cart[_index].quantiy = info.quantiy;
          }

          this.calcuate();
        }
      }, {
        key: "addItem",
        value: function addItem(item) {
          console.log('item to adde', item);
          this.cart.push(item);
          this.itemId.push(item.id);
          this.calcuate();
        }
      }, {
        key: "addQuantity",
        value: function addQuantity(quantity, id) {
          console.log('iddd-->>', id);
          console.log('quantity', quantity);
          this.cart.forEach(function (element) {
            if (element.id === id) {
              element.quantiy = quantity;
            }
          });
          this.calcuate();
        }
      }, {
        key: "removeItem",
        value: function removeItem(id) {
          console.log('remove this item from cart');
          console.log('current cart items', this.cart);
          this.cart = this.cart.filter(function (x) {
            return x.id !== id;
          });
          this.itemId = this.itemId.filter(function (x) {
            return x !== id;
          });
          console.log('====>>>>>>>>>', this.cart);
          console.log('items====>>>', this.itemId);
          this.calcuate();
        }
      }, {
        key: "calcuate",
        value: function calcuate() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this20 = this;

            var item, appTax, tax, distance, distancePricer, percentage, totalPrice, lng, selectedCity;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    console.log('CART=======>', this.cart); // new

                    item = this.cart.filter(function (x) {
                      return x.quantiy > 0;
                    });
                    this.cart.forEach(function (element) {
                      if (element.quantiy === 0) {
                        element.selectedItem = [];
                      }
                    });
                    this.totalPrice = 0;
                    this.totalItem = 0;
                    this.cart = [];
                    item.forEach(function (element) {
                      console.log('itemsss----->>>', element);

                      if (element && element.selectedItem && element.selectedItem.length > 0 && element.size === '1') {
                        var subPrice = 0;
                        element.selectedItem.forEach(function (subItems) {
                          subItems.item.forEach(function (realsItems) {
                            subPrice = subPrice + realsItems.value;
                          });
                          subPrice = subPrice * subItems.total;
                          _this20.totalItem = _this20.totalItem + subItems.total;
                        });
                        _this20.totalPrice = _this20.totalPrice + subPrice;
                      } else if (element && element.selectedItem && element.selectedItem.length > 0 && element.size === '0') {
                        var _subPrice = 0;
                        element.selectedItem.forEach(function (subItems) {
                          _subPrice = 0;
                          subItems.item.forEach(function (realsItems) {
                            _subPrice = _subPrice + realsItems.value;
                          });
                          _subPrice = _subPrice * subItems.total;
                          _this20.totalItem = _this20.totalItem + subItems.total;
                          _this20.totalPrice = _this20.totalPrice + _subPrice;
                        });
                      } else {
                        _this20.totalItem = _this20.totalItem + element.quantiy;
                        _this20.totalPrice = _this20.totalPrice + parseFloat(element.price) * parseInt(element.quantiy);
                      }

                      _this20.cart.push(element);
                    });
                    localStorage.removeItem('userCart');
                    localStorage.setItem('userCart', JSON.stringify(this.cart));
                    this.util.clearKeys('userCart');
                    this.util.setKeys('userCart', JSON.stringify(this.cart));
                    this.totalPrice = parseFloat(this.totalPrice).toFixed(2);
                    appTax = this.util.general && this.util.general.tax ? parseFloat(this.util.general.tax) : 21;
                    tax = parseFloat(this.totalPrice) * appTax / 100;
                    this.orderTax = tax.toFixed(2);

                    if (!(this.deliveryAddress && this.deliveryAddress.address && this.cartStoreInfo && this.cartStoreInfo.address)) {
                      _context5.next = 21;
                      break;
                    }

                    _context5.next = 18;
                    return this.distanceInKmBetweenEarthCoordinates(this.deliveryAddress.lat, this.deliveryAddress.lng, this.cartStoreInfo.lat, this.cartStoreInfo.lng);

                  case 18:
                    distance = _context5.sent;
                    _context5.next = 22;
                    break;

                  case 21:
                    distance = 0;

                  case 22:
                    if (this.freeShipping > this.totalPrice) {
                      if (this.shipping === 'km') {
                        distancePricer = distance * this.shippingPrice;
                        this.deliveryPrice = Math.floor(distancePricer).toFixed(2);
                      } else {
                        this.deliveryPrice = this.shippingPrice;
                      }
                    } else {
                      this.deliveryPrice = 0;
                    }

                    this.grandTotal = parseFloat(this.totalPrice) + parseFloat(this.orderTax) + parseFloat(this.deliveryPrice);
                    this.grandTotal = this.grandTotal.toFixed(2);

                    if (this.coupon && this.coupon.code && this.totalPrice >= parseFloat(this.coupon.min)) {
                      if (this.coupon.type === 'per') {
                        percentage = function percentage(num, per) {
                          return num / 100 * per;
                        };

                        totalPrice = percentage(parseFloat(this.totalPrice).toFixed(2), this.coupon.discount);
                        this.discount = totalPrice.toFixed(2);
                        this.grandTotal = parseFloat(this.totalPrice) + parseFloat(this.orderTax) + parseFloat(this.deliveryPrice);
                        this.grandTotal = this.grandTotal - this.discount;
                        this.grandTotal = this.grandTotal.toFixed(2);
                      } else {
                        this.discount = this.coupon.discount;
                        this.grandTotal = parseFloat(this.totalPrice) + parseFloat(this.orderTax) + parseFloat(this.deliveryPrice);
                        this.grandTotal = this.grandTotal - this.discount;
                        this.grandTotal = this.grandTotal.toFixed(2);
                      }
                    } else {
                      this.coupon = null;
                      localStorage.removeItem('coupon');
                    }

                    if (this.totalItem === 0) {
                      lng = localStorage.getItem('language');
                      selectedCity = localStorage.getItem('selectedCity');
                      localStorage.setItem('language', lng);
                      localStorage.setItem('selectedCity', selectedCity);
                      this.totalItem = 0;
                      this.totalPrice = 0;
                    }

                  case 27:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "checkProductInCart",
        value: function checkProductInCart(id) {
          return this.itemId.includes(id);
        }
      }, {
        key: "degreesToRadians",
        value: function degreesToRadians(degrees) {
          return degrees * Math.PI / 180;
        }
      }, {
        key: "distanceInKmBetweenEarthCoordinates",
        value: function distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
          console.log(lat1, lon1, lat2, lon2);
          var earthRadiusKm = 6371;
          var dLat = this.degreesToRadians(lat2 - lat1);
          var dLon = this.degreesToRadians(lon2 - lon1);
          lat1 = this.degreesToRadians(lat1);
          lat2 = this.degreesToRadians(lat2);
          var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
          return earthRadiusKm * c;
        }
      }]);

      return CartService;
    }();

    CartService.ctorParameters = function () {
      return [{
        type: _util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]
      }];
    };

    CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]])], CartService);
    /***/
  },

  /***/
  "./src/app/services/util.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/util.service.ts ***!
    \******************************************/

  /*! exports provided: UtilService */

  /***/
  function srcAppServicesUtilServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilService", function () {
      return UtilService;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var UtilService = /*#__PURE__*/function () {
      function UtilService(loadingCtrl, alertCtrl, toastCtrl, router, navCtrl, storage, menuCtrl) {
        _classCallCheck(this, UtilService);

        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.menuCtrl = menuCtrl;
        this.isLoading = false;
        this.address = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.coupon = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.review = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.changeLocation = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.profile = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.newOrder = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.translations = [];
        this.appClosedMessage = '';
        this.appPages = [];
        this.cityAddress = '';
        this.favIds = [];
        this.countrys = [{
          country_code: 'AF',
          country_name: 'Afghanistan',
          dialling_code: '93'
        }, {
          country_code: 'AL',
          country_name: 'Albania',
          dialling_code: '355'
        }, {
          country_code: 'DZ',
          country_name: 'Algeria',
          dialling_code: '213'
        }, {
          country_code: 'AS',
          country_name: 'American Samoa',
          dialling_code: '1'
        }, {
          country_code: 'AD',
          country_name: 'Andorra',
          dialling_code: '376'
        }, {
          country_code: 'AO',
          country_name: 'Angola',
          dialling_code: '244'
        }, {
          country_code: 'AI',
          country_name: 'Anguilla',
          dialling_code: '1'
        }, {
          country_code: 'AG',
          country_name: 'Antigua',
          dialling_code: '1'
        }, {
          country_code: 'AR',
          country_name: 'Argentina',
          dialling_code: '54'
        }, {
          country_code: 'AM',
          country_name: 'Armenia',
          dialling_code: '374'
        }, {
          country_code: 'AW',
          country_name: 'Aruba',
          dialling_code: '297'
        }, {
          country_code: 'AU',
          country_name: 'Australia',
          dialling_code: '61'
        }, {
          country_code: 'AI',
          country_name: 'Austria',
          dialling_code: '43'
        }, {
          country_code: 'AZ',
          country_name: 'Azerbaijan',
          dialling_code: '994'
        }, {
          country_code: 'BH',
          country_name: 'Bahrain',
          dialling_code: '973'
        }, {
          country_code: 'BD',
          country_name: 'Bangladesh',
          dialling_code: '880'
        }, {
          country_code: 'BB',
          country_name: 'Barbados',
          dialling_code: '1'
        }, {
          country_code: 'BY',
          country_name: 'Belarus',
          dialling_code: '375'
        }, {
          country_code: 'BE',
          country_name: 'Belgium',
          dialling_code: '32'
        }, {
          country_code: 'BZ',
          country_name: 'Belize',
          dialling_code: '501'
        }, {
          country_code: 'BJ',
          country_name: 'Benin',
          dialling_code: '229'
        }, {
          country_code: 'BM',
          country_name: 'Bermuda',
          dialling_code: '1'
        }, {
          country_code: 'BT',
          country_name: 'Bhutan',
          dialling_code: '975'
        }, {
          country_code: 'BO',
          country_name: 'Bolivia',
          dialling_code: '591'
        }, {
          country_code: 'BA',
          country_name: 'Bosnia and Herzegovina',
          dialling_code: '387'
        }, {
          country_code: 'BW',
          country_name: 'Botswana',
          dialling_code: '267'
        }, {
          country_code: 'BR',
          country_name: 'Brazil',
          dialling_code: '55'
        }, {
          country_code: 'IO',
          country_name: 'British Indian Ocean Territory',
          dialling_code: '246'
        }, {
          country_code: 'VG',
          country_name: 'British Virgin Islands',
          dialling_code: '1'
        }, {
          country_code: 'BN',
          country_name: 'Brunei',
          dialling_code: '673'
        }, {
          country_code: 'BG',
          country_name: 'Bulgaria',
          dialling_code: '359'
        }, {
          country_code: 'BF',
          country_name: 'Burkina Faso',
          dialling_code: '226'
        }, {
          country_code: 'MM',
          country_name: 'Burma Myanmar',
          dialling_code: '95'
        }, {
          country_code: 'BI',
          country_name: 'Burundi',
          dialling_code: '257'
        }, {
          country_code: 'KH',
          country_name: 'Cambodia',
          dialling_code: '855'
        }, {
          country_code: 'CM',
          country_name: 'Cameroon',
          dialling_code: '237'
        }, {
          country_code: 'CA',
          country_name: 'Canada',
          dialling_code: '1'
        }, {
          country_code: 'CV',
          country_name: 'Cape Verde',
          dialling_code: '238'
        }, {
          country_code: 'KY',
          country_name: 'Cayman Islands',
          dialling_code: '1'
        }, {
          country_code: 'CF',
          country_name: 'Central African Republic',
          dialling_code: '236'
        }, {
          country_code: 'ID',
          country_name: 'Chad',
          dialling_code: '235'
        }, {
          country_code: 'CL',
          country_name: 'Chile',
          dialling_code: '56'
        }, {
          country_code: 'CN',
          country_name: 'China',
          dialling_code: '86'
        }, {
          country_code: 'CO',
          country_name: 'Colombia',
          dialling_code: '57'
        }, {
          country_code: 'KM',
          country_name: 'Comoros',
          dialling_code: '269'
        }, {
          country_code: 'CK',
          country_name: 'Cook Islands',
          dialling_code: '682'
        }, {
          country_code: 'CR',
          country_name: 'Costa Rica',
          dialling_code: '506'
        }, {
          country_code: 'CI',
          country_name: "C\xF4te d'Ivoire",
          dialling_code: '225'
        }, {
          country_code: 'HR',
          country_name: 'Croatia',
          dialling_code: '385'
        }, {
          country_code: 'CU',
          country_name: 'Cuba',
          dialling_code: '53'
        }, {
          country_code: 'CY',
          country_name: 'Cyprus',
          dialling_code: '357'
        }, {
          country_code: 'CZ',
          country_name: 'Czech Republic',
          dialling_code: '420'
        }, {
          country_code: 'CD',
          country_name: 'Democratic Republic of Congo',
          dialling_code: '243'
        }, {
          country_code: 'DK',
          country_name: 'Denmark',
          dialling_code: '45'
        }, {
          country_code: 'DJ',
          country_name: 'Djibouti',
          dialling_code: '253'
        }, {
          country_code: 'DM',
          country_name: 'Dominica',
          dialling_code: '1'
        }, {
          country_code: 'DO',
          country_name: 'Dominican Republic',
          dialling_code: '1'
        }, {
          country_code: 'EC',
          country_name: 'Ecuador',
          dialling_code: '593'
        }, {
          country_code: 'EG',
          country_name: 'Egypt',
          dialling_code: '20'
        }, {
          country_code: 'SV',
          country_name: 'El Salvador',
          dialling_code: '503'
        }, {
          country_code: 'GQ',
          country_name: 'Equatorial Guinea',
          dialling_code: '240'
        }, {
          country_code: 'ER',
          country_name: 'Eritrea',
          dialling_code: '291'
        }, {
          country_code: 'EE',
          country_name: 'Estonia',
          dialling_code: '372'
        }, {
          country_code: 'ET',
          country_name: 'Ethiopia',
          dialling_code: '251'
        }, {
          country_code: 'FK',
          country_name: 'Falkland Islands',
          dialling_code: '500'
        }, {
          country_code: 'FO',
          country_name: 'Faroe Islands',
          dialling_code: '298'
        }, {
          country_code: 'FM',
          country_name: 'Federated States of Micronesia',
          dialling_code: '691'
        }, {
          country_code: 'FJ',
          country_name: 'Fiji',
          dialling_code: '679'
        }, {
          country_code: 'FI',
          country_name: 'Finland',
          dialling_code: '358'
        }, {
          country_code: 'FR',
          country_name: 'France',
          dialling_code: '33'
        }, {
          country_code: 'GF',
          country_name: 'French Guiana',
          dialling_code: '594'
        }, {
          country_code: 'PF',
          country_name: 'French Polynesia',
          dialling_code: '689'
        }, {
          country_code: 'GA',
          country_name: 'Gabon',
          dialling_code: '241'
        }, {
          country_code: 'GE',
          country_name: 'Georgia',
          dialling_code: '995'
        }, {
          country_code: 'DE',
          country_name: 'Germany',
          dialling_code: '49'
        }, {
          country_code: 'GH',
          country_name: 'Ghana',
          dialling_code: '233'
        }, {
          country_code: 'GI',
          country_name: 'Gibraltar',
          dialling_code: '350'
        }, {
          country_code: 'GR',
          country_name: 'Greece',
          dialling_code: '30'
        }, {
          country_code: 'GL',
          country_name: 'Greenland',
          dialling_code: '299'
        }, {
          country_code: 'GD',
          country_name: 'Grenada',
          dialling_code: '1'
        }, {
          country_code: 'GP',
          country_name: 'Guadeloupe',
          dialling_code: '590'
        }, {
          country_code: 'GU',
          country_name: 'Guam',
          dialling_code: '1'
        }, {
          country_code: 'GT',
          country_name: 'Guatemala',
          dialling_code: '502'
        }, {
          country_code: 'GN',
          country_name: 'Guinea',
          dialling_code: '224'
        }, {
          country_code: 'GW',
          country_name: 'Guinea-Bissau',
          dialling_code: '245'
        }, {
          country_code: 'GY',
          country_name: 'Guyana',
          dialling_code: '592'
        }, {
          country_code: 'HT',
          country_name: 'Haiti',
          dialling_code: '509'
        }, {
          country_code: 'HN',
          country_name: 'Honduras',
          dialling_code: '504'
        }, {
          country_code: 'HK',
          country_name: 'Hong Kong',
          dialling_code: '852'
        }, {
          country_code: 'HU',
          country_name: 'Hungary',
          dialling_code: '36'
        }, {
          country_code: 'IS',
          country_name: 'Iceland',
          dialling_code: '354'
        }, {
          country_code: 'IN',
          country_name: 'India',
          dialling_code: '91'
        }, {
          country_code: 'ID',
          country_name: 'Indonesia',
          dialling_code: '62'
        }, {
          country_code: 'IR',
          country_name: 'Iran',
          dialling_code: '98'
        }, {
          country_code: 'IQ',
          country_name: 'Iraq',
          dialling_code: '964'
        }, {
          country_code: 'IE',
          country_name: 'Ireland',
          dialling_code: '353'
        }, {
          country_code: 'IL',
          country_name: 'Israel',
          dialling_code: '972'
        }, {
          country_code: 'IT',
          country_name: 'Italy',
          dialling_code: '39'
        }, {
          country_code: 'JM',
          country_name: 'Jamaica',
          dialling_code: '1'
        }, {
          country_code: 'JP',
          country_name: 'Japan',
          dialling_code: '81'
        }, {
          country_code: 'JO',
          country_name: 'Jordan',
          dialling_code: '962'
        }, {
          country_code: 'KZ',
          country_name: 'Kazakhstan',
          dialling_code: '7'
        }, {
          country_code: 'KE',
          country_name: 'Kenya',
          dialling_code: '254'
        }, {
          country_code: 'KI',
          country_name: 'Kiribati',
          dialling_code: '686'
        }, {
          country_code: 'XK',
          country_name: 'Kosovo',
          dialling_code: '381'
        }, {
          country_code: 'KW',
          country_name: 'Kuwait',
          dialling_code: '965'
        }, {
          country_code: 'KG',
          country_name: 'Kyrgyzstan',
          dialling_code: '996'
        }, {
          country_code: 'LA',
          country_name: 'Laos',
          dialling_code: '856'
        }, {
          country_code: 'LV',
          country_name: 'Latvia',
          dialling_code: '371'
        }, {
          country_code: 'LB',
          country_name: 'Lebanon',
          dialling_code: '961'
        }, {
          country_code: 'LS',
          country_name: 'Lesotho',
          dialling_code: '266'
        }, {
          country_code: 'LR',
          country_name: 'Liberia',
          dialling_code: '231'
        }, {
          country_code: 'LY',
          country_name: 'Libya',
          dialling_code: '218'
        }, {
          country_code: 'LI',
          country_name: 'Liechtenstein',
          dialling_code: '423'
        }, {
          country_code: 'LT',
          country_name: 'Lithuania',
          dialling_code: '370'
        }, {
          country_code: 'LU',
          country_name: 'Luxembourg',
          dialling_code: '352'
        }, {
          country_code: 'MO',
          country_name: 'Macau',
          dialling_code: '853'
        }, {
          country_code: 'MK',
          country_name: 'Macedonia',
          dialling_code: '389'
        }, {
          country_code: 'MG',
          country_name: 'Madagascar',
          dialling_code: '261'
        }, {
          country_code: 'MW',
          country_name: 'Malawi',
          dialling_code: '265'
        }, {
          country_code: 'MY',
          country_name: 'Malaysia',
          dialling_code: '60'
        }, {
          country_code: 'MV',
          country_name: 'Maldives',
          dialling_code: '960'
        }, {
          country_code: 'ML',
          country_name: 'Mali',
          dialling_code: '223'
        }, {
          country_code: 'MT',
          country_name: 'Malta',
          dialling_code: '356'
        }, {
          country_code: 'MH',
          country_name: 'Marshall Islands',
          dialling_code: '692'
        }, {
          country_code: 'MQ',
          country_name: 'Martinique',
          dialling_code: '596'
        }, {
          country_code: 'MR',
          country_name: 'Mauritania',
          dialling_code: '222'
        }, {
          country_code: 'MU',
          country_name: 'Mauritius',
          dialling_code: '230'
        }, {
          country_code: 'YT',
          country_name: 'Mayotte',
          dialling_code: '262'
        }, {
          country_code: 'MX',
          country_name: 'Mexico',
          dialling_code: '52'
        }, {
          country_code: 'MD',
          country_name: 'Moldova',
          dialling_code: '373'
        }, {
          country_code: 'MC',
          country_name: 'Monaco',
          dialling_code: '377'
        }, {
          country_code: 'MN',
          country_name: 'Mongolia',
          dialling_code: '976'
        }, {
          country_code: 'ME',
          country_name: 'Montenegro',
          dialling_code: '382'
        }, {
          country_code: 'MS',
          country_name: 'Montserrat',
          dialling_code: '1'
        }, {
          country_code: 'MA',
          country_name: 'Morocco',
          dialling_code: '212'
        }, {
          country_code: 'MZ',
          country_name: 'Mozambique',
          dialling_code: '258'
        }, {
          country_code: 'NA',
          country_name: 'Namibia',
          dialling_code: '264'
        }, {
          country_code: 'NR',
          country_name: 'Nauru',
          dialling_code: '674'
        }, {
          country_code: 'NP',
          country_name: 'Nepal',
          dialling_code: '977'
        }, {
          country_code: 'NL',
          country_name: 'Netherlands',
          dialling_code: '31'
        }, {
          country_code: 'AN',
          country_name: 'Netherlands Antilles',
          dialling_code: '599'
        }, {
          country_code: 'NC',
          country_name: 'New Caledonia',
          dialling_code: '687'
        }, {
          country_code: 'NZ',
          country_name: 'New Zealand',
          dialling_code: '64'
        }, {
          country_code: 'NI',
          country_name: 'Nicaragua',
          dialling_code: '505'
        }, {
          country_code: 'NE',
          country_name: 'Niger',
          dialling_code: '227'
        }, {
          country_code: 'NG',
          country_name: 'Nigeria',
          dialling_code: '234'
        }, {
          country_code: 'NU',
          country_name: 'Niue',
          dialling_code: '683'
        }, {
          country_code: 'NF',
          country_name: 'Norfolk Island',
          dialling_code: '672'
        }, {
          country_code: 'KP',
          country_name: 'North Korea',
          dialling_code: '850'
        }, {
          country_code: 'MP',
          country_name: 'Northern Mariana Islands',
          dialling_code: '1'
        }, {
          country_code: 'NO',
          country_name: 'Norway',
          dialling_code: '47'
        }, {
          country_code: 'OM',
          country_name: 'Oman',
          dialling_code: '968'
        }, {
          country_code: 'PK',
          country_name: 'Pakistan',
          dialling_code: '92'
        }, {
          country_code: 'PW',
          country_name: 'Palau',
          dialling_code: '680'
        }, {
          country_code: 'PS',
          country_name: 'Palestine',
          dialling_code: '970'
        }, {
          country_code: 'PA',
          country_name: 'Panama',
          dialling_code: '507'
        }, {
          country_code: 'PG',
          country_name: 'Papua New Guinea',
          dialling_code: '675'
        }, {
          country_code: 'PY',
          country_name: 'Paraguay',
          dialling_code: '595'
        }, {
          country_code: 'PE',
          country_name: 'Peru',
          dialling_code: '51'
        }, {
          country_code: 'PH',
          country_name: 'Philippines',
          dialling_code: '63'
        }, {
          country_code: 'PL',
          country_name: 'Poland',
          dialling_code: '48'
        }, {
          country_code: 'PT',
          country_name: 'Portugal',
          dialling_code: '351'
        }, {
          country_code: 'PR',
          country_name: 'Puerto Rico',
          dialling_code: '1'
        }, {
          country_code: 'QA',
          country_name: 'Qatar',
          dialling_code: '974'
        }, {
          country_code: 'CG',
          country_name: 'Republic of the Congo',
          dialling_code: '242'
        }, {
          country_code: 'RE',
          country_name: 'Réunion',
          dialling_code: '262'
        }, {
          country_code: 'RO',
          country_name: 'Romania',
          dialling_code: '40'
        }, {
          country_code: 'RU',
          country_name: 'Russia',
          dialling_code: '7'
        }, {
          country_code: 'RW',
          country_name: 'Rwanda',
          dialling_code: '250'
        }, {
          country_code: 'BL',
          country_name: 'Saint Barthélemy',
          dialling_code: '590'
        }, {
          country_code: 'SH',
          country_name: 'Saint Helena',
          dialling_code: '290'
        }, {
          country_code: 'KN',
          country_name: 'Saint Kitts and Nevis',
          dialling_code: '1'
        }, {
          country_code: 'MF',
          country_name: 'Saint Martin',
          dialling_code: '590'
        }, {
          country_code: 'PM',
          country_name: 'Saint Pierre and Miquelon',
          dialling_code: '508'
        }, {
          country_code: 'VC',
          country_name: 'Saint Vincent and the Grenadines',
          dialling_code: '1'
        }, {
          country_code: 'WS',
          country_name: 'Samoa',
          dialling_code: '685'
        }, {
          country_code: 'SM',
          country_name: 'San Marino',
          dialling_code: '378'
        }, {
          country_code: 'ST',
          country_name: 'São Tomé and Príncipe',
          dialling_code: '239'
        }, {
          country_code: 'SA',
          country_name: 'Saudi Arabia',
          dialling_code: '966'
        }, {
          country_code: 'SN',
          country_name: 'Senegal',
          dialling_code: '221'
        }, {
          country_code: 'RS',
          country_name: 'Serbia',
          dialling_code: '381'
        }, {
          country_code: 'SC',
          country_name: 'Seychelles',
          dialling_code: '248'
        }, {
          country_code: 'SL',
          country_name: 'Sierra Leone',
          dialling_code: '232'
        }, {
          country_code: 'SG',
          country_name: 'Singapore',
          dialling_code: '65'
        }, {
          country_code: 'SK',
          country_name: 'Slovakia',
          dialling_code: '421'
        }, {
          country_code: 'SI',
          country_name: 'Slovenia',
          dialling_code: '386'
        }, {
          country_code: 'SB',
          country_name: 'Solomon Islands',
          dialling_code: '677'
        }, {
          country_code: 'SO',
          country_name: 'Somalia',
          dialling_code: '252'
        }, {
          country_code: 'ZA',
          country_name: 'South Africa',
          dialling_code: '27'
        }, {
          country_code: 'KR',
          country_name: 'South Korea',
          dialling_code: '82'
        }, {
          country_code: 'ES',
          country_name: 'Spain',
          dialling_code: '34'
        }, {
          country_code: 'LK',
          country_name: 'Sri Lanka',
          dialling_code: '94'
        }, {
          country_code: 'LC',
          country_name: 'St. Lucia',
          dialling_code: '1'
        }, {
          country_code: 'SD',
          country_name: 'Sudan',
          dialling_code: '249'
        }, {
          country_code: 'SR',
          country_name: 'Suriname',
          dialling_code: '597'
        }, {
          country_code: 'SZ',
          country_name: 'Swaziland',
          dialling_code: '268'
        }, {
          country_code: 'SE',
          country_name: 'Sweden',
          dialling_code: '46'
        }, {
          country_code: 'CH',
          country_name: 'Switzerland',
          dialling_code: '41'
        }, {
          country_code: 'SY',
          country_name: 'Syria',
          dialling_code: '963'
        }, {
          country_code: 'TW',
          country_name: 'Taiwan',
          dialling_code: '886'
        }, {
          country_code: 'TJ',
          country_name: 'Tajikistan',
          dialling_code: '992'
        }, {
          country_code: 'TZ',
          country_name: 'Tanzania',
          dialling_code: '255'
        }, {
          country_code: 'TH',
          country_name: 'Thailand',
          dialling_code: '66'
        }, {
          country_code: 'BS',
          country_name: 'The Bahamas',
          dialling_code: '1'
        }, {
          country_code: 'GM',
          country_name: 'The Gambia',
          dialling_code: '220'
        }, {
          country_code: 'TL',
          country_name: 'Timor-Leste',
          dialling_code: '670'
        }, {
          country_code: 'TG',
          country_name: 'Togo',
          dialling_code: '228'
        }, {
          country_code: 'TK',
          country_name: 'Tokelau',
          dialling_code: '690'
        }, {
          country_code: 'TO',
          country_name: 'Tonga',
          dialling_code: '676'
        }, {
          country_code: 'TT',
          country_name: 'Trinidad and Tobago',
          dialling_code: '1'
        }, {
          country_code: 'TN',
          country_name: 'Tunisia',
          dialling_code: '216'
        }, {
          country_code: 'TR',
          country_name: 'Turkey',
          dialling_code: '90'
        }, {
          country_code: 'TM',
          country_name: 'Turkmenistan',
          dialling_code: '993'
        }, {
          country_code: 'TC',
          country_name: 'Turks and Caicos Islands',
          dialling_code: '1'
        }, {
          country_code: 'TV',
          country_name: 'Tuvalu',
          dialling_code: '688'
        }, {
          country_code: 'UG',
          country_name: 'Uganda',
          dialling_code: '256'
        }, {
          country_code: 'UA',
          country_name: 'Ukraine',
          dialling_code: '380'
        }, {
          country_code: 'AE',
          country_name: 'United Arab Emirates',
          dialling_code: '971'
        }, {
          country_code: 'GB',
          country_name: 'United Kingdom',
          dialling_code: '44'
        }, {
          country_code: 'US',
          country_name: 'United States',
          dialling_code: '1'
        }, {
          country_code: 'UY',
          country_name: 'Uruguay',
          dialling_code: '598'
        }, {
          country_code: 'VI',
          country_name: 'US Virgin Islands',
          dialling_code: '1'
        }, {
          country_code: 'UZ',
          country_name: 'Uzbekistan',
          dialling_code: '998'
        }, {
          country_code: 'VU',
          country_name: 'Vanuatu',
          dialling_code: '678'
        }, {
          country_code: 'VA',
          country_name: 'Vatican City',
          dialling_code: '39'
        }, {
          country_code: 'VE',
          country_name: 'Venezuela',
          dialling_code: '58'
        }, {
          country_code: 'VN',
          country_name: 'Vietnam',
          dialling_code: '84'
        }, {
          country_code: 'WF',
          country_name: 'Wallis and Futuna',
          dialling_code: '681'
        }, {
          country_code: 'YE',
          country_name: 'Yemen',
          dialling_code: '967'
        }, {
          country_code: 'ZM',
          country_name: 'Zambia',
          dialling_code: '260'
        }, {
          country_code: 'ZW',
          country_name: 'Zimbabwe',
          dialling_code: '263'
        }];
        this.user_login = '0';
        this.home_type = '0';
        this.reset_pwd = '0';
        this.appPages = [{
          title: 'Home',
          url: 'tabs/tab1',
          icon: 'assets/sidemenu/home.png',
          icon2: 'assets/sidemenu/home2.png',
          icn: 'home-outline'
        }, {
          title: 'Profile',
          url: 'tabs/tab4',
          icon: 'assets/sidemenu/user.png',
          icon2: 'assets/sidemenu/user2.png',
          icn: 'person-outline'
        }, {
          title: 'Language',
          url: 'tabs/tab4/languages',
          icon: 'assets/sidemenu/language.png',
          icon2: 'assets/sidemenu/language2.png',
          icn: 'language-outline'
        }, {
          title: 'Contact Us',
          url: 'tabs/tab4/contacts',
          icon: 'mail-outline',
          icn: 'mail-outline'
        }, {
          title: 'About',
          url: 'tabs/tab4/about',
          icon: 'assets/sidemenu/info.png',
          icon2: 'assets/sidemenu/info2.png',
          icn: 'alert-circle-outline'
        }, {
          title: 'FAQs',
          url: 'tabs/tab4/faqs',
          icon: 'assets/sidemenu/contact.png',
          icon2: 'assets/sidemenu/contact2.png',
          icn: 'flag-outline'
        }, {
          title: 'Help',
          url: 'tabs/tab4/help',
          icon: 'assets/sidemenu/contact.png',
          icon2: 'assets/sidemenu/contact2.png',
          icn: 'help-circle-outline'
        }];
      }
      /*
      Start Loader
      Call this method to Start your Loader
      */


      _createClass(UtilService, [{
        key: "publishAddress",
        value: function publishAddress(data) {
          this.address.next(data);
        }
      }, {
        key: "publishReview",
        value: function publishReview(data) {
          this.review.next(data);
        }
      }, {
        key: "publishProfile",
        value: function publishProfile(data) {
          this.profile.next(data);
        }
      }, {
        key: "publishNewOrder",
        value: function publishNewOrder() {
          this.newOrder.next();
        }
      }, {
        key: "subscribeNewOrder",
        value: function subscribeNewOrder() {
          return this.newOrder;
        }
      }, {
        key: "observProfile",
        value: function observProfile() {
          return this.profile;
        }
      }, {
        key: "getKeys",
        value: function getKeys(key) {
          var _this21 = this;

          return new Promise(function (resolve, reject) {
            _this21.storage.get(key).then(function (data) {
              resolve(data);
            })["catch"](function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "clearKeys",
        value: function clearKeys(key) {
          this.storage.remove(key);
        }
      }, {
        key: "setKeys",
        value: function setKeys(key, value) {
          var _this22 = this;

          return new Promise(function (resolve, reject) {
            _this22.storage.set(key, value).then(function (data) {
              resolve(data);
            })["catch"](function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "back",
        value: function back() {
          this.navCtrl.back();
        }
      }, {
        key: "getLanguage",
        value: function getLanguage() {
          return '';
        }
      }, {
        key: "getReviewObservable",
        value: function getReviewObservable() {
          return this.review;
        }
      }, {
        key: "publishLocation",
        value: function publishLocation() {
          this.changeLocation.next();
        }
      }, {
        key: "subscribeLocation",
        value: function subscribeLocation() {
          return this.changeLocation;
        }
      }, {
        key: "publishLoggedIn",
        value: function publishLoggedIn(data) {
          this.loggedIn.next(data);
        }
      }, {
        key: "subscribeLoggedIn",
        value: function subscribeLoggedIn() {
          return this.loggedIn;
        }
      }, {
        key: "translate",
        value: function translate(str) {
          if (this.translations[str]) {
            return this.translations[str];
          }

          return str;
        }
      }, {
        key: "openMenu",
        value: function openMenu() {
          this.menuCtrl.toggle();
        }
      }, {
        key: "translateInEN",
        value: function translateInEN(str) {
          return str;
        }
      }, {
        key: "getObservable",
        value: function getObservable() {
          return this.address;
        }
      }, {
        key: "publishCoupon",
        value: function publishCoupon(data) {
          this.coupon.next(data);
        }
      }, {
        key: "getCouponObservable",
        value: function getCouponObservable() {
          return this.coupon;
        }
      }, {
        key: "setOrders",
        value: function setOrders(data) {
          this.orders = null;
          this.orders = data;
        }
      }, {
        key: "gerOrder",
        value: function gerOrder() {
          return this.orders;
        }
      }, {
        key: "show",
        value: function show(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this23 = this;

            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    this.isLoading = true;
                    _context6.next = 3;
                    return this.loadingCtrl.create({
                      message: msg,
                      spinner: 'bubbles'
                    }).then(function (a) {
                      a.present().then(function () {
                        //console.log('presented');
                        if (!_this23.isLoading) {
                          a.dismiss().then(function () {
                            return console.log('abort presenting');
                          });
                        }
                      });
                    });

                  case 3:
                    return _context6.abrupt("return", _context6.sent);

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "hide",
        value: function hide() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    this.isLoading = false;
                    _context7.next = 3;
                    return this.loadingCtrl.dismiss().then(function () {
                      return console.log('dismissed');
                    });

                  case 3:
                    return _context7.abrupt("return", _context7.sent);

                  case 4:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
        /*
          Show Warning Alert Message
          param : msg = message to display
          Call this method to show Warning Alert,
          */

      }, {
        key: "showWarningAlert",
        value: function showWarningAlert(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var alert;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.alertCtrl.create({
                      header: 'Warning',
                      message: msg,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context8.sent;
                    _context8.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "showSimpleAlert",
        value: function showSimpleAlert(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var alert;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.alertCtrl.create({
                      header: '',
                      message: msg,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context9.sent;
                    _context9.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
        /*
         Show Error Alert Message
         param : msg = message to display
         Call this method to show Error Alert,
         */

      }, {
        key: "showErrorAlert",
        value: function showErrorAlert(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var alert;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.alertCtrl.create({
                      header: 'Error',
                      message: msg,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context10.sent;
                    _context10.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
        /*
           param : email = email to verify
           Call this method to get verify email
           */

      }, {
        key: "getEmailFilter",
        value: function getEmailFilter(email) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var emailfilter, alert;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;

                    if (emailfilter.test(email)) {
                      _context11.next = 10;
                      break;
                    }

                    _context11.next = 4;
                    return this.alertCtrl.create({
                      header: 'Warning',
                      message: 'Please enter valid email',
                      buttons: ['OK']
                    });

                  case 4:
                    alert = _context11.sent;
                    _context11.next = 7;
                    return alert.present();

                  case 7:
                    return _context11.abrupt("return", false);

                  case 10:
                    return _context11.abrupt("return", true);

                  case 11:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
        /*
          Show Toast Message on Screen
           param : msg = message to display, color= background
           color of toast example dark,danger,light. position  = position of message example top,bottom
           Call this method to show toast message
           */

      }, {
        key: "showToast",
        value: function showToast(msg, colors, positon) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var toast;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this.toastCtrl.create({
                      message: msg,
                      duration: 2000,
                      color: colors,
                      position: positon
                    });

                  case 2:
                    toast = _context12.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "shoNotification",
        value: function shoNotification(msg, colors, positon) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            var toast;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return this.toastCtrl.create({
                      message: msg,
                      duration: 4000,
                      color: colors,
                      position: positon,
                      buttons: [{
                        text: 'Ok',
                        role: 'cancel',
                        handler: function handler() {// console.log('Cancel clicked');
                        }
                      }]
                    });

                  case 2:
                    toast = _context13.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "errorToast",
        value: function errorToast(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
            var toast;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.next = 2;
                    return this.toastCtrl.create({
                      message: msg,
                      duration: 2000
                    });

                  case 2:
                    toast = _context14.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }, {
        key: "apiErrorHandler",
        value: function apiErrorHandler(err) {
          // console.log('Error got in service =>', err)
          if (err.status === -1) {
            this.showErrorAlert('Failed To Connect With Server');
          } else if (err.status === 401) {
            this.showErrorAlert('Unauthorized Request!');
            this.navCtrl.navigateRoot('/login');
          } else if (err.status === 500) {
            this.showErrorAlert('Somethimg Went Wrong..');
          }
        } // setDetails(data) {
        //   this.details = null;
        //   this.details = data;
        // }
        // getDetails() {
        //   return this.details;
        // }

      }, {
        key: "makeid",
        value: function makeid(length) {
          var result = '';
          var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          var charactersLength = characters.length;

          for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }

          return result;
        }
      }]);

      return UtilService;
    }();

    UtilService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }];
    };

    UtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])], UtilService);
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
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /*
     
    */


    var environment = {
      production: true,
      baseURL: 'https://api.pureeats.com.ng/index.php/',
      mediaURL: 'https://api.pureeats.com.ng/uploads/',
      onesignal: {
        appId: '488a471e-df29-4802-be4f-fc2803f7d350',
        googleProjectNumber: '370596125768',
        restKey: 'YzdhOWY5YWItY2U0ZS00MDE5LTg3ZWQtYWI5MjY5MzMzMjc4'
      },
      authToken: '123456789'
    };
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.log(err);
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
    /*! C:\Users\alpha\source\repos\kingfood\User_app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map