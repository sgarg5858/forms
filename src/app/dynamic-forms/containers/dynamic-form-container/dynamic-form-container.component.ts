import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject, switchMap, tap } from 'rxjs';
import { DynamicFormConfig } from '../../interfaces/control';
import { FormControl, FormGroup } from '@angular/forms';

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
      this.form.addControl(key, new FormControl(controls[key].value));
    });
    console.log(this.form.controls);
  }
  submitForm()
  {
    console.log(this.form.value);
  }
}
