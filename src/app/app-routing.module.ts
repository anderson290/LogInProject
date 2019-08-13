import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClientComponent } from './client/client.component';
import { NavComponent } from './nav/nav.component';
import { AuthGuardService } from './guards/auth-guard.service';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },{
    path: 'client',
    component: NavComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
