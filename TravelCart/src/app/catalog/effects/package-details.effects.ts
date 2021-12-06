import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as PackageDetailsActions from '../actions/package-details.actions';
import { CatalogService } from '../services/catalog.service';
import { ReviewService } from '../services/review.service';
import { Review } from '../models/review';
import { CoreCartService } from 'src/app/core/services/core-cart.service';
import { CartItem } from 'src/app/core/models/cart-item';
import { Package } from '../models/package';


@Injectable()
export class PackageDetailsEffects {

  loadPackageDetailss$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(PackageDetailsActions.loadPackageDetailss),
      concatMap((payload: { packageId: string }) =>

        this.catalogService.fetchPackageDetail(payload.packageId)


        .pipe(
          map(pkg => PackageDetailsActions.loadPackageDetailssSuccess({ package : pkg })),
          catchError(error => of(PackageDetailsActions.loadPackageDetailssFailure({ error }))))
      )
    );
  });



  
  loadPackageReviews$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(PackageDetailsActions.loadPackageReviews),
      concatMap((payload: { packageId: string }) =>

        this.reviewService.fetchReview(payload.packageId)


        .pipe(
          map(reviews => PackageDetailsActions.loadPackageReviewsSuccess({ reviews })),
          catchError(error => of(PackageDetailsActions.loadPackageReviewsFailure({ error }))))
      )
    );
  });


  
  saveReview$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(PackageDetailsActions.saveReview),
      concatMap((payload: { review: Review }) =>{
        this.reviewService
        .postReview(payload.review);

     return of(payload.review.packageId).pipe(
          map(packageId => PackageDetailsActions.loadPackageReviews({ packageId })),
          catchError(error => of(PackageDetailsActions.saveReviewFailure({ error }))))
        }
      )

    );
  });



  
  addItemToCart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PackageDetailsActions.addPackageToCart),
      concatMap((payload : {package: Package}) => {
        const cartItem : CartItem = new CartItem();
        cartItem.id = payload.package.id;
        cartItem.image = payload.package.location;
        cartItem.name = payload.package.name;
        cartItem.unitPrice = payload.package.price;
        this.cartService.addItemToCart(cartItem);
        return of(payload.package).pipe(
          map(pkg => PackageDetailsActions.addPackageToCartSuccess({ package:pkg })),
          catchError(error => of(PackageDetailsActions.addPackageToCartFailure({ error }))))

      }
      )
    );
  }
  );




  constructor(
    private catalogService: CatalogService,
    private reviewService:ReviewService,
    private cartService:CoreCartService,
    private actions$: Actions) { }

}
