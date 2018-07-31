import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot }    from '@angular/router';
import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class KeepLoggedinService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }
  
  checkLogin(url: string): boolean {
    if (!this.authService.isLoggedIn) { return true; }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    console.log(this.authService.redirectUrl);

    // Navigate to the login page with extras
    this.router.navigate(['/']);
    return false;
  }
}
