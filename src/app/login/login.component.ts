import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
  constructor(private router:Router,private login:LoginService,private fb: FormBuilder,private route: ActivatedRoute){}
  userModel = this.fb.group({
    name: [''],
    mobile: [''],
    email: [''],
    gender: [''],
    topic:['']

  });
  setMessage(userModel){
    // this.loginService.adduser(this.userForm.value);
    this.LoginService.addUser(this.userModel.value);
    this.router.navigate(['table']);
  }

}