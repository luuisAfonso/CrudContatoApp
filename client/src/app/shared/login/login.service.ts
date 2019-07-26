import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public API = "http://localhost:8080"
  public LOGIN_API = this.API + "/login"

  constructor(private http: HttpClient) {  }

  login(loginPayload): any{
    const headers = {
      'Authorization': 'basic ' + btoa('crudapp-client:crudapp-secret'),
      'content-type': 'application/x-www-form-urlencoded'
    }
    return this.http.post(this.API + '/oauth/token', loginPayload, {headers});
  }

  getUsers() {
    return this.http.get(this.API + '/users/user?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token);
  }

  getUserById(id: number) {
    return this.http.get(this.API + '/users/user/' + id + '?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token);
  }

  createUser(user: any){
    return this.http.post(this.API + '/users/user?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token, user);
  }

  updateUser(user: any): any {
    return this.http.put(this.API + '/users/user/' + user.id + '?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token, user);
  }

  deleteUser(id: number){
    return this.http.delete(this.API + '/users/user/' + id + '?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token);
  }
}


