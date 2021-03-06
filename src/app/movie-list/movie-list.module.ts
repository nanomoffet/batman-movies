import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieCardHeaderComponent } from './components/movie-card/components/movie-card-header/movie-card-header.component';
import { MovieCardBodyComponent } from './components/movie-card/components/movie-card-body/movie-card-body.component';
import {MovieImageComponent} from './components/movie-card/components/movie-image/movie-image.component';
import { MovieListComponent } from './movie-list.component';
import { MovieCardButtonComponent } from './components/movie-card/components/movie-card-button/movie-card-button.component';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [
    MovieCardComponent,
    MovieCardHeaderComponent,
    MovieCardBodyComponent,
    MovieImageComponent,
    MovieListComponent,
    MovieCardButtonComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [MovieListComponent]
})
export class MovieListModule { }
