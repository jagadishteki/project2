import { Component, OnInit } from '@angular/core';
import { cdInterface } from '../../services/guards/deactivate.guard';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit, cdInterface {

  constructor() { }
  name: any;
  email: any;
  myForm:any;
  
  
  ngOnInit(): void {
    let selected = [1,3];
    this.hobbies.forEach((ele:any)=>{
      if(selected.includes(ele.id)){
        ele.isSelected=true;
      }
    })
  }

  submit(val: any){

    let data = {
      name: val.name,
      gender: val.gender,
      email: val.email,
      password: val.password,
      hobbies: this.getHobbies()
    };
    console.log(data);

  }

  canExit(){
    if(this.name || this.email){
      return window.confirm("Unsaved Changes are there.  Do you really want to leave?")
    }
    return true;

  }

  hobbies = [
    {id:1, name: "Reading Books", isSelected: false},
    {id:2, name: "Playing Sports", isSelected: false},
    {id:3, name: "Exercise", isSelected: false},
    {id:4, name: "Travelling", isSelected: false},
  ];

  getHobbies(){
    return this.hobbies.filter((ele,index,arr)=>{
      return ele.isSelected===true;
    }).map((ele,index,arr)=>{
      return ele.id;
    })
  }


    
  




}
;