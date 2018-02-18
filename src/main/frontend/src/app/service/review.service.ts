import {Inject, Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Review} from "../model/review";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ReviewService {

  constructor(public http:Http) { }

  getReviewsByDocumentId(documentId: number):Observable<Review[]>{
    return null;
  }

  getReview(id: number):Observable<Review>{
    return null;
  }

  getRating(documentId: number):number{
    return null;
  }

}
