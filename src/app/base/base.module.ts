import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class BaseModule { }
