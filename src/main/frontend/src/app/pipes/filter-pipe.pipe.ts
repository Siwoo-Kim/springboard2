import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(objects: any[], field: string, value:string): any {
    if(!field || !value){ return objects; }

    return objects.filter(object =>{
      const objectValue = object[field].toLowerCase();
      const filterValue = value.toLocaleLowerCase();
      return objectValue.indexOf(filterValue) >= 0;
    });
  }

}
