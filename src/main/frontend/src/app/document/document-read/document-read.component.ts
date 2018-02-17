import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DocumentService} from "../../service/document.service";
import {Document} from "../../model/document";

@Component({
  selector: 'app-document-read',
  templateUrl: './document-read.component.html',
  styleUrls: ['./document-read.component.css']
})
export class DocumentReadComponent implements OnInit {
  document: Document;

  constructor(public documentService: DocumentService,public route: ActivatedRoute) { }

  ngOnInit() {
    let documentId = this.route.snapshot.params['id'];
    console.log(documentId);
    this.documentService
      .documentById(documentId)
      .subscribe(document => {
        this.document = document;
      });
  }

}
