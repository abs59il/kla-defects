import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { Observable, of, tap } from 'rxjs';
import { Defect } from '../models/defect';
import { StateService } from '../state/state.service';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class DataResolver implements Resolve<Defect[]> {

  constructor(private service: DataService, private state: StateService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Defect[]> {

    return this.service.getData(800, 600).pipe(tap(data =>this.state.setData(data)));

  }

}
