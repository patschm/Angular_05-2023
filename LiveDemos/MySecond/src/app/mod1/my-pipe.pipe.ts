import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return `${value} is ${args[0]} number`;
  }

}
