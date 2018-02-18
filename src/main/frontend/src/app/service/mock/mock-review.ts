import {ReviewService} from "../review.service";
import {Http} from "@angular/http";
import {Review} from "../../model/review";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";

@Injectable()
export class MockReviewService implements ReviewService{
  backendUrl: string;
  http: Http;

  getReviewsByDocumentId(documentId: number):Observable<Review[]> {
    return Observable
      .create(
        observer => observer.next( reviews.filter(review => review.document.id == documentId) )
      );
  }

  addReview(review: Review): Observable<Review> {
    return undefined;
  }

  getReview(id: number):Observable<Review> {
    return Observable
      .create( observer => observer.next( reviews.filter(review => review.id === id)[0] ) );
  }

  getRating(documentId: number):number {
    let revs = reviews.filter(review => review.document.id == documentId);
    let num = 0;
    revs.forEach((review) => {
      num += review.rating
    });
    return num / revs.length;
  }
}

var reviews: Review[] = [
  {
    id: 1,
    document: {id : 1},
    member: {id : 1},
    created: new Date(),
    rating: 0,
    comments: '1.Review is awesome!~!',
  },
  {
    id: 2,
    document: {id : 1},
    member: {id : 1},
    created: new Date(),
    rating: 5,
    comments: '2.Review is awesome!~!',
  },
  {
    id: 3,
    document: {id : 1},
    member: {id : 1},
    created: new Date(),
    rating: 2,
    comments: '3.Review is awesome!~!',
  },
  {
    id: 4,
    document: {id : 1},
    member: {id : 1},
    created: new Date(),
    rating: 4,
    comments: '4.Review is awesome!~!',
  },
  {
    id: 5,
    document: {id : 1},
    member: {id : 1},
    created: new Date(),
    rating: 5,
    comments: '5.Review is awesome!~!',
  },
  {
    id: 1,
    document: {id : 1},
    member: {id : 1},
    created: new Date(),
    rating: 3,
    comments: '6.Review is awesome!~!',
  }
];
