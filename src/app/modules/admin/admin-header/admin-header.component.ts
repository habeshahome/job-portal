import { Component, OnInit } from '@angular/core';
import { Menu } from '../../../TypeInterface'

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor() { }
  brand: string = "Google Jobs"
  menuItems: Menu[] = [
    {
      name: 'Create Job',
      slug: "create-job"
    },
    {
      name: 'List Jobs',
      slug: "list-jobs"
    },
    {
      name: 'Edit Job',
      slug: "edit-job"
    },
    {
      name: 'List Applications',
      slug: "list-job-applications"
    }
  ]
  ngOnInit(): void {
  }

}
