import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, map, mergeMap, switchMap, withLatestFrom } from 'rxjs';
import { CarsService } from '../cars.service';
import { invokeCarsAPI, carsFetchAPISuccess, invokeSaveNewCarAPI, saveNewCarAPISucess, invokeUpdateCarAPI, updateCarSucess } from './cars.action';
import { selectCars } from './cars.selector';
import { Appstate } from '../../shared/store/appstate';
import { setAPIStatus } from '../../shared/store/app.action';
 
@Injectable()
export class CarsEffect {
  constructor(
    private actions$: Actions,
    private carsService: CarsService,
    private store: Store,
    private appStore: Store<Appstate>
  ) {}
 
  loadAllCars$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokeCarsAPI),
      withLatestFrom(this.store.pipe(select(selectCars))),
      mergeMap(([, carformStore]) => {
        if (carformStore.length > 0) {
          return EMPTY;
        }
        return this.carsService
          .get()
          .pipe(map((data) => carsFetchAPISuccess({ allCarss: data })));
      })
    )
  );

  saveNewCar$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeSaveNewCarAPI),
      switchMap((action) => {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        return this.carsService.create(action.newCar).pipe(
          map((data) => {
            this.appStore.dispatch(
              setAPIStatus({
                apiStatus: { apiResponseMessage: '', apiStatus: 'success' },
              })
            );
            return saveNewCarAPISucess({ newCar: data });
          })
        );
      })
    );
  });

  updateCarAPI$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeUpdateCarAPI),
      switchMap((action) => {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        return this.carsService.update(action.updateCar).pipe(
          map((data) => {
            this.appStore.dispatch(
              setAPIStatus({
                apiStatus: { apiResponseMessage: '', apiStatus: 'success' },
              })
            );
            return updateCarSucess({ updateCar: data });
          })
        );
      })
    );
  });
}