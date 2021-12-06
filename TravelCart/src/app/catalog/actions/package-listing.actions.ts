import { createAction, props } from '@ngrx/store';
import { Package } from '../models/package';

export const loadPackageListings = createAction(
  '[PackageListing] Load PackageListings'
);

export const loadPackageListingsSuccess = createAction(
  '[PackageListing] Load PackageListings Success',
  props<{ packages: Package[] }>()
);

export const loadPackageListingsFailure = createAction(
  '[PackageListing] Load PackageListings Failure',
  props<{ error: any }>()
);

export const toggleLocationSelection = createAction(
  '[PackageListing] Select Location Summary',
  props<{location: string}>()
);




export const addPackageToCart = createAction(
  '[PackageListing] Add Package To Cart',
  props<{ package: Package }>()
);

export const addPackageToCartSuccess = createAction(
  '[PackageListing] Add Package To Cart Success',
  props<{ package: any }>()
);

export const addPackageToCartFailure = createAction(
  '[PackageListing]  Load Cart Failure',
  props<{ error: any }>()
);



