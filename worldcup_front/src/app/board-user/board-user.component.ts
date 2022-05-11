import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GamesService } from '../_services/games.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {
  games: Game[] = [] ; 
  content?: string;

  constructor(private userService: UserService  , public gameService: GamesService ) { }

  ngOnInit(): void {
    this.userService.getUserBoard().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {
        this.content = JSON.parse(err.error).message;
      }
    });

    this.gameService.getAll().subscribe((data: Game[])=>{
      this.games = data;
      console.log(this.games);
    })  

      
  }



}
