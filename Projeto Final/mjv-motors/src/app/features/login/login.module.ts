import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginPageComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    LoginPageComponent
  ]
})
export class LoginModule { }
