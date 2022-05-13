import { Component, OnInit } from '@angular/core';

import { GamesService } from '../../_services/games.service' ; 
import {Game} from '../../game' ; 
import { StadiumService } from 'src/app/_services/stadium.service';
import { Stadium } from 'src/app/Stadium';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listgame',
  templateUrl: './listgame.component.html',
  styleUrls: ['./listgame.component.css']
})
export class ListgameComponent implements OnInit {




  game: any = {
    id : 0 ,
    equipe1 : '',
    equipe2 : '' , 
     date : '' 
     //stad : null 
   };
   deleted = false;
   cgame : any ;
  games: Game[] = [] ; 
  stadium: Stadium[] = [] ; 
  constructor(public gameService: GamesService , public stadService : StadiumService 
    , private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getAll() ;
    this.stadService.getAll().subscribe((data: Stadium[])=>{
      this.stadium = data;
      console.log(this.stadium);
    })
   
  }
  getAll(){
    this.gameService.getAll().subscribe((data: Game[])=>{
      this.games = data;
      console.log(this.games);
    })  

  }

  deletegame(id : number): void {
    //console.log("aaaaaaaaaaaaaaaa" +game.id);
    
    this.gameService.delete(id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.deleted = true;
this.getAll();
        },
        error: (e) => console.error(e)
      });
    }

   
}
