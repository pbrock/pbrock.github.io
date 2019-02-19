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

module.exports = "<div class=\"wrapper\">\n  <div class=\"infoBar\">\n    <leaders class=\"component component--leader\" [team]=salesPeople></leaders>\n    <feed class=\"component component--feed\" [feed]=feed [overview]=overview></feed>\n  </div>\n  <members [members]=salesPeople class=\"component component--listing\"></members>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_team_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/team.json */ "./src/app/data/team.json");
var _data_team_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/team.json */ "./src/app/data/team.json", 1);



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'sales-team';
        this.data = _data_team_json__WEBPACK_IMPORTED_MODULE_2__;
        this.salesPeople = this.data.section.salespeople;
        this.feed = this.data.feed;
        this.overview = this.data.overview;
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _leaders_leaders_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./leaders/leaders.component */ "./src/app/leaders/leaders.component.ts");
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feed/feed.component */ "./src/app/feed/feed.component.ts");
/* harmony import */ var _listing_listing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listing/listing.component */ "./src/app/listing/listing.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _leaders_leaders_component__WEBPACK_IMPORTED_MODULE_4__["LeadersComponent"],
                _feed_feed_component__WEBPACK_IMPORTED_MODULE_5__["FeedComponent"],
                _listing_listing_component__WEBPACK_IMPORTED_MODULE_6__["ListingComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            exports: [],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data/team.json":
/*!********************************!*\
  !*** ./src/app/data/team.json ***!
  \********************************/
/*! exports provided: section, overview, feed, default */
/***/ (function(module) {

module.exports = {"section":{"salespeople":[{"name":"Abdullah Hadley","id":"1","sales":{"day":"4","week":"30","month":"122"},"image":"/men/4.jpg","bio":"Abdullah Hadley Bio"},{"name":"Renee Sims","id":"2","sales":{"day":"5","week":"20","month":"102"},"image":"/women/4.jpg","bio":"Renee Sims Bio"},{"name":"Carys Metz","id":"3","sales":{"day":"3","week":"30","month":"90"},"image":"/women/6.jpg","bio":"Carys Metz Bio"},{"name":"Eduard Franz","id":"4","sales":{"day":"4","week":"28","month":"89"},"image":"/men/6.jpg","bio":"Eduard Franz Bio"},{"name":"Alexis Doreau","id":"5","sales":{"day":"5","week":"19","month":"88"},"image":"/men/7.jpg","bio":"Alexis Doreau Bio"},{"name":"Mia Denys","id":"6","sales":{"day":"4","week":"28","month":"85"},"image":"/women/7.jpg","bio":"Mia Denys Bio"},{"name":"Lourdes Browning","id":"7","sales":{"day":"6","week":"20","month":"80"},"image":"/women/10.jpg","bio":"Lourdes Browning Bio"},{"name":"Zachary Albright","id":"8","sales":{"day":"4","week":"319","month":"79"},"image":"/men/8.jpg","bio":"Zachary Albright Bio"},{"name":"Tim Schoch","id":"9","sales":{"day":"4","week":"15","month":"78"},"image":"/men/9.jpg","bio":"Tim Schoch Bio"},{"name":"Oscar Thomsen","id":"10","sales":{"day":"4","week":"17","month":"75"},"image":"/men/10.jpg","bio":"Oscar Thomsen Bio"},{"name":"Vivianna Kiser","id":"11","sales":{"day":"2","week":"14","month":"70"},"image":"/women/11.jpg","bio":"Vivianna Kiser Bio"},{"name":"Elena Satine","id":"12","sales":{"day":"3","week":"12","month":"64"},"image":"/women/12.jpg","bio":"Elena Satine Bio"},{"name":"Elliot Nolten","id":"13","sales":{"day":"3","week":"15","month":"60"},"image":"/men/12.jpg","bio":"Elliot Nolten Bio"},{"name":"Daniela Dewitt","id":"14","sales":{"day":"3","week":"12","month":"58"},"image":"/women/13.jpg","bio":"Daniela Dewitt Bio"},{"name":"Chloe Sirko","id":"15","sales":{"day":"4","week":"16","month":"55"},"image":"/women/14.jpg","bio":"Chloe Sirko Bio"},{"name":"Kaine Hudson","id":"16","sales":{"day":"2","week":"12","month":"50"},"image":"/men/16.jpg","bio":"Kaine Hudson Bio"},{"name":"Stephane Moreau","id":"17","sales":{"day":"3","week":"12","month":"40"},"image":"/men/21.jpg","bio":"Stephane Moreau Bio"},{"name":"Kelly Williams","id":"18","sales":{"day":"1","week":"7","month":"35"},"image":"/men/29.jpg","bio":"Kelly Williams Bio"}]},"overview":{"deals":"345","value":"$100,345"},"feed":{"title":"Remember: Always be closing","body":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.","events":[{"name":"Zachary Albright","image":"/men/8.jpg","type":"made a sale"},{"name":"Kelly Williams","image":"/men/29.jpg","type":"added a new lead"},{"name":"Chloe Sirko","image":"/women/14.jpg","type":"added a new lead"},{"name":"Vivianna Kiser","image":"/women/18.jpg","type":"made a sale"},{"name":"Eduard Franz","image":"/men/6.jpg","type":"made a sale"},{"name":"Zachary Albright","image":"/men/8.jpg","type":"added a new lead"}]}};

/***/ }),

/***/ "./src/app/feed/feed.component.html":
/*!******************************************!*\
  !*** ./src/app/feed/feed.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"feed\">\n  <div class=\"feed--title\">\n    <h3>Sales Feed</h3>\n  </div>\n  <div class=\"feed--item\">\n    <div class=\"feed--event\">\n        <div class=\"feed--image\">\n            <img src=\"https://randomuser.me/api/portraits{{this.image}}\">\n        </div>\n        <div class=\"feed--text\">\n            <h6>{{this.name}}</h6>{{this.type}}\n        </div>\n    </div>\n    <div class=\"feed--intro\">\n      <span>{{this.feed.title}}</span>\n      {{this.feed.body}}\n    </div>\n  </div>\n  <div class=\"overview\">\n      <div class=\"overview--deals\">\n        <h6>{{this.overview.deals}}</h6>\n        Deals\n      </div>\n      <div class=\"overview--value\">\n        <h6>{{this.overview.value}}</h6>\n        Current value\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/feed/feed.component.scss":
/*!******************************************!*\
  !*** ./src/app/feed/feed.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".feed {\n  background-color: rgba(255, 255, 255, 0.5);\n  border: 1px solid rgba(6, 84, 33, 0.5);\n  box-shadow: 2px 2px 3px rgba(6, 84, 33, 0.25);\n  padding: 3% 2%;\n  box-sizing: border-box;\n  min-height: 50vh;\n  color: #459261; }\n  .feed--title h3 {\n    color: #065421;\n    font-size: 2.5rem; }\n  .feed--intro {\n    text-align: center;\n    font-size: .8rem; }\n  .feed--intro span {\n    display: block;\n    font-weight: 800; }\n  .feed--image {\n    text-align: center; }\n  .feed--image img {\n    border-radius: 50%;\n    border: 1px solid #459261; }\n  .feed--text {\n    text-align: center;\n    padding: 10px;\n    font-size: 1.2rem;\n    color: #065421; }\n  .overview {\n  display: flex; }\n  .overview--deals, .overview--value {\n    text-align: center;\n    padding: 10px 0;\n    flex-basis: 50%; }\n  @media (max-width: 1024px) {\n  .feed {\n    min-height: 45vh; }\n    .feed--intro {\n      display: none; }\n    .feed--image img {\n      width: 70%; }\n    .feed--text {\n      font-size: .9rem; }\n    .feed--text h6, .feed--title h3 {\n      font-size: 1.2rem; }\n  .overview--deals h6, .overview--value h6 {\n    font-size: 1.1rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXRyaWNrYnJvY2svRG9jdW1lbnRzL2NvZGVfc2FtcGxlL3NhbGVzLXRlYW0vc2FsZXMtdGVhbS9zcmMvYXBwL2ZlZWQvZmVlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBDQUF3QztFQUN4QyxzQ0FBb0M7RUFDcEMsNkNBQTBDO0VBQzFDLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTtFQUtkO0lBQ0ksY0FBYztJQUNkLGlCQUFpQixFQUFBO0VBR3JCO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQixFQUFBO0VBR3BCO0lBQ0ksY0FBYTtJQUNiLGdCQUFnQixFQUFBO0VBR3BCO0lBQ0ksa0JBQWtCLEVBQUE7RUFHdEI7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCLEVBQUE7RUFHN0I7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixjQUFjLEVBQUE7RUFHdEI7RUFDSSxhQUFhLEVBQUE7RUFFYjtJQUNJLGtCQUFrQjtJQUNsQixlQUFjO0lBQ2QsZUFBZSxFQUFBO0VBS3ZCO0VBQ0k7SUFDSSxnQkFBZ0IsRUFBQTtJQUNoQjtNQUNJLGFBQWEsRUFBQTtJQUdqQjtNQUNJLFVBQVUsRUFBQTtJQUdkO01BQ0ksZ0JBQWdCLEVBQUE7SUFHcEI7TUFDSSxpQkFBaUIsRUFBQTtFQUtyQjtJQUNJLGlCQUFpQixFQUFBLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZmVlZC9mZWVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZlZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsIC41MCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg2LDg0LDMzLCAuNTApO1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggM3B4IHJnYmEoNiw4NCwzMywgLjI1KTtcbiAgICBwYWRkaW5nOiAzJSAyJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1pbi1oZWlnaHQ6IDUwdmg7XG4gICAgY29sb3I6ICM0NTkyNjE7XG5cbiAgICAmLS1pdGVtIHtcbiAgICAgICAgXG4gICAgfVxuICAgICYtLXRpdGxlIGgze1xuICAgICAgICBjb2xvcjogIzA2NTQyMTtcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgfVxuXG4gICAgJi0taW50cm8ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgfVxuICAgIFxuICAgICYtLWludHJvIHNwYW57XG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgfVxuXG4gICAgJi0taW1hZ2Uge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgJi0taW1hZ2UgaW1ne1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0NTkyNjE7XG4gICAgfVxuXG4gICAgJi0tdGV4dCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIGNvbG9yOiAjMDY1NDIxO1xuICAgIH1cbn1cbi5vdmVydmlldyB7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgICYtLWRlYWxzLCAmLS12YWx1ZSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzoxMHB4IDA7XG4gICAgICAgIGZsZXgtYmFzaXM6IDUwJTtcbiAgICB9XG5cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIC5mZWVkIHtcbiAgICAgICAgbWluLWhlaWdodDogNDV2aDtcbiAgICAgICAgJi0taW50cm8ge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtLWltYWdlIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICB9XG5cbiAgICAgICAgJi0tdGV4dCB7XG4gICAgICAgICAgICBmb250LXNpemU6IC45cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgJi0tdGV4dCBoNiwgJi0tdGl0bGUgaDN7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5vdmVydmlldyB7XG4gICAgICAgICYtLWRlYWxzIGg2LCAmLS12YWx1ZSBoNiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/feed/feed.component.ts":
/*!****************************************!*\
  !*** ./src/app/feed/feed.component.ts ***!
  \****************************************/
/*! exports provided: FeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedComponent", function() { return FeedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var FeedComponent = /** @class */ (function () {
    function FeedComponent() {
    }
    FeedComponent.prototype.ngOnInit = function () {
        this.events = this.feed.events;
        this.name = this.events[0].name;
        this.image = this.events[0].image;
        this.type = this.events[0].type;
        this.startTimer();
    };
    FeedComponent.prototype.startTimer = function () {
        var _this = this;
        var feedTimer = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(10000, 10000).subscribe(function (val) {
            for (var i = 0; i < _this.events.length; i++) {
                if (val > _this.events.length) {
                    return;
                }
                if (val === i) {
                    _this.showEvent(_this.events[i]);
                    return;
                }
            }
            feedTimer.unsubscribe;
            _this.startTimer();
        });
    };
    FeedComponent.prototype.showEvent = function (event) {
        this.name = event.name;
        this.type = event.type;
        this.image = event.image;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FeedComponent.prototype, "feed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FeedComponent.prototype, "overview", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], FeedComponent.prototype, "events", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FeedComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FeedComponent.prototype, "image", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FeedComponent.prototype, "type", void 0);
    FeedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'feed',
            template: __webpack_require__(/*! ./feed.component.html */ "./src/app/feed/feed.component.html"),
            styles: [__webpack_require__(/*! ./feed.component.scss */ "./src/app/feed/feed.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FeedComponent);
    return FeedComponent;
}());



/***/ }),

/***/ "./src/app/leaders/leaders.component.html":
/*!************************************************!*\
  !*** ./src/app/leaders/leaders.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"salesLeaders\">\n  <h2 class=\"leaders--title\">Sales leaders for this month</h2>\n  <ul class=\"leaders\">\n    <li class=\"leader\" *ngFor=\"let leader of this.leaders\">\n      <div class=\"leader--inner\">\n        <div class=\"leader-name heading-5\">{{leader.name}}</div>\n        <div class=\"leader-image\">\n          <img src=\"https://randomuser.me/api/portraits{{leader.image}}\" alt=\"Photo of {{leader.name}}\" />\n        </div>\n        <div class=\"leader-deals heading-sm\">{{leader.sales.month}} closed deals</div>\n        <div class=\"leader-bio\">\n          <div class=\"leader-bioLink\">\n              <a href=\"#\">View Profile</a>\n          </div>\n          <div class=\"leader-bioText\">\n            <p>{{leader.bio}}</p>\n          </div>\n        </div>\n        <div class=\"leader-message\">\n          <a href=\"#\">Message</a>\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>\n\n"

/***/ }),

/***/ "./src/app/leaders/leaders.component.scss":
/*!************************************************!*\
  !*** ./src/app/leaders/leaders.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".salesLeaders {\n  flex: 1 75%;\n  margin-left: 3%; }\n\n.leaders {\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.leaders--title {\n    color: #065421; }\n\n.leader {\n  text-align: center;\n  color: #459261;\n  width: 25vw;\n  margin: 0 3%; }\n\n.leader:first-child {\n    margin: 0 3% 0 0; }\n\n.leader a {\n    color: #459261; }\n\n.leader-name {\n    box-sizing: border-box;\n    flex-basis: 60%;\n    align-self: center;\n    text-align: right; }\n\n.leader-image {\n    box-sizing: border-box;\n    padding: 5px;\n    flex-basis: 40%;\n    align-self: center; }\n\n.leader-image img {\n      width: 80%;\n      border-radius: 50%;\n      border: 1px solid #459261; }\n\n.leader-deals {\n    flex: 1 100%;\n    padding: 5px 0 15px; }\n\n.leader-bio, .leader-message {\n    flex: 1 100%; }\n\n.leader-bioLink, .leader-bioText, .leader-message {\n    padding-bottom: 3px;\n    font-size: .9rem; }\n\n.leader-bioText {\n    padding-top: 1px; }\n\n.leader--inner {\n    display: flex;\n    flex-flow: row wrap;\n    min-height: 45vh;\n    background-color: rgba(255, 255, 255, 0.5);\n    border: 1px solid rgba(6, 84, 33, 0.5);\n    box-shadow: 2px 2px 3px rgba(6, 84, 33, 0.25);\n    padding: 3% 2%;\n    margin: 25px 0 0;\n    box-sizing: border-box; }\n\n@media (max-width: 1024px) {\n  .leaders {\n    align-items: flex-end; }\n  .leader--inner {\n    min-height: 55vh; }\n  .leader-name, .leader-image {\n    flex-basis: 100%;\n    text-align: center; }\n  .leader-image img {\n    width: 45%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXRyaWNrYnJvY2svRG9jdW1lbnRzL2NvZGVfc2FtcGxlL3NhbGVzLXRlYW0vc2FsZXMtdGVhbS9zcmMvYXBwL2xlYWRlcnMvbGVhZGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUIsRUFBQTs7QUFFdkI7SUFDSSxjQUFjLEVBQUE7O0FBSXRCO0VBQ0ksa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUpoQjtJQU9RLGdCQUFnQixFQUFBOztBQVB4QjtJQVdRLGNBQWMsRUFBQTs7QUFHbEI7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUIsRUFBQTs7QUFHckI7SUFDSSxzQkFBc0I7SUFDdEIsWUFBVztJQUNYLGVBQWU7SUFDZixrQkFBa0IsRUFBQTs7QUFKckI7TUFNTyxVQUFVO01BQ1Ysa0JBQWtCO01BQ2xCLHlCQUF5QixFQUFBOztBQUlqQztJQUNJLFlBQVc7SUFDWCxtQkFBa0IsRUFBQTs7QUFHdEI7SUFDSSxZQUFZLEVBQUE7O0FBR2hCO0lBQ0ksbUJBQWtCO0lBQ2xCLGdCQUFnQixFQUFBOztBQUdwQjtJQUNJLGdCQUFlLEVBQUE7O0FBR25CO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsMENBQXdDO0lBQ3hDLHNDQUFvQztJQUNwQyw2Q0FBMEM7SUFDMUMsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixzQkFBc0IsRUFBQTs7QUFLOUI7RUFDSTtJQUNJLHFCQUFxQixFQUFBO0VBR3JCO0lBQ0ksZ0JBQWdCLEVBQUE7RUFHcEI7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCLEVBQUE7RUFHdEI7SUFDSSxVQUFVLEVBQUEsRUFDYiIsImZpbGUiOiJzcmMvYXBwL2xlYWRlcnMvbGVhZGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zYWxlc0xlYWRlcnMge1xuICAgIGZsZXg6IDEgNzUlO1xuICAgIG1hcmdpbi1sZWZ0OiAzJTtcbn1cbi5sZWFkZXJzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAmLS10aXRsZSB7XG4gICAgICAgIGNvbG9yOiAjMDY1NDIxO1xuICAgIH1cblxufVxuLmxlYWRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjNDU5MjYxO1xuICAgIHdpZHRoOiAyNXZ3O1xuICAgIG1hcmdpbjogMCAzJTtcblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW46IDAgMyUgMCAwO1xuICAgIH1cblxuICAgICYgYSB7XG4gICAgICAgIGNvbG9yOiAjNDU5MjYxO1xuICAgIH1cblxuICAgICYtbmFtZSB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGZsZXgtYmFzaXM6IDYwJTtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG5cbiAgICAmLWltYWdlIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgcGFkZGluZzo1cHg7XG4gICAgICAgIGZsZXgtYmFzaXM6IDQwJTtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAmIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzQ1OTI2MTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtZGVhbHMge1xuICAgICAgICBmbGV4OjEgMTAwJTtcbiAgICAgICAgcGFkZGluZzo1cHggMCAxNXB4O1xuICAgIH1cblxuICAgICYtYmlvLCAmLW1lc3NhZ2Uge1xuICAgICAgICBmbGV4OiAxIDEwMCU7XG4gICAgfVxuXG4gICAgJi1iaW9MaW5rLCAmLWJpb1RleHQsICYtbWVzc2FnZSB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOjNweDtcbiAgICAgICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICB9XG5cbiAgICAmLWJpb1RleHQge1xuICAgICAgICBwYWRkaW5nLXRvcDoxcHg7XG4gICAgfVxuXG4gICAgJi0taW5uZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgICAgICBtaW4taGVpZ2h0OiA0NXZoO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LCAuNTApO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDYsODQsMzMsIC41MCk7XG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggM3B4IHJnYmEoNiw4NCwzMywgLjI1KTtcbiAgICAgICAgcGFkZGluZzogMyUgMiU7XG4gICAgICAgIG1hcmdpbjogMjVweCAwIDA7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxuXG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAubGVhZGVycyB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICB9XG4gICAgLmxlYWRlciB7XG4gICAgICAgICYtLWlubmVye1xuICAgICAgICAgICAgbWluLWhlaWdodDogNTV2aDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgJi1uYW1lLCAmLWltYWdlIHtcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAmLWltYWdlIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogNDUlO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/leaders/leaders.component.ts":
/*!**********************************************!*\
  !*** ./src/app/leaders/leaders.component.ts ***!
  \**********************************************/
/*! exports provided: LeadersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadersComponent", function() { return LeadersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LeadersComponent = /** @class */ (function () {
    function LeadersComponent() {
        this.leaders = [];
    }
    LeadersComponent.prototype.ngOnInit = function () {
        this.leaders = this.findLeaders(this.team);
    };
    LeadersComponent.prototype.findLeaders = function (teamMembers) {
        var upperBound = 0;
        var lowerBound = 0;
        var currentLeaders = [{}, {}, {}];
        for (var i = 0; i < teamMembers.length; i++) {
            var sales = parseInt(teamMembers[i].sales.month);
            var member = teamMembers[i];
            if (sales >= upperBound) {
                currentLeaders.unshift(member);
                currentLeaders.splice(-1, 1);
                upperBound = sales;
            }
            else if (sales >= lowerBound && lowerBound === 0) {
                currentLeaders.splice(1, 2);
                currentLeaders.push(member);
                lowerBound = sales;
            }
            else if (currentLeaders.length < 3) {
                currentLeaders.push(member);
                lowerBound = sales;
            }
            else if (sales >= lowerBound && currentLeaders.length === 3) {
                currentLeaders.push(member);
                currentLeaders.splice(-1, 1);
                upperBound = sales;
            }
        }
        return currentLeaders;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LeadersComponent.prototype, "team", void 0);
    LeadersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'leaders',
            template: __webpack_require__(/*! ./leaders.component.html */ "./src/app/leaders/leaders.component.html"),
            styles: [__webpack_require__(/*! ./leaders.component.scss */ "./src/app/leaders/leaders.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LeadersComponent);
    return LeadersComponent;
}());



/***/ }),

/***/ "./src/app/listing/listing.component.html":
/*!************************************************!*\
  !*** ./src/app/listing/listing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"listings--headline\">The Sales Team</h2>\n<div class=\"listing\" *ngFor=\"let member of this.members\">\n  <div class=\"listing--image\">\n      <img src=\"https://randomuser.me/api/portraits{{member.image}}\" alt=\"Photo of {{member.name}}\" />\n  </div>\n  <div class=\"listing--name heading-6\">{{member.name}}</div>\n  <div class=\"listing--sales\">{{member.sales.month}} closed deals</div>\n  <div class=\"listing--profile\">\n    <div class=\"listing--profileLink\">\n      <a href=\"#\">View Profile</a>\n    </div>\n    <div class=\"listing--profileText\"></div>\n  </div>\n  <div class=\"listing--message\">\n    <a href=\"#\">Message</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/listing/listing.component.scss":
/*!************************************************!*\
  !*** ./src/app/listing/listing.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".listings--headline {\n  color: #065421;\n  padding: 0 0 20px; }\n\n.listing {\n  display: flex;\n  flex-wrap: wrap;\n  flex: 1 18%;\n  margin: 0 1% 3%;\n  text-align: center;\n  color: #459261; }\n\n.listing a {\n    color: #459261; }\n\n.listing > div {\n    flex: 1 100%; }\n\n.listing > div.listing--profile, .listing > div.listing--message {\n    flex: 1 50%;\n    box-sizing: border-box;\n    padding: 0 5px; }\n\n.listing--sales {\n    margin-bottom: 10px; }\n\n.listing--image img {\n    border-radius: 50%;\n    border: 1px solid #459261;\n    margin-bottom: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXRyaWNrYnJvY2svRG9jdW1lbnRzL2NvZGVfc2FtcGxlL3NhbGVzLXRlYW0vc2FsZXMtdGVhbS9zcmMvYXBwL2xpc3RpbmcvbGlzdGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFHekI7RUFDSSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTs7QUFObEI7SUFTUSxjQUFjLEVBQUE7O0FBVHRCO0lBYVEsWUFBWSxFQUFBOztBQWJwQjtJQWlCUSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGNBQWEsRUFBQTs7QUFHakI7SUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGlzdGluZy9saXN0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3RpbmdzIHtcbiAgICAmLS1oZWFkbGluZSB7XG4gICAgICAgIGNvbG9yOiAjMDY1NDIxO1xuICAgICAgICBwYWRkaW5nOiAwIDAgMjBweDtcbiAgICB9XG59XG4ubGlzdGluZ3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4OiAxIDE4JTtcbiAgICBtYXJnaW46IDAgMSUgMyU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjNDU5MjYxO1xuXG4gICAgJiBhIHtcbiAgICAgICAgY29sb3I6ICM0NTkyNjE7XG4gICAgfVxuXG4gICAgJj4gZGl2IHtcbiAgICAgICAgZmxleDogMSAxMDAlO1xuICAgIH1cblxuICAgICY+IGRpdi5saXN0aW5nLS1wcm9maWxlLCAmPiBkaXYubGlzdGluZy0tbWVzc2FnZSB7XG4gICAgICAgIGZsZXg6IDEgNTAlO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBwYWRkaW5nOjAgNXB4O1xuICAgIH1cblxuICAgICYtLXNhbGVzIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG5cbiAgICAmLS1pbWFnZSBpbWcge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0NTkyNjE7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG5cbiAgICBcblxufSJdfQ== */"

/***/ }),

/***/ "./src/app/listing/listing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/listing/listing.component.ts ***!
  \**********************************************/
/*! exports provided: ListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingComponent", function() { return ListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListingComponent = /** @class */ (function () {
    function ListingComponent() {
    }
    ListingComponent.prototype.ngOnInit = function () {
        console.log(this.members);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListingComponent.prototype, "members", void 0);
    ListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'members',
            template: __webpack_require__(/*! ./listing.component.html */ "./src/app/listing/listing.component.html"),
            styles: [__webpack_require__(/*! ./listing.component.scss */ "./src/app/listing/listing.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListingComponent);
    return ListingComponent;
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
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/patrickbrock/Documents/code_sample/sales-team/sales-team/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map