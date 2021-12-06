import { Component, Input, OnInit } from '@angular/core';
import { Review } from '../../models/review';

@Component({
  selector: 'app-package-review-item',
  templateUrl: './package-review-item.component.html',
  styleUrls: ['./package-review-item.component.scss']
})
export class PackageReviewItemComponent implements OnInit {


  @Input()
  review! : Review;

  constructor() { }

  ngOnInit(): void {
  }

}
