import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoJobs } from 'db';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  
  job_id: string | null = '0';
  job: any;

  constructor(private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.job_id = this.route.snapshot.paramMap.get('job_id');
    this.job = DemoJobs.find(job => job.id === this.job_id);
  }

}
