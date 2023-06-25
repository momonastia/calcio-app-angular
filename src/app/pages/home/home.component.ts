import { Component } from '@angular/core';
import { Response } from 'src/app/models/response';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  responses: Response[] = [];
  selectedResponse?: Response;
  showDetails = false;

  constructor(private teamService: TeamService) {
    this.getResponses();
  }

  getResponses(): void {
    this.teamService.getResponses().subscribe((res) => (this.responses = res));
  }
}
