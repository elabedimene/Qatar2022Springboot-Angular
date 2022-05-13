import { Component, OnInit } from '@angular/core';
import { StadiumService } from 'src/app/_services/stadium.service';

@Component({
  selector: 'app-addstad',
  templateUrl: './addstad.component.html',
  styleUrls: ['./addstad.component.css']
})
export class AddstadComponent implements OnInit {
  stad: any = {
    adress : '',
   capacity : '',
    
  };

  submitted = false;
  constructor(private stadService : StadiumService) { }

  ngOnInit(): void {
  }


  savegame(): void {
    const data = {
      address: this.stad.address,
      capacity : this.stad.capacity,
    };

    this.stadService.create(data)
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
        this.stad = {
          address : '' ,
          capacity: 0,
          
          
        };
      }
}
