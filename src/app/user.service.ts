import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from './users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {private http:HttpClient}

  getuser() : Observable <user[]>{
    return this.http.get<user[]>('https://tavana-node.herokuapp.com/auth/login');
  }

