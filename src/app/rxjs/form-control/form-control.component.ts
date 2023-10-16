import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';


@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit {

  constructor(private http: HttpClient) { }
  emp = new FormControl('');


  profiles: any;
  ngOnInit(): void {

    this.http.get(`http://localhost:3000/profiles`).subscribe((res) => {
      this.profiles = res;
    })

    this.emp.valueChanges.pipe(debounceTime(1000)).subscribe((data: any) => {
      this.http.get(`http://localhost:3000/profiles?name_like=${data}`).subscribe((res) => {
        this.profiles = res;
      })
    })

  }

  valueChanges() {

  }

}
