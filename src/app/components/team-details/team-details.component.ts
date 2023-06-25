import { Component, Input } from '@angular/core';
import { Response } from 'src/app/models/response';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent {

  @Input('response') response?: Response;

}
