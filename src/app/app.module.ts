import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ButtonComponent } from './shared/components/button/button.component';
import { PillNavComponent } from './shared/components/pill-nav/pill-nav.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MovieListModule} from './movie-list/movie-list.module';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    PillNavComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    MovieListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
