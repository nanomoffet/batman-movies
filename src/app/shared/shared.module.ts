import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PillNavComponent} from './components/pill-nav/pill-nav.component';



@NgModule({
  declarations: [
    PillNavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    PillNavComponent
  ]
})
export class SharedModule { }
