import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Review } from '../../models/review';



@Component({
  selector: 'app-review-popup',
  templateUrl: './review-popup.component.html',
  styleUrls: ['./review-popup.component.scss']
})
export class ReviewPopupComponent implements OnInit {


  isShowing = false;
  rating = 3;

  @Output()
  save = new EventEmitter<Review>();



  reviewForm = this.fb.group({
    reviewer:['',Validators.required],
    review: ['', Validators.required]
  })

  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
  }

  show(){
    this.isShowing = true;

  }

  hide(){
    this.isShowing = false;
  }

  onReviewSubmit(){
    if(this.reviewForm.valid){
      const review = this.reviewForm.value;
      this.save.emit({...review,rating:this.rating});
 
    }
  }
}
