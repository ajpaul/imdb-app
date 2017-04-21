import { Component, OnInit } from '@angular/core';
//import { MoviesService } from '../../shared/movies.service';
//import { JoinService } from '../../shared/join.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'movie-detail',
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.css']
})

export class MovieDetailComponent implements OnInit {

    movie:any;
    res = {};

    // constructor(private moviesService:MoviesService, private route:ActivatedRoute, private joinService:JoinService){

    //     joinService.getJoinedData().subscribe(data => this.res = data);

    //     console.log(this.res);
    // }

    ngOnInit() {
    //     this.movie = this.moviesService.getSpecificMovie(this.route.snapshot.params['id']);
    }

}