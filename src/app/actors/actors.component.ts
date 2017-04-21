import { Component } from '@angular/core';
//import { ActorsService } from '../shared/actors.service';

@Component({
    templateUrl: './actors.component.html',
    styleUrls: ['./actors.component.css']
})

export class ActorsComponent    {

    data: any[];

    // constructor(private actorsService: ActorsService) {
    //     this.data = actorsService.getAllActors(); 
    // }

}