import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../../services/teams.service';
import { StoreService } from '../../../services/store.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams:any = [];

  constructor(private teamsService: TeamsService, public storeService: StoreService) { }

  ngOnInit(): void { 
    this.getTeams();
  }

  getTeams(): void {
    this.teamsService.getTeams()
    .subscribe(teams => {this.storeService.teams = teams});
  }

}
