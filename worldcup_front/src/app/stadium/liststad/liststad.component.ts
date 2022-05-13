import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stadium } from 'src/app/Stadium';
import { StadiumService } from 'src/app/_services/stadium.service';

@Component({
  selector: 'app-liststad',
  templateUrl: './liststad.component.html',
  styleUrls: ['./liststad.component.css']
})
export class ListstadComponent implements OnInit {
  deleted = false;
  cstad: Stadium= {
    id : 0 ,
    address : '',
    capacity : 0 
    
     
   };
 // cstad : any ;
  @Input()  Stad?:Stadium ; 
  stadium: Stadium[] = [] ; 
  constructor(public gameService: StadiumService , public stadService : StadiumService 
    , private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
     this.getAll() ; 
  }


getAll() {
  this.gameService.getAll().subscribe((data: Stadium[])=>{
    this.stadium = data;
    console.log(this.stadium);
     
  }) 
} 

    deletestad(id : number): void {
        this.stadService.delete(id)
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
