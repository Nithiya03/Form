import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private router:Router) { }
  canActivate(): boolean {
    localStorage.setItem('Nithiya','Nithu');
    const data = localStorage.getItem('Nithiya');
    console.log(data);
    if(!data){
      this.router.navigate(['/login']);
      return false;
    }
    else{
      this.router.navigate(['/userlist'])
      return true;
    }
  }
  
}
