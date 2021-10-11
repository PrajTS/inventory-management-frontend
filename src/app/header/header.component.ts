import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { logoutStart } from '../auth/state/auth.actions';
import { getUser } from '../auth/state/auth.selector';
import { setLoadingSpinner } from '../store/Shared/shared.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user: any;

  constructor(private router: Router, private store: Store) {}

  ngOnInit(): void {
    this.store.select(getUser).subscribe((user) => {
      this.user = user;
    });
  }

  navigateToHome() {
    this.router.navigate(['']);
  }

  logout() {
    this.store.dispatch(setLoadingSpinner({ status: true }));
    this.store.dispatch(logoutStart());
  }
}
