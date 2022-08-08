import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateJobComponent } from './create-job/create-job.component';
import { EditJobComponent } from './edit-job/edit-job.component';
import { ListJobsComponent } from './list-jobs/list-jobs.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ListJobApplicationsComponent } from './list-job-applications/list-job-applications.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';



@NgModule({
  declarations: [
    CreateJobComponent,
    EditJobComponent,
    ListJobsComponent,
    ListUsersComponent,
    ListJobApplicationsComponent,
    AdminHomeComponent,
    AdminHeaderComponent,
    AdminLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AdminModule { }
