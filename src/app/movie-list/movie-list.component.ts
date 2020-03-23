import {Component, Input, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';
import {MovieInfoService} from './services/movie-info.service';
import {Subscription} from 'rxjs';
import {MovieResult} from '../models/movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnChanges, OnDestroy {
  @Input() query: string;
  searchResults: MovieResult[] = [];
  searchSubscription: Subscription;

  constructor(private movieService: MovieInfoService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.query) {
      this.searchSubscription = this.movieService.getMovieInfo(this.query)
        .subscribe(results => this.searchResults = results.Search);
    }
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }

}
