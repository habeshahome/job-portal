import { Component, OnInit } from '@angular/core';
import { JobApplications } from 'db'
import { DemoJobs } from 'db';


@Component({
  selector: 'app-applied-jobs',
  templateUrl: './applied-jobs.component.html',
  styleUrls: ['./applied-jobs.component.css']
})
export class AppliedJobsComponent implements OnInit {

  constructor() { }

  appliedJobs = DemoJobs
  
  ngOnInit(): void {
  }

}
