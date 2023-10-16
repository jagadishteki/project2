import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private http:HttpClient) { }
  users:any;
  map:any;

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res)=>{
      this.users = res;
    })
  }

}
