import {Component, ViewContainerRef} from '@angular/core';
import {ToastsManager} from "ng2-toastr";
import {PageService} from "./service/page.service";
import {Page} from "./model/page.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private toastr:ToastsManager,vRef:ViewContainerRef){
    /*toastmanager config*/
    this.toastr.setRootViewContainerRef(vRef);
  }

}

