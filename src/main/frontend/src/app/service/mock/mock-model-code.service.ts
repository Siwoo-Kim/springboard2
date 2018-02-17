import {EventEmitter, Injectable} from '@angular/core';
import {ModelCodeService} from "../model-code.service";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {ModelCode} from "../../model/model-code";

@Injectable()
export class MockModelCodeService implements ModelCodeService{
  urlSegment: string;
  onChangeModelEmitter: EventEmitter<string> = new EventEmitter<string>();
  _codeName: string;
  http: Http;
  backendUrl: string;

  constructor() { }

  modelCodes(): Observable<ModelCode[]> {
    return Observable.create(observer => {
      observer.next(dummyModelCodes);
    });
  }

  modelCode(code: string): Observable<ModelCode> {
    return undefined;
  }

  modelCodeByName(name: string): Observable<ModelCode> {
    console.log(name);
    return Observable.create(observer => {
      let foundModelCode = dummyModelCodes.filter(dummyCode => {
        return dummyCode.name.toLowerCase() == name.toLowerCase()
      })[0];
      observer.next(foundModelCode);
    });
  }

  set codeName(name: string) {
    this._codeName = name;
    this.onChangeModelEmitter.emit(name);
  }

  get codeName() {
    return this._codeName;
  }


}

var dummyModelCodes =[
  {
    id:'mc-001',
    description:'Work in a single document with teammates or people outside your company. This feature is available for all and free! Invite colleagues to collaborate in the same document at the same time. Suggest edits or make them directly. Chat live with others in Google Docs or include their name in a comment so they receive a notification.',
    name:'Home',
    createDate: new Date(),
  },
  {
    id:'mc-002',
    description:'With the Application document, you can create and format online documents. Work alone or collaborate with others, too.! Bring your documents to life with smart editing and styling tools. Choose from hundreds of fonts. Add links, images, and drawings.',
    name:'Document',
    createDate: new Date(),
  },
  {
    id:'mc-003',
    description:'You can make a friend in the application, and share your document with them!',
    name:'Code',
    createDate: new Date(),
  },
];
