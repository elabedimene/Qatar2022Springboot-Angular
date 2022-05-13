import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { ListgameComponent } from './games/listgame/listgame.component';
import { AddgameComponent } from './games/addgame/addgame.component';
import { ListstadComponent } from './stadium/liststad/liststad.component';
import { AddTicketComponent } from './Tickets/add-ticket/add-ticket.component';
import { AddstadComponent } from './stadium/addstad/addstad.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'games', component: ListgameComponent },
  { path: 'addgame', component: AddgameComponent },
  { path: 'addticket', component: AddTicketComponent },
  { path: 'stadiums', component: ListstadComponent },
  { path: 'addstad', component: AddstadComponent },

  
  { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
