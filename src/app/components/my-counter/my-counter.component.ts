import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { setAdmin, setUser, setPublic } from '../../state/app.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnInit {
  role$: Observable<string>

  constructor(private store: Store<{ role: string }>) {
    this.role$ = store.select('role');
  }

  increment() {
    this.store.dispatch(setAdmin());
  }
 
  decrement() {
    this.store.dispatch(setUser());
  }
 
  reset() {
    this.store.dispatch(setPublic());
  }

  ngOnInit(): void {
  }

}
