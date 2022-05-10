import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { User } from '../user1';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  title = 'tdfForm';
  topics =['angular','react','php'];
  userModel = new User();
  constructor(private router:Router,private login:LoginService){}
  ngOnInit(){
    let data = localStorage.getItem(this.userModel.name);
    return data;
  }
  userdata()
  {
    this.router.navigate(['/userlist']);
    this.login.setMessage(this.userModel);
    // localStorage.setItem(this.userModel.name, JSON.stringify(this.userModel));
    // this.login.userName(this.userModel);
    // this.login.display(this.userModel);
  }
  
}