import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminServiceService } from '../admin-service.service';

@Injectable({
  providedIn: 'root'
})
export class CaGuardGuard implements CanActivate {
  constructor(private adminService: AdminServiceService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.adminService.isLoggedIn['_value']){
        return true;
      }
      window.alert("You have not LoggedIn.")
      return false;
  }
  
}
