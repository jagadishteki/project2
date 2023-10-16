import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { VcChildComponent } from '../vc-child/vc-child.component';

@Component({
  selector: 'app-vc-parent',
  templateUrl: './vc-parent.component.html',
  styleUrls: ['./vc-parent.component.scss']
})
export class VcParentComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }
  parentCount: number = 0;

  @ViewChild('inputDate') inputDate!: ElementRef;
  @ViewChild('inputAge') inputAge!: ElementRef;

  @ViewChild(VcChildComponent, {static: true}) vcChild!: VcChildComponent;

  ngAfterViewInit(){

  }

  getDate(){
    let inpYear = new Date(this.inputDate.nativeElement.value).getFullYear();
    let preYear = new Date().getFullYear();
    let diff = preYear - inpYear;
    this.inputAge.nativeElement.value = diff;
  }

  increment(){
    this.vcChild.increment();
    this.parentCount = this.vcChild.count;
  }

  decrement(){
    this.vcChild.decrement();
    this.parentCount = this.vcChild.count;
  }

}
