import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PackageDetailsState } from '../../reducers/package-details.reducer';
import * as PackageDetailsActions from '../../actions/package-details.actions';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { selectPackageDetail, selectPackageDetailsState, selectPackageReviews } from '../../selectors/package-details.selectors';
import { Package } from '../../models/package';
import { Review } from '../../models/review';

@Component({
  selector: 'app-package-detail',
  templateUrl: './package-detail.component.html',
  styleUrls: ['./package-detail.component.scss']
})
export class PackageDetailComponent implements OnInit {

  package !: Package | null;
  reviews:Review[] = [];



  constructor(
    private route : ActivatedRoute,
    private store : Store<PackageDetailsState>
  ) { }

  ngOnInit(): void {

    this.store.select(selectPackageDetail)
    .subscribe(pkg => this.package = pkg);

    

    this.store.select(selectPackageReviews)
    .subscribe(reviews => this.reviews = reviews);


    this.route
    .params.pipe(map(params => params['id']))
    .subscribe(packageId => {
      this.store.dispatch(PackageDetailsActions.loadPackageDetailss({ packageId}));
      this.store.dispatch(PackageDetailsActions.loadPackageReviews({ packageId}));
      
    });

   
  }

}
