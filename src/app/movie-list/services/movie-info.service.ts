import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {SearchResults} from '../../models/search-results.model';
import {HttpClient} from '@angular/common/http';
import {MovieDetails} from '../../models/movie-details.model';

@Injectable({
  providedIn: 'root'
})
export class MovieInfoService {
  baseUrl: string;
  apiKey: string;

  constructor(private http: HttpClient) {
    this.apiKey = environment.apiKey;
    this.baseUrl = `http://www.omdbapi.com/?apiKey=${this.apiKey}&`;
  }

  getMovieInfo(query: string): Observable<SearchResults> {
    return this.http.get<SearchResults>(`${this.baseUrl}s=${query}`);
  }

  getMovieDetails(id: string): Observable<MovieDetails> {
  return this.http.get<MovieDetails>(`${this.baseUrl}i=${id}`);
  }
}
