import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatDatePipe } from './format-date.pipe';

@NgModule({
  declarations: [
    FormatDatePipe
  ],
  exports: [
    FormatDatePipe
  ]
})
export class PipesModule { }
