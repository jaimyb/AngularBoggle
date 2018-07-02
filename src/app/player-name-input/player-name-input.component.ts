import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-player-name-input',
  templateUrl: './player-name-input.component.html',
  styleUrls: ['./player-name-input.component.css']
})
export class PlayerNameInputComponent implements OnInit {

  name: string;

  get player(){
    return this.dataService.Player;
  }
  set player(value: string){
    this.dataService.Player = value;
  }

  constructor(private router: Router, private dataService : DataService) { }
  
  ngOnInit() {
    this.name = this.player;
  }

  private ConfirmName(event){
    console.log(event);
    if(this.name != ""){
      this.player = this.name;
      this.router.navigate(['/menu']);
    }
    else{
      alert("Please enter a name.");
    }
  }
}
