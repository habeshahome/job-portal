import { Injectable } from '@angular/core';
import { of, delay } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { baseUrl } from '../api/config';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  createJobResponse: any = {}

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {
  }

  createJob(job: {}) {
    console.log("Create Job Service")
    console.log(job)
    const httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')

    this.httpClient.post(baseUrl + "jobs", job, { headers: httpHeaders })
      .subscribe(res => {
        console.log("Create Job - API Response")
        console.log(res)
        this.createJobResponse = res
        this.router.navigate(['/jobs/' + this.createJobResponse?._id])
      })
  }

  listJob() {
    console.log("List Job Service")
  }

  editJob(job: any ) {
    console.log("Edit Job Service")
    console.log(job)

    const httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')

    this.httpClient.put(baseUrl + "jobs/" + job?.selectedJob, job, { headers: httpHeaders })
      .subscribe(res => {
        console.log("Edit Job - API Response")
        console.log(res)
        this.createJobResponse = res
        this.router.navigate(['/jobs/' + this.createJobResponse?._id])
      })
  }

  listJobApplications() {
    console.log("List Job Applications Service")
  }

}
