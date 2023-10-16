import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inp-parent',
  templateUrl: './inp-parent.component.html',
  styleUrls: ['./inp-parent.component.scss']
})
export class InpParentComponent implements OnInit {

  constructor() { }
  data = {
    id: 1,
    name: "Jagadish",
    designation: "Software Engineer",
    salary: 70000,
    location: "Hyderabad"
  }
  user:any;

  ngOnInit(): void {
  }

  sendData(){
    this.user = this.data;
  }

}
