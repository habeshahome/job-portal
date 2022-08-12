import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from 'src/app/components/header/header.component';
import { CreateJobComponent } from './create-job/create-job.component';
import { EditJobComponent } from './edit-job/edit-job.component';
import { ListJobsComponent } from './list-jobs/list-jobs.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ListJobApplicationsComponent } from './list-job-applications/list-job-applications.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { ListJobApplicantsComponent } from './list-job-applicants/list-job-applicants.component';



@NgModule({
  declarations: [
    CreateJobComponent,
    EditJobComponent,
    ListJobsComponent,
    ListUsersComponent,
    ListJobApplicationsComponent,
    AdminHomeComponent,
    AdminHeaderComponent,
    AdminLayoutComponent,
    ListJobApplicantsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AdminModule { }
