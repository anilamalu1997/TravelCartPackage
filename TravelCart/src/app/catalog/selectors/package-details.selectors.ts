import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPackageDetails from '../reducers/package-details.reducer';
import { PackageDetailsState } from '../reducers/package-details.reducer';

export const selectPackageDetailsState = createFeatureSelector<fromPackageDetails.PackageDetailsState>(
  fromPackageDetails.packageDetailsFeatureKey
);


export const selectPackageDetail = createSelector(
  selectPackageDetailsState,
  (state:PackageDetailsState) => {
    return state.package;
  }
);



export const selectPackageReviews = createSelector(
  selectPackageDetailsState,
  (state:PackageDetailsState) => {
    return state.reviews == null ? [] : state.reviews;
  }
);


