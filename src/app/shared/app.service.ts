import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AppServices{

    constructor(private http: Http) {}

    getJoin(): Observable<String>{
        return this.http.get('./assets/join/join.data').map(res => res.text());
    }

    getSpecificMovie(title:string): Observable<String>{
        return this.http.get(`./assets/movies/${title}.data`).map(res => res.text());
    }

    getSpecificActor(actor:string): Observable<String>{
        return this.http.get(`./assets/actors/${actor}.data`).map(res => res.text());
    }

    convertMovieToObject(movie:String): Object {

        let [movie_id, movie_title, movie_release, movie_synopsis] = movie.match(/[^|]+/g);
        
        return {
            id: movie_id,
            title: movie_title,
            release_date: movie_release,
            synopsis: movie_synopsis
        }
    }

    convertActorToObject(actor) {

        let [actor_id, actor_name, actor_birthdate, actor_synopsis] = actor.match(/[^|]+/g);

        return {
            id: actor_id,
            name: actor_name,
            birth: actor_birthdate,
            synopsis: actor_synopsis
        }
    }
}

