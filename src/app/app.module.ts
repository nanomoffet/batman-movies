import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { MovieImageComponent } from './movie-list/components/movie-card/components/movie-image/movie-image.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { PillNavComponent } from './shared/components/pill-nav/pill-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    PillNavComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
