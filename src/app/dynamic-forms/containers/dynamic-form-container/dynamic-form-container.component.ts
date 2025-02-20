import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject, switchMap, tap } from 'rxjs';
import { DynamicControl, DynamicFormConfig } from '../../interfaces/control';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicControlResolver } from '../../services/dynamic-control-resolver.service';

@Component({
  selector: 'app-dynamic-form-container',
  templateUrl: './dynamic-form-container.component.html',
  styleUrls: ['./dynamic-form-container.component.scss'],
})
export class DynamicFormContainerComponent implements OnInit {
  constructor(
    public dynamicControlResolver: DynamicControlResolver,
    private httpClient: HttpClient
  ) {}

  formLoadingTrigger = new Subject<'user' | 'company'>();
  protected formConfig$!: Observable<DynamicFormConfig>;
  form!: FormGroup;

  ngOnInit(): void {
    this.formConfig$ = this.formLoadingTrigger.pipe(
      switchMap((value) =>
        this.httpClient
          .get<DynamicFormConfig>(`/assets/${value}.form.json`)
          .pipe(
            tap(() => {
              this.form = new FormGroup({});
            })
          )
      )
    );
    setTimeout(() => {
      console.log(this.form)
    },2000)
  }
  submitForm() {
    console.log(this.form.value);
  }
}
