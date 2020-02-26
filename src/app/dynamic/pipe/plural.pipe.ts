import { Pipe, PipeTransform } from '@angular/core';
import { Plural } from '../plural.enum';

@Pipe({
  name: 'plural'
})
export class PluralPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (Number(value) >= 1) {
      return 'Number Not accept';
    }
    return Plural[value];
  }

}
