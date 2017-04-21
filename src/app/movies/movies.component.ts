import { Component } from '@angular/core';
import { AppServices } from '../shared/app.service';

@Component({
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css']
})

export class MoviesComponent    {

    data: Object[] = [];
    //data2: Object; 

    constructor(private appServices: AppServices) {
    //     this.appServices.getSpecificMovie('terminator')
    //       .subscribe(
    //       (res) => {
    //           this.data2 = res;
    //       }
    //   );

      this.getAllMovies();
    }

    getAllMovies() {

        for(let value of MOVIES){
            this.appServices.getSpecificMovie(value)
                .subscribe(
                (res) => {
                    this.data.push(this.appServices.convertMovieToObject(res));
                }
            );   
        }
    }
}

const MOVIES = [
    'a_fish_called_wanda',
    'conan_the_barbarian',
    'die_another_day',
    'fierce_creatures',
    'terminator',
    'true_lies'
];
