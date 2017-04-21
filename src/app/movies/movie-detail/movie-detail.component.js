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
var movies_service_1 = require('../../shared/movies.service');
var join_service_1 = require('../../shared/join.service');
var router_1 = require('@angular/router');
var MovieDetailComponent = (function () {
    function MovieDetailComponent(moviesService, route, joinService) {
        var _this = this;
        this.moviesService = moviesService;
        this.route = route;
        this.joinService = joinService;
        this.res = {};
        joinService.getJoinedData().subscribe(function (data) { return _this.res = data; });
        console.log(this.res);
    }
    MovieDetailComponent.prototype.ngOnInit = function () {
        this.movie = this.moviesService.getSpecificMovie(this.route.snapshot.params['id']);
    };
    MovieDetailComponent = __decorate([
        core_1.Component({
            selector: 'movie-detail',
            templateUrl: 'app/movies/movie-detail/movie-detail.component.html',
            styleUrls: ['app/movies/movie-detail/movie-detail.component.css']
        }), 
        __metadata('design:paramtypes', [movies_service_1.MoviesService, router_1.ActivatedRoute, join_service_1.JoinService])
    ], MovieDetailComponent);
    return MovieDetailComponent;
}());
exports.MovieDetailComponent = MovieDetailComponent;
//# sourceMappingURL=movie-detail.component.js.map