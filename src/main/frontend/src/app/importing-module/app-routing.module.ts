import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainBoardComponent} from "../main/components/main-board/main-board.component";
import {DocumentPostComponent} from "../document/document-post/document-post.component";
import {DocumentPostSuccessComponent} from "../document/document-post-success/document-post-success.component";
import {DocumentReadComponent} from "../document/document-read/document-read.component";

const routes: Routes= [
  {path:'home',component:MainBoardComponent},
  {path:'',component:MainBoardComponent,pathMatch:'full'},
  {path:'document/post',component:DocumentPostComponent},
  {path:'document/post/success/:id',component:DocumentPostSuccessComponent},
  {path:'document/:id',component:DocumentReadComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
