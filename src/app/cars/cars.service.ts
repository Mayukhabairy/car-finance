import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cars } from './store/cars';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Cars[]>('http://localhost:3000/cars');
  }

  create(payload: Cars) {
    return this.http.post<Cars>('http://localhost:3000/cars', payload);
  }

  update(payload: Cars) {
    return this.http.put<Cars>(
      `http://localhost:3000/Cars/${payload.id}`,
      payload
    );
    }
}
