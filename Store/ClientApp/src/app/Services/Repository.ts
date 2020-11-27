import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/';
import { UserModel } from '../Models/user.model';

const apiUrl = "http://localhost:4200/api";
const userUrl = "api/UserModels";

@Injectable({
  providedIn: 'root'
})
export class Repository {
  users: UserModel[];
  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

constructor(private http: HttpClient) {
}

 login(name: string, password: string): Observable<boolean> {
    return this.http.post<boolean>("/api/login", { name: name, password: password })
  }
  CreateUser(user: UserModel) {
    return this.http.post(apiUrl + '/User/' , user);
  }

  GetAllUsers() {
    this.http.get<UserModel[]>(apiUrl + '/User')
      .subscribe(data => this.users = data
      );
  }

  logout(){

  }
  
}
