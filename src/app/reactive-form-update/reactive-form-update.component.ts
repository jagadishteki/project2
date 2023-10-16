import { Component, OnInit } from '@angular/core';
import { Location } from '../model/location';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-form-update',
  templateUrl: './reactive-form-update.component.html',
  styleUrls: ['./reactive-form-update.component.scss']
})
export class ReactiveFormUpdateComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  user: any;
  hobby: number[] = [];
  hobbies!: any[];

  registration: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    gender: ['', [Validators.required]],
    email: ['', Validators.required],
    pwd: ['', Validators.required],
    hobbies: [''],
    location: ['', Validators.required],
    terms: ['', Validators.required]

  })

  locations: Location[] = [
    { id: 1, location: "guntur" },
    { id: 2, location: "Hyderabad" },
    { id: 3, location: "Bangalore" },
    { id: 4, location: "Ongole" },
    { id: 5, location: "Chennai" }
  ];


  ngOnInit(): void {
    // this.user = {
    //   name: "jagadish",
    //   gender: "Male",
    //   email: "jagadishteki@gmail.com",
    //   pwd: "123456",
    //   location: 2,
    //   terms: true,
    //   hobbies: [1,3]
    // }

    this.hobbies = [
      { id: 1, hobby: "reading", status: false },
      { id: 2, hobby: "writing", status: false },
      { id: 3, hobby: "listening", status: false },
      { id: 4, hobby: "playing", status: false }

    ];

    // this.hobbies.forEach((ele, index, arr) => {
    //   if (this.user.hobbies.includes(ele.id)) {
    //     ele.status = true;
    //   }
    // })

    // this.registration.patchValue(this.user);
  }

  addHobby(id: number, event: any) {
    // this.hobby = this.user.hobbies;
    // if (event.target.checked == true) {
    //   this.hobby.push(id);
    // } else {
    //   this.hobby = this.hobby.filter((ele, arr, index) => {
    //     return ele != id;
    //   })
    // }
    // this.hobby = this.hobby.sort((a, b) => a - b)
    // console.log(this.hobby);
    // this.hobbies.forEach((ele, index, arr) => {
    //   if (this.user.hobbies.includes(ele.id)) {
    //     ele.status = true;
    //   }
    // })

  }

  submit() {
    this.user.hobbies = this.hobby;
    console.log(this.user);
  }

}
