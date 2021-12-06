import * as fromPackageDetails from '../reducers/package-details.reducer';
import { selectPackageDetailsState } from './package-details.selectors';

describe('PackageDetails Selectors', () => {
  it('should select the feature state', () => {
    const result = selectPackageDetailsState({
      [fromPackageDetails.packageDetailsFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
