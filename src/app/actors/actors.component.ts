import { Component } from '@angular/core';
import { AppServices } from '../shared/app.service';

@Component({
    templateUrl: './actors.component.html',
    styleUrls: ['./actors.component.css']
})

export class ActorsComponent    {

    data: Object[] = [];

    constructor(private appServices: AppServices) {
    //     this.appServices.getSpecificMovie('terminator')
    //       .subscribe(
    //       (res) => {
    //           this.data2 = res;
    //       }
    //   );

      this.getAllActors();
    }

    getAllActors() {

        for(let value of ACTORS){
            this.appServices.getSpecificActor(value)
                .subscribe(
                (res) => {
                    this.data.push(this.appServices.convertActorToObject(res));
                }
            );   
        }
    }

}

const ACTORS = [
    'arnold_schwarzenegger',
    'halle_berry',
    'jamie_lee_curtis',
    'john_cleese',
    'kevin_kline'
];