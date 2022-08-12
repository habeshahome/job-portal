import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent implements OnInit {
  public createJobForm !: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
  ) { }

  ngOnInit(): void {
    this.createJobForm = this.formBuilder
      .group({
        job_title: new FormControl('', [Validators.required]),
        job_description: new FormControl('', [Validators.required]),
        company: new FormControl('', [Validators.required]),
      })
  }

  createJob() {
    console.log(this.createJobForm.value)
    this.adminService.createJob(this.createJobForm.value)
  }
}
