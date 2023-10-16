import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ref-child',
  templateUrl: './ref-child.component.html',
  styleUrls: ['./ref-child.component.scss']
})
export class RefChildComponent implements OnInit {

  constructor(private http:HttpClient) { }
  users:any;
  map:any;

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res)=>{
      this.users = res;
    })
  }
}
