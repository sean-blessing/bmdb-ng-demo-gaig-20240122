import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './feature/movie/movie-detail/movie-detail.component';
import { ActorListComponent } from './feature/actor/actor-list/actor-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: MovieDetailComponent},
  {path: 'movie/detail', component: MovieDetailComponent},
  {path: 'actor/list', component: ActorListComponent},
  {path: '**', component: MovieDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
