import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { combineLatest, generate } from 'rxjs';
import { map, take, tap, toArray } from 'rxjs/operators';





@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit, OnChanges {

  @Input()
  rating: number = 0;
  
  
  @Output()
  ratingChange =new EventEmitter<number>();



  @Input()
  disabled: boolean = false;



  stars: any[] = [];



  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['rating'] && changes['rating'].currentValue) {
      const currentRating = changes['rating'].currentValue;
      this.buildRatings(currentRating);
    }
  }

  buildRatings(currentRating: number) {




    const filled$ = generate({
      initialState: 0,
      condition(value: number) { return value < currentRating; },
      iterate(value: number) { return value + 1; },
      resultSelector(value: number) { return value }
    })

      .pipe(
        
        map((index: any) => ({ index, filled: true })),
        
        toArray()
      );


    const unfilled$ = generate({
      initialState: currentRating,
      condition(value: number) { return value < 5; },
      iterate(value: number) { return value + 1; },
      resultSelector(value: number) { return value }
    })

      .pipe(
        
        map(index => ({ index, filled: false })),
        
        toArray()
      );

    combineLatest([filled$, unfilled$])
      .pipe(
        take(1),
        //tap(item => console.log('combine : ', item)),
        map(result => result[0].concat(result[1]))
      )


      .subscribe(result => this.stars = result);
      

  }

  changeRating(index: number) {
    if (!this.disabled) {
      this.rating = index + 1;
      this.buildRatings(index + 1);
      this.ratingChange.emit(this.rating);
    }
  }


}



