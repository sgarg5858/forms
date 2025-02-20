import { inject, Injector, Pipe, PipeTransform } from '@angular/core';
import { DynamicControl } from '../interfaces/control';
import { CONTROL_DATA } from '../control-data.token';

@Pipe({
  name: 'controlInjector',
  standalone: true,
})
export class ControlInjectorPipe implements PipeTransform {
  injector = inject(Injector);

  transform(controlKey: string | number, controlConfig: DynamicControl): Injector {
    //by default parent is null injector, always remember to provide parent injector
    return Injector.create({
      parent: this.injector,
      providers: [
        { provide: CONTROL_DATA, useValue: { controlKey, controlConfig } },
      ],
    });
  }
}
