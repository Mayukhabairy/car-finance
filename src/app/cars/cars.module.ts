import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { carReducer } from './store/cars.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CarsEffect } from './store/cars.effect';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    HomeComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    FormsModule,
    StoreModule.forFeature('myCars', carReducer),
    EffectsModule.forFeature([CarsEffect])
  ],
  exports: [
    HomeComponent
  ]
})
export class CarsModule { }
