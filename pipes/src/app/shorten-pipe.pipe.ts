import { style } from '@angular/animations';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenPipe'
})
export class ShortenPipePipe implements PipeTransform {

  transform(value: any, limit:number): unknown {
    if(value.length > limit){
      return value.substr(0,limit)+'...';
    }
    return value;
  }

}
