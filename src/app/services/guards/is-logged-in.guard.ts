import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminServiceService } from '../admin-service.service';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedInGuard implements CanActivateChild {
  constructor(private adminService: AdminServiceService){

  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.adminService.isLoggedIn['_value']){
        return true;
      }
      return false;
    
  }
  
}
