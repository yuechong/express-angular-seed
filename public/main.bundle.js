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

exports = module.exports = __webpack_require__("../../../../_css-loader@0.28.7@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\r\n    width: 90%;\r\n    padding: 10px 0px;\r\n    margin: 0 auto;\r\n    border: 1px solid red;\r\n}\r\n.center{\r\n\r\n    padding: 10px;\r\n}\r\n.example-card{\r\n    width:9%;\r\n    min-width: 120px;\r\n    display: inline-block;\r\n    margin: 4px;\r\n}\r\n.mt10{\r\n    margin-top: 10px;\r\n    \r\n}\r\nul, li, p, dl, dt, dd {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n.in_05 ul {\r\n    border-bottom: 1px dashed #a8cee1;\r\n    line-height: 20px;\r\n    height: 23px;\r\n    padding: 4px 0 0 3px;\r\n}\r\n\r\n.in_05 ul li {\r\n    float: left;\r\n    height: 20px;\r\n    overflow: hidden;\r\n    margin: 0 5px;\r\n    padding: 1px 3px;\r\n}\r\n\r\n\r\n\r\n\r\n.in_05 ul li a {\r\n    padding: 0 2px;\r\n    line-height: 20px;\r\n    height: 20px;\r\n    overflow: hidden;\r\n    color: #07519a;\r\n}\r\n.in_05 ul li.on {\r\n    background-color: red;\r\n    border-radius: 4px; \r\n  \r\n}\r\n.in_05 ul li.on a{\r\n    color:white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<div class=\"container\">\n    <mat-toolbar>\n        <h1>日本漫画</h1>\n\n\n        <!-- search -->\n        <div style=\"float:right;margin-left:20px;\">\n            <mat-form-field>\n                <input matInput type=\"text\" placeholder=\"search\" [(ngModel)]=\"name\" />\n                <button mat-button *ngIf=\"name\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"name=''\">\n                    <mat-icon>close</mat-icon>\n                </button>\n            </mat-form-field>\n            <button mat-raised-button color=\"primary\" (click)=\"submit()\">submit</button>\n        </div>\n        <div style=\"clear:both;\"></div>\n    </mat-toolbar>\n\n    <mat-card>\n        <mat-card-content class=\"in_05\">\n            <ul>\n                <li>\n                    <strong>完结状态</strong>：\n                </li>\n                <li *ngFor=\"let item of finishs;\" [ngClass]=\"{'on':classActive.isFinish === item.value}\">\n                    <a href=\"javascript:;\" (click)=\"search('isFinish',item.value)\">{{item.text}}</a>\n                </li>\n            </ul>\n            <ul>\n                <li>\n                    <strong>漫画分类</strong>：\n                </li>\n\n                <li *ngFor=\"let item of types;\" [ngClass]=\"{'on':classActive.type === item.value}\">\n                    <a href=\"javascript:;\" (click)=\"search('type',item.value)\">{{item.text}}</a>\n                </li>\n\n            </ul>\n            <ul>\n                <li>\n                    <strong>字母分类</strong>：\n                </li>\n\n                <li *ngFor=\"let char of charets;\" [ngClass]=\"{'on':classActive.char == char}\">\n                    <a href=\"javascript:;\" (click)=\"search('char',char)\">{{char||'全部'}}</a>\n                </li>\n            </ul>\n            <ul>\n                <li>\n                    <strong>热门程度</strong>：</li>\n                <li class=\"on\">\n                    <a>全部</a>\n                </li>\n                <li>\n                    <a href=\"\"></a>\n                </li>\n            </ul>\n        </mat-card-content>\n    </mat-card>\n    <div class=\"center\">\n        <mat-card class=\"example-card\" *ngFor=\"let item of list | paginate: { itemsPerPage: param.size, currentPage: param.curPage,id: 'foo',totalItems:page.totalCount };let $index = index;\">\n\n            <a [href]=\"item.href\" target=\"_blank\" [title]=\"item.title\">\n                <img mat-card-image [src]=\"item.img\" [alt]=\"item.title\">\n            </a>\n            <mat-card-content>\n                <p style=\"text-align:center;white-space:nowrap;overflow:hidden;text-overflow: ellipsis;\">\n                    <a [href]=\"item.href\" target=\"_blank\" [title]=\"item.title\">{{item.title}}</a>\n                </p>\n\n                <p style=\"text-align:center;\">\n\n                    <a [href]=\"item.news_href\" target=\"_blank\" [title]=\"item.news\">{{item.news}}\n                        <span *ngIf=\"item.isFinish\">[完]</span>\n                    </a>\n                </p>\n                <p style=\"text-align:center;white-space:nowrap;overflow:hidden;text-overflow: ellipsis;\">\n                    <a [href]=\"item.auth_href\" target=\"_blank\" [title]=\"item.auth\">{{item.auth}}</a>\n                </p>\n            </mat-card-content>\n        </mat-card>\n    </div>\n    <div style=\"clear:both;\"></div>\n    <!-- page -->\n    <div fxLayout=\"row\" fxLayoutGap=\"10px\" class=\"mt10\" fxLayoutAlign=\"center center\">\n        <pagination-controls id=\"foo\" maxSize=\"9\" directionLinks=\"true\" (pageChange)=\"pageChange($event)\"></pagination-controls>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.privider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponentProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@5.1.2@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../../_@angular_http@5.1.2@@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponentProvider = (function () {
    function AppComponentProvider(http) {
        this.http = http;
    }
    AppComponentProvider.prototype.get = function (param) {
        return this.http.post('/api/page', param);
    };
    AppComponentProvider.prototype.search = function (param) {
        return this.http.get('/api/search', { search: param });
    };
    AppComponentProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]])
    ], AppComponentProvider);
    return AppComponentProvider;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@5.1.2@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component_privider__ = __webpack_require__("../../../../../src/app/app.component.privider.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(service) {
        this.service = service;
        this.title = 'app';
        this.list = [];
        this.param = {
            size: 20,
            curPage: 1,
            id: ''
        };
        this.page = {
            curPage: 1,
            pages: 1000,
            totalCount: 10000
        };
        this.finishs = [
            {
                text: '全部',
                value: 'all'
            }, {
                text: '连载中', value: false
            }, { text: '已完结', value: true }
        ];
        this.types = [
            { text: '全部', value: 'all' }, { text: '少年热血', value: '少年热血' }, { text: '武侠格斗', value: '武侠格斗' }, { text: '少女爱情', value: '少女爱情' }, { text: '运动竞技', value: '运动竞技' }, { text: '科幻魔幻', value: '科幻魔幻' }, { text: '幽默爆笑', value: '幽默爆笑' }, { text: '侦探推理', value: '侦探推理' }, { text: '东方同人', value: '东方同人' }, { text: '少年漫画', value: '少年漫画' }, { text: '少女漫画', value: '少女漫画' }, { text: '青年漫画', value: '青年漫画' }, { text: '女青漫画', value: '女青漫画' }, { text: '其他', value: '' }
        ];
        this.charets = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0-9'];
        this.classActive = {
            type: 'all',
            isFinish: 'all',
            char: ''
        };
        // search
        this.store = {};
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getHttp(this.param);
    };
    // page nav
    AppComponent.prototype.pageChange = function (cur) {
        this.param.curPage = cur;
        var obj = Object.assign({}, this.store);
        var c = Object.assign(obj, this.param);
        console.log(this.store);
        this.getHttp(c);
    };
    AppComponent.prototype.submit = function () {
        this.searchHttp({ name: this.name });
    };
    AppComponent.prototype.search = function (type, value) {
        var obj = {};
        if (type) {
            obj[type] = value;
            this.classActive[type] = value;
        }
        var c = Object.assign(this.store, obj);
        c = Object.assign(c, this.param);
        console.log(this.store);
        console.log(c);
        this.getHttp(c);
    };
    AppComponent.prototype.searchHttp = function (param) {
        var _this = this;
        this.searchAjax = this.service.search(param).subscribe(function (res) {
            // res = res.json();
            if (res.success) {
                if (res.data.length > 0) {
                    _this.list = res.data;
                    for (var i in _this.list) {
                        var item = _this.list[i];
                        if (item.img.indexOf('images.dmzj.com') != -1) {
                            item.img = "/api/img?url=" + item.img;
                        }
                    }
                }
                else {
                    _this.list = [];
                }
            }
        });
    };
    AppComponent.prototype.getHttp = function (param) {
        var _this = this;
        this.ajax = this.service.get(param).subscribe(function (res) {
            console.log(res);
            // res = res.json();
            console.log(res);
            if (res.success) {
                _this.list = res.data;
                _this.page = res.page;
                // alert();
                for (var i in _this.list) {
                    var item = _this.list[i];
                    if (item.img.indexOf('images.dmzj.com') != -1) {
                        item.img = "/api/img?url=" + item.img;
                    }
                }
            }
            else {
                _this.list = [];
            }
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        if (this.ajax) {
            this.ajax.unsubscribe();
        }
        if (this.searchAjax) {
            this.searchAjax.unsubscribe();
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__app_component_privider__["a" /* AppComponentProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_component_privider__["a" /* AppComponentProvider */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../../_@angular_platform-browser@5.1.2@@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../../_@angular_core@5.1.2@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../../_@angular_forms@5.1.2@@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../../_@angular_http@5.1.2@@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../../_@angular_material@5.0.2@@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../../_@angular_platform-browser@5.1.2@@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__("../../../../_@angular_flex-layout@2.0.0-beta.12@@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__ = __webpack_require__("../../../../_ngx-pagination@3.0.3@ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__http_interceptor__ = __webpack_require__("../../../../../src/app/http.interceptor.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







 // <-- import the module


var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatAutocompleteModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatButtonToggleModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatChipsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatDatepickerModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatExpansionModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["j" /* MatGridListModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["l" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["o" /* MatNativeDateModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MatPaginatorModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["q" /* MatProgressBarModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MatProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MatRadioModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["t" /* MatRippleModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["u" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["v" /* MatSidenavModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["x" /* MatSliderModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["w" /* MatSlideToggleModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["y" /* MatSnackBarModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["z" /* MatSortModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["A" /* MatTableModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["B" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["C" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["D" /* MatTooltipModule */],
            ],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */],
                    useFactory: function (xhrBackend, requestOptions) {
                        return new __WEBPACK_IMPORTED_MODULE_9__http_interceptor__["a" /* InterceptedHttp */](xhrBackend, requestOptions);
                    },
                    deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["f" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* RequestOptions */]]
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/http.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterceptedHttp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@5.1.2@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../../_@angular_http@5.1.2@@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../_rxjs@5.5.6@rxjs/_esm5/Rx.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InterceptedHttp = (function (_super) {
    __extends(InterceptedHttp, _super);
    function InterceptedHttp(backend, defaultOptions) {
        return _super.call(this, backend, defaultOptions) || this;
    }
    InterceptedHttp.prototype.request = function (url, options) {
        return _super.prototype.request.call(this, url, options);
    };
    InterceptedHttp.prototype.get = function (url, options) {
        if (options == null) {
            options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]();
        }
        if (options.headers == null) {
            options.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        }
        // jwt header
        var token = localStorage.getItem('token');
        console.error("token:" + token);
        if (token) {
            options.headers.append('token', token);
        }
        return this.intercept(_super.prototype.get.call(this, url, this.getRequestOptionArgs(options)));
    };
    InterceptedHttp.prototype.post = function (url, body, options) {
        //form data encodeURIComponent
        var str = [];
        for (var p in body) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(body[p]));
        }
        body = str.join("&");
        console.log(body);
        if (options == null) {
            options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]();
        }
        if (options.headers == null) {
            options.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        }
        options.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        // jwt header
        var token = localStorage.getItem('token');
        console.error("token:" + token);
        if (token) {
            options.headers.append('token', token);
        }
        return this.intercept(_super.prototype.post.call(this, url, body, options));
    };
    InterceptedHttp.prototype.put = function (url, body, options) {
        return _super.prototype.put.call(this, url, body, this.getRequestOptionArgs(options));
    };
    InterceptedHttp.prototype.delete = function (url, options) {
        return _super.prototype.delete.call(this, url, this.getRequestOptionArgs(options));
    };
    // 添加header
    InterceptedHttp.prototype.getRequestOptionArgs = function (options) {
        if (options == null) {
            options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]();
        }
        if (options.headers == null) {
            options.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        }
        options.headers.append('Content-Type', 'application/json');
        return options;
    };
    // reponse 拦截
    InterceptedHttp.prototype.intercept = function (observable) {
        return observable.map(function (res) {
            console.log(res);
            var token = res.headers.get('token');
            if (token && token != localStorage.getItem('token')) {
                localStorage.setItem('token', token);
            }
            // console.log(url);
            // let url:string = res.url;
            var data = res.json();
            // console.log("链接");
            // console.log(data);
            if (data.success) {
                // console.log(0);
                return data;
            }
            else {
                // 用户过期
                if (data.msg === "Bad token") {
                    // 销毁用户
                    // this.authService.destroy();
                }
                throw __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(data).error;
            }
        }).catch(function (err) {
            console.log(err);
            console.log("Caught error: " + err);
            throw __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(err);
        });
    };
    InterceptedHttp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* ConnectionBackend */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]])
    ], InterceptedHttp);
    return InterceptedHttp;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]));



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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@5.1.2@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../../_@angular_platform-browser-dynamic@5.1.2@@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
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