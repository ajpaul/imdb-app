import { Routes } from '@angular/router';


import { MoviesComponent } from './movies/movies.component'
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { Error404Component } from './errors/error404.component';
import { ActorsComponent } from './actors/actors.component';
import { ActorDetailComponent } from './actors/actor-detail/actor-detail.component';

export const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'actors', component: ActorsComponent},
  { path: '', redirectTo: '/movies', pathMatch: 'full'},
  { path: 'movies/:id', component: MovieDetailComponent }, 
  { path: 'actors/:id', component: ActorDetailComponent }, 
  { path: '**', component: Error404Component }
];