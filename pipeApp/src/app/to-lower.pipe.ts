import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toLower'
})
export class ToLowerPipe implements PipeTransform {

  transform(value: any): any {
    
      if (!value) return value;

    return value.replace(/\w\S*/g, function(txt) {
        return txt.toLowerCase();
    });

  }

}
