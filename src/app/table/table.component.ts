import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { User } from '../user1';
// import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  name : string ='';
  userList= new User();
  user : User[] = [];
  constructor(private login:LoginService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit():void{
    this.user=this.login.getUsers();
  }
  remove(name : string){
    console.warn("remove id :" + name);
    this.login.removeUser(name);
    this.user = this.login.getUsers(); 
  }

  adduser(){
    this.router.navigate(['/adduser'])
  }
}
