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
var actors_service_1 = require('../shared/actors.service');
var ActorsComponent = (function () {
    function ActorsComponent(actorsService) {
        this.actorsService = actorsService;
        this.data = actorsService.getAllActors();
    }
    ActorsComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/actors/actors.component.html',
            styleUrls: ['app/actors/actors.component.css']
        }), 
        __metadata('design:paramtypes', [actors_service_1.ActorsService])
    ], ActorsComponent);
    return ActorsComponent;
}());
exports.ActorsComponent = ActorsComponent;
//# sourceMappingURL=actors.component.js.map