import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toUpper'
})
export class ToUpperPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
            if (!value) return value;

    return value.replace(/\w\S*/g, function(txt) {
        return txt.toUpperCase();
    });

  }

}
