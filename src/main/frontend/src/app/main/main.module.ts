import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatModuleModule } from "../importing-module/mat-module.module";
import {FooterComponent} from "./components/footer/footer.component";
import {SubHeaderComponent} from "./components/sub-header/sub-header.component";
import {MainBoardComponent} from "./components/main-board/main-board.component";
import {RouterModule} from "@angular/router";

const mainComponents = [
  HeaderComponent,
  FooterComponent,
  SubHeaderComponent,
  MainBoardComponent
];


@NgModule({
  imports: [
    CommonModule,
    MatModuleModule,
    RouterModule,
  ],
  declarations: mainComponents,
  exports: mainComponents,
})
export class MainModule { }
