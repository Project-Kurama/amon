import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Movie, MovieService } from "../services/movie.service"
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  disPlayMovies: Movie[];
  addedMovie: Movie;
  randomNum = Math.floor(Math.random() * 10);

  movieForm = new FormGroup({
    id: new FormControl(this.randomNum),
    name: new FormControl(''),
    releaseYear: new FormControl(''),
    studio: new FormControl(''),
    director: new FormControl(''),
  });
  constructor(private readonly movieService: MovieService) {
    this.disPlayMovies = movieService.getMovies();
  }

  ngOnInit() {
  }

  addMovie(event: any) {
    this.movieService.setMovie(this.movieForm.value).subscribe(data => {
      console.log("response", data);
    });
    this.movieForm.reset({
      id: Math.floor(Math.random() * 100)
    });
  }

}
