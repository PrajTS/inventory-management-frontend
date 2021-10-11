import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { autoLoginStart } from './auth/state/auth.actions';
import { setLoadingSpinner } from './store/Shared/shared.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(setLoadingSpinner({ status: true }));
    this.store.dispatch(autoLoginStart());
  }
}
