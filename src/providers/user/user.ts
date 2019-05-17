import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../../models/user-model';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }

  createUser(user:UserModel)
  {
    return this.http.post('http://a227fbe2.ngrok.io/api/users', user);
  }

  userLogin(user: string , pwd: string)
  {
    return this.http.post('http://a227fbe2.ngrok.io/api/login', 
    {
      user,
      pwd
    });
  }
}