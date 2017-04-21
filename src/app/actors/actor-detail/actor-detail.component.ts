import { Component } from '@angular/core';
import { AppServices } from '../../shared/app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './actor-detail.component.html',
    styleUrls: ['./actor-detail.component.css']
})

export class ActorDetailComponent {

    actor:any;

    constructor(private appServices:AppServices, private route:ActivatedRoute){

    }

    ngOnInit() {

        this.appServices.getSpecificActor(this.route.snapshot.params['id'])
           .subscribe(
                (res) => {
                    this.actor = this.appServices.convertActorToObject(res);
                }
        );
    }

}