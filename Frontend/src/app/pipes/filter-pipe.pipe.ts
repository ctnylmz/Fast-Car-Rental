import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../../models/car';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Car[], filterTexet:string): Car[] {
    filterTexet = filterTexet?filterTexet.toLocaleLowerCase():""
    return filterTexet?value.filter((c:Car) => c.name.toLocaleLowerCase().indexOf(filterTexet)!==-1):value;
  }

}
