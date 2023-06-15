import { FormControl, FormGroup } from '@angular/forms';
import { OmdbServiceService } from './../../services/omdb-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-omdb-search',
  templateUrl: './omdb-search.component.html',
  styleUrls: ['./omdb-search.component.css']
})
export class OmdbSearchComponent implements OnInit {

  constructor(
    public omdbService: OmdbServiceService
  ) { }

  form: FormGroup = new FormGroup({
    movieName: new FormControl()
  });

  movies : any;
  showSelectedMovie: boolean = false;
  movieNotFound: boolean = false;
  movieList: boolean = false;

  img : any
  Title : string
  Plot : string
  Actors : string
  Ratings: any

  ngOnInit(): void {

  }

  title
  availableResult: boolean = false;

  //get the all movies
  getAllMovies() {
    this.showSelectedMovie = false;
    this.omdbService.getAllMovies(this.form.value.movieName).subscribe({
      next: (response) => {
        console.log(response);
        if (response.Response == "True") {
          this.movies = response.Search;
          this.availableResult = true;
          this.movieNotFound = false;
          this.movieList=true;
        }
        else {
          this.availableResult = false;
          this.movieNotFound = true;
          this.movieList=false;
        }
      },
      error: (error) => {
        this.availableResult = false;
        console.log(error);
        this.movieNotFound = true;
        this.movieList=false;
      }
    });
  }

  //get movie by ImdbID
  getMovieByimdbID(movie) {
    this.omdbService.getMovieByimdbID(movie.imdbID).subscribe({
      next: (response) => {
        if (response.Response == "True") {
          this.movieDetails(response);
        }
        else {
          this.availableResult = false;
          this.showSelectedMovie = false;
          this.movieNotFound = true;
        }
      },
      error: (error) => {
        this.availableResult = false;
        this.showSelectedMovie = false;
        this.movieNotFound = true;
      }
    });
  }

  //Show selected movie details
  movieDetails(selectedMovie) {
    this.showSelectedMovie = true;

    this.img = selectedMovie.Poster;
    this.Title = selectedMovie.Title;
    this.Plot = selectedMovie.Plot;
    this.Actors = selectedMovie.Actors;
    this.Ratings = selectedMovie.Ratings;
  }

}
