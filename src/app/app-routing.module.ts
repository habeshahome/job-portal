import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './modules/admin/admin.module';
import { AuthGuard } from './guards/auth.guard';

import { SearchComponent } from './components/search/search.component';
import { CreateJobComponent } from './modules/admin/create-job/create-job.component';
import { EditJobComponent } from './modules/admin/edit-job/edit-job.component';
import { ListJobsComponent } from './modules/admin/list-jobs/list-jobs.component';
import { ListJobApplicationsComponent } from './modules/admin/list-job-applications/list-job-applications.component';
import { ListUsersComponent } from './modules/admin/list-users/list-users.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './modules/auth/layout/layout.component';
import { AdminLayoutComponent } from './modules/admin/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './modules/user/user-layout/user-layout.component';
import { UpdateProfileComponent } from './modules/user/update-profile/update-profile.component';
import { AppliedJobsComponent } from './modules/user/applied-jobs/applied-jobs.component';
import { PermissionGuard } from './guards/permission.guard';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'auth',
    component: LayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    canActivateChild: [PermissionGuard],
    component: AdminLayoutComponent,
    children: [
      { path: 'create-job', component: CreateJobComponent },
      { path: 'edit-job', component: EditJobComponent },
      { path: 'list-jobs', component: ListJobsComponent },
      { path: 'list-job-applications', component: ListJobApplicationsComponent }
    ]
  },
  {
    path: 'user',
    component: UserLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { // component less routing
        path: '', 
        canActivateChild: [PermissionGuard],
        children: [
          { path: 'update-profile', component: UpdateProfileComponent },
          { path: 'applied-jobs', component: AppliedJobsComponent }
        ]
      }

    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }


/*
[
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'find-jobs', component: SearchComponent
  },
  {
    path: 'job/:job_id', component: JobComponent
  },
  {
    path: 'auth',
    component: LayoutComponent,
    children: [
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'register', component: RegisterComponent
      }
    ]
  },
  {
    path: 'admin',
    redirectTo: 'admin/home', pathMatch: 'full',
    children: [
      { path: 'home', component: AdminHomeComponent },
      { path: 'create-job', component: CreateJobComponent },
      { path: 'edit-job', component: EditJobComponent },
      { path: 'list-jobs', component: ListJobsComponent },
      { path: 'list-job-applications', component: ListJobApplicationsComponent },
      { path: 'list-users', component: ListUsersComponent }
    ]
  },
  {
    path: 'user',
    component: LoginComponent,
    children: [
      { path: 'apply', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ]
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
]


*/