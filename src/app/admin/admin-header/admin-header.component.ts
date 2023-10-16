import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  constructor(private adminService: AdminServiceService, public router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.adminService.isLoggedIn.next(false);
    localStorage.removeItem('user');
    this.router.navigate(['/admin']);
  }

}
