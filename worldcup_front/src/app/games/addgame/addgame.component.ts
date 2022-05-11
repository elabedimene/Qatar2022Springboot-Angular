import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Game } from 'src/app/game';
import { GamesService } from 'src/app/_services/games.service';

@Component({
  selector: 'app-addgame',
  templateUrl: './addgame.component.html',
  styleUrls: ['./addgame.component.css']
})
export class AddgameComponent implements OnInit {

 game: any = {

   equipe1 : '',
    equipe2 : '' , 
    date : '' 
  };
  submitted = false;
  
  constructor(public gameService: GamesService,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  savegame(): void {
    const data = {
      equipe1: this.game.equipe1,
      equipe2: this.game.equipe2,
      date: this.game.date,
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
          equipe1: '',
          equipe2: '',
          date : Date 
          
        };
      }
  }

  


 
  

