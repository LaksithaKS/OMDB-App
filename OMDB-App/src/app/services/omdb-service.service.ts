import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { OmdbModel } from '../models/omdb-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OmdbServiceService {

  private baseURL = environment.baseServiceUrl;

  private APIkey = '6a6b2f24';


  constructor(public http: HttpClient) { }

  // get all movies
  getAllMovies(movieName: string): Observable<OmdbModel> {
    return this.http.get<OmdbModel>(`${this.baseURL}?s=${movieName}&apikey=216f77ad`)
  }

  // get movie details by imdbID
  getMovieByimdbID(movieName: string): Observable<any> {
    return this.http.get<OmdbModel>(`${this.baseURL}?i=${movieName}&apikey=${this.APIkey}`)
  }
}