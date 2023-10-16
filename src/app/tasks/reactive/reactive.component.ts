import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  langs: any[] = ["html", "css", "javascript", "jquery", "angular"];
  reactive: FormGroup = this.fb.group({
    languages: this.fb.array([

    ])
  })
  ngOnInit(): void {
  }
  updateLangs(event: any) {
    let langArr = this.reactive.get('languages') as FormArray;
    if(event.target.checked){
      langArr.push(new FormControl(event.target.value));
    }else{
      langArr.controls.forEach((item,index,arr)=>{
        if(item.value==event.target.value){
          langArr.removeAt(index);
        }
      })
    }
  }
  submit() {
    console.log(this.reactive.value);
  }

}
