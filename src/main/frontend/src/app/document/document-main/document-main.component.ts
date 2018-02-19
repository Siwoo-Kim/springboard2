import { Component, OnInit } from '@angular/core';
import {ModelCodeService} from "../../service/model-code.service";

@Component({
  selector: 'app-document-main',
  templateUrl: './document-main.component.html',
  styleUrls: ['./document-main.component.css']
})
export class DocumentMainComponent implements OnInit {
  hideSidebar: boolean;

  constructor(public modelCode:ModelCodeService) {
    /*changing the modelcode to show the page description(modelCode) */
    this.modelCode.codeName='Document';
  }

  ngOnInit() {
  }

}
