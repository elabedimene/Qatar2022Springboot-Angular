import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/category';
import { Game } from 'src/app/game';
import { Ticket } from 'src/app/ticket';
import { GamesService } from 'src/app/_services/games.service';
import { TicketService } from 'src/app/_services/ticket.service';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {
tick : Ticket[] =[];
  categ: Category[] = [] ; 
  game : Game[] = [];
   submitted = false;
   
   constructor(public tickService: TicketService,
     private router: Router , public gameS : GamesService) { }
 
   ngOnInit(): void {
     
    this.tickService.getAllCateg().subscribe((data: Category[])=>{
      this.categ = data;
      console.log(this.categ);
    })  


    this.gameS.getAll().subscribe((data: Game[])=>{
      this.game = data;
      console.log(this.game);
    })  
   }
 
   


   savetick(): void {
     const data = {
      //categ: this.tick.categ,
       
     };
 
     this.tickService.create(data)
       .subscribe({
         next: (res) => {
           console.log(res);
           this.submitted = true;
         },
         error: (e) => console.error(e)
       });
     }
}
