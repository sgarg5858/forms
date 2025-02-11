import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Observable, tap } from 'rxjs';
import { FormValidators } from 'src/app/validators/form-validators';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  constructor(private readonly userService: UserService) {}

  skills$: Observable<string[]> | undefined;

  ngOnInit(): void {
    this.skills$ = this.userService.getSkills().pipe(
      tap((skills) =>
        skills.forEach((skill) => {
          (<FormGroup>this.userInfo.get('skills')).addControl(
            skill,
            new FormControl('', [Validators.required])
          );
        })
      )
    );
  }

  userInfo = new FormGroup({
    firstName: new FormControl('Sanjay', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2)],
    }),
    lastName: new FormControl('Garg', [
      Validators.required,
      Validators.minLength(2),
    ]),
    email: new FormControl('sgarg5858@gmail.com', [
      Validators.required,
      Validators.email,
    ]),
    contactNumber: new FormControl('9999991111', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    dateOfBirth: new FormControl('', [Validators.required]),
    nationality: new FormControl('Garg', [
      Validators.required,
      Validators.minLength(2),
    ]),
    password: new FormGroup({
      password: new FormControl('123456', [Validators.required]),
      confirmPassword: new FormControl('12', [Validators.required]),
    },{validators:[FormValidators.passwordShouldMatch]}),
    skills: new FormGroup<{ [key: string]: FormControl<'yes' | 'no'> }>({}),
  });

  submitForm(event: Event) {
    console.log(event, this.userInfo.value);
  }
}
