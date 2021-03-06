"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var movies_service_1 = require('../shared/movies.service');
var NavBarComponent = (function () {
    function NavBarComponent(moviesService) {
        this.moviesService = moviesService;
        this.searchTerm = "";
    }
    //return list of found sessions
    NavBarComponent.prototype.searchMovies = function (searchTerm) {
        // this.moviesService.searchMovies(searchTerm).subscribe(mov => {
        //     this.foundMovies = mov;
        // })
    };
    NavBarComponent = __decorate([
        core_1.Component({
            selector: 'navbar-component',
            templateUrl: 'app/navbar/navbar.component.html',
            styleUrls: ['app/navbar/navbar.component.css']
        }), 
        __metadata('design:paramtypes', [movies_service_1.MoviesService])
    ], NavBarComponent);
    return NavBarComponent;
}());
exports.NavBarComponent = NavBarComponent;
//# sourceMappingURL=navbar.component.js.map