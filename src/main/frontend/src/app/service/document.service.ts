import {Inject, Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {BACKEND_URL_TOKEN} from "../tokens/app-tokens";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {Document} from "../model/document";
import {Page} from "../model/page.model";


@Injectable()
export class DocumentService {

  constructor(public http:Http, @Inject(BACKEND_URL_TOKEN) public backendUrl: string) {
    this.backendUrl+="document/";
  }

  postDocument(document: Document): Observable<Document>{
    return this.http.post(this.backendUrl,document)
      .map(response => {
        console.log(response);
          if(response.status === 400){
            return response['_body'].json();
          }
        return response.json();
    });
  }

  documentById(documentId:number): Observable<Document>{
    return this
      .http
      .get(`${this.backendUrl}/${documentId}`)
      .map(response => { console.log(response); return response.json(); });
  }

  documents(): Observable<Page>{
    return this
      .http
      .get(`${this.backendUrl}`)
      .map(response => { console.log(response); return Page.toPage(response.json())} );
  }
}


const documents = [];

