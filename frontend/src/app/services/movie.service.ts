import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment'

// should make this in to a file as tracing an interface type in a service file may be a little irritating
export interface Movie {
  id: Number,
  name: String,
  releaseYear: Number,
  studio: String,
  director: String
}

@Injectable()
export class MovieService {
  baseUrl = environment.baseUrl;
  movies: Movie[] = [
    {
      id: 1,
      name: "The Godfather",
      director: "Francis Ford Coppola",
      releaseYear: 1972,
      studio: "Paramount Pictures"
    },
    {
      id: 2,
      name: "The Wizard of Oz",
      director: "Victor Fleming",
      releaseYear: 1939,
      studio: "‎Metro-Goldwyn-Mayer"
    },
    {
      id: 3,
      name: "Citizen Kane",
      director: "Orson Welles",
      releaseYear: 1941,
      studio: "Mercury Productions"
    },
    {
      id: 4,
      name: "The Shawshank Redemption",
      director: "Frank Darabont",
      releaseYear: 1994,
      studio: "Castle Rock Entertainment"
    }];
  constructor(private http: HttpClient) { }
  public getMovies(): Movie[] {
    return this.movies;
  }
  public setMovie(movie: Movie){
   // this.movies.push(movie);
   const url = this.baseUrl+"/movies";
   return this.http.post(url,movie);
  }
}