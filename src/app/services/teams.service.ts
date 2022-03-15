import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const mock_teams = [
  {id: 1, name: 'Developers', salary: 5000.0, designation: 'Developer', description: 'Dev'},
  {id: 2, name: 'Testers', salary: 3000.0, designation: 'Tester', description: 'Tes'},
  {id: 3, name: 'DevOps', salary: 4000.0, designation: 'DevOps', description: 'Ops'},
];

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  getTeams(): Observable<any> {
    return of(mock_teams);
  }

  getTeam(id:number): Observable<any>{
    return of(mock_teams[id-1]);
  }
  
  constructor() { }
}
