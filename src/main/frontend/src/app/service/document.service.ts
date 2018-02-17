import {Inject, Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {BACKEND_URL_TOKEN} from "../tokens/app-tokens";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {Document} from "../model/document";


@Injectable()
export class DocumentService {

  constructor(public http:Http, @Inject(BACKEND_URL_TOKEN) public backendUrl: string) {
    console.log('BACKEND_URL_TOKEN : '+this.backendUrl);
  }

  postDocument(document: Document): Observable<Document>{
    return this.http.post(this.backendUrl+"document",document)
      .map(response => {
        console.log(response);
          if(response.status === 400){
            return response['_body'].json();
          }
        return response.json();
    });
  }

  documentById(documentId:number): Observable<Document>{
    return null;
  }

}


const documents = [];

