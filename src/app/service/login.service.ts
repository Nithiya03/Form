import { Injectable } from '@angular/core';
import { User } from '../user1';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public userList: User[] = [{
    id:1,
    name: 'Nithiya',
    email: 'nithiya@gmail.com',
    gender: 'female',
    mobile: 9688931639,
    topic:'angular'
}];
id1:number=0;
  constructor() { }
  setMessage(user: User){
    user.id = this.userList.length+1;
    this.userList.push(user);

  }
  getUsersByName(name : String){
    this.userList = this.userList.filter(x => x.name != name);
  }
  getUsers(){
    return this.userList
  }
  getUsersByID(id: number){
    return this.userList.find(x => x.id == id)
  }
  removeUser(name : String) {
    this.userList = this.userList.filter(x => x.name != name);
}

  loggedIn(){
    return localStorage.getItem(this.userList.filter(x=>x.name))

  }
}
