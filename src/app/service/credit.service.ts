import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Credit } from '../model/credit';
import { Movie } from '../model/movie';
import { Actor } from '../model/actor';

const URL: string = "http://localhost:8080/credits/";

@Injectable({
  providedIn: 'root'
})
export class CreditService {

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Credit[]> {
    return this.http.get(URL) as Observable<Credit[]>;
  }

  create(credit: Credit): Observable<Credit> {
    return this.http.post(URL, credit) as Observable<Credit>;
  }

  get(id: number): Observable<Credit> {
    return this.http.get(URL+id) as Observable<Credit>;
  }

  edit(credit: Credit): Observable<Credit> {
    return this.http.put(URL, credit) as Observable<Credit>;
  }

  delete(id: number): Observable<Credit> {
    return this.http.delete(URL+id) as Observable<Credit>;
  }

  getAllMoviesForActor(id: number): Observable<Movie[]> {
    return this.http.get(URL+"/filmography/"+id) as Observable<Movie[]>;
  }

  getAllActorsForMovie(id: number): Observable<Credit[]> {
    console.log("credit svc.getAllActorsForMovie id... "+id);

    return this.http.get(URL+"movie/"+id) as Observable<Credit[]>;
  }
}
