import {EventEmitter, Inject, Injectable, Output} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {ModelCode} from "../model/model-code";
import {BACKEND_URL_TOKEN} from "../tokens/app-tokens";

@Injectable()
export class ModelCodeService {
  readonly urlSegment: string =  this.backendUrl+'modelcode/';
  @Output() onChangeModelEmitter:EventEmitter<string> = new EventEmitter<string>();

  _codeName: string = 'home';
  constructor(public http:Http,
              @Inject(BACKEND_URL_TOKEN) public backendUrl: string) {}

  modelCodes():Observable<ModelCode[]>{
    return this.http.get(`${this.urlSegment}`)
      .map(respsone => respsone.json());
  }

  modelCode(code: string):Observable<ModelCode>{
    return this.http.get(`${this.urlSegment}code/${code}`)
      .map(respsone => respsone.json());
  }

  modelCodeByName(name: string):Observable<ModelCode>{
    return this.http.get(`${this.urlSegment}${name}`)
      .map(respsone => respsone.json());
  }

  set codeName(name: string) {
    this._codeName = name;
    this.onChangeModelEmitter.emit(this.codeName);
  }

  get codeName(): string{
    return this._codeName;
  }
}
