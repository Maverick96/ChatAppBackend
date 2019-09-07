(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routes.ts":
/*!*******************************!*\
  !*** ./src/app/app-routes.ts ***!
  \*******************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/auth-guard.service */ "./src/app/shared/services/auth-guard.service.ts");




// import { LeadListComponent } from './lead-list/lead-list.component';
// import { LeadDetailsComponent } from './lead-details/lead-details.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { AuthGuardService } from './shared/services/auth-guard.service'
var appRoutes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"] },
    { path: 'sign-up', component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], canActivate: [_shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]] },
    // {
    //     path: 'lead-list',
    //     component: LeadListComponent,
    //     canActivate: [AuthGuardService]
    // },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__["PageNotFoundComponent"] }
];



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'chat-app-frontend';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.constants.ts":
/*!**********************************!*\
  !*** ./src/app/app.constants.ts ***!
  \**********************************/
/*! exports provided: BASE_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return BASE_URL; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");

var BASE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl;



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routes */ "./src/app/app-routes.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/user-list/user-list.component.ts");
/* harmony import */ var _message_box_message_box_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./message-box/message-box.component */ "./src/app/message-box/message-box.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _shared_services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/services/http-interceptor.service */ "./src/app/shared/services/http-interceptor.service.ts");
/* harmony import */ var _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ctrl/ngx-emoji-mart */ "./node_modules/@ctrl/ngx-emoji-mart/fesm5/ctrl-ngx-emoji-mart.js");
/* harmony import */ var _ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ctrl/ngx-emoji-mart/ngx-emoji */ "./node_modules/@ctrl/ngx-emoji-mart/ngx-emoji/fesm5/ctrl-ngx-emoji-mart-ngx-emoji.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















// material modules

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_10__["UserListComponent"],
                _message_box_message_box_component__WEBPACK_IMPORTED_MODULE_11__["MessageBoxComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_5__["appRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
                _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_14__["PickerModule"],
                _ctrl_ngx_emoji_mart_ngx_emoji__WEBPACK_IMPORTED_MODULE_15__["EmojiModule"]
            ],
            providers: [{
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
                    useClass: _shared_services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_13__["HttpInterceptorService"],
                    multi: true
                },],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home{\n    width: 100vw;\n    height: 100vh;\n}\n\n.mat-drawer-container{\n    height: 100%;\n}\n\n.mat-drawer{\n    width: 20vw\n}\n\n.row{\n    margin: 0;\n}\n\n.chat-body{\n    height: 95vh;\n    /* width: 75vw; */\n}\n\n.menu{\n    height: 5vh;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"row\">\n\n  <div class=\"col-4\">\n    <app-user-list></app-user-list>\n  </div>\n  <div class=\"col-8\">\n    <app-message-box></app-message-box>\n  </div>\n\n</div> -->\n<div class=\"home\">\n  <mat-drawer-container class=\"example-container\" autosize>\n    <mat-drawer #drawer class=\"example-sidenav\" mode=\"side\">\n\n      <app-user-list></app-user-list>\n    </mat-drawer>\n\n    <div class=\"row menu\">\n      <button type=\"button\" mat-button (click)=\"drawer.toggle()\">\n        Toggle sidenav\n      </button>\n    </div>\n    <div class=\"chat-body\">\n      <app-message-box class=\"w-100\"></app-message-box>\n    </div>\n\n  </mat-drawer-container>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        // open nav by default
        this.drawer.open();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('drawer'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDrawer"])
    ], HomeComponent.prototype, "drawer", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    margin-top: 15vh;\n    border: 1px solid black\n}\n\nlabel{\n    float: left;\n}\n\n.form-group{\n    margin-bottom: 10px;\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h5 class=\"card-title text-center\">Chatify</h5>\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" class=\"form-signin\">\n\n    <div *ngIf=\"!isLogin\" class=\"form-group\">\n      <label for=\"name\">Name :</label>\n      <input type=\"text\" formControlName=\"name\" id=\"name\" class=\"form-control\" placeholder=\"Name\">\n      <div *ngIf=\"loginForm.controls.name.invalid && loginForm.controls.name.touched\">Name is\n        required\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"inputEmail\">Email:</label>\n      <input type=\"email\" formControlName=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\"\n        autofocus>\n      <div *ngIf=\"loginForm.controls.email.invalid && loginForm.controls.email.touched\">Email is required</div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"inputPassword\">Password:</label>\n      <input type=\"password\" formControlName=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\">\n      <div *ngIf=\"loginForm.controls.password.invalid && loginForm.controls.password.touched\">Password is\n        required\n      </div>\n    </div>\n\n    <div *ngIf=\"!isLogin\" class=\"form-group\">\n      <label for=\"inputCPassword\">Confirm Password:</label>\n      <input type=\"password\" formControlName=\"confirmPassword\" id=\"inputCPassword\" class=\"form-control\"\n        placeholder=\"Confirm Password\">\n      <div *ngIf=\"loginForm.controls.confirmPassword.invalid && loginForm.controls.confirmPassword.touched\">Confirm\n        Password is\n        required\n      </div>\n    </div>\n\n    <button *ngIf=\"isLogin\" class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"button\"\n      (click)=\"redirectTo('sign-up')\">Sign Up</button>\n\n    <button *ngIf=\"!isLogin\" class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"button\"\n      (click)=\"redirectTo('login')\">Login</button>\n\n    <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" [disabled]=\"loginForm.invalid\" type=\"submit\">\n      {{buttonText}}\n    </button>\n    <hr class=\"my-4\">\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/login.service */ "./src/app/shared/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, loginService, router) {
        this.fb = fb;
        this.loginService = loginService;
        this.router = router;
        this.isLogin = false;
        this.isPasswordSame = false;
        this.buttonText = 'Sign In';
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.router.url === '/login') {
            this.isLogin = true;
        }
        else {
            this.isLogin = false;
            this.buttonText = 'Sign Up';
        }
        this.createForm();
    };
    LoginComponent.prototype.createForm = function () {
        if (this.isLogin) {
            this.loginForm = this.fb.group({
                email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
                password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
        }
        else {
            this.loginForm = this.fb.group({
                email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
                password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            });
        }
    };
    LoginComponent.prototype.onSubmit = function () {
        if (this.isLogin) {
            this.onLoginUser();
        }
        else {
            this.onSignUpUser();
        }
    };
    LoginComponent.prototype.onLoginUser = function () {
        var _this = this;
        if (this.loginForm.valid) {
            this.login$ = this.loginService.login(this.loginForm.value).subscribe(function (res) {
                if (res['success']) {
                    // this.toastrService.success("Login Success", '', {
                    //   timeOut: 2000
                    // });
                    localStorage.setItem('user-data', JSON.stringify(res['data']));
                    localStorage.setItem('token', res['token']);
                    _this.router.navigate(['home']);
                }
                else {
                    // this.toastrService.error("Login Failed", '', {
                    //   timeOut: 5000
                    // });
                }
            }, function (err) {
                // this.toastrService.error("Login Failed", '', {
                //   timeOut: 5000
                // });
                console.error(err);
            });
        }
    };
    LoginComponent.prototype.onSignUpUser = function () {
        var _this = this;
        this.isPasswordSame = this.loginForm.controls['password'].value === this.loginForm.controls['confirmPassword'].value;
        if (this.loginForm.valid && this.isPasswordSame) {
            this.login$ = this.loginService.signUp(this.loginForm.value).subscribe(function (res) {
                if (res['success']) {
                    // this.toastrService.success("Login Success", '', {
                    //   timeOut: 2000
                    // });
                    _this.router.navigate(['login']);
                }
                else {
                    // this.toastrService.error("Login Failed", '', {
                    //   timeOut: 5000
                    // });
                }
            }, function (err) {
                // this.toastrService.error("Login Failed", '', {
                //   timeOut: 5000
                // });
                console.error(err);
            });
        }
    };
    LoginComponent.prototype.redirectTo = function (path) {
        this.router.navigate([path]);
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        if (this.login$) {
            this.login$.unsubscribe();
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _shared_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/message-box/message-box.component.css":
/*!*******************************************************!*\
  !*** ./src/app/message-box/message-box.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sentText{\n    /* background-color: beige; */\n    /* justify-content: flex-end; */\n    background-color: #0C61F2;\n    color: whitesmoke;\n    float: right;\n}\n\n.receivedText{\n    background-color: white;\n    /* justify-content: flex-start; */\n    float: left;\n}\n\n.text-box{\n    display: flex;\n    position: fixed;\n    bottom: 3px;\n    width: 100%;\n    height: 7vh;\n}\n\ntextarea{\n    width: 72%;\n}\n\nbutton{\n    width: 6%;\n}\n\n.chat-area{\n    width: 100%;\n    height: 100%;\n    background-color: #d4d0d2;\n}\n\nmat-list-item{\n    border: 1px solid;\n    margin: 5px;\n}\n\n.emotion{\n    display: inline-block;\n    float: right;\n    position: relative;\n    bottom: -14px;\n    margin-right: 4px;\n    color: #0C61F2;\n}\n\n.text{\n    /* display: flex; */\n    /* border: 1px solid white; */\n    margin: 8px;\n    padding: 8px 16px;\n    border-radius: 5%;\n}\n\n.chat-body{\n    display: flex;\n    flex-direction: column;\n    max-height: 83vh;\n    overflow: scroll;\n}\n\n.chat-header{\n    height: 5vh;\n    background-color: #0C61F2;\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.emoji-container{\n    position: relative;\n    left: -22vw;\n    bottom: 44vh;\n}\n\n.emoji-icon{\n    position: relative;\n    bottom: -20px;\n}"

/***/ }),

/***/ "./src/app/message-box/message-box.component.html":
/*!********************************************************!*\
  !*** ./src/app/message-box/message-box.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-area\" *ngIf=\"receiverUser['userId']\">\n    <!-- <mat-list>\n        <mat-list-item *ngFor=\"let message of messageList; let i = index\"\n            [ngClass]=\"{ sentText: message.senderId === currentUserId, receivedText: message.senderId !== currentUserId}\"\n            (click)=\"onSelectUser(i)\">\n            {{message?.message}}\n        </mat-list-item>\n    </mat-list> -->\n\n    <div class=\"chat-header\">\n        <div class=\"mr-3\">\n            {{receiverUser['name']}}\n        </div>\n        <mat-icon (click)=\"connectPeer()\" matListIcon>videocam</mat-icon>\n        <mat-icon class=\"ml-4\" *ngIf=\"isIncomingCall\" (click)=\"createPeerInstance()\" matListIcon>music_video</mat-icon>\n    </div>\n\n    <video *ngIf=\"true\" #streamVideo width=\"400\" height=\"500\" muted=\"muted\"></video>\n    <input #inp type=\"file\" style=\"display: none\" />\n\n    <div #chatBody *ngIf=\"false\" class=\"chat-body\">\n        <div *ngFor=\"let message of messageList; let i = index\">\n\n            <div class=\"text\"\n                [ngClass]=\"{ sentText: message.senderId === currentUserId, receivedText: message.senderId !== currentUserId}\">\n                {{message.message}}\n\n            </div>\n\n\n            <div class=\"emotion\" *ngIf=\"message.senderId === currentUserId\">\n                <ngx-emoji *ngIf=\"message.sentiment == 'positive'\" [emoji]=\"{ id: 'grin'}\" size=\"20\"></ngx-emoji>\n                <!-- <span *ngIf=\"message.sentiment == 'positive'\">\n                    :)\n                </span> -->\n                <ngx-emoji *ngIf=\"message.sentiment == 'negative'\" [emoji]=\"{ id: 'slightly_frowning_face'}\" size=\"20\">\n                </ngx-emoji>\n                <!-- <span *ngIf=\"message.sentiment == 'negative'\">\n                    :(\n                </span> -->\n                <ngx-emoji *ngIf=\"message.sentiment == 'neutral'\" [emoji]=\"{ id: 'neutral_face'}\" size=\"20\">\n                </ngx-emoji>\n                <!-- <span *ngIf=\"message.sentiment == 'neutral'\">\n                    :|\n                </span> -->\n            </div>\n        </div>\n\n    </div>\n\n\n    <div class=\"text-box\">\n        <mat-icon class=\"emoji-icon\" (click)=\"toggleEmojiLayout()\" matListIcon>tag_faces</mat-icon>\n        <textarea #textInp [(ngModel)]=\"message\">\n        </textarea>\n\n        <button mat-raised-button [ngClass]=\"{'primary-blue': message.length > 0}\" [disabled]=\"message.length === 0\"\n            (click)=\"onEnterMessage()\">Send</button>\n\n        <div *ngIf=\"showEmoji\" class=\"emoji-container\">\n\n            <emoji-mart (emojiClick)=\"addEmoji($event)\"></emoji-mart>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/message-box/message-box.component.ts":
/*!******************************************************!*\
  !*** ./src/app/message-box/message-box.component.ts ***!
  \******************************************************/
/*! exports provided: MessageBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageBoxComponent", function() { return MessageBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _shared_services_messaging_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/messaging.service */ "./src/app/shared/services/messaging.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Peer } from 'simple-peer';
var MessageBoxComponent = /** @class */ (function () {
    function MessageBoxComponent(userService, messagingService) {
        this.userService = userService;
        this.messagingService = messagingService;
        this.message = '';
        this.messageList = [];
        this.receiverUser = {};
        this.isInitiator = false;
        this.showEmoji = false;
        this.isIncomingCall = false;
    }
    MessageBoxComponent.prototype.ngOnInit = function () {
        var userData = JSON.parse(localStorage.getItem('user-data'));
        this.currentUserId = userData.userId;
        this.subscribeToSelectUser();
        this.subscribeToMessages();
        this.subscribeToPeerKey();
        console.log('Peer');
    };
    MessageBoxComponent.prototype.createPeerInstance = function () {
        var _this = this;
        if (this.peer1) {
            console.log("Destroying");
            this.peer1.destroy();
        }
        // get media stream and use it to create the webrtc peer
        navigator.getUserMedia({ audio: true, video: true }, function (stream) {
            // create peer
            _this.peer1 = new SimplePeer({
                initiator: _this.isInitiator,
                stream: stream,
                trickle: false
            });
            // connect to initiator if you're the receiver
            if (!_this.isInitiator) {
                console.log("Received request, now connecting");
                _this.peer1.signal(_this.initiatorPeerKey);
            }
            _this.peer1.on('signal', function (data) {
                console.log("SIGNAL!!", data.type, _this.isInitiator);
                // create intiator connection 
                if (data.type === 'offer') {
                    var payload = {
                        key: data,
                        receiverId: _this.receiverUser['userId']
                    };
                    _this.messagingService.sendPeerConnectionRequest(payload);
                }
                else if (data.type === 'answer') {
                    console.log("In receiver!");
                    _this.receiverPeerKey = data;
                    var payload = {
                        key: data,
                        receiverId: _this.receiverUser['userId']
                    };
                    _this.messagingService.sendPeerConnectionRequest(payload);
                }
            });
            _this.peer1.on('connect', function () {
                console.log("Connected !!", _this.isInitiator);
            });
            _this.peer1.on('data', function (data) {
                console.log("DATA!!!!!");
            });
            _this.peer1.on('stream', function (streamData) {
                console.log("Stream started", streamData);
                if (streamData) {
                    _this.videoEle.nativeElement.srcObject = streamData;
                    _this.videoEle.nativeElement.play();
                }
            });
        }, function (err) {
            console.error("ERRROR!", err);
        });
    };
    MessageBoxComponent.prototype.subscribeToPeerKey = function () {
        var _this = this;
        this.peerKey$ = this.messagingService.receivePeerKey().subscribe(function (key) {
            console.log("Key Peer-----", key, _this.isInitiator);
            // connect to receiver if it is the initator!!
            if (_this.isInitiator) {
                _this.peer1.signal(key);
                return;
            }
            _this.isInitiator = false;
            _this.initiatorPeerKey = key;
            _this.isIncomingCall = true;
        });
    };
    MessageBoxComponent.prototype.connectPeer = function () {
        this.isInitiator = true;
        this.createPeerInstance();
    };
    MessageBoxComponent.prototype.subscribeToSelectUser = function () {
        var _this = this;
        this.getSelectedUser$ = this.userService.getSelectedUser().subscribe(function (user) {
            console.log("User", user);
            _this.receiverUser = user;
            // fetch messages and get ChatId
            var payload = {
                user1: _this.currentUserId,
                user2: _this.receiverUser['userId']
            };
            _this.fetchMessage$ = _this.userService.fetchMessages(payload).subscribe(function (res) {
                console.log(res);
                _this.messageList = res['result'];
                _this.chatId = res['chatId'];
                _this.userService.setUserChatId(_this.chatId);
                _this.scrollToBottom();
            }, function (err) {
                console.error(err);
                _this.chatId = null;
                _this.messageList = [];
            });
        });
    };
    MessageBoxComponent.prototype.scrollToBottom = function () {
        console.log("Scroll!");
        // this.chatBodyEle.nativeElement.scrollTop = this.chatBodyEle.nativeElement.scrollHeight;
    };
    MessageBoxComponent.prototype.onEnterMessage = function () {
        console.log("Message entered!", this.message, this.chatId, this.receiverUser['userId']);
        this.messageList.push({
            message: this.message,
            senderId: this.currentUserId
        });
        this.scrollToBottom();
        // send msg to server
        this.messagingService.sendMessage({
            msg: this.message,
            index: this.messageList.length - 1,
            receiverId: this.receiverUser['userId'],
            chatId: this.chatId,
            senderId: this.currentUserId
        });
        this.message = '';
    };
    MessageBoxComponent.prototype.subscribeToMessages = function () {
        var _this = this;
        this.receiveMsg$ = this.messagingService.receiveMessages().subscribe(function (msg) {
            console.log("received", msg);
            if (msg && msg.sentiment) {
                _this.messageList[msg.index]['sentiment'] = msg.sentiment;
            }
            else {
                _this.messageList.push(msg);
            }
            _this.scrollToBottom();
        });
    };
    MessageBoxComponent.prototype.addEmoji = function (event) {
        console.log("Event", event);
        this.message = this.message + event.emoji.native;
        this.toggleEmojiLayout();
        // this.textInpEle.nativeElement.focus();
    };
    MessageBoxComponent.prototype.toggleEmojiLayout = function () {
        this.showEmoji = !this.showEmoji;
    };
    MessageBoxComponent.prototype.ngOnDestroy = function () {
        if (this.getSelectedUser$) {
            this.getSelectedUser$.unsubscribe();
        }
        if (this.fetchMessage$) {
            this.fetchMessage$.unsubscribe();
        }
        if (this.receiveMsg$) {
            this.receiveMsg$.unsubscribe();
        }
        if (this.peerKey$) {
            this.peerKey$.unsubscribe();
        }
        if (this.peer1) {
            console.log("Destroying");
            this.peer1.destroy();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('streamVideo'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MessageBoxComponent.prototype, "videoEle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('textInp'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MessageBoxComponent.prototype, "textInpEle", void 0);
    MessageBoxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message-box',
            template: __webpack_require__(/*! ./message-box.component.html */ "./src/app/message-box/message-box.component.html"),
            styles: [__webpack_require__(/*! ./message-box.component.css */ "./src/app/message-box/message-box.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _shared_services_messaging_service__WEBPACK_IMPORTED_MODULE_2__["MessagingService"]])
    ], MessageBoxComponent);
    return MessageBoxComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/auth-guard.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/auth-guard.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router) {
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('token')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/shared/services/http-interceptor.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/services/http-interceptor.service.ts ***!
  \*************************************************************/
/*! exports provided: HttpInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptorService", function() { return HttpInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpInterceptorService = /** @class */ (function () {
    function HttpInterceptorService() {
    }
    HttpInterceptorService.prototype.intercept = function (request, next) {
        var token = localStorage.getItem('token');
        console.log("TOKEN ", token);
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Basic " + token
                }
            });
        }
        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }
        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
        // this.loaderService.setLoaderState(true);
        var self = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                console.log('event--->>>', event);
                // self.loaderService.setLoaderState(false);
            }
            return event;
        }));
    };
    HttpInterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], HttpInterceptorService);
    return HttpInterceptorService;
}());



/***/ }),

/***/ "./src/app/shared/services/login.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/login.service.ts ***!
  \**************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.constants */ "./src/app/app.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.login = function (payload) {
        return this.http.post(src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + "/login", payload);
    };
    LoginService.prototype.signUp = function (payload) {
        return this.http.post(src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + "/register", payload);
    };
    LoginService.prototype.logout = function (payload) {
        return this.http.post(src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + "/logout", payload);
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/shared/services/messaging.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/messaging.service.ts ***!
  \******************************************************/
/*! exports provided: MessagingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagingService", function() { return MessagingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessagingService = /** @class */ (function () {
    function MessagingService() {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__(src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"]);
        var userData = JSON.parse(localStorage.getItem('user-data'));
        this.userId = userData.userId;
        this.socket.emit('register', {
            userId: this.userId
        });
    }
    MessagingService.prototype.sendMessage = function (msg) {
        this.socket.emit('message', msg);
    };
    MessagingService.prototype.sendPeerConnectionRequest = function (payload) {
        this.socket.emit('peer-connection', payload);
    };
    MessagingService.prototype.receiveMessages = function () {
        var _this = this;
        // 
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this.socket.on("message", function (msg) {
                observer.next(msg);
            });
        });
    };
    MessagingService.prototype.receivePeerKey = function () {
        var _this = this;
        // 
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this.socket.on("peer-key", function (msg) {
                observer.next(msg);
            });
        });
    };
    MessagingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MessagingService);
    return MessagingService;
}());



/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.selectedUser = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.selectedUser$ = this.selectedUser.asObservable();
        this.selectedUserChatId = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.selectedUserChatId$ = this.selectedUserChatId.asObservable();
    }
    UserService.prototype.fetchUserList = function () {
        return this.http.get(src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + "/onlineUsers");
    };
    UserService.prototype.fetchMessages = function (payload) {
        return this.http.post(src_app_app_constants__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + "/fetchMessages", payload);
    };
    UserService.prototype.getSelectedUser = function () {
        return this.selectedUser$;
    };
    UserService.prototype.setSelectedUser = function (user) {
        this.selectedUser.next(user);
    };
    UserService.prototype.getUserChatId = function () {
        return this.selectedUserChatId$;
    };
    UserService.prototype.setUserChatId = function (chatId) {
        this.selectedUserChatId.next(chatId);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user-list/user-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/user-list/user-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    width: 100%;\n    height: 100%;\n}\n\n.chat-list{\n    color: #0C61F2;\n    border-top: 1px solid grey;\n    background-color: white;\n}\n\n.selected-user{\n    color: white;\n    background-color: #0C61F2;\n}"

/***/ }),

/***/ "./src/app/user-list/user-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-list/user-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container p-0\">\n  <div layout=\"row\">\n    User List\n  </div>\n\n  <mat-list>\n    <mat-list-item *ngFor=\"let user of userList; let i = index\" (click)=\"onSelectUser(i)\" class=\"chat-list\"\n      [ngClass]=\"{ 'selected-user': selectedUserIndex === i}\">\n      {{user?.name}}\n    </mat-list-item>\n  </mat-list>\n\n</div>"

/***/ }),

/***/ "./src/app/user-list/user-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-list/user-list.component.ts ***!
  \**************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserListComponent = /** @class */ (function () {
    function UserListComponent(userService) {
        this.userService = userService;
        this.userList = [];
        this.totalUsers = 0;
    }
    UserListComponent.prototype.ngOnInit = function () {
        console.log("USer List");
        this.fetchUserList();
        this.getUserChatId();
    };
    ;
    UserListComponent.prototype.fetchUserList = function () {
        var _this = this;
        this.userList$ = this.userService.fetchUserList().subscribe(function (data) {
            if (data['result']) {
                _this.userList = data['result'];
                _this.totalUsers = data['total'];
            }
        }, function (err) {
            console.log("Error", err);
        });
    };
    UserListComponent.prototype.videoCall = function () {
        console.log("Video Call!");
    };
    UserListComponent.prototype.onSelectUser = function (index) {
        if (this.selectedUserIndex === index) {
            return;
        }
        this.selectedUserIndex = index;
        console.log("CLICKED!", index);
        this.userService.setSelectedUser(this.userList[index]);
    };
    UserListComponent.prototype.getUserChatId = function () {
        var _this = this;
        this.selectedUserChatId$ = this.userService.getUserChatId().subscribe(function (chatId) {
            _this.userList[_this.selectedUserIndex].chatId = chatId;
            console.log("CHAT ID", chatId);
        });
    };
    UserListComponent.prototype.ngOnDestroy = function () {
        if (this.userList$) {
            this.userList$.unsubscribe();
        }
        if (this.selectedUserChatId$) {
            this.selectedUserChatId$.unsubscribe();
        }
    };
    UserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.css */ "./src/app/user-list/user-list.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: "http://localhost:5001"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
///<reference path="typings.d.ts"/>





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ha40035575/Desktop/Web Dev/real-world-chat-app/chat-app-frontend/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map