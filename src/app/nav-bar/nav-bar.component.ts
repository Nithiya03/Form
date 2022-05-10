import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { User } from '../user1';
import { User1 } from '../user/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  userList: User[] = [];
  display :boolean = false;
  constructor(private login:LoginService,private router:Router) { }

  ngOnInit(): void {
    this.userList=this.login.getUsers();
  }

  logIn(){
    this.display=true;
  }
  logOut(){
    this.display=false;
  }
}
