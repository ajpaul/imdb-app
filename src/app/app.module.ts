import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about.component';
import { HomeComponent } from './home.component';
import { Error404Component } from './error404.component';

import { AppServices } from './shared/app.service';

import { routes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent, 
    HomeComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AppServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
