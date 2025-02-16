import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserInfoComponent } from 'src/app/reactive-form-example/components/user-info/user-info.component';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AddressComponent,
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: AddressComponent,
      multi: true,
    },
  ],
})
export class AddressComponent
  implements ControlValueAccessor, Validator, OnDestroy,OnInit
{
  constructor(public readonly parentForm: UserInfoComponent) {}

  @Input() formSubmitted = false;

  form = new FormGroup({
    postCode: new FormControl('', [Validators.required]),
    apartmentNumber: new FormControl('', [Validators.required]),
    streetNumber: new FormControl('', [Validators.required]),
    county: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
  });

  onChangeSubs = new Subscription();

  onTouched = () => {};

  writeValue(obj: any): void {
    if (this.form) this.form.patchValue(obj, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    const sub = this.form.valueChanges.subscribe(fn);
    this.onChangeSubs.add(sub);
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) this.form.disable();
    else {
      if (this.form.disabled) {
        this.form.enable();
      }
    }
  }

  validate(_: AbstractControl): ValidationErrors | null {
    console.log(this.form);
    if (this.form.valid) {
      return null;
    }
    let errors: any = {};

    errors = this.addControlErrors(errors, 'postCode');
    errors = this.addControlErrors(errors, 'apartmentNumber');
    errors = this.addControlErrors(errors, 'streetNumber');
    errors = this.addControlErrors(errors, 'county');
    errors = this.addControlErrors(errors, 'country');

    console.log(errors);
    return errors;
  }

  addControlErrors(allErrors: any, controlName: string) {
    const errors = { ...allErrors };
    console.log(this.form);
    const controlErrors = this.form.get(controlName)?.errors;

    if (controlErrors) {
      errors[controlName] = controlErrors;
    }

    return errors;
  }

  ngOnInit(): void {
      console.log(this.form);
  }

  ngOnDestroy(): void {
    this.onChangeSubs.unsubscribe();
  }
}
