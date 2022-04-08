import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(items: any[], value: string): any[] {
    if(!items) return [];
    if(!value) return items;
    let cena = parseInt(value);
    return items.filter(it => {
      return it.cena <= cena;
    });
  }

}
