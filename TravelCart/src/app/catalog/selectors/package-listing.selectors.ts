import { state } from '@angular/animations';
import { createAction, createFeatureSelector, createSelector, select } from '@ngrx/store';
import { Package } from '../models/package';
import * as fromPackageListing from '../reducers/package-listing.reducer';
import { PackageListingState } from '../reducers/package-listing.reducer';

export const selectPackageListingState = createFeatureSelector<fromPackageListing.PackageListingState>(
  fromPackageListing.packageListingFeatureKey
);


export const selectPackageListing = createSelector(
  selectPackageListingState,
  (state:PackageListingState)=>{
    return state.packages == null
     ? [] 
     : state.packages;
    
  }
);

export const selectHighlightedLocations = createSelector(
  selectPackageListingState,
  (state: PackageListingState)=>{
    return state.highlightedLocations==null
    ?[]
    : state.highlightedLocations;
  }
);

export const selectHighlightedPackages=createSelector(
  selectPackageListing,selectHighlightedLocations,
  (packages:Package[],
    highlightedLocations:string[]) => {
      return packages.filter(pkg=>highlightedLocations.indexOf(pkg.location) !== -1);
    }
);

export const selectHighlightedPackagesCount = createSelector(
  selectHighlightedPackages,
  (packages:Package[]) => {
    return packages.length;
  }
);

export const selectPackageListingSummaries = createSelector(
  selectPackageListing,
  selectHighlightedLocations,
  (packages : Package[],
    highlightedLocations:string[])=>{
    return packages
   .map(pkg => pkg.location)
   .reduce((acc:any[], location : string)=>{
     let found = acc.find(item=> item.location === location);
     if(found == null){
       found = {location,count:0};
       acc.push(found);
     }
     found.count++;
     return acc;
   },[])
   .map(
     (summary:any)=>({
       ...summary,

       isHighlighted:highlightedLocations.indexOf(summary.location) !== -1

     })
   );
  }
);
      
   
  

export const selectTotalPackageCount = createSelector(
  selectPackageListing,
  (packages:Package[])=>{
    return packages.length;
     
  }
);


