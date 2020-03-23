import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieImageService {

  baseUrl: string;
  apiKey: string;
  imageBlobUrl: string | ArrayBuffer = null;


  constructor(private http: HttpClient) {
    this.apiKey = environment.apiKey;
    this.baseUrl = `http://img.omdbapi.com/?apiKey=${this.apiKey}&`;
  }

  getMovieImage(query: string): Observable<Blob> {
    return this.http.get<Blob>(`${this.baseUrl}i=${query}`, {responseType: 'blob' as 'json' });
  }



}
