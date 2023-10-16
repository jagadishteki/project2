import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output-child',
  templateUrl: './output-child.component.html',
  styleUrls: ['./output-child.component.scss']
})
export class OutputChildComponent implements OnInit {

  constructor() { }
  user = {
    id: 1,
    name: "Jagadish",
    designation: "Software Engineer",
    salary: 70000,
    location: "Hyderabad"
  }
  @Output() data: EventEmitter<any> = new EventEmitter();
  ngOnInit(): void {
  }

  sendData(){
    this.data.emit(this.user);
  }

}
