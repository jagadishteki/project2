import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUp } from 'src/app/interfaces/sign-up';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private adminService: AdminServiceService, private router: Router) { }

  signInError!: string;
  ngOnInit(): void {
  }

  signIn(data: SignUp): void{
    this.adminService.signIn(data).subscribe((res: HttpResponse<any>)=>{
      if(res.body.length){
        localStorage.setItem('user', JSON.stringify(res.body[0].name));
        this.adminService.isLoggedIn.next(true);
        this.router.navigate(['admin/dashboard'])
      }else{
        this.signInError = "User Name or Password is incorrect";
      }
    })
  }


}
