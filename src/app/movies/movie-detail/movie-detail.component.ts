import { Component, OnInit } from '@angular/core';
import { AppServices } from '../../shared/app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'movie-detail',
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.css']
})

export class MovieDetailComponent implements OnInit {

    movie: Object;
    joinedData: String;
    joinedDataArray: String[];

    constructor(private appServices:AppServices, private route:ActivatedRoute){
        
        //get the join file
        this.appServices.getJoin()
            .subscribe(
            (res) => {
                this.joinedData = res;
                this.getActorsInMovie();
            }
        );
    }

    ngOnInit() {

        this.appServices.getSpecificMovie(this.route.snapshot.params['id'])
           .subscribe(
                (res) => {
                    this.movie = this.appServices.convertMovieToObject(res);
                    this.findActorsInCurrentMovie(this.movie);
                }
        );

        
    }

    //get all of the actors/movies combos and parse them/put them in an array
    getActorsInMovie() {

        if(!this.joinedData) return;

        this.joinedDataArray = this.joinedData.split('\n');
    }

    findActorsInCurrentMovie(movie) {

        let featuredActors: String[] = [];

        for(let row of this.joinedDataArray){
            if(row.includes(movie.id))
                featuredActors.push(row.split('|')[0]);
        }

        console.log(featuredActors);
    }

}