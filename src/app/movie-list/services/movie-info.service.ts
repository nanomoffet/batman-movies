import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Movie} from '../../models/movie';
import {HttpClient} from '@angular/common/http';

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

  getMovieInfo(query: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.baseUrl}s=${query}`);
  }
}
