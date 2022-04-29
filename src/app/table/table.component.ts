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
    // this.route.params.subscribe(params => {
    // this.name = params['name'];
    //   console.log(this.name);
    //   if (this.name != null) {
    //     this.userList.name=(params['name']);
    //     const data = this.login.getUsersByName(this.name);
    //     console.log(this.userList);
    //     if (data) {
    //       console.log(this.userList);
    //       this.userList = (data);
    //     }
    //   }
    // });
  }
  remove(name : string){
    localStorage.removeItem(name);
    console.warn("remove id :" + name);
    this.login.removeUser(name);
    this.user = this.login.getUsers(); 
  }

}
