import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from './users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {}
  

  getuser(model: any){
    return this.http.post('https://tavana-node.herokuapp.com/auth/login', model );
  }
  senduser(model: any){
    return this.http.post<any>('https://tavana-node.herokuapp.com/auth/signup', model)
  }
}