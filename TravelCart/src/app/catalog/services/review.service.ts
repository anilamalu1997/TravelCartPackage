import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { PackageReviewSummary } from '../models/package-review-summary';
import { Review } from '../models/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  reviews: Review[] = [];
  reviewSummaries: PackageReviewSummary[] = [];

  constructor() { }

  postReview(review: Review) {
    this.reviews.push(review);
    const reviewForPackage = this.reviews.filter(items => items.packageId === review.packageId);
    const totalRating = reviewForPackage
      .map(review => review.rating)
      .reduce((acc, rating) => acc + rating, 0);

    const packageId = review.packageId;
    const reviewCount = reviewForPackage.length;

    const avgRating = totalRating / reviewCount;

    this.reviewSummaries = this.reviewSummaries
      .filter(summary => summary.packageId !== packageId)
    this.reviewSummaries.push({ packageId, reviewCount, avgRating });
    localStorage['reviews']=JSON.stringify(this.reviews);
    localStorage['reviewSummaries']=JSON.stringify(this.reviewSummaries);
  }

  fetchReviewSummary(packageId: string): Observable<PackageReviewSummary> {
    this.reviews = JSON.parse(localStorage['reviews']) ?? [];
    this.reviewSummaries = JSON.parse(localStorage['reviewSummaries']) ?? [];
    return from(this.reviewSummaries)
      .pipe(filter(item => item.packageId === packageId));

  }

  fetchReview(packageId: string): Observable<Review[]> {
    this.reviews = JSON.parse(localStorage['reviews']) ?? [];
    this.reviewSummaries = JSON.parse(localStorage['reviewSummaries']) ?? [];
    return of(this.reviews)
      .pipe(map(reviews => reviews.filter(item => item.packageId === packageId)));
  }


}


