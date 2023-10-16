import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  uploadImage(e:any){
    let file = e.target.files[0];
    let formObj = new FormData();
    formObj.append('file', file);
    this.http.post('https://petstore.swagger.io/v2/pet/1/uploadImage', formObj).subscribe((res)=>{
      debugger;
    })
  }

}
