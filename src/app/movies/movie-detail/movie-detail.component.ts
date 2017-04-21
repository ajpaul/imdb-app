import { Component, OnInit } from '@angular/core';
import { AppServices } from '../../shared/app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'movie-detail',
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.css']
})

export class MovieDetailComponent implements OnInit {

    movie;

    constructor(private appServices:AppServices, private route:ActivatedRoute){

    }

    ngOnInit() {

        this.appServices.getSpecificMovie(this.route.snapshot.params['id'])
           .subscribe(
                (res) => {
                    this.movie = this.appServices.convertMovieToObject(res);
                }
        );
    }

}