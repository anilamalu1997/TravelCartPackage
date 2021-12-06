import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Package } from '../../models/package';
import { Review } from '../../models/review';
import { PackageDetailsState } from '../../reducers/package-details.reducer';
import { selectPackageDetail, selectPackageDetailsState } from '../../selectors/package-details.selectors';
import { ReviewPopupComponent } from '../review-popup/review-popup.component';
import * as PackageDetailsActions from '../../actions/package-details.actions';
import { ToastPopoverService } from 'src/app/core/services/toast-popover.service';

@Component({
  selector: 'app-package-summary-header',
  templateUrl: './package-summary-header.component.html',
  styleUrls: ['./package-summary-header.component.scss']
})
export class PackageSummaryHeaderComponent implements OnInit {

  package!: Package | null;
  rating = 3;

  @ViewChild(ReviewPopupComponent)
  reviewPopup: ReviewPopupComponent | undefined;


  constructor(
    private toastService :ToastPopoverService,
    private store: Store<PackageDetailsState>
  ) {

    this.store
      .select(selectPackageDetail)
      .subscribe(pkg => this.package = pkg);
  }

  ngOnInit(): void {

  }

  addToCart() {
    if (this.package) {
      this.store.dispatch(PackageDetailsActions.addPackageToCart({ package: this.package  }));
    this.toastService.sendMessage('Added to cart');
    }

  }

  addReview() {
    this.reviewPopup?.show();
  }

  saveReview(review: Review) {
    this.reviewPopup?.hide();
    review.packageId = this.package?.id ?? '';
    this.store.dispatch(PackageDetailsActions.saveReview({ review }));
    this.toastService.sendMessage('Review Added');
  }

}
