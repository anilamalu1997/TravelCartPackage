import { createAction, props } from '@ngrx/store';
import { Package } from '../models/package';
import { Review } from '../models/review';

export const loadPackageDetailss = createAction(
  '[PackageDetails] Load Package Detailss',
  props<{ packageId: string }>()
);

export const loadPackageDetailssSuccess = createAction(
  '[PackageDetails] Load Package Detailss Success',
  props<{ package: Package | null }>()
);

export const loadPackageDetailssFailure = createAction(
  '[PackageDetails] Load Package Detailss Failure',
  props<{ error: any }>()
);


export const loadPackageReviews = createAction(
  '[PackageDetails] Load Package Reviews',
  props<{ packageId: string }>()
);

export const loadPackageReviewsSuccess = createAction(
  '[PackageDetails] Load Package Detailss Success',
  props<{ reviews: Review[]}>()
);

export const loadPackageReviewsFailure = createAction(
  '[PackageDetails] Load Package Detailss Failure',
  props<{ error: any }>()
);




export const saveReview = createAction(
  '[PackageDetails] save Review ',
  props<{ review: Review }>()
);

export const saveReviewSuccess = createAction(
  '[PackageDetails] save Review Success',
  props<{ review: Review | null }>()
);

export const saveReviewFailure = createAction(
  '[PackageDetails] save Review Failure',
  props<{ error: any }>()
);



export const addPackageToCart = createAction(
  '[PackageDetails] Add Package To Cart',
  props<{  package: any }>()
);

export const addPackageToCartSuccess = createAction(
  '[PackageDetails] Add Package To Cart Success',
  props<{ package: any }>()
);

export const addPackageToCartFailure = createAction(
  '[PackageDetails]  Load CartFailure',
  props<{ error: any }>()
);


