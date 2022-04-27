import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { User } from '../user1';
import {MatIconModule} from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
// import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  userList: User[] = [];
  constructor(private login:LoginService) { }

  ngOnInit(): void {
    this.userList=this.login.getMessage();
  }

}
