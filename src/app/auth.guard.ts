import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate,Router, RouterStateSnapshot, UrlTree} from '@angular/router';

import { LoginService } from './service/login.service';
import { User } from './user1';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  userModel = new User();
    constructor(private router:Router , private login:LoginService){}

    canActivate():boolean{
     if (this.login.loggedIn()){
       return true;
     }
     else{
       this.router.navigate(['/table']);
       return false;
     }
    }
}
