import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoardService } from '../board.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router ,private boardService: BoardService, private dataService: DataService) { }

  ngOnInit() {
  }

  private NewGame(){
    this.router.navigate(['/game']);
  }

  private Leaderboard(){
    this.router.navigate(['/leaderboard']);
  }
}
