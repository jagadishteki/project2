import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  constructor() { }

  students: any = [
    { id: 1, name: "Jagadish", marks: 400 },
    { id: 2, name: "Zain", marks: 390 },
    { id: 3, name: "Chandra Sekhar", marks: 430 },
    { id: 4, name: "Zain", marks: 320 },
    { id: 5, name: "Sobhan", marks: 360 },
    { id: 6, name: "Venkat", marks: 180 },
    { id: 7, name: "Sobhan", marks: 220 },
  ]

  ngOnInit(): void {
  }

}
