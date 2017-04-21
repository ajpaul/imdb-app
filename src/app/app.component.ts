import { Component } from '@angular/core';
import { NavBarComponent } from './navbar/navbar.component';
import { AppServices } from './shared/app.service';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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
