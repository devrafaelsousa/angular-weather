import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';

import { createReducer, StoreModule } from '@ngrx/store';

import { ReactiveFormsModule } from '@angular/forms';
import { homeReducer } from './state/home.reducer';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('home', homeReducer),
  ],
  declarations: [
    HomePage,
  ],
})
export class HomeModule { }
