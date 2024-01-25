import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Credit } from 'src/app/model/credit';
import { Movie } from 'src/app/model/movie';
import { CreditService } from 'src/app/service/credit.service';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-credits',
  templateUrl: './movie-credits.component.html',
  styleUrls: ['./movie-credits.component.css']
})
export class MovieCreditsComponent implements OnInit, OnDestroy {
  title: string = "Movie-Credits";
  movieId: number = 0;
  movie: Movie = new Movie();
  credits: Credit[] = [];
  subscription!: Subscription;

  constructor(private movieSvc: MovieService,
              private creditSvc: CreditService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    console.log("movie credits component...");
    this.subscription = this.route.params.subscribe(parms => 
      {
        this.movieId = parms["id"];
        console.log("movieId = "+this.movieId);
        this.subscription?.unsubscribe();
        this.movieSvc.get(this.movieId).subscribe(resp => {
            this.movie = resp;
            console.log("movie: ", this.movie);
            this.subscription?.unsubscribe();
            this.creditSvc.getAllActorsForMovie(this.movieId).subscribe(resp => {
                this.credits = resp;
        });
    });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
