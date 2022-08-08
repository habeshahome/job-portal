import { Component, OnInit } from '@angular/core';
import { Menu } from '../../../TypeInterface'

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {

  constructor() { }
  brand: string = "Google Jobs"
  menuItems: Menu[] = [
    {
      name: 'Applied',
      slug: "applied-jobs"
    },
    {
      name: "Find Jobs",
      slug: ""
    }
  ]
  ngOnInit(): void {
  }

}
