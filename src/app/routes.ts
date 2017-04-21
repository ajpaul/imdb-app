import { Routes } from '@angular/router';


import { HomeComponent } from './home.component';
import { Error404Component } from './errors/error404.component';
import { ActorsComponent } from './actors/actors.component';

export const routes: Routes = [
  { path: 'movies', component: HomeComponent },
  { path: 'actors', component: ActorsComponent},
  { path: '', redirectTo: '/movies', pathMatch: 'full'},
  { path: '**', component: Error404Component }
];