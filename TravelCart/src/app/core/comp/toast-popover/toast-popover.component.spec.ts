import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastPopoverComponent } from './toast-popover.component';

describe('ToastPopoverComponent', () => {
  let component: ToastPopoverComponent;
  let fixture: ComponentFixture<ToastPopoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastPopoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
