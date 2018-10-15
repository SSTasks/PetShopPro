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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n    <app-petshop></app-petshop>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding: 0 15px;\n  margin: 0 auto;\n  max-width: 1200px;\n}\n"

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
        this.title = 'AdvancedPetShop';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material */ "./src/app/material.ts");
/* harmony import */ var _petshop_petshop_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./petshop/petshop.component */ "./src/app/petshop/petshop.component.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _pipes_info_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/info.pipe */ "./src/app/pipes/info.pipe.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _petshop_petshop_component__WEBPACK_IMPORTED_MODULE_7__["PetshopComponent"],
                _pipes_info_pipe__WEBPACK_IMPORTED_MODULE_9__["InfoPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _material__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [_services_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/material.ts":
/*!*****************************!*\
  !*** ./src/app/material.ts ***!
  \*****************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"]
            ],
            exports: [
                _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"]
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/petshop/petshop.component.html":
/*!************************************************!*\
  !*** ./src/app/petshop/petshop.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <div class=\"logo\"></div>\n</header>\n\n<article>\n    <aside>\n        <ul>\n            <li><input class=\"add add-dog\" type=\"button\" (click)=\"showForm('dog')\"></li>\n            <li><input class=\"add add-cat\" type=\"button\" (click)=\"showForm('cat')\"></li>\n            <li><input class=\"add add-hamster\" type=\"button\" (click)=\"showForm('hamster')\"></li>\n        </ul>\n\n        <div *ngIf=\"showFormAddPet\" class=\"form-add-pet\">\n            <h3>Add {{typeOfPet}}</h3>\n\n            <form [formGroup]=\"formAddPet\">\n                <mat-form-field *ngIf=\"typeOfPet !== 'hamster'\">\n                    <input matInput type=\"text\" placeholder=\"Name\" formControlName=\"name\" minlength=\"3\">\n                    <mat-error>Min name length: 3</mat-error>\n                </mat-form-field>\n\n                <mat-form-field>\n                    <input matInput type=\"number\" placeholder=\"Price\" formControlName=\"price\" min=\"1\">\n                    <mat-error>Min price: $10</mat-error>\n                </mat-form-field>\n\n                <mat-form-field>\n                    <input matInput type=\"color\" placeholder=\"Color\" formControlName=\"color\">\n                </mat-form-field>\n\n                <mat-slider *ngIf=\"typeOfPet !== 'dog'\" formControlName=\"fluffy\"\n                    thumbLabel\n                    color=\"primary\"\n                    [displayWith]=\"levelOfFluffy\"\n                    tickInterval=\"1\"\n                    min=\"1\"\n                    max=\"3\">\n                </mat-slider>\n\n\n                <button class=\"add-pet\" mat-flat-button color=\"primary\" [disabled]=\"!formAddPet.valid\" (click)=\"addPet()\">Add</button>\n            </form>\n        </div>\n    </aside>\n\n    <!--lists from pets collection-->\n    <section class=\"pet-shop-view\">\n        <div>\n            <h3>Cats</h3>\n            <mat-nav-list>\n                <mat-list-item *ngFor=\"let pet of cats\">\n                    <a matLine>{{ pet | info }}</a>\n                    <button mat-icon-button color=\"primary\" (click)=\"delPet(pet._id)\">\n                        <mat-icon>delete_forever</mat-icon>\n                    </button>\n                </mat-list-item>\n            </mat-nav-list>\n        </div>\n\n        <div>\n            <h3>High cost</h3>\n            <mat-nav-list>\n                <mat-list-item *ngFor=\"let pet of expensive\">\n                    <a matLine>{{ pet | info }}</a>\n                    <button mat-icon-button color=\"primary\" (click)=\"delPet(pet._id)\">\n                        <mat-icon>delete_forever</mat-icon>\n                    </button>\n                </mat-list-item>\n            </mat-nav-list>\n        </div>\n\n        <div>\n            <h3>Fluffy and white</h3>\n            <mat-nav-list>\n                <mat-list-item *ngFor=\"let pet of fluffyOrWhite\">\n                    <a matLine>{{ pet | info }}</a>\n                    <button mat-icon-button color=\"primary\" (click)=\"delPet(pet._id)\">\n                        <mat-icon>delete_forever</mat-icon>\n                    </button>\n                </mat-list-item>\n            </mat-nav-list>\n        </div>\n    </section>\n\n</article>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"active-img\"></div>\n<div class=\"active-img\"></div>\n<div class=\"active-img\"></div>\n"

/***/ }),

/***/ "./src/app/petshop/petshop.component.less":
/*!************************************************!*\
  !*** ./src/app/petshop/petshop.component.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  margin: 10px 0 40px 0;\n  padding: 5px 0;\n  border-bottom: 2px solid white;\n}\nheader .logo {\n  width: 330px;\n  height: 100px;\n  background: url('logo.png') no-repeat top center scroll;\n  background-size: cover;\n}\naside {\n  width: 30%;\n  margin: 0;\n  float: left;\n  position: relative;\n}\naside ul {\n  margin: 0 auto;\n  list-style-type: none;\n}\naside ul li:after {\n  margin: 20px 0;\n  content: \".\";\n  display: block;\n  height: 0;\n  clear: both;\n  visibility: hidden;\n}\naside ul .add {\n  width: 100px;\n  height: 100px;\n  border: none;\n  outline: inherit;\n  float: left;\n}\naside ul .add:hover {\n  cursor: pointer;\n}\naside ul .add-cat {\n  background: url('cat_default2.png') no-repeat top center scroll;\n  background-size: cover;\n}\naside ul .add-cat:active {\n  background: url('cat_active2.png') no-repeat top center scroll;\n  background-size: cover;\n}\naside ul .add-dog {\n  background: url('dog_default.png') no-repeat top center scroll;\n  background-size: cover;\n}\naside ul .add-dog:active {\n  background: url('dog_active.png') no-repeat top center scroll;\n  background-size: cover;\n}\naside ul .add-hamster {\n  background: url('hamster_default.png') no-repeat top center scroll;\n  background-size: cover;\n}\naside ul .add-hamster:active {\n  background: url('hamster_active.png') no-repeat top center scroll;\n  background-size: cover;\n}\naside .form-add-pet {\n  width: 47%;\n  margin: 50px 5px;\n  padding: 5px;\n  border-radius: 5px;\n  box-shadow: 1px 1px 10px 0.1px black;\n  background-color: rgba(255, 255, 255, 0.4);\n  position: absolute;\n  top: 0;\n  left: 45%;\n}\naside .form-add-pet h3 {\n  text-align: center;\n  font-size: 20px;\n  margin: 5px;\n  padding: 5px;\n  color: #3f51b5;\n}\naside .form-add-pet form {\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  border-radius: 5px;\n  background-color: white;\n}\naside .form-add-pet form .add-pet {\n  margin: 2px;\n  padding: 5px;\n  min-width: 45%;\n  line-height: 24px;\n  border-radius: 5px;\n}\n.pet-shop-view {\n  width: 65%;\n  float: left;\n}\n.pet-shop-view div {\n  width: 31%;\n  padding: 5px;\n  border-radius: 5px;\n  float: left;\n  margin: 50px 2px;\n  box-shadow: 1px 1px 10px 0.1px black;\n  background-color: rgba(255, 255, 255, 0.4);\n}\n.pet-shop-view div:nth-of-type(2) {\n  margin-top: 0;\n}\n.pet-shop-view div:nth-of-type(3) {\n  margin-top: 100px;\n}\n.pet-shop-view div h3 {\n  text-align: center;\n  font-size: 20px;\n  margin: 5px;\n  padding: 5px;\n  color: #3f51b5;\n}\n.pet-shop-view div .mat-nav-list {\n  padding: 0;\n  border-radius: 5px;\n  background-color: white;\n}\n.pet-shop-view div .mat-nav-list .mat-list-item {\n  border-bottom: 1px solid #e4e4e4;\n}\n.active-img {\n  width: 1px;\n  height: 1px;\n  opacity: 1;\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.active-img:nth-of-type(1) {\n  background: url('dog_active.png') no-repeat top center scroll;\n  background-size: cover;\n}\n.active-img:nth-of-type(2) {\n  background: url('cat_active2.png') no-repeat top center scroll;\n  background-size: cover;\n}\n.active-img:nth-of-type(3) {\n  background: url('hamster_active.png') no-repeat top center scroll;\n  background-size: cover;\n}\n/*my mixings*/\n.after {\n  content: \".\";\n  display: block;\n  height: 0;\n  clear: both;\n  visibility: hidden;\n}\n"

/***/ }),

/***/ "./src/app/petshop/petshop.component.ts":
/*!**********************************************!*\
  !*** ./src/app/petshop/petshop.component.ts ***!
  \**********************************************/
/*! exports provided: PetshopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetshopComponent", function() { return PetshopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/http.service */ "./src/app/services/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PetshopComponent = /** @class */ (function () {
    function PetshopComponent(fb, service) {
        this.fb = fb;
        this.service = service;
    }
    PetshopComponent.prototype.ngOnInit = function () {
        this.getPets();
    };
    // show or hide form for adding pets
    PetshopComponent.prototype.showForm = function (type) {
        this.typeOfPet = type;
        this.createFormAddPet();
        this.showFormAddPet = !this.showFormAddPet;
    };
    // get array of pets with HTTP from JSON
    PetshopComponent.prototype.getPets = function () {
        var _this = this;
        this.service.getPets()
            .subscribe(function (data) {
            if (data.length) {
                _this.pets = data;
                _this.renderPetsCategory();
            }
        });
    };
    // create form for adding any pet
    PetshopComponent.prototype.createFormAddPet = function () {
        if (this.typeOfPet === 'hamster') {
            this.formAddPet = this.fb.group({
                price: ['', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(10)
                    ]],
                color: '#555555',
                fluffy: ''
            });
        }
        else {
            this.formAddPet = this.fb.group({
                name: ['', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)
                    ]],
                price: ['', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(10)
                    ]],
                color: '#555555',
                fluffy: ''
            });
        }
    };
    // get value from fluffy select
    PetshopComponent.prototype.levelOfFluffy = function (value) {
        var level = '';
        if (value === 1) {
            level = 'bald';
        }
        if (value === 2) {
            level = 'hairy';
        }
        if (value === 3) {
            level = 'fluffy';
        }
        return level;
    };
    // create category with any type of pets
    PetshopComponent.prototype.renderPetsCategory = function () {
        // get array with cats
        this.cats = getArrayOfCats(this.pets);
        // get array of pets with a price above the average
        this.expensive = getArrayExpensiveAnimals(this.pets);
        // get array of white or fluffy pets
        this.fluffyOrWhite = getArrayFluffyOrWhiteAnimals(this.pets);
    };
    // add new pet
    PetshopComponent.prototype.addPet = function () {
        var _this = this;
        this.service.addPet(this.formAddPet.value, this.typeOfPet)
            .subscribe(function (data) {
            _this.pets = data;
            _this.showFormAddPet = !_this.showFormAddPet;
            _this.renderPetsCategory();
        });
    };
    // delete the pet
    PetshopComponent.prototype.delPet = function (id) {
        var _this = this;
        this.service.delPet(id)
            .subscribe(function (data) {
            _this.pets = data;
            _this.renderPetsCategory();
        });
        this.renderPetsCategory();
    };
    PetshopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-petshop',
            template: __webpack_require__(/*! ./petshop.component.html */ "./src/app/petshop/petshop.component.html"),
            styles: [__webpack_require__(/*! ./petshop.component.less */ "./src/app/petshop/petshop.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], PetshopComponent);
    return PetshopComponent;
}());

// choose only cats
function getArrayOfCats(animals) {
    var cats = animals.filter(function (animal) { return (animal.type === 'Cat'); });
    return cats;
}
// choose animals with a price above the average
function getArrayExpensiveAnimals(animals) {
    var average = getAveragePrice(animals);
    var expensive = animals.filter(function (animal) { return parseInt(animal.price) >= average; });
    return expensive;
}
// get average price all of the animals
function getAveragePrice(animals) {
    // get the price each of the animal
    var arrayOfPrice = animals.map(function (animal) { return animal.price; });
    // calculate the average price
    var average = arrayOfPrice.reduce(function (current, next) { return parseInt(current) + parseInt(next); }) / arrayOfPrice.length;
    return average;
}
// choose white or fluffy animals
function getArrayFluffyOrWhiteAnimals(animals) {
    var fluffyOrWhite = animals.filter(function (animal) { return (animal.color === '#ffffff') || animal.fluffy; });
    return fluffyOrWhite;
}
// // add new pet
// function addPet(pets, pet, type) {
//     if (type === 'dog') {
//         let name = pet.name,
//             price = pet.price,
//             color = pet.color;
//
//         pets.push(new Dog(name, price, color));
//     }
//
//     if (type === 'cat') {
//         let name = pet.name,
//             price = pet.price,
//             color = pet.color,
//             fluffy = pet.fluffy === 3;
//
//         pets.push(new Cat(name, price, color, fluffy));
//     }
//
//     if (type === 'hamster') {
//         let price = pet.price,
//             color = pet.color,
//             fluffy = pet.fluffy === 'fluffy';
//
//         pets.push(new Hamster(price, color, fluffy));
//     }
// }
// delete the pet
function delPet(pets, id) {
    // define index of the pet
    var removeIndex = pets.map(function (pet) { return pet._id; }).indexOf(id);
    pets.splice(removeIndex, 1);
}


/***/ }),

/***/ "./src/app/pipes/info.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/info.pipe.ts ***!
  \************************************/
/*! exports provided: InfoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPipe", function() { return InfoPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InfoPipe = /** @class */ (function () {
    function InfoPipe() {
    }
    InfoPipe.prototype.transform = function (value, args) {
        var name = value.name ? value.name : 'Just hamster', price = "$" + value.price;
        return name + " - " + price;
    };
    InfoPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'info'
        })
    ], InfoPipe);
    return InfoPipe;
}());



/***/ }),

/***/ "./src/app/services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _pets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pets */ "./src/app/services/pets.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    // http get any pet
    HttpService.prototype.getPets = function () {
        return this.http.get('/pets')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (pets) { return console.log(pets); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getPets', [])));
    };
    // http add new pet
    HttpService.prototype.addPet = function (pet, type) {
        var newPet = createPet(pet, type); // create new pet
        return this.http.post("/pets", newPet)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (pets) { return console.log(pets); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getPets', [])));
    };
    // http add new pet
    HttpService.prototype.delPet = function (id) {
        return this.http.delete("/pets/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (pets) { return console.log(pets); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getPets', [])));
    };
    HttpService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.log(operation + " failed: " + error.message); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());

// create new pet
function createPet(pet, type) {
    if (type === 'dog') {
        var name_1 = pet.name, price = pet.price, color = pet.color;
        return new _pets__WEBPACK_IMPORTED_MODULE_4__["Dog"](name_1, price, color);
    }
    if (type === 'cat') {
        var name_2 = pet.name, price = pet.price, color = pet.color, fluffy = pet.fluffy === 3;
        return new _pets__WEBPACK_IMPORTED_MODULE_4__["Cat"](name_2, price, color, fluffy);
    }
    if (type === 'hamster') {
        var price = pet.price, color = pet.color, fluffy = pet.fluffy === 3;
        return new _pets__WEBPACK_IMPORTED_MODULE_4__["Hamster"](price, color, fluffy);
    }
}


/***/ }),

/***/ "./src/app/services/pets.ts":
/*!**********************************!*\
  !*** ./src/app/services/pets.ts ***!
  \**********************************/
/*! exports provided: Pet, Dog, Cat, Hamster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pet", function() { return Pet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dog", function() { return Dog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cat", function() { return Cat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hamster", function() { return Hamster; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// pet classes
var Pet = /** @class */ (function () {
    function Pet(price, color) {
        this.type = '';
        this.price = price;
        this.color = color;
    }
    return Pet;
}());

var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, price, color) {
        var _this = _super.call(this, price, color) || this;
        _this.type = 'Dog';
        _this.name = name;
        return _this;
    }
    return Dog;
}(Pet));

var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, price, color, fluffy) {
        var _this = _super.call(this, price, color) || this;
        _this.type = 'Cat';
        _this.name = name;
        _this.fluffy = fluffy;
        return _this;
    }
    return Cat;
}(Pet));

var Hamster = /** @class */ (function (_super) {
    __extends(Hamster, _super);
    function Hamster(price, color, fluffy) {
        var _this = _super.call(this, price, color) || this;
        _this.type = 'Hamster';
        _this.fluffy = fluffy;
        return _this;
    }
    return Hamster;
}(Pet));



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

module.exports = __webpack_require__(/*! D:\Web\SoftServe\PetShops\PetShopPro\app-client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map