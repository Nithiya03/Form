import { Injectable } from '@angular/core';
import { User } from './user1';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private userList: User[] = [{
    name: '',
    email: '',
    gender: '',
    mobile: 9876543210,
    topic:''
}];
  constructor() { }
  setMessage(user: User){
    this.userList.push(user);
  }
  getMessage(){
    return this.userList;
  }
}
