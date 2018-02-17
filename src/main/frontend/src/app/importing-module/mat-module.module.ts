import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatChipsModule, MatDialogModule, MatFormFieldModule, MatInputModule,
  MatToolbarModule
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
];

/* Exporting material module */
@NgModule({
  imports: matModules,
  exports: matModules,
})
export class MatModuleModule { }
