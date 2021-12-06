import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as CartDetailActions from '../actions/cart-detail.actions';



@Injectable()
export class CartDetailEffects {

  loadCartDetails$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(CartDetailActions.loadCartDetails),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => CartDetailActions.loadCartDetailsSuccess({ data })),
          catchError(error => of(CartDetailActions.loadCartDetailsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
