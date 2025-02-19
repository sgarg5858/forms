import { Injectable, Type } from '@angular/core';
import { DynamicControl } from '../interfaces/control';
import { from, Observable, of, tap } from 'rxjs';

type DynamicControlMap = {
  [T in DynamicControl['controlType']]: () => Promise<Type<any>>;
};

@Injectable({
  providedIn: 'root',
})
export class DynamicControlResolver {
  private lazyControlComponents: DynamicControlMap = {
    input: () =>
      import('./../components/dynamic-input/dynamic-input.component').then(
        (c) => c.DynamicInputComponent
      ),
    select: () =>
      import('./../components/dynamic-select/dynamic-select.component').then(
        (c) => c.DynamicSelectComponent
      ),
    checkbox: () =>
      import(
        './../components/dynamic-checkbox/dynamic-checkbox.component'
      ).then((c) => c.DynamicCheckboxComponent),
    group: () =>
      import('./../components/dynamic-group/dynamic-group.component').then(
        (c) => c.DynamicGroupComponent
      ),
  };

  private loadedComponents: Map<string,Type<any>> = new Map();
   

  resolve(controlType: keyof DynamicControlMap): Observable<Type<any>> {
    const loadedComponent = this.loadedComponents.get(controlType);
    if (loadedComponent) {
      return of(loadedComponent);
    }
    return from(this.lazyControlComponents[controlType]()).pipe(tap((component) => {
      this.loadedComponents.set(controlType, component!);
      return component;
    }));
  }
}
