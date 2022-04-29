import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedGuard implements CanDeactivate<LoginComponent> {
  canDeactivate(com:LoginComponent){
    if(com.userModel){
      return window.confirm('If want to leave the page');
    }
    return true;
  }
  
}
