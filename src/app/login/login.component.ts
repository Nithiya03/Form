import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user1';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  title = 'tdfForm';
  topics =['angular','react','php'];
  userModel=new User('','',0,'');
  constructor(private router:Router){}
  data(){
    this.router.navigate(['table']);
  }

}