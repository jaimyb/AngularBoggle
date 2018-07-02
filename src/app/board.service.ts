import { Injectable } from '@angular/core';
import { Die } from './die';
import { Observable } from 'rxjs/Observable';
import { Board } from './board';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";

import "rxjs/add/observable/of";
import { Game } from './game';

const diceCharacters = [
  ['R', 'I', 'F', 'O', 'B', 'X'],
  ['I', 'F', 'E', 'H', 'E', 'Y'],
  ['D', 'E', 'N', 'O', 'W', 'S'],
  ['U', 'T', 'O', 'K', 'N', 'D'],
  ['H', 'M', 'S', 'R', 'A', 'O'],
  ['L', 'U', 'P', 'E', 'T', 'S'],
  ['A', 'C', 'I', 'T', 'O', 'A'],
  ['Y', 'L', 'G', 'K', 'U', 'E'],
  ['Q', 'B', 'M', 'J', 'O', 'A'],
  ['E', 'H', 'I', 'S', 'P', 'N'],
  ['V', 'E', 'T', 'I', 'G', 'N'],
  ['B', 'A', 'L', 'I', 'Y', 'T'],
  ['E', 'Z', 'A', 'V', 'N', 'D'],
  ['R', 'A', 'L', 'E', 'S', 'C'],
  ['U', 'W', 'I', 'L', 'R', 'G'],
  ['P', 'A', 'C', 'E', 'M', 'D']
];

@Injectable()
export class BoardService {

  private Url = "http://localhost:49885/api/Boards/";

  constructor(private http: Http) { 

  }

  // StartGameById(id: number): Observable<Game>{
  //   console.log("hello");
  //   return new Observable((observer) => {
  //     const {next, error, complete} = observer;
  //     var test = this.http.get(this.Url + id).map(res => res);
  //     test.subscribe(board => {
  //       let apiDice = board.json()['Dies'];
  //       let dice = new Array<Die>();
  //       let layout = new Array<Array<Die>>();
  //       let randomArr = this.RandomNumberArray();        
  //       let count = 0;
  //       let currentBoard;

  //       for(let a = 0; a < 4; a++) {
  //         let row = new Array<Die>();
  //         for(let b = 0; b < 4; b++){
  //             let die = new Die(count);
  //             die.Row = a;
  //             die.Column = b;
  //             die.Character = apiDice[count].Letter;
  //             row.push(die);
  //             dice.push(die);
  //             count++;  
  //         }
  //         layout.push(row);
  //       }
  //       currentBoard = new Board(layout,dice);
  //       observer.next(new Game(currentBoard));
  //       observer.complete();
  //     });
  //   });
  // }

  StartGameById(id: number): Observable<Game>{
    
    return this.http.get(this.Url + id).map(board => {
      let apiDice = board.json()['Dies'];
      let dice = new Array<Die>();
      let layout = new Array<Array<Die>>();
      let randomArr = this.RandomNumberArray();        
      let count = 0;
      let currentBoard;

      for(let a = 0; a < 4; a++) {
        let row = new Array<Die>();
        for(let b = 0; b < 4; b++){
            let die = new Die(count);
            die.Row = a;
            die.Column = b;
            die.Character = apiDice[count].Letter;
            row.push(die);
            dice.push(die);
            count++;  
        }
        layout.push(row);
      }
      currentBoard = new Board(layout,dice);
      console.log(currentBoard);
      return new Game(currentBoard);
    });


  }

  StartNewGame(): Game{
    let dice = new Array<Die>();
    let layout = new Array<Array<Die>>();
    let count = 0;
    let randomArr = this.RandomNumberArray();

    for(let a = 0; a < 4; a++) {
      let row = new Array<Die>();
      for(let b = 0; b < 4; b++){
          let die = new Die(count);
          die.Row = a;
          die.Column = b;
          die.Character = diceCharacters[randomArr[count]][Math.floor((Math.random() * 6) + 0)];
          row.push(die);
          dice.push(die);
          count++;  
      }
      layout.push(row);
    }
    return new Game(new Board(layout,dice));
  }

  CheckWord(word: string): Observable<Boolean>{
    let url = "http://localhost:49885/api/Words/" + word.toLowerCase();
    console.log(url);
    return this.http.get(url).map(result => {
      console.log(result);
      let bool: boolean = result.json();
      console.log(bool);
      return bool;
    });
  }

  PostBoard(board: Board){
    console.log(board);
    let Board = {Player: board.Player, Date: new Date().toLocaleDateString, Dies: [], Score: board.Score};
    
    
    board.Dice.forEach(Die => {
      var die = {Letter: Die.Character};
      Board.Dies.push(die);
    });

    let ob = this.http.post(this.Url, Board).subscribe(data => console.log(data));
  }

  private RandomNumberArray(): Array<number>{
    let arr = []
    while(arr.length < 16){
        let randomnumber = Math.floor(Math.random()*16);
        if(arr.indexOf(randomnumber) > -1) continue;
        arr[arr.length] = randomnumber;
    }
    return arr;
  }

}
