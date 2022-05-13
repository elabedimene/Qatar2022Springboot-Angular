import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

import { ListgameComponent } from './games/listgame/listgame.component';
import { authInterceptorProviders, AuthinterceptorService } from './helpers/authinterceptor.service';
import { AddgameComponent } from './games/addgame/addgame.component';
import { ListstadComponent } from './stadium/liststad/liststad.component';
import { AddTicketComponent } from './Tickets/add-ticket/add-ticket.component';
import { AddstadComponent } from './stadium/addstad/addstad.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BoardAdminComponent,
    BoardUserComponent,
    HeaderComponent,
    
    ListgameComponent,
         AddgameComponent,
         ListstadComponent,
         AddTicketComponent,
         AddstadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthinterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
