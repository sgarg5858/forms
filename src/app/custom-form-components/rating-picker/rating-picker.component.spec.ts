import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingPickerComponent } from './rating-picker.component';

describe('RatingPickerComponent', () => {
  let component: RatingPickerComponent;
  let fixture: ComponentFixture<RatingPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingPickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
