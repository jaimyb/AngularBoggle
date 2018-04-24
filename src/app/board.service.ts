import { Injectable } from '@angular/core';
import { Die } from './die';
import { Observable } from 'rxjs/Observable';
import { Board } from './board';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";

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

  public GetBoardById(id: number): Observable<Board>{
    return this.http.get(this.Url + id).map(res => {
      return res.json().map(board => {
        let apiDice = board.Dies;
        let dice = new Array<Die>();
        let layout = new Array<Array<Die>>();
        let randomArr = this.RandomNumberArray();
        let count = 0;

        for(let a = 0; a < 4; a++) {
          for(let b = 0; b < 4; b++){
              let die = new Die(count);
              die.Row = a;
              die.Column = b;
              die.Character = apiDice[count].Letter;
              layout[a][b] = die;
              dice.push(die);
              count++;  
          }
        }
        return new Board(layout,dice);
      })
    });
  }

  public generateNewBoard(): Board{
    let dice = new Array<Die>();
    let layout = new Array<Array<Die>>();
    let count = 0;
    let randomArr = this.RandomNumberArray();

    for(let a = 0; a < 4; a++) {
      for(let b = 0; b < 4; b++){
          let die = new Die(count);
          die.Row = a;
          die.Column = b;
          die.Character = diceCharacters[randomArr[count]][Math.floor((Math.random() * 6) + 0)];
          layout[a][b] = die;
          dice.push(die);
          count++;  
      }
    }
    return new Board(layout,dice);
  }

  private RandomNumberArray(): Array<number>{
    let arr = []
    while(arr.length < 16){
        let randomnumber = Math.floor(Math.random()*16);
        if(arr.indexOf(randomnumber) > -1) continue;
        console.log(randomnumber);
        arr[arr.length] = randomnumber;
    }
    return arr;
  }

}
