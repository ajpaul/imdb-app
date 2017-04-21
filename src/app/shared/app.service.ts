import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AppServices{

    constructor(private http: Http) {}

    getJoin(): Observable<String>{
        console.log("In getConfiguration of ConfigurationService");
        return this.http.get('./assets/join/join.data').map(res => res.text());
    }
}

