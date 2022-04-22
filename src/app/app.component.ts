
  
import { Component } from '@angular/core';
import { User} from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tdfForm';
  topics =['angular','react','php'];
  userModel=new User('','18euee065@skcet.ac.in',635241789,'');
  onSubmit()
  {
    console.log(this.userModel);
  }
}
