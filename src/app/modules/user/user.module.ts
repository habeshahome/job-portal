import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { RouterModule } from '@angular/router';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { AppliedJobsComponent } from './applied-jobs/applied-jobs.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UpdateProfileComponent,
    UserLayoutComponent,
    UserHeaderComponent,
    AppliedJobsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ]
})
export class UserModule { }
