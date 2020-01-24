import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {


  constructor( public authService: AuthService ) { }

  ngOnInit() {
  }

  logIn() {
    this.authService.login();
  }

  logOut() {
    this.authService.logout();
  }

}
