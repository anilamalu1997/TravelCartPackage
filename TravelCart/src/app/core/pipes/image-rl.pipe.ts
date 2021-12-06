import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageRl'
})
export class ImageRlPipe implements PipeTransform {

  transform(value?: string, ...args: unknown[]): unknown {
    return '/assets/img/location/'+value+'.png';
  }

}
