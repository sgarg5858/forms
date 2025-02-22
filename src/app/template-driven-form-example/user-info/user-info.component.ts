import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { ErrorStateMatcher, OnTouchedErrorStateMatcher } from 'src/app/error/error-state-matcher.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  providers:[
    {
      provide:ErrorStateMatcher,
      useClass:OnTouchedErrorStateMatcher
    }
  ]
})
export class UserInfoComponent implements AfterViewInit {
  bannedWords = ['test', 'demo', 'xyz'];
  user = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    contactNumber: '',
    dateOfBirth: '12/05/1998',
    nationality: 'Indian',
    password: {
      password: '1234',
      confirmPassword: '14',
    },
    currentAddress: {
      postcode: 'E12121',
      HouseOrApartmentNo: '111',
      street: 'canary whard',
      county: 'london',
    },
  };
  @ViewChild(NgForm) formDirective!: NgForm;
  initialFormValues: unknown;

  ngAfterViewInit(): void {
    queueMicrotask(() => {
      this.initialFormValues = { ...this.formDirective.value };
    });
  }

  submitUserData(event: SubmitEvent, form: NgForm) {
    console.log(event);
    console.log(form.form);
    this.initialFormValues = { ...this.formDirective.value };
  }
  resetForm(event: Event) {
    event?.preventDefault();
    this.formDirective.resetForm(this.initialFormValues);
  }
}
