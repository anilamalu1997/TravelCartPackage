import { Action, createReducer, on } from '@ngrx/store';
import * as PackageListingActions from '../actions/package-listing.actions';
import { Package } from '../models/package';

export const packageListingFeatureKey = 'packageListing';

export interface PackageListingState {

  isLoading: boolean,
  packages: Package[],
  highlightedLocations: string[]

}

export const initialState: PackageListingState = {

  isLoading: false,
  packages: [],
  highlightedLocations: []
};


const loadPackageListing = (state: PackageListingState) => {
  const isLoading = true;
  return { ...state, isLoading }
};

const loadPackageListingsSuccess = (state: PackageListingState, payload: { packages: Package[] }) => {
  const isLoading = false;
  const packages = payload.packages;

  let highlightedLocations = packages
    .map(pkg => pkg.location);

  highlightedLocations = highlightedLocations
    .filter((location, index) => highlightedLocations.indexOf(location) === index);
  return { ...state, highlightedLocations, packages, isLoading }
};


const loadPackageListingsFailure = (state: PackageListingState) => {
  const isLoading = false;
  const packages: Package[] = [];
  return { ...state, packages, isLoading }
};

const toggleLocationSelection =
  (state: PackageListingState, payload:
    { location: string }) => {
    let highlightedLocations = state.highlightedLocations;

    const found = highlightedLocations.find(location => location === payload.location);
    if (found) {
      highlightedLocations = highlightedLocations.filter(location => location !== payload.location);
    } else {
      highlightedLocations = highlightedLocations.concat([payload.location]);
    }

    return { ...state, highlightedLocations };

  };

export const reducer = createReducer(
  initialState,

  on(PackageListingActions.loadPackageListings, loadPackageListing),
  on(PackageListingActions.loadPackageListingsSuccess, loadPackageListingsSuccess),
  on(PackageListingActions.loadPackageListingsFailure, loadPackageListingsFailure),
  on(PackageListingActions.toggleLocationSelection, toggleLocationSelection),
);
