import * as fromPackageListing from '../reducers/package-listing.reducer';
import { selectPackageListingState } from './package-listing.selectors';

describe('PackageListing Selectors', () => {
  it('should select the feature state', () => {
    const result = selectPackageListingState({
      [fromPackageListing.packageListingFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
