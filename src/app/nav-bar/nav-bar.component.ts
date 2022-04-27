import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { User } from '../user1';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  userList: User[] = [];
  constructor(private login:LoginService) { }

  ngOnInit(): void {
    this.userList=this.login.getMessage();
  }

}
