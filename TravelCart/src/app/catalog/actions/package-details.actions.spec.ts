import * as fromPackageDetails from './package-details.actions';

describe('loadPackageDetailss', () => {
  it('should return an action', () => {
    expect(fromPackageDetails.loadPackageDetailss().type).toBe('[PackageDetails] Load PackageDetailss');
  });
});
