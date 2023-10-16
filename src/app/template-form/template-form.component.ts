import { Component, OnInit } from '@angular/core';
import { cdInterface } from '../services/guards/deactivate.guard';
import { Location } from '../model/location';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit, cdInterface {

  constructor() { }
  name: any;
  email: any;

  locations: Location[] = [
    { id:1, location:"guntur"},
    { id:2, location:"Hyderabad"},
    { id:3, location:"Bangalore"},
    { id:4, location:"Ongole"},
    { id:5, location:"Chennai"}
  ]
  ngOnInit(): void {
  }

  submit(val: any){
    console.log(val);

  }

  canExit(){
    if(this.name || this.email){
      return window.confirm("Unsaved Changes are there.  Do you really want to leave?")
    }
    return true;

  }



}
