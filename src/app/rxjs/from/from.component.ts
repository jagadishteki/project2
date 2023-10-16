import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { from, takeLast } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss']
})
export class FromComponent implements OnInit {

  constructor(private http: HttpClient) { }

  data:any;
  ngOnInit(): void {
    this.http.get('http://localhost:3000/profiles').subscribe((res=>{
      this.data = res;
      from(this.data).pipe(takeLast(3)).subscribe((result)=>{
        console.log(result);
      })
    }))
  }

}
