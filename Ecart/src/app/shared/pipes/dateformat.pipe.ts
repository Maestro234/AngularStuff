import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateformat'
})
export class DateformatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let temp: Date = new Date(value[0],value[1]-1,value[2]);
    return temp.toDateString();
  }

}
