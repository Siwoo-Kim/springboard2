import {Directive, forwardRef, } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

const tagName_VALIDATOR = {
  provide : NG_VALIDATORS,
  useExisting : forwardRef(()=>TagNameValidator),
  multi: true
};

@Directive({
  selector: 'input[tagName]',
  providers: [tagName_VALIDATOR]
})
export class TagNameValidator implements Validator{

  validate({ value }: AbstractControl): ValidationErrors | null {
    let strings = value.split(",");
    console.log(strings);
    console.log(strings.length);
    let error = {'tagName': true};

    if (!strings) return;
    if (strings.length > 3) return error;


    for (let string of strings) {
      let pattern = /^#[a-zA-Z]+/g;
      let inValid: boolean = !pattern.test(string);
      if (inValid) return error;
    }
    return null;
  }

}

export function tagNameValidator({ value }: AbstractControl): ValidationErrors | null {
  let strings: string[] = value.split(",");
  let error = { 'tagName' : true };

  if(!strings) return;
  if(strings.length > 3)  { error['length'] =true; return error };

  for(let str of strings){
    let pattern = /^#[a-zA-Z^\#]+/g;
    let inValid: boolean = !pattern.test(str);

    let str2: string = str.slice(1,str.length);
    let containsHash: boolean = str2.indexOf('#') > 0;
    let containsSameWord: boolean = strings.filter(
      filter => filter === str
    ).length > 1;
    if(containsHash) { error['containsHash'] = true; }
    if(containsSameWord) { error['containsSameword'] = true; }
    if(inValid || containsHash || containsSameWord ) return error;
  }
  return null;
}
