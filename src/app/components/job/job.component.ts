import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PermissionService } from 'src/app/services/permission.service';
import { baseUrl } from 'src/app/api/config';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  job_id: string = '';
  job: any;
  single_job_query: string = ''
  api_apply_url: string = ''
  applyResponse = {}
  message = ""

  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient,
    private permissionService: PermissionService,
  ) {
    // retriving job id from route params
    this.job_id = this.route.snapshot.paramMap.get('job_id') || '';
    this.single_job_query = baseUrl + "jobs/" + this.job_id;
    this.api_apply_url = baseUrl + "users/apply"
    console.log(this.single_job_query)
  }




  ngOnInit(): void {
    // fetching job
    this.httpClient
      .get(this.single_job_query)
      .subscribe((res) => {
        console.log(res)
        this.job = res
      })
    // resseting error message 
    this.message = ""
  }

  apply() {
    console.log("Apply for Job " + this.job_id)

    this.permissionService.isUser().subscribe(permission => {
      if (permission === true) {
        console.log("Permission Granted!")
        this.message = "Application Submited!"
        this.httpClient
          .post(this.api_apply_url, {
            job_id: this.job_id,
            user_id: localStorage.getItem("_id"), // getting user id from local storage
            job_title: this.job.job_title,
            company: this.job.company
          })
          .subscribe(res => {
            this.applyResponse = res
            console.log(this.applyResponse)
            //this.permissionService.hasPermission()
          })
      } else {
        this.message = "Application Failed!"
      }
    })

  }

}
