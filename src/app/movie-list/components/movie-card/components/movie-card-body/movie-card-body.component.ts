import {Component, Input, OnInit} from '@angular/core';
import {MovieDetails} from '../../../../../models/movie-details.model';

@Component({
  selector: 'app-movie-card-body',
  templateUrl: './movie-card-body.component.html',
  styleUrls: ['./movie-card-body.component.scss']
})
export class MovieCardBodyComponent implements OnInit {
  @Input() movie: MovieDetails;

  constructor() { }

  ngOnInit(): void {
  }

}
