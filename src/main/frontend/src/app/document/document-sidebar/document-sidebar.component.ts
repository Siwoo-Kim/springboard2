import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-document-sidebar',
  templateUrl: './document-sidebar.component.html',
  styleUrls: ['./document-sidebar.component.css']
})
export class DocumentSidebarComponent implements OnInit {
  @Output() hideSidebarEmitter: EventEmitter<void> = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onHideSidebar() {
    this.hideSidebarEmitter.emit();
  }

}
