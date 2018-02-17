import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DocumentService} from "../../service/document.service";
import {ToastsManager} from "ng2-toastr";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";
import {Router} from '@angular/router';
import {ErrorCode} from "../../model/error-code";

@Component({
  selector: 'app-document-post',
  templateUrl: './document-post.component.html',
  styleUrls: ['./document-post.component.css']
})
export class DocumentPostComponent {
  formGroup:FormGroup;
  errorCodes:ErrorCode[] = [];

  constructor(
    private documentService: DocumentService,
    private toastrManager:ToastsManager,
    /*private router: Router*/
    private router:Router
  ) {
    this.formGroup = new FormGroup({
      title: new FormControl('',[
        Validators.required,
        Validators.minLength(5)]),
      text: new FormControl('',[
        Validators.required,
        Validators.minLength(10)
      ]),
    });

  }

  onSubmit(){
    if(this.formGroup.valid){
      /*hardcoding dummy writer*/
      this.formGroup.value['writer'] = 'anonymous';

      this.documentService.postDocument(this.formGroup.value)
        .subscribe(
          savedDocument=>{
            console.log(savedDocument);
            this.toastrManager.info("success")
            this.router.navigate(['/document/post/success',savedDocument.id]);
          },
          error=>{
            this.errorCodes.push( error['_body'] );
            console.log(error);
            console.log(this.errorCodes);
            this.errorCodes.forEach(errorCode => {
              this.toastrManager.warning(JSON.stringify(errorCode,null,2));
            })
          });
    }
  }

  onReset(){
    this.toastrManager.warning("Hope that you know what you are doing!");
  }
}


