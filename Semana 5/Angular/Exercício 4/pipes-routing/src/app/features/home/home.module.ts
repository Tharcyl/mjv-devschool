import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosListComponent } from './components/alunos-list/alunos-list.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    AlunosListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
