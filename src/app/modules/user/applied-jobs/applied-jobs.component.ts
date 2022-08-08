import { Component, OnInit } from '@angular/core';
import { JobApplications } from 'db'

@Component({
  selector: 'app-applied-jobs',
  templateUrl: './applied-jobs.component.html',
  styleUrls: ['./applied-jobs.component.css']
})
export class AppliedJobsComponent implements OnInit {

  constructor() { }

  appliedJobs = JobApplications
  
  ngOnInit(): void {
  }

}
