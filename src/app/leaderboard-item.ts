export class LeaderboardItem{
    Player: string;
    Date: string;
    Score: number;
    BoardId: number;

    constructor(player: string, date: string, score: number, boardId: number){
        this.Player = player;
        this.Date = date;
        this.Score = score;
        this.BoardId = boardId;
    }
}