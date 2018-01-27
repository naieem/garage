import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router  } from '@angular/router';
import { LoginModel } from '../login-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // ----------- variable declaration ------------//
  private login: LoginModel;
  private errorMsg: string;
  constructor(public router: Router) {
    this.login = new LoginModel();
   }

  ngOnInit() {
  }
  // ----------- login checking function ------------//
  doLogin() {
    if (this.login.email === 'naieemsupto@gmail.com' && this.login.password === '123') {
      console.log('login succesfull');
      this.router.navigate(['']);
    } else {
      console.log('login failed');
    }
  }

}
