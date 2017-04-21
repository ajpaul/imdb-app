import { Component } from '@angular/core';
import { AppServices } from './shared/app.service';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to my app';

  data: Object;

    constructor(private appServices:AppServices, private http:Http) {

      this.appServices.getJoin()
          .subscribe(
          (res) => {
              this.data = res;
          }
      );
  


}


}
