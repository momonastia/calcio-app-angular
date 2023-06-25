import { Player } from './player';
import { Statistics } from './statistics';

export interface PlayerResponse {
  player: Player;
  statistics: Statistics[];
}
