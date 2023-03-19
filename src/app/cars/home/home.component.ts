import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { invokeCarsAPI } from '../store/cars.action';
import { selectCars } from '../store/cars.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store) {}
  cars$ = this.store.pipe(select(selectCars));

  ngOnInit() {
    this.store.dispatch(invokeCarsAPI());
  }

}
