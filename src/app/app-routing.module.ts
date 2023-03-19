import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsRoutingModule } from './cars/cars-routing.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./cars/cars.module').then((c) => c.CarsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CarsRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}


