import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatModuleModule } from "../mat-module.module";
import {FooterComponent} from "./components/footer/footer.component";
import {SubHeaderComponent} from "./components/sub-header/sub-header.component";

const mainComponents = [
  HeaderComponent,
  FooterComponent,
  SubHeaderComponent,
];


@NgModule({
  imports: [
    CommonModule,
    MatModuleModule,
  ],
  declarations: mainComponents,
  exports: mainComponents,
})
export class MainModule { }
