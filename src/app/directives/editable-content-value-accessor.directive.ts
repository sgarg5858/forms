import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  SecurityContext,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

const DEFAULT_REVIEW_TEMPLATE = `
<h4>Title....</h4>
`;

@Directive({
  selector: '[formControlName][contenteditable], [formControl][contenteditable] , [ngModel][contenteditable]',
  standalone: false,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: EditableContentValueAccessorDirective,
    },
  ],
})
export class EditableContentValueAccessorDirective
  implements ControlValueAccessor
{
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private sanitizer: DomSanitizer
  ) {}

  onChange = (val: any) => {};
  onTouched = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: any): void {
    this.renderer.setProperty(
      this.elementRef.nativeElement,
      'innerHtml',
      this.sanitizer.sanitize(SecurityContext.HTML, value) ||
        DEFAULT_REVIEW_TEMPLATE
    );
  }

  @HostListener('input', ['$event'])
  onInput(e: Event) {
    this.onChange((e.target as HTMLElement).innerHTML);
  }

  @HostListener('blur', ['$event'])
  onBlur(e: Event) {
    this.onTouched();
  }

  setDisabledState?(isDisabled: boolean): void {
    this.renderer.setProperty(
      this.elementRef.nativeElement,
      'contentEditable',
      !isDisabled
    );
  }
}
