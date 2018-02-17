import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MainModule} from "./main/main.module";
import {AppRoutingModule} from "./importing-module/app-routing.module";
import {DocumentModule} from "./document/document.module";
import {BACKEND_URL_TOKEN} from "./tokens/app-tokens";
import {DocumentService} from "./service/document.service";
import {ToastModule} from "ng2-toastr";
import {MockDocumentService} from "./service/mock/mock-document.service";
import {ModelCodeService} from "./service/model-code.service";
import {MockModelCodeService} from "./service/mock/mock-model-code.service";

const dev_services = [
  MockDocumentService,
];

const qa_services = [
  DocumentService,
];


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    /* angular module */
    BrowserModule,
    FormsModule,
    HttpModule,

    /* 3rd party module */
    ToastModule.forRoot(),

    /* app modules */
    MainModule,
    AppRoutingModule,
    DocumentModule,

  ],
  providers: [
    {provide: BACKEND_URL_TOKEN, useValue: '/api/'},
    {provide:DocumentService, useClass: MockDocumentService },
    {provide:ModelCodeService, useClass: MockModelCodeService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
{provide:DocumentService, useClass: DocumentService },
{provide:ModelCodeService, useClass: ModelCodeService}
*/
