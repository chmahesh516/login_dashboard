import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private auth:AuthService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean
    // Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['admin']);
      return false;
    }
    return this.auth.isLoggedIn();
  }
  
}
