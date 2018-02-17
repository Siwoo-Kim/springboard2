import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-document-post-success',
  templateUrl: './document-post-success.component.html',
  styleUrls: ['./document-post-success.component.css']
})
export class DocumentPostSuccessComponent implements OnInit {
  documentId: number;

  constructor(private route:ActivatedRoute,private router:Router) {
    this.documentId = route.snapshot.params['id'];
    console.log(this.documentId);

  }

  ngOnInit() {
  }

  onReadDocument() {
    this.router.navigate(['/document',this.documentId]);
  }

  onList() {

  }
}
