import { createAction, props } from '@ngrx/store'
import { Cars } from './cars'

export const invokeCarsAPI = createAction(
  '[Cars API] Invoke Cars Fetch API'
);

export const carsFetchAPISuccess = createAction(
  '[Cars API] Fetch API Success',
  props<{ allCarss: Cars[] }>()
);

export const invokeSaveNewCarAPI = createAction(
  '[Cars API] Inovke save new car api',
  props<{ newCar: Cars }>()
);

export const saveNewCarAPISucess = createAction(
  '[Cars API] save new car api success',
  props<{ newCar: Cars }>()
);

export const invokeUpdateCarAPI = createAction(
  '[Cars API] Inovke update car api',
  props<{ updateCar: Cars }>()
);
 
export const updateCarSucess = createAction(
  '[Cars API] update  car api success',
  props<{ updateCar: Cars }>()
);

