import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User1} from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Login';

  userLogin=new User1('Nithiya','Nithiya@03');

  constructor(private router:Router){}

  btnClick(){
    this.router.navigate(['login']);
  }
}
