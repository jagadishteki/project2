import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-images',
  templateUrl: './display-images.component.html',
  styleUrls: ['./display-images.component.scss']
})
export class DisplayImagesComponent implements OnInit {

  constructor() { }
  images: any[] = [];
  ngOnInit(): void {
  }

  addImages(event: any) {
    let files = event.target.files;
    console.log(files);
    for(let i=0; i<files.length; i++){
      let file = files[i];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e:any)=>{
        this.images.push(e.target.result);
      }
    }
    event.target.value="";
  }

  removeImg(i:any){
    this.images.splice(i,1);
    }
  
}
