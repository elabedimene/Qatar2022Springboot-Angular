import { Component, OnInit } from '@angular/core';

import { GamesService } from '../../_services/games.service' ; 
import {Game} from '../../game' ; 

@Component({
  selector: 'app-listgame',
  templateUrl: './listgame.component.html',
  styleUrls: ['./listgame.component.css']
})
export class ListgameComponent implements OnInit {

  games: Game[] = [] ; 
  constructor(public gameService: GamesService) { }

  ngOnInit(): void {
    this.gameService.getAll().subscribe((data: Game[])=>{
      this.games = data;
      console.log(this.games);
    })  
  }

}
