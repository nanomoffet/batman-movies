import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-movie-card-button',
  templateUrl: './movie-card-button.component.html',
  styleUrls: ['./movie-card-button.component.scss']
})
export class MovieCardButtonComponent implements OnChanges {
  @Input() id: string;
  url: string;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.id) {
      this.url = `https://www.imdb.com/title/${this.id}`;
    }
  }

}
