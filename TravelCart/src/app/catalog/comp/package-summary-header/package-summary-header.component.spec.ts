import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageSummaryHeaderComponent } from './package-summary-header.component';

describe('PackageSummaryHeaderComponent', () => {
  let component: PackageSummaryHeaderComponent;
  let fixture: ComponentFixture<PackageSummaryHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageSummaryHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageSummaryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
