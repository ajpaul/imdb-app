import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { Error404Component } from './errors/error404.component';
import { NavBarComponent } from './navbar/navbar.component';
import { ActorsComponent } from './actors/actors.component';
import { ActorDetailComponent} from './actors/actor-detail/actor-detail.component';
import { ActorThumbnailComponent } from './actors/actor-thumbnail/actor-thumbnail.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { MovieThumbnailComponent } from './movies/movie-thumbnail/movie-thumbnail.component';

//services
import { AppServices } from './shared/app.service';

//other
import { routes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Error404Component,
    NavBarComponent,
    ActorsComponent,
    ActorDetailComponent,
    ActorThumbnailComponent,
    MoviesComponent,
    MovieDetailComponent,
    MovieThumbnailComponent
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
