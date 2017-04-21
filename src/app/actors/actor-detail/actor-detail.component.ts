import { Component } from '@angular/core';
//import { ActorsService } from '../../shared/actors.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './actor-detail.component.html',
    styleUrls: ['./actor-detail.component.css']
})

export class ActorDetailComponent {

    actor:any;

    // constructor(private actorsService:ActorsService, private route:ActivatedRoute){

    // }

    ngOnInit() {
        //this.actor = this.actorsService.getSpecificActor(this.route.snapshot.params['id']);
    }

}