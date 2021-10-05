import { Pipe, PipeTransform } from '@angular/core';

const magicValue = '123';

@Pipe({
  name: 'appTestStatus',
})
export class TestStatusPipe implements PipeTransform {
  transform(value: string): string {
    return value === magicValue ? 'success' : 'whoops';
  }
}
