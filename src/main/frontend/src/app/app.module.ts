import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MainModule} from "./main/main.module";


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    /* angular module */
    BrowserModule,
    FormsModule,
    HttpModule,

    /* app modules */
    MainModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
