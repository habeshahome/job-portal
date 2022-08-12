import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { baseUrl } from 'src/app/api/config';

@Component({
  selector: 'app-list-job-applications',
  templateUrl: './list-job-applications.component.html',
  styleUrls: ['./list-job-applications.component.css']
})
export class ListJobApplicationsComponent implements OnInit {
  applications: any = []
  applicants: any = []
  api_get_jobs_url = baseUrl + "users/apply"

  constructor(
    private httpClient: HttpClient,
  ) { }

  fetchJobs = () => {
    this.httpClient
      .get(this.api_get_jobs_url)
      .subscribe((res) => {
        console.log("Fetched Job Applications")
        console.log(res)
        this.applications = res
        this.applications.map((data: any) => {
          console.log("Single Data")
          console.log(data.user_id)
          this.httpClient.get(baseUrl + "users/" + data.user_id)
          .subscribe(applicant => {
            console.log("Pipelined Applicants")
            console.log(applicant)
            this.applicants.push(applicant)
          })
        })
      })
  }

  ngOnInit(): void {
    this.fetchJobs()
  }
}
