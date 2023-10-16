import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordMatch } from '../password-match';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  registration!: FormGroup;
  ngOnInit(): void {
    this.registration = this.fb.group({
      name: ['', [Validators.required, this.noSpaceAllowed], this.userCheck],
      gender: [],
      email: [],
      password: [],
      confirmpassword:[],
      location: [],
      terms: []
    },
    {validators: passwordMatch})
  }

  submit(){
    console.log(this.registration);
  }

  userCheck(control:FormControl):Promise<any>{
    
    return new Promise((resolve, reject)=>{
      let users = ["user1", "user2", "user3"];
      setTimeout(()=>{
        if(users.indexOf(control.value)>=0){
          resolve({"duplicateUser":true})
          console.log("working");
        }else{
          resolve(null);
        }
      }, 5000)
    })
  }

  setValue(){
    this.registration.setValue({
      name: "Anuradha",
      gender: "Female",
      email: "anuradha.kalahasthi@gmail.com",
      password: "147896325",
      location: 3,
      terms: false
    })
  }

  patchValue(){
    this.registration.patchValue({
      name: "Anuradha",
      gender: "Female",
      password: "147896325",
      location: 3,
      terms: false
    })
  }

  noSpaceAllowed(control: FormControl){
    if(control.value!=null && control.value.indexOf(' ')!=-1){
      return {noSpaceAllowed:true}
    }
    return null;
  }

}
