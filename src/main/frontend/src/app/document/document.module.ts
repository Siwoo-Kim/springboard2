import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatModuleModule} from "../importing-module/mat-module.module";
import {DocumentPostComponent} from './document-post/document-post.component';
import {ReactiveFormsModule} from "@angular/forms";
import {DocumentPostSuccessComponent} from "./document-post-success/document-post-success.component";
import {DocumentReadComponent} from "./document-read/document-read.component";

const documentComponents = [
  DocumentPostComponent,
  DocumentPostSuccessComponent,
  DocumentReadComponent,
];

@NgModule({
  imports: [
    CommonModule,
    MatModuleModule,
    ReactiveFormsModule,
  ],
  declarations: documentComponents,
  exports: documentComponents,
})
export class DocumentModule { }
