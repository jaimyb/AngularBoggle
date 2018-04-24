import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-name-input',
  templateUrl: './player-name-input.component.html',
  styleUrls: ['./player-name-input.component.css']
})
export class PlayerNameInputComponent implements OnInit {

  name: string;
  constructor() { }

  ngOnInit() {
  }

  private StartNewGame(){
    
  }

}
