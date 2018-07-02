import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Game } from './game';
import "rxjs/add/operator/map";

@Injectable()
export class DataService {
  Player: string;
  BoardId: number;

  constructor() {
    this.Player = "";
   }

}
