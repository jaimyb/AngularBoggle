export class Die{
    
    Id: number;
    Character: string;
    Coordinates: Array<number>;
    
    constructor(id: number, character: string, coordinates: Array<number>){
        this.Id = id;
        this.Character = character;
        this.Coordinates = coordinates;
    }
}