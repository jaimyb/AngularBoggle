import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { PlayerComponent } from './player/player.component';
import { GameComponent } from './game/game.component';
import { HeroService } from './hero.service';
import { DieService } from './die.service';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    LeaderboardComponent,
    PlayerComponent,
    GameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [HeroService, DieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
