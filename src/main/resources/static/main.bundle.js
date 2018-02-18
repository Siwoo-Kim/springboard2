webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n@media (min-width: 768px) {\r\n  html {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n.container {\r\n  min-height: 750px;\r\n  max-width: 960px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<app-header></app-header>\n<app-sub-header></app-sub-header>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(toastr, vRef) {
        this.toastr = toastr;
        this.title = 'app';
        /*toastmanager config*/
        this.toastr.setRootViewContainerRef(vRef);
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_main_module__ = __webpack_require__("../../../../../src/app/main/main.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__importing_module_app_routing_module__ = __webpack_require__("../../../../../src/app/importing-module/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__document_document_module__ = __webpack_require__("../../../../../src/app/document/document.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tokens_app_tokens__ = __webpack_require__("../../../../../src/app/tokens/app-tokens.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_document_service__ = __webpack_require__("../../../../../src/app/service/document.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_mock_mock_document_service__ = __webpack_require__("../../../../../src/app/service/mock/mock-document.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__service_model_code_service__ = __webpack_require__("../../../../../src/app/service/model-code.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__service_review_service__ = __webpack_require__("../../../../../src/app/service/review.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var dev_services = [
    __WEBPACK_IMPORTED_MODULE_11__service_mock_mock_document_service__["a" /* MockDocumentService */],
];
var qa_services = [
    __WEBPACK_IMPORTED_MODULE_9__service_document_service__["a" /* DocumentService */],
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            ],
            imports: [
                /* angular module */
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                /* 3rd party module */
                __WEBPACK_IMPORTED_MODULE_10_ng2_toastr__["ToastModule"].forRoot(),
                /* app modules */
                __WEBPACK_IMPORTED_MODULE_5__main_main_module__["a" /* MainModule */],
                __WEBPACK_IMPORTED_MODULE_6__importing_module_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__document_document_module__["a" /* DocumentModule */],
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_8__tokens_app_tokens__["a" /* BACKEND_URL_TOKEN */], useValue: '/api/' },
                { provide: __WEBPACK_IMPORTED_MODULE_9__service_document_service__["a" /* DocumentService */], useClass: __WEBPACK_IMPORTED_MODULE_9__service_document_service__["a" /* DocumentService */] },
                { provide: __WEBPACK_IMPORTED_MODULE_12__service_model_code_service__["a" /* ModelCodeService */], useClass: __WEBPACK_IMPORTED_MODULE_12__service_model_code_service__["a" /* ModelCodeService */] },
                { provide: __WEBPACK_IMPORTED_MODULE_13__service_review_service__["a" /* ReviewService */], useClass: __WEBPACK_IMPORTED_MODULE_13__service_review_service__["a" /* ReviewService */] },
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

/*
MOCK SERVICES

  {provide:DocumentService, useClass: MockDocumentService },
  {provide:ModelCodeService, useClass: MockModelCodeService},
  {provide:ReviewService, useClass: MockReviewService},
*/
/*
DEV SERVICES
  {provide:DocumentService, useClass: DocumentService },
  {provide:ModelCodeService, useClass: ModelCodeService},
  {provide:ReviewService, useClass: ReviewService},
*/


/***/ }),

/***/ "../../../../../src/app/document/document-post-success/document-post-success.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.post-success-wrapper{\r\n  text-align: center;\r\n  padding-top: 60px;\r\n  background: #3f51b5;\r\n  padding-bottom: 60px;\r\n  margin-top: 50px;\r\n}\r\n\r\n.headline{\r\n  font-size: 56px;\r\n  font-weight: 300;\r\n  line-height: 56px;\r\n  margin: 15px 5px;\r\n}\r\n\r\n.sub-headline{\r\n  font-size: 18px;\r\n  font-weight: 300;\r\n  line-height: 28px;\r\n  margin: 15px 0 25px 0;\r\n}\r\n\r\n.btn-group button{\r\n  margin-left: 15px;\r\n  font-size: 15px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/document/document-post-success/document-post-success.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"post-success-wrapper\">\n  <div class=\"headline text-white\">\n    <p>Posting Document success! :></p>\n  </div>\n  <div class=\"sub-headline text-white\">\n    <p>Find another feature to enhance your documents!</p>\n  </div>\n\n  <div class=\"btn-group\">\n    <button\n      mat-raised-button\n      (click)=\"onReadDocument()\"\n    ><i class=\"fa fa-history\"></i>&nbsp; Go to posted Document</button>\n    <button\n      mat-raised-button\n      (click)=\"onList()\"\n    ><i class=\"fa fa-list-ul\"></i>&nbsp; Go to List</button>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/document/document-post-success/document-post-success.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentPostSuccessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DocumentPostSuccessComponent = /** @class */ (function () {
    function DocumentPostSuccessComponent(route, router) {
        this.route = route;
        this.router = router;
        this.documentId = route.snapshot.params['id'];
        console.log(this.documentId);
    }
    DocumentPostSuccessComponent.prototype.ngOnInit = function () {
    };
    DocumentPostSuccessComponent.prototype.onReadDocument = function () {
        this.router.navigate(['/document', this.documentId]);
    };
    DocumentPostSuccessComponent.prototype.onList = function () {
    };
    DocumentPostSuccessComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-document-post-success',
            template: __webpack_require__("../../../../../src/app/document/document-post-success/document-post-success.component.html"),
            styles: [__webpack_require__("../../../../../src/app/document/document-post-success/document-post-success.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], DocumentPostSuccessComponent);
    return DocumentPostSuccessComponent;
}());



/***/ }),

/***/ "../../../../../src/app/document/document-post/document-post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.post-header-wrapper {\r\n  text-align: center;\r\n}\r\n\r\n.post-header-wrapper p{\r\n  font-size: 1.2em;\r\n}\r\n\r\nmat-form-field{\r\n  width: 70%;\r\n}\r\n\r\nmat-error{\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.post-from-wrapper {\r\n  text-align: center;\r\n  font-size: 1.4em;\r\n}\r\n\r\n.post-text-area{\r\n  padding-bottom: 20px;\r\n  border-bottom: 4px solid #ececec;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/document/document-post/document-post.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"post-wrapper card\">\n  <div class=\"post-header-wrapper\" color=\"primary\">\n    <mat-toolbar color=\"primary\"><h2><i class=\"fa fa-crop\"></i> Post Form</h2></mat-toolbar>\n    <p class=\"text-muted\">\n      description : blur blur\n      : blur blur\n      : blur blur\n    </p>\n  </div>\n\n  <div class=\"post-from-wrapper card-body\">\n    <form\n      class=\"form-group\"\n      [formGroup]=\"formGroup\"\n      (ngSubmit)=\"onSubmit()\"\n      (ngResult)=\"onReset()\"\n    >\n      <mat-form-field>\n        <input\n          matInput\n          type=\"text\"\n          placeholder=\"Enter title\"\n          class=\"form-control\"\n          [formControlName]=\"'title'\"\n        >\n        <mat-error\n          *ngIf=\"formGroup.controls['title'].invalid && formGroup.controls['title'].touched\"\n        >Please enter more than 5 letters</mat-error>\n      </mat-form-field>\n      <hr>\n      <mat-form-field class=\"post-text-area\">\n        <textarea\n          matInput\n          rows=\"16\"\n          type=\"text\"\n          placeholder=\"Leave a text...\"\n          [formControlName]=\"'text'\"\n        ></textarea>\n        <mat-error\n          *ngIf=\"formGroup.controls['text'].invalid && formGroup.controls['text'].touched\"\n        >Please enter more than 10 letters</mat-error>\n      </mat-form-field>\n      <hr>\n      <button\n        color=\"primary\"\n        type=\"submit\"\n        mat-raised-button\n        [disabled]=\"formGroup.invalid\"\n        class=\"btn\">Post!</button>\n      <button\n        type=\"reset\"\n        mat-raised-button\n        (click)=\"onReset()\"\n        class=\"btn\">Reset</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/document/document-post/document-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_document_service__ = __webpack_require__("../../../../../src/app/service/document.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DocumentPostComponent = /** @class */ (function () {
    function DocumentPostComponent(documentService, toastrManager, 
        /*private router: Router*/
        router) {
        this.documentService = documentService;
        this.toastrManager = toastrManager;
        this.router = router;
        this.errorCodes = [];
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            title: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].minLength(5)
            ]),
            text: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].minLength(10)
            ]),
        });
    }
    DocumentPostComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.formGroup.valid) {
            /*hardcoding dummy writer*/
            this.formGroup.value['writer'] = 'anonymous';
            this.documentService.postDocument(this.formGroup.value)
                .subscribe(function (savedDocument) {
                console.log(savedDocument);
                _this.toastrManager.info("success");
                _this.router.navigate(['/document/post/success', savedDocument.id]);
            }, function (error) {
                _this.errorCodes.push(error['_body']);
                console.log(error);
                console.log(_this.errorCodes);
                _this.errorCodes.forEach(function (errorCode) {
                    _this.toastrManager.warning(JSON.stringify(errorCode, null, 2));
                });
            });
        }
    };
    DocumentPostComponent.prototype.onReset = function () {
        this.toastrManager.warning("Hope that you know what you are doing!");
    };
    DocumentPostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-document-post',
            template: __webpack_require__("../../../../../src/app/document/document-post/document-post.component.html"),
            styles: [__webpack_require__("../../../../../src/app/document/document-post/document-post.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_document_service__["a" /* DocumentService */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], DocumentPostComponent);
    return DocumentPostComponent;
}());



/***/ }),

/***/ "../../../../../src/app/document/document-read/document-read.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.document-read-wrapper{\r\n  padding-bottom: 55px;\r\n}\r\n\r\n.read-headline{\r\n  display: inline-block;\r\n  border-top: 3px solid #4143ba;\r\n  font-size: 25px;\r\n  font-weight: bold;\r\n  line-height: 12px;\r\n  text-transform: uppercase;\r\n  padding-top: 8px;\r\n  font-family: 'Nanum Pen Script', cursiv\r\n}\r\n\r\n.read-sub-headline .document-title{\r\n  font-size: 24px;\r\n  margin-bottom: 12px;\r\n  line-height: 35px;\r\n  color: #34302d;\r\n  font-family: 'Roboto Mono', monospace;\r\n}\r\n\r\n.document-metadata{\r\n  padding-top: 22px;\r\n}\r\n\r\n.document-data{\r\n  display: inline-block;\r\n  margin: 2px 15px 0 0;\r\n  font-size: 15px;\r\n  line-height: 12px;\r\n  text-transform: uppercase;\r\n  font-family: 'Roboto Mono', monospace;\r\n}\r\n\r\n.document-data mat-chip {\r\n  padding-bottom: 5px;\r\n  border-bottom: 2px solid #4143ba;\r\n}\r\n\r\n.read-body{\r\n  font-size: 22px;\r\n  font-family: 'Roboto Mono', monospace;\r\n  padding-top: 45px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/document/document-read/document-read.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"document-read-wrapper\">\n  <div class=\"read-headline\">\n    <p><i class=\"fa fa-inbox\"></i> Your Document</p>\n  </div>\n  <div class=\"read-sub-headline\">\n    <h2 class=\"document-title\"> {{ document.title }}</h2>\n    <div class=\"row document-metadata\">\n      <div class=\"col-3 document-data\">\n        <mat-chip color=\"primary\">Writer : {{ document.writer }}</mat-chip>\n      </div>\n      <div class=\"col-4 document-data\">\n        <mat-chip color=\"primary\">Post Date: {{ document.postDate }}</mat-chip>\n      </div>\n      <div class=\"col-4 document-data\">\n        <mat-chip color=\"primary\">Raiting: <app-star-rating [rating]=\"rating\"></app-star-rating></mat-chip>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"read-body\">\n    <p>\n      {{ document.text }}\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/document/document-read/document-read.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentReadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_document_service__ = __webpack_require__("../../../../../src/app/service/document.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_review_service__ = __webpack_require__("../../../../../src/app/service/review.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_model_code_service__ = __webpack_require__("../../../../../src/app/service/model-code.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DocumentReadComponent = /** @class */ (function () {
    function DocumentReadComponent(modelCodeService, documentService, reviewService, route) {
        this.modelCodeService = modelCodeService;
        this.documentService = documentService;
        this.reviewService = reviewService;
        this.route = route;
    }
    DocumentReadComponent.prototype.ngOnInit = function () {
        var _this = this;
        /*changing the modelcode to show the page description(modelCode) */
        this.modelCodeService.codeName = 'document';
        var documentId = this.route.snapshot.params['id'];
        console.log(documentId);
        this.documentService
            .documentById(documentId)
            .subscribe(function (document) {
            console.log(_this.document);
            _this.document = document;
        });
        this.reviewService.getReviewsByDocumentId(documentId)
            .subscribe(function (reviews) { return _this.reviews = reviews; });
        this.rating = this.reviewService.getRating(documentId);
    };
    DocumentReadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-document-read',
            template: __webpack_require__("../../../../../src/app/document/document-read/document-read.component.html"),
            styles: [__webpack_require__("../../../../../src/app/document/document-read/document-read.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__service_model_code_service__["a" /* ModelCodeService */],
            __WEBPACK_IMPORTED_MODULE_2__service_document_service__["a" /* DocumentService */],
            __WEBPACK_IMPORTED_MODULE_3__service_review_service__["a" /* ReviewService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], DocumentReadComponent);
    return DocumentReadComponent;
}());



/***/ }),

/***/ "../../../../../src/app/document/document.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__importing_module_mat_module_module__ = __webpack_require__("../../../../../src/app/importing-module/mat-module.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__document_post_document_post_component__ = __webpack_require__("../../../../../src/app/document/document-post/document-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__document_post_success_document_post_success_component__ = __webpack_require__("../../../../../src/app/document/document-post-success/document-post-success.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__document_read_document_read_component__ = __webpack_require__("../../../../../src/app/document/document-read/document-read.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_main_module__ = __webpack_require__("../../../../../src/app/main/main.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var documentComponents = [
    __WEBPACK_IMPORTED_MODULE_3__document_post_document_post_component__["a" /* DocumentPostComponent */],
    __WEBPACK_IMPORTED_MODULE_5__document_post_success_document_post_success_component__["a" /* DocumentPostSuccessComponent */],
    __WEBPACK_IMPORTED_MODULE_6__document_read_document_read_component__["a" /* DocumentReadComponent */],
];
var DocumentModule = /** @class */ (function () {
    function DocumentModule() {
    }
    DocumentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                /* angular modules */
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* ReactiveFormsModule */],
                /*app modules*/
                __WEBPACK_IMPORTED_MODULE_7__main_main_module__["a" /* MainModule */],
                __WEBPACK_IMPORTED_MODULE_2__importing_module_mat_module_module__["a" /* MatModuleModule */],
            ],
            declarations: documentComponents,
            exports: documentComponents,
        })
    ], DocumentModule);
    return DocumentModule;
}());



/***/ }),

/***/ "../../../../../src/app/importing-module/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_components_main_board_main_board_component__ = __webpack_require__("../../../../../src/app/main/components/main-board/main-board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__document_document_post_document_post_component__ = __webpack_require__("../../../../../src/app/document/document-post/document-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__document_document_post_success_document_post_success_component__ = __webpack_require__("../../../../../src/app/document/document-post-success/document-post-success.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__document_document_read_document_read_component__ = __webpack_require__("../../../../../src/app/document/document-read/document-read.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__main_components_main_board_main_board_component__["a" /* MainBoardComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__main_components_main_board_main_board_component__["a" /* MainBoardComponent */], pathMatch: 'full' },
    { path: 'document/post', component: __WEBPACK_IMPORTED_MODULE_3__document_document_post_document_post_component__["a" /* DocumentPostComponent */] },
    { path: 'document/post/success/:id', component: __WEBPACK_IMPORTED_MODULE_4__document_document_post_success_document_post_success_component__["a" /* DocumentPostSuccessComponent */] },
    { path: 'document/:id', component: __WEBPACK_IMPORTED_MODULE_5__document_document_read_document_read_component__["a" /* DocumentReadComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes),],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/importing-module/mat-module.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatModuleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var matModules = [
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatFormFieldModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatInputModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatToolbarModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatDialogModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatChipsModule */],
];
/* Exporting material module */
var MatModuleModule = /** @class */ (function () {
    function MatModuleModule() {
    }
    MatModuleModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: matModules,
            exports: matModules,
        })
    ], MatModuleModule);
    return MatModuleModule;
}());



/***/ }),

/***/ "../../../../../src/app/main/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.border-top {\r\n  border-top: 1px solid #e5e5e5;\r\n}\r\n.border-bottom {\r\n  border-bottom: 1px solid #e5e5e5;\r\n}\r\nfooter{\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "\n<footer class=\"pt-4 my-md-5 pt-md-5 border-top\">\n  <div class=\"col-12 col-md\">\n    <img class=\"mb-2\" src=\"https://getbootstrap.com/assets/brand/bootstrap-solid.svg\" alt=\"\" width=\"24\" height=\"24\">\n    <small class=\"d-block mb-3 text-muted\">&copy; <a href=\"skim327@myseneca.ca\">Siwoo Kim</a> 2017-2018</small>\n  </div>\n</footer>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/main/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/main/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/components/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.box-shadow {\r\n  -webkit-box-shadow: 0 3px 5px -1px rgba(0,0,0,.11), 0 6px 10px 0 rgba(0,0,0,0.26), 0 1px 18px 0 rgba(0,0,0,.23); /* Safari & Chrome */ /* Firefox */\r\n  -o-box-shadow: 0 3px 5px -1px rgba(0,0,0,.11), 0 6px 10px 0 rgba(0,0,0,0.26), 0 1px 18px 0 rgba(0,0,0,.23); /* Opera */\r\n  box-shadow: 0 3px 5px -1px rgba(0,0,0,.11), 0 6px 10px 0 rgba(0,0,0,0.26), 0 1px 18px 0 rgba(0,0,0,.23);\r\n}\r\n\r\n:host {\r\n  font-family: 'Nanum Pen Script', cursiv;\r\n  font-size: 1.5em;\r\n}\r\n\r\nh1{\r\n  font-size: 1.8em;\r\n}\r\n\r\n.header-wrapper{\r\n  background-color: #4143ba;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"header-wrapper d-flex flex-column flex-md-row align-items-center p-3 mb-2 px-md-4 text-white border-bottom box-shadow\">\n  <h1 class=\"my-0 mr-md-auto font-weight-normal\">\n    <a\n      class=\"text-white\"\n      [routerLink]=\"['/home']\"\n    >SW app &nbsp;<i class=\"fa fa-telegram\"></i></a>\n  </h1>\n  <nav class=\"my-2 my-md-0 mr-md-3\">\n    <a\n      class=\"p-2 text-white\"\n      [routerLink]=\"['/home']\"\n      (click)=\"onChangeModel('home')\"\n    >Home</a>\n    <a\n      class=\"p-2 text-white\"\n      [routerLink]=\"['/document/post']\"\n      (click)=\"onChangeModel('document')\"\n    >Document</a>\n    <a\n      class=\"p-2 text-white\"\n      [routerLink]=\"['/document/1']\"\n      (click)=\"onChangeModel('document')\"\n    >Document 1 (TESTING)</a>\n  </nav>\n  <a class=\"btn btn-outline-primary\"\n     color=\"primary\"\n     mat-raised-button\n     (click)=\"onChangeModel('user')\"\n  >Sign up</a>\n  <form class=\"form-inline ml-2 text-white\">\n      <input\n        type=\"text\"\n        class=\"form-control-sm\"\n        placeholder=\"Search Document\"\n      >\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_model_code_service__ = __webpack_require__("../../../../../src/app/service/model-code.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(modelCodeService) {
        this.modelCodeService = modelCodeService;
    }
    HeaderComponent.prototype.onChangeModel = function (name) {
        this.modelCodeService.codeName = name;
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/main/components/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_model_code_service__["a" /* ModelCodeService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/components/main-board/main-board.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.main-wrapper .card {\r\n  min-width: 220px;\r\n}\r\n\r\nmat-toolbar{\r\n  color: #4c4c4c;\r\n  font-size: 48px;\r\n  font-weight: 300;\r\n  letter-spacing: -1px;\r\n  line-height: 1;\r\n  margin: 5px 0 15px 0;\r\n}\r\n\r\n.home-section{\r\n  color: #555;\r\n  font-size: 21px;\r\n  font-weight: 200;\r\n  line-height: 1.4;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/components/main-board/main-board.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"card-deck mt-3 text-center\">\n  <div class=\"card mb-4\">\n    <mat-toolbar>More than letters and words</mat-toolbar>\n\n    <div class=\"card-body\">\n      <ul class=\"list-unstyled mt-3 mb-4\">\n        <p class=\"home-section\">\n          SW Docs application brings your documents to life with smart editing and styling tools to help you easily format text and paragraphs. <br>\n          Choose from hundreds of fonts, add links, images, and drawings. All for free. <br>\n          Choose from a wide variety of resumes, reports, and other pre-made documents — all designed to make your work that much better, and your life that much easier.\n\n\n          Lists with inset dividers\n          Dividers can be added to lists as a means of separating content into distinct sections. Inset dividers can also be added to provide the appearance of distinct elements in a list without cluttering content like avatar images or icons. Make sure to avoid adding an inset divider to the last element in a list, because it will overlap with the section divider.\n        </p>\n      </ul>\n      <button type=\"button\" class=\"btn btn-lg btn-block btn-outline-primary\">Sign up for own Document!</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/components/main-board/main-board.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainBoardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainBoardComponent = /** @class */ (function () {
    function MainBoardComponent() {
    }
    MainBoardComponent.prototype.ngOnInit = function () {
    };
    MainBoardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main-board',
            template: __webpack_require__("../../../../../src/app/main/components/main-board/main-board.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/components/main-board/main-board.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainBoardComponent);
    return MainBoardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/components/star-rating/star-rating.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.rating-star{\r\n  color: #ba4483;\r\n}\r\n\r\n.rating-data{\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/components/star-rating/star-rating.component.html":
/***/ (function(module, exports) {

module.exports = "\n<span>\n  <i *ngFor=\"let star of stars;\"\n    class=\"fa rating-star\"\n    [class.fa-star]=\"star\"\n    [class.fa-star-o]=\"!star\"\n  ></i>\n  <span class=\"text-lowercase\" *ngIf=\"rating\"> {{ rating | number : '.0-2'}} Stars</span>\n</span>\n"

/***/ }),

/***/ "../../../../../src/app/main/components/star-rating/star-rating.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarRatingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StarRatingComponent = /** @class */ (function () {
    function StarRatingComponent() {
        this.stars = [];
        this.readonly = true;
        this.maxStar = 5;
        this.stars = Array(this.maxStar).fill(false, 0, this.maxStar);
    }
    StarRatingComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(StarRatingComponent.prototype, "rating", {
        get: function () {
            return this._rating;
        },
        set: function (value) {
            this._rating = value || 0;
            this.stars.fill(true, 0, this._rating);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], StarRatingComponent.prototype, "readonly", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], StarRatingComponent.prototype, "maxStar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], StarRatingComponent.prototype, "rating", null);
    StarRatingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-star-rating',
            template: __webpack_require__("../../../../../src/app/main/components/star-rating/star-rating.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/components/star-rating/star-rating.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StarRatingComponent);
    return StarRatingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/components/sub-header/sub-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.sub-header-wrapper {\r\n  max-width: 700px;\r\n  margin-bottom: 0.6rem !important;\r\n}\r\n\r\n.sub-header{\r\n  border-bottom: 1px solid #d3d3d3;\r\n  background: #f2f3ff;\r\n}\r\n\r\n.lead{\r\n  font-family: 'Nanum Pen Script', cursiv;\r\n  font-size: 1.6em;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/components/sub-header/sub-header.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"col-12 sub-header mb-3 \">\n  <div class=\"sub-header-wrapper px-3 py-3 pt-1 pb-md-4 mx-auto text-center\">\n    <h1\n      class=\"display-4\">\n      <ng-container [ngSwitch]=\"modelCode.name\">\n        <i class=\"fa fa-home\" *ngSwitchCase=\"'Home'\" ></i>\n        <i class=\"fa fa-file-text-o\" *ngSwitchCase=\"'Document'\" ></i>\n        <i class=\"fa fa-home\" *ngSwitchDefault></i>\n      </ng-container>\n      {{ modelCode.name }}\n    </h1>\n    <p class=\"lead text-muted\">{{ modelCode.description }}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/components/sub-header/sub-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_model_code_service__ = __webpack_require__("../../../../../src/app/service/model-code.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubHeaderComponent = /** @class */ (function () {
    function SubHeaderComponent(modelCodeService) {
        this.modelCodeService = modelCodeService;
        this.pageName = 'Home';
        this.pageDescription = 'Dummy description';
    }
    SubHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modelCodeService.modelCodeByName('home').subscribe(function (modelCode) { _this.modelCode = modelCode; });
        this.modelCodeService.onChangeModelEmitter.subscribe(function (name) {
            _this.codeName = name;
            _this.fetchModelCode();
        });
    };
    SubHeaderComponent.prototype.fetchModelCode = function () {
        var _this = this;
        this.modelCodeService.modelCodeByName(this.codeName).subscribe(function (modelCode) { return _this.modelCode = modelCode; }, function (error) { return _this.errorCode = error['_body'][0]; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SubHeaderComponent.prototype, "codeName", void 0);
    SubHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sub-header',
            template: __webpack_require__("../../../../../src/app/main/components/sub-header/sub-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/components/sub-header/sub-header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_model_code_service__["a" /* ModelCodeService */]])
    ], SubHeaderComponent);
    return SubHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/main.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_header_header_component__ = __webpack_require__("../../../../../src/app/main/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__importing_module_mat_module_module__ = __webpack_require__("../../../../../src/app/importing-module/mat-module.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/main/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_sub_header_sub_header_component__ = __webpack_require__("../../../../../src/app/main/components/sub-header/sub-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_main_board_main_board_component__ = __webpack_require__("../../../../../src/app/main/components/main-board/main-board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_star_rating_star_rating_component__ = __webpack_require__("../../../../../src/app/main/components/star-rating/star-rating.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var mainComponents = [
    __WEBPACK_IMPORTED_MODULE_2__components_header_header_component__["a" /* HeaderComponent */],
    __WEBPACK_IMPORTED_MODULE_4__components_footer_footer_component__["a" /* FooterComponent */],
    __WEBPACK_IMPORTED_MODULE_5__components_sub_header_sub_header_component__["a" /* SubHeaderComponent */],
    __WEBPACK_IMPORTED_MODULE_6__components_main_board_main_board_component__["a" /* MainBoardComponent */],
    __WEBPACK_IMPORTED_MODULE_8__components_star_rating_star_rating_component__["a" /* StarRatingComponent */],
];
var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__importing_module_mat_module_module__["a" /* MatModuleModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* RouterModule */],
            ],
            declarations: mainComponents,
            exports: mainComponents,
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "../../../../../src/app/service/document.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tokens_app_tokens__ = __webpack_require__("../../../../../src/app/tokens/app-tokens.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var DocumentService = /** @class */ (function () {
    function DocumentService(http, backendUrl) {
        this.http = http;
        this.backendUrl = backendUrl;
        this.backendUrl += "document/";
    }
    DocumentService.prototype.postDocument = function (document) {
        return this.http.post(this.backendUrl, document)
            .map(function (response) {
            console.log(response);
            if (response.status === 400) {
                return response['_body'].json();
            }
            return response.json();
        });
    };
    DocumentService.prototype.documentById = function (documentId) {
        return this
            .http
            .get(this.backendUrl + "/" + documentId)
            .map(function (response) { console.log(response); return response.json(); });
    };
    DocumentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__tokens_app_tokens__["a" /* BACKEND_URL_TOKEN */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], String])
    ], DocumentService);
    return DocumentService;
}());

var documents = [];


/***/ }),

/***/ "../../../../../src/app/service/mock/mock-document.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MockDocumentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MockDocumentService = /** @class */ (function () {
    function MockDocumentService() {
    }
    MockDocumentService.prototype.postDocument = function (document) {
        documents.push(document);
        document.id = documents.length;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            observer.next(document);
        });
    };
    MockDocumentService.prototype.documentById = function (documentId) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            observer.next(documents
                .filter(function (document) { return document.id == documentId; })[0]);
        });
    };
    MockDocumentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], MockDocumentService);
    return MockDocumentService;
}());

var documents = [
    {
        id: 1,
        title: 'dummy title',
        text: 'This release includes upgrades to existing dependencies as well as some exciting new features for users of Spring Cloud Task. From a dependencies perspective, Spring Cloud Task 2.0.0.M3 has been upgraded to use the Spring Boot 2.0.0.RC1 stack as well as Spring Cloud’s Finchley M6 dependencies. Beyond just a dependency upgrade, there are a number of new features within Spring Cloud Task 2.0.0.M3. Let’s take a look. Restricting Task Instances Since Spring Cloud Task isn’t responsible for orchestration, it can be hard to prevent multiple instances of the same task being executed at the same time. However, this can be an important use case for things such as database migrations. This release adds a listener that can be used to prevent multiple instances of a task from being executed at the same time. By',
        writer: 'anonymous',
        postDate: new Date(),
    },
    {
        id: 2,
        title: 'dummy title',
        text: 'This release includes upgrades to existing dependencies as well as some exciting new features for users of Spring Cloud Task. From a dependencies perspective, Spring Cloud Task 2.0.0.M3 has been upgraded to use the Spring Boot 2.0.0.RC1 stack as well as Spring Cloud’s Finchley M6 dependencies. Beyond just a dependency upgrade, there are a number of new features within Spring Cloud Task 2.0.0.M3. Let’s take a look. Restricting Task Instances Since Spring Cloud Task isn’t responsible for orchestration, it can be hard to prevent multiple instances of the same task being executed at the same time. However, this can be an important use case for things such as database migrations. This release adds a listener that can be used to prevent multiple instances of a task from being executed at the same time. By',
        writer: 'anonymous',
        postDate: new Date(),
    },
    {
        id: 3,
        title: 'dummy title',
        text: 'This release includes upgrades to existing dependencies as well as some exciting new features for users of Spring Cloud Task. From a dependencies perspective, Spring Cloud Task 2.0.0.M3 has been upgraded to use the Spring Boot 2.0.0.RC1 stack as well as Spring Cloud’s Finchley M6 dependencies. Beyond just a dependency upgrade, there are a number of new features within Spring Cloud Task 2.0.0.M3. Let’s take a look. Restricting Task Instances Since Spring Cloud Task isn’t responsible for orchestration, it can be hard to prevent multiple instances of the same task being executed at the same time. However, this can be an important use case for things such as database migrations. This release adds a listener that can be used to prevent multiple instances of a task from being executed at the same time. By',
        writer: 'anonymous',
        postDate: new Date(),
    },
    {
        id: 4,
        title: 'dummy title',
        text: 'This release includes upgrades to existing dependencies as well as some exciting new features for users of Spring Cloud Task. From a dependencies perspective, Spring Cloud Task 2.0.0.M3 has been upgraded to use the Spring Boot 2.0.0.RC1 stack as well as Spring Cloud’s Finchley M6 dependencies. Beyond just a dependency upgrade, there are a number of new features within Spring Cloud Task 2.0.0.M3. Let’s take a look. Restricting Task Instances Since Spring Cloud Task isn’t responsible for orchestration, it can be hard to prevent multiple instances of the same task being executed at the same time. However, this can be an important use case for things such as database migrations. This release adds a listener that can be used to prevent multiple instances of a task from being executed at the same time. By',
        writer: 'anonymous',
        postDate: new Date(),
    },
];


/***/ }),

/***/ "../../../../../src/app/service/model-code.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelCodeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tokens_app_tokens__ = __webpack_require__("../../../../../src/app/tokens/app-tokens.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ModelCodeService = /** @class */ (function () {
    function ModelCodeService(http, backendUrl) {
        this.http = http;
        this.backendUrl = backendUrl;
        this.urlSegment = this.backendUrl + 'modelcode/';
        this.onChangeModelEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._codeName = 'home';
    }
    ModelCodeService.prototype.modelCodes = function () {
        return this.http.get("" + this.urlSegment)
            .map(function (respsone) { return respsone.json(); });
    };
    ModelCodeService.prototype.modelCode = function (code) {
        return this.http.get(this.urlSegment + "code/" + code)
            .map(function (respsone) { return respsone.json(); });
    };
    ModelCodeService.prototype.modelCodeByName = function (name) {
        return this.http.get("" + this.urlSegment + name)
            .map(function (respsone) { return respsone.json(); });
    };
    Object.defineProperty(ModelCodeService.prototype, "codeName", {
        get: function () {
            return this._codeName;
        },
        set: function (name) {
            this._codeName = name;
            this.onChangeModelEmitter.emit(this.codeName);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ModelCodeService.prototype, "onChangeModelEmitter", void 0);
    ModelCodeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__tokens_app_tokens__["a" /* BACKEND_URL_TOKEN */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], String])
    ], ModelCodeService);
    return ModelCodeService;
}());



/***/ }),

/***/ "../../../../../src/app/service/review.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tokens_app_tokens__ = __webpack_require__("../../../../../src/app/tokens/app-tokens.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ReviewService = /** @class */ (function () {
    function ReviewService(http, backendUrl) {
        this.http = http;
        this.backendUrl = backendUrl;
        this.backendUrl = this.backendUrl + "review/";
    }
    ReviewService.prototype.addReview = function (review) {
        return this
            .http
            .post("" + this.backendUrl, review)
            .map(function (response) { console.log(response); return response.json(); });
    };
    ReviewService.prototype.getReviewsByDocumentId = function (documentId) {
        return this.http
            .get(this.backendUrl + "document/" + documentId)
            .map(function (resposne) { console.log(resposne); return resposne.json(); });
    };
    ReviewService.prototype.getReview = function (id) {
        return null;
    };
    ReviewService.prototype.getRating = function (documentId) {
        return null;
    };
    ReviewService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__tokens_app_tokens__["a" /* BACKEND_URL_TOKEN */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], String])
    ], ReviewService);
    return ReviewService;
}());



/***/ }),

/***/ "../../../../../src/app/tokens/app-tokens.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BACKEND_URL_TOKEN; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

var BACKEND_URL_TOKEN = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]("Backend Url");


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map