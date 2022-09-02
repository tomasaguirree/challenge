import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(value: any, format: string): unknown {
    let formatted = '-';

    if (value != null) formatted = moment(value).format(format);

    return formatted;
  }
}
