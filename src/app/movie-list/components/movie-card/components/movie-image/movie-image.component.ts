import {Component, Input, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';
import {MovieImageService} from '../../../../services/movie-image.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-movie-image',
  templateUrl: './movie-image.component.html',
  styleUrls: ['./movie-image.component.scss']
})
export class MovieImageComponent implements OnChanges, OnDestroy {
  @Input() movieID: string;

  imageSrc: string | ArrayBuffer = '';
  movieImageSubscription: Subscription;

  constructor(private imgService: MovieImageService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.movieID) {
      this.movieImageSubscription = this.imgService.getMovieImage(changes.movieID.currentValue)
        .subscribe(blob => {
          this.createImageFromBlob(blob);
        });
    }
  }

  ngOnDestroy() {
    this.movieImageSubscription.unsubscribe();
  }

  private createImageFromBlob(image: Blob) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.imageSrc = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

}
