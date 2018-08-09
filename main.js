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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-header></app-header>\n  <app-main></app-main>\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/carousel/carousel.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
                _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]
            ],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/carousel/carousel.component.html":
/*!**************************************************!*\
  !*** ./src/app/carousel/carousel.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/carousel/carousel.component.scss":
/*!**************************************************!*\
  !*** ./src/app/carousel/carousel.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/carousel/carousel.component.ts":
/*!************************************************!*\
  !*** ./src/app/carousel/carousel.component.ts ***!
  \************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
    }
    CarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/carousel/carousel.component.html"),
            styles: [__webpack_require__(/*! ./carousel.component.scss */ "./src/app/carousel/carousel.component.scss")]
        })
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"container\">\n    <div class=\"row\">\n      <section class=\"col-md-6 contacts\">\n        <h1>Contact Information</h1>\n        <p>I'm open to new projects.  You can send me for evaluation an approximate\n          technical assignment or simply a description of the project in your own words.</p>\n        <h4>Links to my social networks:</h4>\n        <ul>\n          <li><span></span><a href=\"https://www.linkedin.com/in/uladzimir-yeudakimovich\" target=\"_blank\">Linkedin</a></li>\n          <li><span></span><a href=\"https://github.com/uladzimir-yeudakimovich\" target=\"_blank\">Github</a></li>\n          <li><span></span><a href=\"https://www.codewars.com/users/uladzimir.yeudakimovich\" target=\"_blank\">CodeWars</a></li>\n          <li><span></span><a href=\"https://www.facebook.com/uladzimir.yeudakimovich\" target=\"_blank\">Facebook</a></li>\n          <li><span></span><a href=\"https://instagram.com/uladzimir.yeudakimovich\" target=\"_blank\">Instagram</a></li>\n        </ul>\n      </section>\n      <form class=\"col-md-6\">\n        <input type=\"text\" name=\"firstName\" placeholder=\"Enter name\" required pattern=\"[A-Za-zА-Яа-яЁё]+$\">\n        <input type=\"email\" name=\"email\" placeholder=\"Enter email\" required>\n        <textarea name=\"later\" placeholder=\"Enter message\" required></textarea>\n        <input type=\"file\" accept=\".pdf, .doc, .png, .jpg, .jpeg\" multiple>\n        <label class=\"fa-sticky-note\"><span>Attach file</span></label>\n        <input type=\"submit\" class=\"btn btn-primary btn-block\" value=\"Submit\" formmethod=\"post\">\n      </form>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  background-image: linear-gradient(-180deg, #E6F0F0 0%, #E9F0E6 100%);\n  margin-top: 20px; }\n  footer .contacts {\n    padding: 20px 0 0 40px; }\n  footer .contacts h1, footer .contacts h2 {\n      padding-left: 20px; }\n  footer .contacts p {\n      text-align: justify;\n      padding: 30px 40px 30px 0; }\n  footer .contacts h4 {\n      padding: 0 0 20px 20px; }\n  footer .contacts ul {\n      height: 170px;\n      padding: 0; }\n  footer .contacts ul li {\n        height: 20px;\n        margin-top: 10px;\n        list-style-type: none; }\n  footer .contacts ul li span {\n          display: inline-block;\n          vertical-align: middle;\n          width: 20px;\n          height: 20px;\n          opacity: 0.1;\n          background: #000;\n          border-radius: 2px; }\n  footer .contacts ul li a {\n          text-decoration: none;\n          padding: 10px 12px; }\n  footer .contacts ul li a:hover {\n          text-decoration: none; }\n  footer form {\n    height: 480px;\n    margin: auto; }\n  footer form input, footer form textarea {\n      border-radius: 4px;\n      width: 90%;\n      height: 48px;\n      padding: 0 5%;\n      margin: 12px 0; }\n  footer form textarea {\n      height: 192px;\n      padding-top: 10px; }\n  footer form input:hover, footer form textarea:hover {\n      border: 1px solid #286090; }\n  footer form input[type=file] {\n      height: 0;\n      opacity: 0;\n      overflow: hidden;\n      cursor: pointer; }\n  footer form .fa-sticky-note {\n      display: block;\n      margin: -25px 0 0 5%;\n      color: #286090; }\n  footer form input[type=submit] {\n      width: 100%;\n      height: 49px;\n      margin: 12px 0; }\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"container language-en\">\n    <div class=\"row\">\n      <div class=\"d-none d-lg-block col-lg-6 col-xl-5\" style=\"padding: 0;\">\n        <figure><img class=\"img-fluid\" src=\"src/app/images/logo_laptop.jpg\" alt=\"\" style=\"margin-bottom: -16px;\"></figure>\n      </div>\n      <article class=\"col-lg-6 col-xl-7 information\">\n        <h3>Front-end developer</h3>\n        <h1>Uladzimir Yeudakimovich</h1>\n        <div class=\"d-block d-md-none\">\n          <figure style=\"display: flex; justify-content: center; margin-top: 30px;\"><img class=\"rounded-circle\" src=\"src/app/images/logo_phone.jpg\" alt=\"\"></figure>\n        </div>\n        <div class=\"d-none d-md-block d-lg-none\">\n          <figure style=\"display: flex; justify-content: center; margin-top: 30px;\"><img class=\"rounded-circle\" src=\"src/app/images/logo_tablet.jpg\" alt=\"\"></figure>\n        </div>\n        <p class=\"d-none d-lg-block\">A few words about me.  I've finished the courses at Rolling Scopes School (EPAM) and Devincubator with a\n          specialization in front-end development. I use technologies such as HTML5, CSS3, JavaScript,\n          LESS and SASS preprocessors, Git version control system. I use Photoshop for working with mockups.\n          I've got experience working with the following frameworks: Bootstrap, Phaser, React, Angular and express.\n          When working with the server side of applications I use node.js, WebSockets.  There is experience with\n          the MySQL database and various APIs. To build and optimize projects I use webpack.</p>\n        <h5 class=\"d-block d-lg-none\">A few words about me.  I've finished the courses at Rolling Scopes School (EPAM) and Devincubator with a\n          specialization in front-end development. I use technologies such as HTML5, CSS3, JavaScript,\n          LESS and SASS preprocessors, Git version control system. I use Photoshop for working with mockups.\n          I've got experience working with the following frameworks: Bootstrap, Phaser, React, Angular and express.\n          When working with the server side of applications I use node.js, WebSockets.  There is experience with\n          the MySQL database and various APIs. To build and optimize projects I use webpack.</h5>\n      </article>\n    </div>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  background-color: #3a3842;\n  color: white; }\n  header .information h3 {\n    text-align: center;\n    margin-top: 60px; }\n  header .information h1 {\n    font-size: 2.2rem;\n    text-align: center;\n    margin: 30px 0 0 30px; }\n  header .information p {\n    margin: 30px 0 0 30px;\n    text-align: justify;\n    line-height: 1.4; }\n  header .information h5 {\n    text-align: justify;\n    margin: 30px 0; }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <section>\n    <h1>My works</h1>\n    <div class=\"container\">\n      <div class=\"row my-works-right\" *ngFor=\"let i of images\">\n        <article class=\"col-lg-6 description\">\n          <div>\n            <h3>{{i[0]}}</h3>\n            <a [href]=\"i[1]\" target=\"_blank\">{{i[2]}}</a>\n          </div>\n          <p>{{i[3]}}</p>\n        </article>\n        <ngb-carousel *ngIf=\"images\">\n          <ng-template ngbSlide>\n            <img [src]=\"i[4]\" alt=\"Random first slide\">\n          </ng-template>\n          <ng-template ngbSlide>\n            <img [src]=\"i[5]\" alt=\"Random first slide\">\n          </ng-template>\n          <ng-template ngbSlide>\n            <img [src]=\"i[6]\" alt=\"Random first slide\">\n          </ng-template>\n          <ng-template ngbSlide>\n            <img [src]=\"i[7]\" alt=\"Random first slide\">\n          </ng-template>\n          <ng-template ngbSlide>\n            <img [src]=\"i[8]\" alt=\"Random first slide\">\n          </ng-template>\n        </ngb-carousel>\n      </div>\n    </div>\n\n    <!-- <div class=\"row my-works\" *ngFor=\"let i of images\"> -->\n        \n  </section>\n</main>\n"

/***/ }),

/***/ "./src/app/main/main.component.scss":
/*!******************************************!*\
  !*** ./src/app/main/main.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main h1 {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\nmain .my-works-right {\n  flex-direction: row-reverse;\n  justify-content: center;\n  margin-top: 20px; }\n\nmain .my-works {\n  margin-top: 20px; }\n\nmain .img-fluid {\n  max-width: 100%;\n  height: auto; }\n\nmain .description h3 {\n  margin-bottom: 30px; }\n\nmain .description a {\n  text-decoration: none; }\n\nmain .description p {\n  opacity: 0.8;\n  text-align: justify; }\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
        this.images = [
            [
                'Messenger.',
                '',
                '',
                "Full-stack development. Used technologies HTML5, CSS3, JavaScript, Node.JS, WebSockets, MySQL.\n        It was used the express framework during the development of the server part. Communication in the\n        MESSAGE is in the browser. Data is transferred to the server via WebSocket. The server is\n        processed and written to the MySQL database.",
                'src/app/images/chat/chat_laptop1.jpg',
                'src/app/images/chat/chat_laptop2.jpg',
                'src/app/images/chat/chat_laptop3.jpg',
                'src/app/images/chat/chat_laptop4.jpg',
                'src/app/images/chat/chat_laptop5.jpg'
            ],
            [
                'The Alina game',
                'http://uladzimir-yeudakimovich.ml/phaser-game/',
                'play',
                "This game is \"arcade\". The development language is JavaScript. It was written using the Phaser framework, the\n        presentation was performed using the Bootstrap framework and connecting the jQuery library.",
                'src/app/images/game/game_laptop1.jpg',
                'src/app/images/game/game_laptop2.jpg',
                'src/app/images/game/game_laptop3.jpg',
                'src/app/images/game/game_laptop4.jpg',
                'src/app/images/game/game_laptop5.jpg'
            ],
            [
                'Social-network.',
                'http://uladzimir-yeudakimovich.ml/social-network/',
                'view site',
                "It was written in HTML5, CSS3 and JavaScript. I used vector graphics svg for drawing icons\n        and Yandex maps API for adding a map to the page.",
                'src/app/images/social/social_laptop1.jpg',
                'src/app/images/social/social_laptop2.jpg',
                'src/app/images/social/social_laptop3.jpg',
                'src/app/images/social/social_laptop4.jpg',
                'src/app/images/social/social_laptop5.jpg'
            ],
            [
                'Application.',
                'http://uladzimir-yeudakimovich.mlreact-app/',
                'view application',
                "Task Scheduler To-DO-List. The development language is JavaScript. It was written with the use of the React\n        framework, with the connection of the Redux library.",
                'src/app/images/react/app_laptop1.jpg',
                'src/app/images/react/app_laptop2.jpg',
                'src/app/images/react/app_laptop3.jpg',
                'src/app/images/react/app_laptop4.jpg',
                'src/app/images/react/app_laptop5.jpg'
            ],
            [
                'Math-match-game.',
                'http://uladzimir-yeudakimovich.ml/match-match-game/',
                'play',
                "Game for the development of memory. It was written in HTML5, CSS3 and JavaScript.",
                'src/app/images/match/match_laptop1.jpg',
                'src/app/images/match/match_laptop2.jpg',
                'src/app/images/match/match_laptop3.jpg',
                'src/app/images/match/match_laptop4.jpg',
                'src/app/images/match/match_laptop5.jpg'
            ],
            [
                'The site of restaurant.',
                'http://uladzimir-yeudakimovich.ml/restaurant',
                'view site',
                'Online page of restaurant. It was written in HTML5 using CSS Grid Layout and CSS Flexbox.',
                'src/app/images/restaurant/restaurant_laptop1.jpg',
                'src/app/images/restaurant/restaurant_laptop2.jpg',
                'src/app/images/restaurant/restaurant_laptop3.jpg',
                'src/app/images/restaurant/restaurant_laptop4.jpg',
                'src/app/images/restaurant/restaurant_laptop5.jpg'
            ],
            [
                'Store site.',
                'http://uladzimir-yeudakimovich.ml/css-recipes-and-layouts/',
                'view site',
                "Online store page. It was written in HTML5 using CSS Grid Layout and CSS Flexbox.",
                'src/app/images/site/site_laptop1.jpg',
                'src/app/images/site/site_laptop2.jpg',
                'src/app/images/site/site_laptop3.jpg',
                'src/app/images/site/site_laptop4.jpg',
                'src/app/images/site/site_laptop5.jpg'
            ],
            [
                'Application for banks.',
                '',
                '',
                "The development language is JavaScript. It was written using the National Bank API. For constructing\n        graphs, we use canvas. Application for determining the exchange rate of different currencies and\n        plotting the dynamics of changes over a certain period of time.",
                'src/app/images/currency/currency_laptop1.jpg',
                'src/app/images/currency/currency_laptop2.jpg',
                'src/app/images/currency/currency_laptop3.jpg',
                'src/app/images/currency/currency_laptop4.jpg',
                'src/app/images/currency/currency_laptop5.jpg'
            ]
        ];
    }
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/main/main.component.scss")]
        })
    ], MainComponent);
    return MainComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/uladzimir/Рабочий стол/angular-task/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map