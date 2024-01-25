import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDetailComponent } from './feature/movie/movie-detail/movie-detail.component';
import { ActorListComponent } from './feature/actor/actor-list/actor-list.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './core/menu/menu.component';
import { MovieListComponent } from './feature/movie/movie-list/movie-list.component';
import { MovieEditComponent } from './feature/movie/movie-edit/movie-edit.component';
import { MovieCreditsComponent } from './feature/movie/movie-credits/movie-credits.component';
import { MovieCreateComponent } from './feature/movie/movie-create/movie-create.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailComponent,
    ActorListComponent,
    MenuComponent,
    MovieListComponent,
    MovieEditComponent,
    MovieCreditsComponent,
    MovieCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
