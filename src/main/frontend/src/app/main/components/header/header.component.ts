import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ModelCodeService} from "../../../service/model-code.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private modelCodeService: ModelCodeService) {

  }

  onChangeModel(name: string) {
    this.modelCodeService.codeName = name;
  }
}
