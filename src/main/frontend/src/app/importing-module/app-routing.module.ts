import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainBoardComponent} from "../main/components/main-board/main-board.component";
import {DocumentPostComponent} from "../document/document-post/document-post.component";

const routes: Routes= [
  {path:'home',component:MainBoardComponent},
  {path:'',component:MainBoardComponent,pathMatch:'full'},
  {path:'document/post',component:DocumentPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
