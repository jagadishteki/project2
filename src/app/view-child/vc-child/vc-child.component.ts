import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vc-child',
  templateUrl: './vc-child.component.html',
  styleUrls: ['./vc-child.component.scss']
})
export class VcChildComponent implements OnInit {

  constructor() { }
  count: number = 0;
  ngOnInit(): void {
  }

  increment(){
    this.count++;
  }

  decrement(){
    this.count--;
  }

}
