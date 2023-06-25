import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Player } from 'src/app/models/player';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent {
  currentId = this.route.snapshot.params['id'];
  team: Player[] = [];
  isLoading = false;

  constructor(private route: ActivatedRoute, private teamService: TeamService) {
    this.isLoading = true;
    this.teamService
      .getTeam(this.currentId)
      .pipe(
        map((resp) =>
          resp.map((r) => {
            const player: Player = r.player;
            player.position = r.statistics[0].games?.position;
            return player;
          })
        )
      )
      .subscribe((team) => {
        this.team = team;
        this.isLoading = false;
      });
  }
}
