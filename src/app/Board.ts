import { Die } from './die'

export class Board{

    Player: string;
    Date: string;
    Score: number;
    
    BoardLayout: Array<Array<Die>>
    Dice: Array<Die>
    SelectedDice: Array<Die>
    
    constructor(boardLayout: Array<Array<Die>>, dice: Array<Die>){
        this.BoardLayout = boardLayout;
        this.Dice = dice;
        this.Score = 0;
    }
}