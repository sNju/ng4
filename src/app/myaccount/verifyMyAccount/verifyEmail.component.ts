import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import {VerifyEmailRequest} from '../../request/myaccountRequest/verifyEmail.request';
import {VerifyEmailResendRequest} from '../../request/myaccountRequest/verifyEmailResend.request';
import { BaseService } from '../../service/base.service';
import { ModalService } from '../../modal/modal.service';

declare var $: any;

@Component({
  selector: 'app-verifyEmail',
  templateUrl: './verifyEmail.component.html',
  styleUrls: ['./verifyEmail.component.css'],
  providers: [VerifyEmailRequest, VerifyEmailResendRequest]
})
export class VerifyEmailComponent implements OnInit {

  email : string;
  otp : "";
  userVerify: any;
  otpSend:boolean;
  otpResend:boolean;
  otpWrong:boolean;


  constructor(
    private verifyEmailRequest: VerifyEmailRequest,
    private verifyEmailResendRequest: VerifyEmailResendRequest, 
    private modalService: ModalService, 
    private base: BaseService
  ) {}
  
  public setEmail(email : string) {
    this.email = email;
  }

  ngOnInit() {
    this.userVerify=Object.assign({},this.base.currentUser());
    this.otpSend=true;
  }
  
  verifyemail(): void {
    this.verifyEmailRequest.addParam("user",this.userVerify._key)
    .addParam("email",this.email)
    .addParam("otp",this.otp)    
    .executePost()
    .then(response=>{
      if (response.verifyemail) {
      this.base.toastSuccess("Email Updated Successfully");
      this.modalService.close(true, this.email);
      this.otpSend=true;
      this.otpResend=false;
      this.otpWrong=false;
      } else {
          this.otpWrong=true;
      }

    }).catch(err=>{
         this.otpWrong=true;
    });
  }

  resendemail(): void {
    this.verifyEmailResendRequest.addParam("user",this.userVerify._key)
    .addParam("email",this.email)
    .executePost()
    .then(response=>{
      this.otpSend=false;
      this.otpResend=true;
    }).catch(err=>{
      alert("Something went wrong");
    });
  }
}
