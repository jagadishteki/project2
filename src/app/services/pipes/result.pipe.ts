import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'result'
})
export class ResultPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if((value*100/600)>=35){
      return "PASS";
    }else{
      return "FAIL";
    }
  }

}
