export class Die{
    
    Id: number;
    Character: string;
    Row: number;
    Column: number;
    Selected: boolean;
    
    constructor(id: number){
        this.Id = id;
    }
}