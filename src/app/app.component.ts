import {Component, OnInit} from '@angular/core';
import {MovieImageService} from './movie-list/services/movie-image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'batman-movies';
  movieID: string;

  constructor() {
    this.movieID = 'tt0372784';
  }

  ngOnInit() {

  }


}
