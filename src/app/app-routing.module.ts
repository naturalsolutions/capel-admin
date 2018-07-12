import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthGuard} from './services/auth-guard';
import {UsersComponent} from './users/users.component';
import {DivesComponent} from './dives/dives.component';
import {PermitsComponent} from './permits/permits.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: []
  }, {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'dives',
    component: DivesComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'permits',
    component: PermitsComponent,
    canActivate: [AuthGuard]
  }, {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
