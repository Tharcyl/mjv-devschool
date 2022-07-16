import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    TasksListComponent,
    TasksComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TasksComponent
  ]
})
export class TasksModule { }
