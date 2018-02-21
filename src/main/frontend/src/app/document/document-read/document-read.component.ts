import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DocumentService} from "../../service/document.service";
import {Document} from "../../model/document.model";
import {ReviewService} from "../../service/review.service";
import {Review} from "../../model/review";
import {ModelCodeService} from "../../service/model-code.service";

@Component({
  selector: 'app-document-read',
  templateUrl: './document-read.component.html',
  styleUrls: ['./document-read.component.css']
})
export class DocumentReadComponent implements OnInit {
  document: Document;
  reviews: Review[];
  rating: number;

  constructor(
    public documentService: DocumentService,
    public reviewService: ReviewService,
    public route: ActivatedRoute) { }

  ngOnInit() {
    let documentId = this.route.snapshot.params['id'];
    console.log(documentId);
    this.documentService
      .documentById(documentId)
      .subscribe(document => {
        console.log(this.document);
        this.document = document;
      });

    this.reviewService.getReviewsByDocumentId(documentId)
      .subscribe(reviews => this.reviews = reviews );

    this.rating = this.reviewService.getRating(documentId);
  }

}
