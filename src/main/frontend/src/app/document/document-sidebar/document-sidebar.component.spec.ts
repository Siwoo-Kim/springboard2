import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentSidebarComponent } from './document-sidebar.component';

describe('DocumentSidebarComponent', () => {
  let component: DocumentSidebarComponent;
  let fixture: ComponentFixture<DocumentSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
