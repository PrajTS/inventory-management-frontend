import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { AppState } from 'src/app/store/app.state';
import { setLoadingSpinner } from 'src/app/store/Shared/shared.actions';
import { AuthService } from '../auth.service';
import {
  autoLoginFailure,
  autoLoginStart,
  autoLoginSuccess,
  loginFailure,
  loginStart,
  loginSuccess,
  logoutFail,
  logoutStart,
  logoutSuccess,
} from './auth.actions';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<AppState>,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.authService.login(action.username, action.password).pipe(
          map((data) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            const { user } = data;
            this.router.navigate(['']);
            return loginSuccess({ user });
          }),
          catchError((errResp) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            this._snackBar.open(
              errResp?.error?.error?.errorMessage || 'Error',
              '',
              { duration: 3000 }
            );
            return of(loginFailure({ err: errResp }));
          })
        );
      })
    );
  });

  autoLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(autoLoginStart),
      exhaustMap((action) => {
        return this.authService.me().pipe(
          map((data) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            const { user } = data;
            this.router.navigate(['']);
            return autoLoginSuccess({ user });
          }),
          catchError((errResp) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            this.router.navigate(['login']);
            return of(autoLoginFailure({ err: errResp }));
          })
        );
      })
    );
  });

  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(logoutStart),
      exhaustMap((action) => {
        return this.authService.logout().pipe(
          map((data) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            this.router.navigate(['login']);
            return logoutSuccess();
          }),
          catchError((errResp) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            this._snackBar.open(
              errResp?.error?.error?.errorMessage || 'Could not logout',
              '',
              { duration: 3000 }
            );
            return of(logoutFail({ err: errResp }));
          })
        );
      })
    );
  });
}
