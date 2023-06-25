import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Response } from '../models/response';
import { PlayerResponse } from '../models/player-response';

const apiKey = 'fa4103aef4bc15a25bb67bbe84ad6ccb';
const configUrl = 'https://v3.football.api-sports.io/';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  readonly headers = new HttpHeaders().set('x-apisports-key', apiKey);

  constructor(private readonly http: HttpClient) {}

  getResponses(): Observable<Response[]> {
    return this.http
      .get<any>(configUrl + 'teams?country=Italy', { headers: this.headers })
      .pipe(map((res) => res.response));
  }

  getTeam(teamId: number): Observable<PlayerResponse[]> {
    return this.http
      .get<any>(configUrl + 'players?season=2022&league=135&team=' + teamId, {
        headers: this.headers,
      })
      .pipe(map((res) => res.response));
  }
}
