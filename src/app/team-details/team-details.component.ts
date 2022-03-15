import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  team = {id: 0, name: '', salary: 0, designation: '', description: ''};

  constructor(
    private route: ActivatedRoute,
    private teamsService: TeamsService
  ) { }

  ngOnInit(): void {
    this.getTeam();
  }

  getTeam(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.teamsService.getTeam(id)
      .subscribe(team => this.team = team);   
  }

  addToTeam(): void { }

}
