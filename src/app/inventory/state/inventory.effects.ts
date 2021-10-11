import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { AppState } from 'src/app/store/app.state';
import { setLoadingSpinner } from 'src/app/store/Shared/shared.actions';
import { InventoryService } from '../inventory.service';
import {
  addItem,
  addItemFail,
  addItemSuccess,
  deleteItem,
  deleteItemSuccess,
  loadItem,
  loadItemFail,
  loadItems,
  loadItemsFail,
  loadItemsSuccess,
  loadItemSuccess,
} from './inventory.actions';

@Injectable()
export class InventoryEffects {
  constructor(
    private actions$: Actions,
    private inventoryService: InventoryService,
    private store: Store<AppState>,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  loadItems$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadItems),
      exhaustMap((action) => {
        return this.inventoryService.loadItems().pipe(
          map((data) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            const { inventoryItems } = data;
            return loadItemsSuccess({ inventoryItems });
          }),
          catchError((errResp) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            this._snackBar.open(
              errResp?.error?.error?.errorMessage || 'Error',
              '',
              { duration: 3000 }
            );
            return of(loadItemsFail());
          })
        );
      })
    );
  });

  loadItem$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadItem),
      exhaustMap((action) => {
        return this.inventoryService.loadItem(action.id).pipe(
          map((data) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            const { inventoryItem } = data;
            return loadItemSuccess({ inventoryItem });
          }),
          catchError((errResp) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            this._snackBar.open(
              errResp?.error?.error?.errorMessage || 'Error',
              '',
              { duration: 3000 }
            );
            return of(loadItemFail());
          })
        );
      })
    );
  });

  deleteItem$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteItem),
      exhaustMap((action) => {
        return this.inventoryService.deleteItem(action.id).pipe(
          map((data) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            this._snackBar.open('Product Deleted', '', { duration: 3000 });
            this.router.navigate(['']);
            return deleteItemSuccess();
          }),
          catchError((errResp) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            this._snackBar.open(
              errResp?.error?.error?.errorMessage || 'Error',
              '',
              { duration: 3000 }
            );
            return of(loadItemFail());
          })
        );
      })
    );
  });

  addItem$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addItem),
      exhaustMap((action) => {
        return this.inventoryService.addItem(action.inventoryItem).pipe(
          map((data) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            this._snackBar.open('Product Added', '', { duration: 3000 });
            this.router.navigate(['/']);
            return addItemSuccess();
          }),
          catchError((errResp) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            this._snackBar.open(
              errResp?.error?.error?.errorMessage || 'Error',
              '',
              { duration: 3000 }
            );
            return of(addItemFail());
          })
        );
      })
    );
  });
}
