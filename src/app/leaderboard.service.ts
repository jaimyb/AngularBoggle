import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observer } from 'rxjs/Observer';
import { LeaderboardItem } from './leaderboard-item';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LeaderboardService {

  private Url = "http://localhost:49885/api/Leaderboard/";

  constructor(private http: Http) { }

  GetLeaderboard(): Observable<Array<LeaderboardItem>>{
    return this.http.get(this.Url).map(boards => {
      let leaderboardItems: Array<LeaderboardItem> = new Array<LeaderboardItem>();
      boards.json().forEach(board => {
        console.log(board);
        let leaderboardItem: LeaderboardItem = new LeaderboardItem(board.Player, board.Date, board.Score, board.Id);
        leaderboardItems.push(leaderboardItem);
      });
      return leaderboardItems;
    });
  }
}
