import { Injectable } from '@angular/core';
import {DocumentService} from "../document.service";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Document} from "../../model/document";

@Injectable()
export class MockDocumentService implements DocumentService{
  http: Http;
  backendUrl: string;

  postDocument(document: Document): Observable<Document> {
    documents.push(document);
    document.id = documents.length;
    return Observable.create(observer => {
      observer.next(document);
    })
  }

}

const documents = [

];
