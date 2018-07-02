import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { BoardService } from '../board.service';
import { Board } from '../board';
import { Game } from '../game';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

let timer;

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnDestroy {

  Game: Game

  get Player(){
    return this.dataService.Player;
  }

  set Player(value){
    this.dataService.Player = value;
  }

  get BoardId(){
    return this.dataService.BoardId;
  }

  set BoardId(value){
    this.dataService.BoardId = value;
  }

  constructor(private dataService: DataService, private boardService: BoardService, private router: Router) {
    console.log(this.BoardId);
    if(this.BoardId != null){
      this.boardService.StartGameById(this.BoardId).subscribe(game => {
        this.Game = game;
        game.Board.Player = this.Player;
        console.log(game.Board.Player);
        this.SetTimer(game);
      });
    }
    else{
      this.Game = boardService.StartNewGame();
      this.SetTimer(this.Game);
    }  
  }

  

  ngOnInit() {
    console.log(this.Player);
    if(this.Player == null || this.Player == ""){
      alert("Please enter a name first.");
      this.router.navigate(['/home']);
    }
  }

  ngOnDestroy(){
    clearInterval(timer);
    this.BoardId = null;
    console.log("destroyed");
  }

  CheckInput(event){
    console.log(event);
    console.log(this.Game.CurrentWord);
    if(this.Game.UsedWords.indexOf(this.Game.CurrentWord) == -1){
      this.boardService.CheckWord(this.Game.CurrentWord).subscribe(result => {
        if(result){
          this.Game.UsedWords.push(this.Game.CurrentWord);
          this.Game.CheckScore();
        }
        else{
          alert("Please enter a valid word!");
        }
      });
    }
    else{
      alert("You have already guessed this word!");
    }
  }

  DiceClick(event){
    console.log(event);
    this.Game.CheckInput(event.srcElement.id);
  }

  SetTimer(Game: Game){
    let boardService = this.boardService
    let router = this.router;
    timer = setInterval(function(){
      Game.Time--;
        if(Game.Time == 0){
            clearInterval(timer);
            Game.EndGame();
            boardService.PostBoard(Game.Board);
            console.log("test");
            router.navigate(['/home']);
        }
    }, 1000);
  }

}
