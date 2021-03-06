import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {

  content= {};
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe({
      next: data => {
        console.log(this.content);
        
        this.content = data;
      }
    });
  }




  }


