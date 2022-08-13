import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../../services/admin.service';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../../../api/config';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {
  public editJobForm !: FormGroup;
  public selectJobForm !: FormGroup;
  jobs: any = []
  job: any = {}
  selectedJob: string = ''
  message: string = ''

  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private httpClient: HttpClient,
  ) { }


  fetchJobs = () => {
    this.httpClient
      .get(baseUrl + "jobs")
      .subscribe((res) => {
        console.log("Fetched Jobs")
        console.log(res)
        this.jobs = res
      })
  }

  onChange() {
    console.log("Selection Changed")
    console.log(this.selectedJob)
    this.httpClient
      .get(baseUrl + "jobs/" + this.selectedJob)
      .subscribe((res) => {
        console.log("Single Job to populate fields")
        console.log(res)
        this.job = res
        this.editJobForm.setValue({
          company: this.job[0].company,
          job_title: this.job[0].job_title, 
          job_description: this.job[0].job_description,
        })
      })
  }

  editJob() {
    console.log("Inside Edit Job")

    if (this.editJobForm.value.selectedJob !== '') {
      console.log(this.selectedJob)
      this.adminService.editJob(
        {
          selectedJob: this.selectJobForm.value.selectedJob,
          job_title: this.editJobForm.value.job_title,
          job_description: this.editJobForm.value.job_description,
          company: this.editJobForm.value.company
        }
      )
    } else {
      this.message = "Select Job to be updated"
    }

  }

  ngOnInit(): void {
    this.selectJobForm = this.formBuilder
      .group({
        selectedJob: new FormControl('', [Validators.required]),
      })

    this.editJobForm = this.formBuilder
      .group({
        job_title: new FormControl('', [Validators.required]),
        job_description: new FormControl('', [Validators.required]),
        company: new FormControl('', [Validators.required]),
      }, { updateOn: 'submit' })

    this.fetchJobs()
    this.message = ''
  }
}
