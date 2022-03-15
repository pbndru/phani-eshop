import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { TeamDetailsComponent } from './team-details/team-details.component';

const routes: Routes = [
  {path: '', component: TeamsComponent },
  {path: 'teams', component: TeamsComponent },
  {path: 'teams/:id', component: TeamDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
