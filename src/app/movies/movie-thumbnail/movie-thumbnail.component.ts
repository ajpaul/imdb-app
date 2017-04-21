import { Component, Input } from '@angular/core';

@Component({
    selector: 'movie-thumbnail-component',
    templateUrl: './movie-thumbnail.component.html',
    styleUrls: ['./movie-thumbnail.component.css']
})

export class MovieThumbnailComponent    {

    @Input() movie: any;

}
