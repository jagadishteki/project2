import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUp } from '../interfaces/sign-up';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http:HttpClient) { }

  isLoggedIn: BehaviorSubject<boolean>  = new BehaviorSubject(false);

  signIn(data:SignUp){
    return this.http.get(`http://localhost:3000/profiles?name=${data.name}&password=${data.password}`, 
    {observe: "response"})
  }

  detailsById(id:number){
    return this.http.get(`https://jsonplaceholder.typicode.com/users?id=${id}`);   
  }
  
}
