import { Pipe } from '@angular/core';

@Pipe({
    name:"explode"
  })
  export class ExplodePipe {
    transform(value) {
      if(value)
        return value.split(',');
        else return [];
    }
}