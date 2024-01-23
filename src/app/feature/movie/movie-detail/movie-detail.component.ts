import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {
  title = 'Movie-Detail';
  movieTitle: string = "Star Wars - Episode IV: A New Hope";
  year: number = 1977;
  rating: string = "PG";
  director: string = "George Lucas";
}
