import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatChipsModule,
  MatDialogModule, MatDividerModule,
  MatFormFieldModule,
  MatInputModule, MatSelectModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


const matModules = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  BrowserAnimationsModule,
  MatDialogModule,
  MatChipsModule,
  MatTooltipModule,
  MatSelectModule,
  MatDividerModule,
];

/* Exporting material module */
@NgModule({
  imports: matModules,
  exports: matModules,
})
export class MatModuleModule { }
