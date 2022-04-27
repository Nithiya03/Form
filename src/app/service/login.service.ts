import { Injectable } from '@angular/core';
import { User } from '../user1';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public userList: User[] = [{
    name: 'Nithiya',
    email: 'nithiya@gmail.com',
    gender: 'female',
    mobile: 9688931639,
    topic:'angular'
}];
id1:number=1;
  constructor() { }
  setMessage(user: User){
    // user.id = this.id1+1;
    this.userList.push(user);
  }
  getMessage(){
    return this.userList;
  }
  // userName(username:User)
  // {
  //   return this.userList;
  // }
  // display(user1:User){
  //   return this.userList;
  // }
}
