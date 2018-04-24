import { Board } from './board';
import { BoardService } from './board.service';

export class Game {

    Time: number;
    Board: Board;

    constructor(private BoardService: BoardService){
        
    }
}