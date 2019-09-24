import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.token.loggedIn()) {
      this.router.navigateByUrl('/access/login');
    } else {
      if (+this.token.getRole() !== 1) {
        this.router.navigateByUrl('/home');
        return false;
      }
    }
    return true;
  }
  constructor(private token: TokenService, private router: Router) {}
}
