import { createReducer, on } from "@ngrx/store";
import { Cars } from "./cars";
import { carsFetchAPISuccess, invokeCarsAPI, saveNewCarAPISucess, updateCarSucess} from './cars.action'
 
export const initialState: ReadonlyArray<Cars> = [];
 
export const carReducer = createReducer(
    initialState,
    on(carsFetchAPISuccess, (state, { allCarss }) => {
        return allCarss;
      }),
      on(saveNewCarAPISucess, (state, { newCar }) => {
        let newState = [...state];
        newState.unshift(newCar);
        return newState;
      }),
      on(updateCarSucess, (state, { updateCar }) => {
        let newState = state.filter((_) => _.id != updateCar.id);
        newState.unshift(updateCar);
        return newState;
      })
);