import {Inject, Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Review} from "../model/review";
import {Observable} from "rxjs/Observable";
import {BACKEND_URL_TOKEN} from "../tokens/app-tokens";

@Injectable()
export class ReviewService {

  constructor(public http:Http,@Inject(BACKEND_URL_TOKEN) public backendUrl: string) {
    this.backendUrl = this.backendUrl+"review/";
  }

  addReview(review: Review): Observable<Review>{
    return this
      .http
      .post(`${this.backendUrl}`,review)
      .map(response => {console.log(response); return response.json(); })
  }

  getReviewsByDocumentId(documentId: number):Observable<Review[]>{
    return this.http
      .get(`${this.backendUrl}document/${documentId}`)
      .map(resposne => { console.log(resposne); return resposne.json();});
  }

  getReview(id: number):Observable<Review>{
    return null;
  }

  getRating(documentId: number):number{
    return null;
  }

}
