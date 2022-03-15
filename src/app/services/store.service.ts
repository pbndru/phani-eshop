import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private readonly _teams = new BehaviorSubject<Team[]>([]);
  readonly teams$ = this._teams.asObservable(); 
  
  get teams(): Team[] {
    return this._teams.getValue();
  }

  set teams(val: Team[]) {
    this._teams.next(val);
  }

  constructor() { }
}