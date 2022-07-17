import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPwdComponent } from './component/forgot-pwd/forgot-pwd.component';
import { LoginComponent } from './component/login/login.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPwdComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m=> m.AdminModule),canActivate:[AuthGuardGuard],
  },
  {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
