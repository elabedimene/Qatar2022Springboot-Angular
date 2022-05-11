import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  showAdminBoard = false;
  showUserBoard = false;
  
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService ) { }
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showUserBoard = this.roles.includes('ROLE_USER');
      console.log(this.tokenStorage.getToken());
      
      this.tokenStorage.saveToken(this.tokenStorage.getToken());
      this.tokenStorage.saveUser(this.tokenStorage.getUser());
  }
}
  
onSubmit(f : NgForm): void {
  console.log("f" , f);
  const { username, password } = this.form;
  this.authService.login(username, password).subscribe({
    next: data => {
      
      
      console.log(data);
      
      this.tokenStorage.saveToken(data.accessToken);
      this.tokenStorage.saveUser(data);
      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      console.log("from on submit login component ");
      
      //if (this.roles(includes))
      this.reloadPage();
      //this.router.navigateByUrl('/');
    },
    error: err => {
      this.errorMessage = err.error.message;
      this.isLoginFailed = true;
    }
  });
}




  
  reloadPage(): void {
    window.location.reload();
  }
}