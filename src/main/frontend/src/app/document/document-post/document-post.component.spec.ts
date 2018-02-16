import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentPostComponent } from './document-post.component';

describe('DocumentPostComponent', () => {
  let component: DocumentPostComponent;
  let fixture: ComponentFixture<DocumentPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
