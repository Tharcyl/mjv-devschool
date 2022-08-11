import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MotosListComponent } from './components/motos-list/motos-list.component';
import { MotoDetailsPageComponent } from './pages/moto-details-page/moto-details-page.component';



@NgModule({
  declarations: [
    HomePageComponent,
    MotosListComponent,
    MotoDetailsPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomeModule { }
