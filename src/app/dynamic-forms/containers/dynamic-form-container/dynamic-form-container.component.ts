import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject, switchMap, tap } from 'rxjs';
import { DynamicControl, DynamicFormConfig } from '../../interfaces/control';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-container',
  templateUrl: './dynamic-form-container.component.html',
  styleUrls: ['./dynamic-form-container.component.scss'],
})
export class DynamicFormContainerComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  formLoadingTrigger = new Subject<'user' | 'company'>();
  protected formConfig$!: Observable<DynamicFormConfig>;
  form!: FormGroup;

  ngOnInit(): void {
    this.formConfig$ = this.formLoadingTrigger.pipe(
      switchMap((value) =>
        this.httpClient
          .get<DynamicFormConfig>(`/assets/${value}.form.json`)
          .pipe(
            tap(({ controls }: DynamicFormConfig) => this.buildForm(controls))
          )
      )
    );
  }

  private buildForm(controls: DynamicFormConfig['controls']) {
    this.form = new FormGroup({});
    Object.keys(controls).forEach((key) => {
      const validators = this.resolveValidators(controls[key]);
      this.form.addControl(key, new FormControl(controls[key].value,{validators}));
    });

    console.log(this.form.controls);
  }
  resolveValidators({ validators = {}}: DynamicControl) {
    return (Object.keys(validators) as Array<keyof typeof validators> | [] ).map((validatorKey) => {
      const validatorValue = validators[validatorKey];
      if (validatorKey === 'required') {
        return Validators.required;
      }
      if (validatorKey === 'email') {
        return Validators.email;
      }
      if (validatorKey === 'minLength') {
        if (typeof validatorValue === 'number')
          return Validators.minLength(validatorValue); 
      
      }
      return Validators.nullValidator;
    });
  }
  submitForm() {
    console.log(this.form.value);
  }
}
