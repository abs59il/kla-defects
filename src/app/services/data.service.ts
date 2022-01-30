import { Injectable } from '@angular/core';
import { randNumber } from '@ngneat/falso';
import { v4 as uuidv4 } from 'uuid';
import { Defect } from 'src/app/models/defect';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData(x = 800, y = 600): Observable<Defect[]> {

    return of([...Array(100)].map(index => ({  
      severity: randNumber({ min: 10, max: 100 }),
      uuid: uuidv4(), 
      x: randNumber({ min: 0, max: x }), 
      y: randNumber({ min: 0, max: y }) })).sort((a,b) => b.severity - a.severity));

  }
}
