import {
  ComponentRef,
  Directive,
  ElementRef,
  inject,
  Input,
  OnDestroy,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import {
  ControlContainer,
  FormGroupDirective,
  NgControl,
  NgForm,
} from '@angular/forms';
import {
  EMPTY,
  fromEvent,
  iif,
  merge,
  skip,
  startWith,
  Subscription,
} from 'rxjs';
import { InputErrorComponent } from './components/input-error/input-error.component';
import { ErrorStateMatcher } from './error-state-matcher.service';

@Directive({
  selector: `
     [ngModel]:not([withoutValidationErrors]),
     [formControlName:not([withoutValidationErrors]),
     [formContol]:not([withoutValidationErrors]),
     [formGroupName]:not([withoutValidationErrors]),
     [ngModelGroup]:not([withoutValidationErrors])
     `,
})
export class DynamicValidatorMessageDirective implements OnInit, OnDestroy {
  ngControl =
    inject(NgControl, { self: true, optional: true }) ||
    inject(ControlContainer, { self: true });

  //this input will allow to pass override errorStateMatcher Implementation at control level :o
  @Input()
  errorStateMatcher = inject(ErrorStateMatcher);
  //this will point to element where directive is applied
  private elementRef = inject(ElementRef);
  private viewContainer = inject(ViewContainerRef);
  private componentRef: ComponentRef<InputErrorComponent> | null = null;
  private subscription: Subscription | undefined;

  parentContainer = inject(ControlContainer, { optional: true });
  get form() {
    return this.parentContainer?.formDirective as
      | NgForm
      | FormGroupDirective
      | null;
  }

  ngOnInit(): void {
    if (!this.ngControl?.control) {
      throw new Error(`No control model for ${this.ngControl?.name} control`);
    }
    this.subscription = merge(
      this.ngControl.control?.statusChanges,
      //to support blur events, as statusChanges emit when control value changes
      fromEvent(this.elementRef.nativeElement, 'blur'),
      //to support form submit events
      iif(() => !!this.form, this.form!.ngSubmit, EMPTY)
    )
      .pipe(
        //startWith is needed for reactive forms as they don't emit the initial status
        startWith(this.ngControl.control?.status),
        skip(this.ngControl instanceof NgControl ? 1 : 0)
      )
      .subscribe(() => {
        if (
          this.errorStateMatcher.isErrorVisible(
            this.ngControl.control,
            this.form
          )
        ) {
          if (!this.componentRef) {
            this.componentRef =
              this.viewContainer.createComponent(InputErrorComponent);
          }
          this.componentRef.setInput('errors', this.ngControl.errors);
          this.componentRef.changeDetectorRef.markForCheck();
        } else {
          this.componentRef?.destroy();
          this.componentRef = null;
        }
      });
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
