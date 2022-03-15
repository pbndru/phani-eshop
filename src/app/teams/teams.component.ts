import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams:any = [];

  constructor(private teamsService: TeamsService) { }

  ngOnInit(): void { 
    this.getTeams();
  }

  getTeams(): void {
    this.teamsService.getTeams()
      .subscribe(teams => {
        this.teams = teams;
      });
  }

}
