import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/login/login.service';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  clientLogin: string;
  clientPassword: string;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    window.sessionStorage.removeItem('token');
  }

  loginFunction(): void{
    const body = new HttpParams()
      .set('username', this.clientLogin)
      .set('password', this.clientPassword)
      .set('grant_type', 'password');

      this.loginService.login(body.toString()).subscribe(data => {
        window.sessionStorage.setItem('token', JSON.stringify(data));
        console.log(window.sessionStorage.getItem('token'));
        this.router.navigate(['contato-list'])
      }, error =>{
          console.log(error);
      });
  }

  
}