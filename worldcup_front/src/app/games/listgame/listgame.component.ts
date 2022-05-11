import { Component, OnInit } from '@angular/core';

import { GamesService } from '../../_services/games.service' ; 
import {Game} from '../../game' ; 
import { StadiumService } from 'src/app/_services/stadium.service';
import { Stadium } from 'src/app/Stadium';

@Component({
  selector: 'app-listgame',
  templateUrl: './listgame.component.html',
  styleUrls: ['./listgame.component.css']
})
export class ListgameComponent implements OnInit {

  games: Game[] = [] ; 
  stadium: Stadium[] = [] ; 
  constructor(public gameService: GamesService , public stadService : StadiumService) { }

  ngOnInit(): void {
    this.gameService.getAll().subscribe((data: Game[])=>{
      this.games = data;
      console.log(this.games);
    })  

   
  }

}
