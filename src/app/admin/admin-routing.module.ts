import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { IsLoggedInGuard } from '../services/guards/is-logged-in.guard';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent,
    canActivateChild: [IsLoggedInGuard], children: [
      // { path: '', pathMatch: 'full', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'details/:id', component: DetailsComponent },
      { path: 'add-employee', component: AddEmployeeComponent }
    ]
  }
]
  ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
