import {
  ComponentRef,
  Directive,
  inject,
  OnDestroy,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { filter, skip, startWith, Subscription } from 'rxjs';
import { InputErrorComponent } from './components/input-error/input-error.component';

@Directive({
  selector: '[ngModel],[formControlName],[formContol]',
})
export class DynamicValidatorMessageDirective implements OnInit, OnDestroy {
  ngControl = inject(NgControl, { self: true });
  //this will point to element where directive is applied
  private viewContainer = inject(ViewContainerRef);
  private componentRef: ComponentRef<InputErrorComponent> | null = null;

  private subscription: Subscription | undefined;

  ngOnInit(): void {
    this.subscription = this.ngControl.control?.statusChanges
      .pipe(
        //startWith is needed for reactive forms as they don't emit the initial status
        startWith(this.ngControl.control?.status),
        skip(this.ngControl instanceof NgControl ? 1 : 0),
        filter((status) => status === 'INVALID' || status === 'VALID')
      )
      .subscribe(() => {
        if (!this.ngControl?.control) {
          throw new Error(
            `No control model for ${this.ngControl?.name} control`
          );
        }
        if (this.ngControl.errors) {
          if (!this.componentRef) {
            this.componentRef =
              this.viewContainer.createComponent(InputErrorComponent);
          }
          this.componentRef.setInput('errors', this.ngControl.errors);
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
