import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements AfterViewInit {
  bannedWords = ['test', 'demo', 'xyz'];
  user = {
    firstName: '',
    lastName: 'Garg',
    emailAddress: 'sgarg5858@gmail.com',
    contactNumber: '9041421558',
    dateOfBirth: '12/05/1998',
    nationality: 'Indian',
    password: {
      password: '1234',
      confirmPassword: '1234',
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
