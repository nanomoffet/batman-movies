import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieCardHeaderComponent } from './components/movie-card/components/movie-card-header/movie-card-header.component';
import { MovieCardBodyComponent } from './components/movie-card/components/movie-card-body/movie-card-body.component';
import {MovieImageComponent} from './components/movie-card/components/movie-image/movie-image.component';



@NgModule({
  declarations: [MovieCardComponent, MovieCardHeaderComponent, MovieCardBodyComponent, MovieImageComponent],
  imports: [
    CommonModule
  ]
})
export class MovieListModule { }
