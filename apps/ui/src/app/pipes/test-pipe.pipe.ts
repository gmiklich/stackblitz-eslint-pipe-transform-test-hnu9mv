import { Pipe, PipeTransform } from '@angular/core';

const emptyGuid = '00000000-0000-0000-0000-000000000000';

@Pipe({
  // eslint-disable-next-line @angular-eslint/pipe-prefix
  name: 'tenantStatus',
})
export class TenantStatusPipe implements PipeTransform {
  transform(value: string): string {
    return value === emptyGuid ? 'unassigned' : 'assigned';
  }
}
