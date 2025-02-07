import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  userCredentials = {
    email: '',
    password: '',
  };

  onSubmit(_: SubmitEvent) {
    console.log(this.userCredentials);
  }
}
