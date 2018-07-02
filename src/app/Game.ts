import { Board } from './board';
import { Die } from './die';

export class Game {

    Time: number;
    SelectedDice: Array<Die>
    CurrentWord: string;
    Board: Board;
    UsedWords: Array<string>;

    constructor(board: Board){
        this.Time = 180;
        this.Board = board;
        this.CurrentWord = "";
        this.UsedWords = new Array<string>();
        this.SelectedDice = new Array<Die>();
    }
    
    CheckInput(id){
        if(this.SelectedDice.length == 0)
        {
            this.SelectedDice.push(this.Board.Dice[id]);
            this.Board.Dice[id].Selected = true;
            this.CurrentWord += this.Board.Dice[id].Character;
            return true;
        }
        if(this.SelectedDice.indexOf(this.Board.Dice[id]) < 0){
            let lowestRow = this.Board.Dice[id].Row - 1;
            let highestRow = this.Board.Dice[id].Row + 2;
            if(this.Board.Dice[id].Row == 0){
                lowestRow = this.Board.Dice[id].Row;
            }
            if(this.Board.Dice[id].Row == 3){
                highestRow = this.Board.Dice[id].Row + 1;
            }     
            for(lowestRow; lowestRow < highestRow; lowestRow++){
                let lowestColumn = this.Board.Dice[id].Column - 1;
                let highestColumn = this.Board.Dice[id].Column + 2;
                if(this.Board.Dice[id].Column == 0){
                    lowestColumn = this.Board.Dice[id].Column;
                }
                if(this.Board.Dice[id].Column == 3){
                    highestColumn = this.Board.Dice[id].Column + 1;
                }
                for(lowestColumn; lowestColumn < highestColumn; lowestColumn++){
                    if(this.Board.BoardLayout[lowestRow][lowestColumn] == this.SelectedDice[this.SelectedDice.length - 1]){
                        this.SelectedDice.push(this.Board.Dice[id]);
                        this.CurrentWord += this.Board.Dice[id].Character;
                        console.log("Correct input");
                        this.Board.Dice[id].Selected = true; 
                        return true;          
                    }
                }
            }
            alert("Please select the letters in sequence!");
            return false;
        }
        if(id == this.SelectedDice[this.SelectedDice.length - 1].Id){
            this.SelectedDice.pop();
            this.CurrentWord = this.CurrentWord.substring(0, this.CurrentWord.length - 1);
            this.Board.Dice[id].Selected = false;
            return true;
        }
    }

    CheckScore(){
        if(this.SelectedDice.length >= 8){
            this.Board.Score = this.Board.Score + Number(11)
        }
        else{
            switch(this.SelectedDice.length){
                case 3:
                    this.Board.Score++;
                break;
                case 4:
                    this.Board.Score++;
                break;
                case 5:
                    this.Board.Score = this.Board.Score + Number(2);
                break;
                case 6:
                    this.Board.Score = this.Board.Score + Number(3)
                break;
                case 7:
                    this.Board.Score = this.Board.Score + Number(5)
                break;
                default:
                alert("Please make a word that is longer then 2 characters!");
                break;
            }   
        }
        this.SelectedDice.forEach(Die => {
            Die.Selected = false;
        });
        this.CurrentWord = "";
        this.SelectedDice = [];
    }

    EndGame(){
        alert("The game has ended");
    }
}