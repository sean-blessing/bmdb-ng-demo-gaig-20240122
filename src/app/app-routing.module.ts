import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './feature/movie/movie-detail/movie-detail.component';
import { ActorListComponent } from './feature/actor/actor-list/actor-list.component';
import { MovieListComponent } from './feature/movie/movie-list/movie-list.component';
import { MovieCreditsComponent } from './feature/movie/movie-credits/movie-credits.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: MovieListComponent},
  {path: 'movie/list', component: MovieListComponent},
  {path: 'movie/create', component: MovieDetailComponent},
  {path: 'movie/detail/:id', component: MovieDetailComponent},
  {path: 'movie/edit/:id', component: MovieDetailComponent},
  {path: 'movie/credits/:id', component: MovieCreditsComponent}, 
  {path: 'actor/list', component: ActorListComponent},
  {path: '**', component: MovieDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
