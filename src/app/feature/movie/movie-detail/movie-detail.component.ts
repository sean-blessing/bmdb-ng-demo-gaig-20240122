import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Credit } from 'src/app/model/credit';
import { Movie } from 'src/app/model/movie';
import { CreditService } from 'src/app/service/credit.service';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  movie: Movie = new Movie();
  title: string = 'Movie-Detail';
  movieId: number = 0;
  credits: Credit[] = [];
  subscription!: Subscription;
  
  constructor(private movieSvc: MovieService,
              private creditSvc: CreditService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
        // get the id from the route
        this.subscription = this.route.params.subscribe(parms => { 
          this.movieId = parms["id"];
          this.subscription?.unsubscribe();

          // get the movie for that movieId
          this.subscription = this.movieSvc.get(this.movieId).subscribe(resp => {
            this.movie = resp;
            this.subscription?.unsubscribe();
            
            // get the credits for this movie
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
