import { Component, Input } from '@angular/core'

@Component({
    selector: 'actor-thumbnail-component',
    templateUrl: './actor-thumbnail.component.html',
    styleUrls: ['./actor-thumbnail.component.css']
})

export class ActorThumbnailComponent {

    @Input() actor: any;

}
