import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DocumentService} from "../../service/document.service";
import {Document} from "../../model/document.model";
import {FormControl} from "@angular/forms";
import 'rxjs/Rx';
import {debounceTime} from "rxjs/operators";
import {Page} from "../../model/page.model";

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent {
  page: any;
  documents: Document[];
  searchTitle: string;

  projects: any[] = [
    {name : 'Your Most Recent',  description: 'Most Recent Documents'},
    {name : 'Your Most Popular', description: 'Most Popular Documents'},
    {name : 'Your Most Favorite',description: 'Most Popular Favorite'},
  ];

  searchInput: FormControl = new FormControl();

  constructor(private documentService: DocumentService) {
    this.documentService.documents().subscribe(
      page  => {
        this.documents = page.content;
        this.page = page;
      }
    );

    /* searching the document on the page */
    this.searchInput.valueChanges
      .debounceTime(100)
      .subscribe(searhTerm => {
          this.searchTitle = searhTerm;
      })
  }

  getFaFileClass(title: string){
    return (
      title.length != 0
      && title.indexOf(this.searchTitle) > 0)
      ? {'fa' : true, 'fa-file' : true}
      : {'fa' : true,'fa-file-o' : true};
  }
}
