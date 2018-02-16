import { NgModule } from '@angular/core';
import {MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';

const matModules = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
];

/* Exporting material module */
@NgModule({
  imports: matModules,
  exports: matModules,
})
export class MatModuleModule { }
