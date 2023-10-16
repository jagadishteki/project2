import { Component, OnInit } from '@angular/core';
import { Location } from '../model/location';

@Component({
  selector: 'app-template-form-update',
  templateUrl: './template-form-update.component.html',
  styleUrls: ['./template-form-update.component.scss']
})
export class TemplateFormUpdateComponent implements OnInit {

  constructor() { }
  user: any;
  hobby: number[] = [];
  hobbies!:any[];

  locations: Location[] = [
    { id: 1, location: "guntur" },
    { id: 2, location: "Hyderabad" },
    { id: 3, location: "Bangalore" },
    { id: 4, location: "Ongole" },
    { id: 5, location: "Chennai" }
  ];

  
  ngOnInit(): void {
    this.user = {
      name: "jagadish",
      gender: "Male",
      email: "jagadishteki@gmail.com",
      password: "123456",
      location: 2,
      terms: true,
      hobbies:[1,3]
    }

    this.hobbies = [
      { id: 1, hobby: "reading", status: false },
      { id: 2, hobby: "writing", status: false },
      { id: 3, hobby: "listening", status: false },
      { id: 4, hobby: "playing", status: false }
  
    ];

    this.hobbies.forEach((ele,index,arr)=>{
      if(this.user.hobbies.includes(ele.id)){
        ele.status=true;
      }
    })
  }

  addHobby(id: number, event:any) {
    this.hobby = this.user.hobbies;
    if(event.target.checked==true){
      this.hobby.push(id);
    }else{
      this.hobby = this.hobby.filter((ele,arr,index)=>{
        return ele!=id;
      })
    }
    this.hobby = this.hobby.sort((a,b)=>a-b)
    console.log(this.hobby);
  }

  submit(val: any) {
    this.user.hobbies = this.hobby;
    console.log(this.user);
  }



}
