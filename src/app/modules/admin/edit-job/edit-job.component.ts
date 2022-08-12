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
  jobs: any = []
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

  editJob() {
    console.log("Inside Edit Job")

    if (this.editJobForm.value.selectedJob !== '') {
      console.log(this.selectedJob)
      this.adminService.editJob(this.editJobForm.value)
    } else {
      this.message = "Select Job to be updated"
    }

  }

  ngOnInit(): void {
    this.editJobForm = this.formBuilder
      .group({
        selectedJob: new FormControl('', [Validators.required]),
        job_title: new FormControl('', [Validators.required]),
        job_description: new FormControl('', [Validators.required]),
        company: new FormControl('', [Validators.required]),
      }, { updateOn: 'submit' })

    this.fetchJobs()
    this.message = ''
  }
}
