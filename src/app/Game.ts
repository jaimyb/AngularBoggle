import { Board } from './board';

export class Game {
    
    Player: string;
    Date: string;
    Score: number;
    Time: number;

    constructor(player: string, date: string){
        this.Player = player;
        this.Date = date;
    }
}