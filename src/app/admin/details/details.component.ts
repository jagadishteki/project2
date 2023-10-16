import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private adminService: AdminServiceService) { }
  user:any;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res)=>{
      this.user = this.adminService.detailsById(res['id']).subscribe((data)=>{
        this.user = data;
        this.user = this.user[0];
      })
    })
  }

}
