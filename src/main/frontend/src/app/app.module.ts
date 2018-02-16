import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MainModule} from "./main/main.module";
import {AppRoutingModule} from "./importing-module/app-routing.module";
import {DocumentModule} from "./document/document.module";

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
    AppRoutingModule,
    DocumentModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
