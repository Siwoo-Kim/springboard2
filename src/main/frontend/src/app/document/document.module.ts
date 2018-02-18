import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatModuleModule} from "../importing-module/mat-module.module";
import {DocumentPostComponent} from './document-post/document-post.component';
import {ReactiveFormsModule} from "@angular/forms";
import {DocumentPostSuccessComponent} from "./document-post-success/document-post-success.component";
import {DocumentReadComponent} from "./document-read/document-read.component";
import {MainBoardComponent} from "../main/components/main-board/main-board.component";
import {MainModule} from "../main/main.module";

const documentComponents = [
  DocumentPostComponent,
  DocumentPostSuccessComponent,
  DocumentReadComponent,
];

@NgModule({
  imports: [
    /* angular modules */
    CommonModule,
    ReactiveFormsModule,

    /*app modules*/
    MainModule,
    MatModuleModule,
  ],
  declarations: documentComponents,
  exports: documentComponents,
})
export class DocumentModule { }
