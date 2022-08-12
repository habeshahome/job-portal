import { Component, OnInit } from '@angular/core';
import { Menu } from '../../../TypeInterface'
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  role$: Observable<string>
  constructor(
    private store: Store<{ role: string }>,
    private authService: AuthService
  ) {
    this.role$ = this.store.select('role')
  }

  brand: string = "Google Jobs"
  menuItems: Menu[] = []

  ngOnInit(): void {
    this.menuItems = [
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
  }

  logout() {
    this.authService.logout()
  }

}
