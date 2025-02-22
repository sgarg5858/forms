import { InjectionToken } from '@angular/core';

type ErrorMessages = { [key: string]: (agrs?: any) => string };

export const ERROR_MESSAGES: ErrorMessages = {
  required: () => `This field is required`,
  requiredTrue: () => `This field is required`,
  email: () => `It should be a valid email`,
  minlength: ({requiredLength}) => `The value length should be at least ${requiredLength}`,
  maxlength: ({requiredLength}) => `The value length should be at most ${requiredLength}`,
  banWords: () => `This word isn't allowed`,
  appBanWords: () => `This word isn't allowed`,
  appPasswordShouldMatch: () => `Password should match`,
  passwordsDontMatch: () => `Password should match`,
  pattern: () => `Wrong format`,
  appUniqueNickname: () => `Nickname is taken`,
  uniqueName: () => `Nickname is taken`,
};

export const VALIDATION_ERROR_MESSAGES = new InjectionToken<ErrorMessages>(
  'Validation Error Messages',
  {
    providedIn: 'root',
    factory: () => ERROR_MESSAGES,
  }
);
