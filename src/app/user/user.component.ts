import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User1} from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  
  userLogin=new User1('','');

  constructor(private router:Router){}
  ngOnInit(): void {
  }
  btnClick(){
    this.router.navigate(['/userlist']);
  }

}
