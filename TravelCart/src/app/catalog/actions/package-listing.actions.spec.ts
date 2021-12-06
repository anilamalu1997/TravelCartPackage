import * as fromPackageListing from './package-listing.actions';

describe('loadPackageListings', () => {
  it('should return an action', () => {
    expect(fromPackageListing.loadPackageListings().type).toBe('[PackageListing] Load PackageListings');
  });
});
