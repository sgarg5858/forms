import { Injectable } from '@angular/core';
import { map, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getSkills()
  {
    return timer(1000).pipe(
      map(()=>['angular','rxjs','ngrx','scss','jasmine'])
    )
  }
}
