import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/app/api/config';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  public searchJobForm !: FormGroup;
  jobs: any = []
  api_get_jobs_url = baseUrl + "jobs"
  api_search_jobs_url = baseUrl + "jobs/search/"
  searchKey: string = ''

  constructor(
    private httpClient: HttpClient,
    private formBuilder: FormBuilder,
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


  searchJobs() {
    console.log("Inside Search Job Form ...")
    console.log(this.searchJobForm.value.keyword)

    if (this.searchJobForm.value.keyword !== '') {
      this.httpClient
        .get(this.api_search_jobs_url + this.searchJobForm.value.keyword)
        .subscribe((res) => {
          console.log("Fetched Jobs")
          console.log(res)
          this.jobs = res
        })
    }

  }

  ngOnInit(): void {
    this.fetchJobs()

    this.searchJobForm = this.formBuilder
      .group({
        keyword: new FormControl('', []),
      }, { updateOn: 'submit' })

  }

}
