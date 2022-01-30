import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Defect } from '../models/defect';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  _selected = new BehaviorSubject<string | null>(null);
  selected$ = this._selected.asObservable();

  _data = new BehaviorSubject<Defect[]>([]);
  data$ = this._data.asObservable();

  constructor() { }

  setSelected(defect: string) {
    this._selected.next(defect)
  }

  setData(defects: Defect[]) {

    this._data.next(defects);

  }

  getById(id: string | null) {

    return this.data$.pipe(map(data => data.find(u => u.uuid === id)));

  }

  updateDefect(id: string, severity: number) {

    const arr = this._data.value.map(d => {

      if (id === d.uuid) {
        return ({ ...d, severity });
      } else {
        return d;
      }

    });

    this._data.next(arr);

  }

}
