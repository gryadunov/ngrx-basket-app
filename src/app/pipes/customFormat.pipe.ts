import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'customFormat'
})
export class CustomFormatPipeClass implements PipeTransform {
  transform(value, type) {
    if (type === 'currency-3') {
      return '$' + parseFloat(value).toFixed(3).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    }
    if (type === 'currency-2') {
      return `$${parseFloat(value).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}`;
    }
    if (type === 'currency-2-min') {

      if (value > 9999) {
        value = (parseFloat(value) / 1000).toString();
        value = parseInt(value).toString();
        return `$${value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}K`;
      } else {
        return `$${parseFloat(value).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}`;
      }
    }
    return value;
  }
}
