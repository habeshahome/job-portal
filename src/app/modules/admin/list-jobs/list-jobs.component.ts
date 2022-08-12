import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/app/api/config';

@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.css']
})
export class ListJobsComponent implements OnInit {
  jobs: any = []
  api_get_jobs_url = baseUrl + "jobs"

  constructor(
    private httpClient: HttpClient,
  ) { }

  fetchJobs = () => {
    this.httpClient
      .get(this.api_get_jobs_url)
      .subscribe((res) => {
        console.log("Fetched Jobs")
        console.log(res)
        this.jobs = res
      })
  }

  ngOnInit(): void {
    this.fetchJobs()
  }

}
