import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inp-child',
  templateUrl: './inp-child.component.html',
  styleUrls: ['./inp-child.component.scss']
})
export class InpChildComponent implements OnInit {

  constructor() { }
  @Input()
  user = {};


  ngOnInit(): void {
    console.log(this.user);
  }

}
