import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroPageComponent } from './pages/cadastro-page/cadastro-page.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CadastroPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CadastroPageComponent,
  ]
})
export class CadastroModule { }
