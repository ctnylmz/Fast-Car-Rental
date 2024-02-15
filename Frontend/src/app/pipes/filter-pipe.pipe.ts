import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: CarDetail[], filterTexet:string): CarDetail[] {
    filterTexet = filterTexet?filterTexet.toLocaleLowerCase():""
    return filterTexet?value.filter((c:CarDetail) => c.carName.toLocaleLowerCase().indexOf(filterTexet)!==-1):value;
  }

}
