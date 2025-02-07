import { Injectable } from '@angular/core';
import { map, of, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  private registeredEmails = [
    'a@gmail.com',
    'test@gmail.com',
    'demo@gmail.com',
    'xyz@gmail.com',
  ];

  checkIfItsAlreadyRegistered(email:string) {
    const isRegistered = this.registeredEmails.find((rEmail)=>rEmail.toLowerCase() === email);
    return timer(2000).pipe(map(()=>isRegistered))
  }
}
