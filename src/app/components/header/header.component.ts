import { Component, OnInit } from '@angular/core';
import { Menu } from '../../TypeInterface'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  brand: string = "PUBLIC"
  menuItems: Menu[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
