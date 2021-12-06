import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageReviewItemComponent } from './package-review-item.component';

describe('PackageReviewItemComponent', () => {
  let component: PackageReviewItemComponent;
  let fixture: ComponentFixture<PackageReviewItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageReviewItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageReviewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
