import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../services/admin-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(public router:Router, private adminService: AdminServiceService) { }

  ngOnInit(): void {
    if(this.adminService.isLoggedIn['_value']){
      this.router.navigate(['/admin/dashboard'])
    }
  }

}
