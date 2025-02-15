import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  HostListener,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export type RatingOptions = 'great' | 'good' | 'neutral' | 'bad';

@Component({
  selector: 'app-rating-picker',
  templateUrl: './rating-picker.component.html',
  styleUrls: ['./rating-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: RatingPickerComponent,
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingPickerComponent implements ControlValueAccessor {
  constructor(private changeDetector: ChangeDetectorRef) {}

  _rating: RatingOptions | null = null;
  _disabled = false;

  get rating() {
    return this._rating;
  }

  touched = false;
  onChanged = (val: RatingOptions) => {};
  onTouched = () => {};

  @HostBinding('attr.tabindex') tabIndex = 0;
  @HostListener('blur')
  onBlur() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setRating(value: RatingOptions) {
    if (!this._disabled) {
      console.log(value);
      this._rating = value;
      this.onChanged(value);
      this.onBlur();
    }
  }

  writeValue(rating: RatingOptions): void {
    this._rating = rating;
    this.changeDetector.markForCheck();
  }
  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this._disabled = isDisabled;
    this.changeDetector.markForCheck();
  }
}
