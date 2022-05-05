import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './service/login.service';
import { User } from './user1';
import { User1 } from './user/user';

@Injectable({
  providedIn: 'root'
})
export class ChildguardGuard implements CanActivateChild {
    userModel = new User();
    constructor(private router:Router , private login:LoginService){}

    canActivateChild(){
     if (this.login.logged()){
       this.router.navigate(['/dispaly']);
       return true;
     }
     else{
       window.confirm('Invalid Login');
       return false;
     }
    }
  }
