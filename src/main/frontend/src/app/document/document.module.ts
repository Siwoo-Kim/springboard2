import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatModuleModule} from "../importing-module/mat-module.module";
import { DocumentPostComponent } from './document-post/document-post.component';

const documentComponents = [
  DocumentPostComponent,
];

@NgModule({
  imports: [
    CommonModule,
    MatModuleModule,
  ],
  declarations: documentComponents,
  exports: documentComponents,
})
export class DocumentModule { }
