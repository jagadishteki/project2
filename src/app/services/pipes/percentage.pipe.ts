import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage'
})
export class PercentagePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    let percentage = (value*100/600).toFixed(2);
    return percentage+"%";
  }

}
