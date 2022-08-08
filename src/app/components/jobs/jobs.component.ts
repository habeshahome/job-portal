import { Component, OnInit } from '@angular/core';
import { DemoJobs } from 'db';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  constructor() { }

  jobs: any = DemoJobs;
  trackByMethod(index: number, el: any): number {
    return el.id;
  }
  ngOnInit(): void {
  }

}
