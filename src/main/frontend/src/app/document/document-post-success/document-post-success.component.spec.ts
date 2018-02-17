import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentPostSuccessComponent } from './document-post-success.component';

describe('DocumentPostSuccessComponent', () => {
  let component: DocumentPostSuccessComponent;
  let fixture: ComponentFixture<DocumentPostSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentPostSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentPostSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
