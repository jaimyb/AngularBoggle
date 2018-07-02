import { Component, OnInit } from '@angular/core';
import { LeaderboardItem } from '../leaderboard-item';
import { LeaderboardService } from '../leaderboard.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  LeaderboardItems: Array<LeaderboardItem>;

  set BoardId(value){
    this.dataService.BoardId = value;
  }

  constructor(private leaderboardService: LeaderboardService, private dataService: DataService, private router: Router) { 
    this.leaderboardService.GetLeaderboard().subscribe( items => {
      console.log(items);
      this.LeaderboardItems = items;
    });
  }

  ngOnInit() {
  }

  PlayBoard($event){
    this.BoardId = event.srcElement.id;
    this.router.navigate(['/game']);
  }

}
