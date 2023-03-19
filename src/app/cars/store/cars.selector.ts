import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Cars } from './cars';
 
export const selectCars = createFeatureSelector<Cars[]>('myCars');

export const selectCarById = (carId: number) =>
  createSelector(selectCars, (cars: Cars[]) => {
    var carById = cars.filter((_) => _.id == carId);
    if (carById.length == 0) {
      return null;
    }
    return carById[0];
  });