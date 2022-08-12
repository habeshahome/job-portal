import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PermissionService } from 'src/app/services/permission.service';
import { baseUrl } from '../../../api/config';

@Component({
  selector: 'app-applied-jobs',
  templateUrl: './applied-jobs.component.html',
  styleUrls: ['./applied-jobs.component.css']
})
export class AppliedJobsComponent implements OnInit {
  jobApplications: any = []
  api_fetch_applications_url: string = ''
  user_id: string = localStorage.getItem("_id") || ''
  message: string = ''

  constructor(
    private httpClient: HttpClient,
    private permissionService: PermissionService
  ) {
    this.api_fetch_applications_url = baseUrl + "users/apply/" + this.user_id
  }

  fetchApplications() {
    console.log("Fetching User Applications ")

    this.permissionService.isUser()
      .subscribe(permission => {
        if (permission === true) {
          console.log("Permission Granted!")
          this.httpClient
            .get(this.api_fetch_applications_url)
            .subscribe(res => {
              this.jobApplications = res
              console.log("Applications Found")
              console.log(this.jobApplications)
              //this.permissionService.hasPermission()
            })
        } else {
          this.message = "Fetching Applications Failed!"
        }
      })

  }

  ngOnInit(): void {
    this.fetchApplications()
  }

}
