import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Game } from 'src/app/game';
import { Stadium } from 'src/app/Stadium';
//import { Stadium } from 'src/app/stadium';

import { GamesService } from 'src/app/_services/games.service';
import { StadiumService } from 'src/app/_services/stadium.service';

@Component({
  selector: 'app-addgame',
  templateUrl: './addgame.component.html',
  styleUrls: ['./addgame.component.css']
})
export class AddgameComponent implements OnInit {

 game: any = {
    name : '',
   equipe1 : '',
    equipe2 : '' , 
   date : '' ,
    stad : null
  };

 stad: Stadium[] = [] ; 
  submitted = false;
  
  constructor(public gameService: GamesService,public stadService : StadiumService ,
    private router: Router) { }

  ngOnInit(): void {


     
    this.stadService.getAll().subscribe((data: Stadium[])=>{
      this.stad = data;
      console.log(this.stad);
    })
    
  }

  savegame(): void {
  console.log(this.game);
   const ob = { "id" : this.game.stad }
    const data = {
      equipe1: this.game.equipe1,
     equipe2: this.game.equipe2,
      date: this.game.date,
      name: this.game.name,
      stad : ob ,
    };

    this.gameService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
    }


      newgame(): void {
        this.submitted = false;
        this.game = {
          name : '' ,
          equipe1: '',
          equipe2: '',
          date : Date ,
          stad : null ,
          
        };
      }
  

    }


 
  

