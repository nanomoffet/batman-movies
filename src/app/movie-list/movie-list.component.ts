import {Component, Input, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';
import {MovieInfoService} from './services/movie-info.service';
import {Subscription} from 'rxjs';
import {MovieResult} from '../models/movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnChanges, OnDestroy {
  @Input() query: string;
  searchResults: MovieResult[] = [];
  filteredSearchResults: MovieResult[] = [];
  searchSubscription: Subscription;
  decadesReleased: string[];

  constructor(private movieService: MovieInfoService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.query) {
      this.searchSubscription = this.movieService.getMovieInfo(this.query)
        .subscribe(results => {
          this.searchResults = results.Search;
          this.decadesReleased = this.getDecades(this.searchResults);
          this.filterByDecade('');
        });
    }
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }

  getDecades(results): string[] {
    const dates = [];
    results.forEach(result => {
      if (dates.indexOf(result.Year.substring(0, 3) + '0') === -1) {
        dates.push(result.Year.substring(0, 3) + '0');
      }
    });
    dates.sort((a, b) => {
      const numA = parseInt(a, 10);
      const numB = parseInt(b, 10);
      if (numA === numB) {
        return 0;
      } else {
        return numA < numB ? -1 : 1;
      }
    });

    return dates;
  }

  filterByDecade(decade) {
    console.log(decade);
    if (decade.length === 0) {
      this.filteredSearchResults = this.searchResults;
    } else {
      this.filteredSearchResults = this.searchResults.filter(movie => movie.Year.substring(0, 3) === decade.substring(0, 3));
    }
  }

}
