import * as format from "date-fns/format";
import * as parse from "date-fns/parse";

export class DateFormatter {
  static formatLocalDate = 'YYYY-MM-DD';
  static formatLocalDateTime = 'YYYY/MM/DD HH:mm:ss';

  static getlocalDateString(date: Date){
    return format(date,DateFormatter.formatLocalDate);
  }

  static getlocalDateTimeString(dateTime: Date){
    return format(dateTime,DateFormatter.formatLocalDateTime);
  }

  static getlocalDate(dateString: string){
    console.log(dateString);
    return parse(dateString);
  }

}
