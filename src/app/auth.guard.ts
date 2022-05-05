import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate,Resolve,Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

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
      this.router.navigate(['/login']);
      console.log("2"+this.userModel);

      // window.confirm('The User is Already exists');
      return false;
     }
    }
}

@Injectable({
  providedIn: 'root'
})
export class resolveGuard implements Resolve<any>{
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    throw new Error('Method not implemented.');
  }
}
