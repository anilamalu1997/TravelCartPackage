import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as PackageListingActions from '../actions/package-listing.actions';
import { CatalogService } from '../services/catalog.service';
import { CoreCartService } from 'src/app/core/services/core-cart.service';
import { CartItem } from 'src/app/core/models/cart-item';
import { Package } from '../models/package';



@Injectable()
export class PackageListingEffects {

  loadPackageListings$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PackageListingActions.loadPackageListings),
      concatMap(() => {
        return this.catalogService.fetchAllPackages().pipe(
          map(packages => PackageListingActions.loadPackageListingsSuccess({ packages })),
          catchError(error => of(PackageListingActions.loadPackageListingsFailure({ error }))))

      }
      )
    );
  });



  
  addItemToCart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PackageListingActions.addPackageToCart),
      concatMap((payload : {package: Package}) => {
        const cartItem : CartItem = new CartItem();
        cartItem.id = payload.package.id;
        cartItem.image = payload.package.location;
        cartItem.name = payload.package.name;
        cartItem.unitPrice = payload.package.price;
        this.cartService.addItemToCart(cartItem);
        return of(payload.package).pipe(
          map(pkg => PackageListingActions.addPackageToCartSuccess({ package:pkg })),
          catchError(error => of(PackageListingActions.addPackageToCartFailure({ error }))))

      }
      )
    );
  }
  );



  constructor(
    private actions$: Actions,
    private catalogService: CatalogService,
    private cartService: CoreCartService
  ) { }

}
