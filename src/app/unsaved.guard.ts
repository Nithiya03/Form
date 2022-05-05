import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedGuard implements CanDeactivate<LoginComponent> {
  canDeactivate(com:LoginComponent){
    if(!(com.userModel.email&&com.userModel.gender&&com.userModel.id&&com.userModel.mobile&&com.userModel.name&&com.userModel.topic)){
      return window.confirm('Are you sure the entered details are valid');
    }
    return true;
  }
  
}
