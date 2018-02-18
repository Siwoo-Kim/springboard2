import {Component, Input, OnInit} from '@angular/core';
import {ModelCodeService} from "../../../service/model-code.service";
import {ModelCode} from "../../../model/model-code";
import {ErrorCode} from "../../../model/error-code";

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css']
})
export class SubHeaderComponent implements OnInit{
  pageName: string = 'Home' ;
  pageDescription: string = 'Dummy description';
  @Input() codeName: string;
  modelCode: ModelCode;
  errorCode: ErrorCode;

  constructor(public modelCodeService: ModelCodeService){

  }


  ngOnInit(): void {
    this.modelCodeService.modelCodeByName('home').subscribe(modelCode => {this.modelCode = modelCode});

    this.modelCodeService.onChangeModelEmitter.subscribe(
      name => {
        this.codeName = name; this.fetchModelCode();
      }
    )
  }

  fetchModelCode(){
    this.modelCodeService.modelCodeByName(this.codeName).subscribe(
      modelCode => this.modelCode = modelCode,
      error => this.errorCode = error['_body'][0],
    )
  }
}
