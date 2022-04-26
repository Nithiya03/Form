import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { User } from './user1';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  title = 'tdfForm';
  topics =['angular','react','php'];
  userModel: any;
  // userModel = new User('','',0,'','');
  constructor(private router:Router,private login:LoginService,private fb: FormBuilder,private route: ActivatedRoute){
  this.userModel = this.fb.group({
    name: ['', [Validators.required]],
    mobile: [''],
    email: ['', [Validators.required, Validators.email]],
    gender: ['', [Validators.required]],
    // id: [0, [Validators.required]],
    topic: ['', [Validators.required]],
  });
}

  // setMessage(userModel:User){
  //   // this.loginService.adduser(this.userForm.value);
  //   this.login.setMessage(this.userModel.value);
  // }
  userdata(){  
    this.login.setMessage(this.userModel.value);
  
    this.router.navigate(['/table']);}

}