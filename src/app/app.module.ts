import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { GameComponent } from './game/game.component';
import { LeaderboardService } from './leaderboard.service';
import { BoardService } from './board.service';
import { PlayerNameInputComponent } from './player-name-input/player-name-input.component';



@NgModule({
  declarations: [
    AppComponent,
    LeaderboardComponent,
    GameComponent,
    PlayerNameInputComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [LeaderboardService, BoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
