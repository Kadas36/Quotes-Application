import { Pipe, PipeTransform, ElementRef } from '@angular/core';

@Pipe({
  name: 'period'
})
export class PeriodPipe implements PipeTransform {

  transform(value: any): number {
    const curentDate: any = new Date();
    const createdDate: any = new Date(value);
    const diff = curentDate - createdDate;
    const days = Math.floor(diff / (24 * 60 * 60 * 1000));
    return days;
  }


}
