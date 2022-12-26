import { Usuario } from './usuario';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  usuario:Usuario = new Usuario();

  hide = true;

  constructor(private authService: AuthService) {

  }

  fazerLogin() {
    // console.log(this.usuario);
    this.authService.fazerLogin(this.usuario);
  }


}
