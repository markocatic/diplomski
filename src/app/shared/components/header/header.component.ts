import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private auth: AuthService, private token: TokenService) {}

  public loggedIn: boolean;

  ngOnInit() {
    this.auth.authStatus.subscribe(value => (this.loggedIn = value));
  }

  navigateToSmartphones() {
    this.router.navigateByUrl('/categories');
  }

  navigateToLogin() {
    this.router.navigateByUrl('access/login');
  }

  navigateToRegister() {
    this.router.navigateByUrl('access/register');
  }

  logout(event: MouseEvent) {
    event.preventDefault;
    this.token.remove();
    this.auth.changeAuthStatus(false);
    this.router.navigateByUrl('/');
  }
}
