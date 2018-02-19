import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainBoardComponent} from "../main/components/main-board/main-board.component";
import {DocumentPostComponent} from "../document/document-post/document-post.component";
import {DocumentPostSuccessComponent} from "../document/document-post-success/document-post-success.component";
import {DocumentReadComponent} from "../document/document-read/document-read.component";
import {DocumentMainComponent} from "../document/document-main/document-main.component";
import {DocumentListComponent} from "../document/document-list/document-list.component";

const routes: Routes= [
  {path:'home',component:MainBoardComponent},
  {path:'',component:MainBoardComponent,pathMatch:'full'},
  {path:'document',component:DocumentMainComponent, children: [
    {path:'list',component:DocumentListComponent},
    {path:'post',component:DocumentPostComponent},
    {path:'post/success/:id',component:DocumentPostSuccessComponent},
      {path:':id',component:DocumentReadComponent},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
