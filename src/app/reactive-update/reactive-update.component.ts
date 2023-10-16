import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-reactive-update',
  templateUrl: './reactive-update.component.html',
  styleUrls: ['./reactive-update.component.scss']
})
export class ReactiveUpdateComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  langs: any[] = ["html", "css", "javascript", "jquery", "angular"];
  languages:any[]=[];
  reactive: FormGroup = this.fb.group({
    languages: this.fb.array([

    ])
  })
  ngOnInit(): void {
    this.languages = ["html", "jquery"];
    let langArr = this.reactive.get('languages') as FormArray;
    this.languages.forEach((item,index,arr)=>{
      langArr.push(new FormControl(item))
    })
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
