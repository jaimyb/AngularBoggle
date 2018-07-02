import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { GameComponent } from './game/game.component';
import { LeaderboardService } from './leaderboard.service';
import { BoardService } from './board.service';
import { DataService } from './data.service';
import { PlayerNameInputComponent } from './player-name-input/player-name-input.component';
import { AppRoutingModule } from './/app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LeaderboardComponent,
    GameComponent,
    PlayerNameInputComponent,
    MenuComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LeaderboardService, BoardService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
