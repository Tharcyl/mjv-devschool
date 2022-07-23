import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { CadastroPageComponent } from './features/cadastro/pages/cadastro-page/cadastro-page.component';
import { HomeComponent } from './features/home/pages/home/home.component';
import { LoginComponent } from './features/login/components/login/login.component';
import { LoginPageComponent } from './features/login/pages/login-page/login-page.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginPageComponent, canActivate: [AuthGuard] },
  { path: 'cadastro', component: CadastroPageComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
