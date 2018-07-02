import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlayerNameInputComponent } from './player-name-input/player-name-input.component';
import { MenuComponent } from './menu/menu.component';
import { GameComponent } from './game/game.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: PlayerNameInputComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'game', component: GameComponent },
  { path: 'leaderboard', component: LeaderboardComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
