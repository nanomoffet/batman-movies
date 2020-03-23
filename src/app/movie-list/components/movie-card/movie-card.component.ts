import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {MovieResult} from '../../../models/movie.model';
import {Subscription} from 'rxjs';
import {MovieInfoService} from '../../services/movie-info.service';
import {MovieDetails} from '../../../models/movie-details.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit, OnDestroy, OnChanges {
  @Input() movie: MovieResult;

  movieDetailsSubscription: Subscription;
  movieDetails: MovieDetails;

  constructor(private movieService: MovieInfoService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.movie) {
      this.movieDetailsSubscription =
        this.movieService.getMovieDetails(this.movie.imdbID)
          .subscribe(details => this.movieDetails = details);
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.movieDetailsSubscription.unsubscribe();
  }

}
