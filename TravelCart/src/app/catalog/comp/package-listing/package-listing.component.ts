import { Component, OnInit, Input,OnChanges } from '@angular/core';
import { Package } from '../../models/package';
import { HttpClient } from '@angular/common/http';
import { CatalogService } from '../../services/catalog.service';
import * as PackageListingActions from '../../actions/package-listing.actions';
import { Store } from '@ngrx/store';
import { PackageListingState } from '../../reducers/package-listing.reducer';
import { selectHighlightedLocations, selectHighlightedPackages, selectHighlightedPackagesCount, 
  selectPackageListing, selectPackageListingSummaries, selectTotalPackageCount ,selectPackageListingState} from '../../selectors/package-listing.selectors';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-package-listing',
  templateUrl: './package-listing.component.html',
  styleUrls: ['./package-listing.component.scss']
})
export class PackageListingComponent implements OnInit {

  packages: Package[] = [];
  totalCount: number = 0;
  summaries!:any[];
  highlightedCount:number=0;
  package!:Package;
  


  constructor(
    
    private router:Router,
    private route:ActivatedRoute,
    private store:Store<PackageListingState>
  ) { }

  ngOnInit(): void {
    

    this.store
    .select(selectHighlightedPackages)
    .subscribe(packages=>this.packages=packages);

    this.store
    .select(selectTotalPackageCount)
    .subscribe(totalCount => this.totalCount=totalCount);

    this.store
    .select(selectPackageListingSummaries)
    .subscribe(summaries=>this.summaries=summaries);

    this.store
    .select(selectHighlightedPackagesCount)
    .subscribe(highlightedCount=>this.highlightedCount=highlightedCount);

    this.store.dispatch(PackageListingActions.loadPackageListings());
  }

  toggleSelection(summary:any){
    this.store.dispatch(PackageListingActions.toggleLocationSelection({location:summary.location}));

  }

  onPackageSelected(){
    this.router.navigate(['..',this.package.id],{relativeTo:this.route});
  }
  }


