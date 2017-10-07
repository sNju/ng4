import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { VerifyNumberRequest } from '../../../request/myaccountRequest/verifyNumber.request';
import { VerifyNumberResendRequest } from '../../../request/myaccountRequest/verifyNumberResend.request';
import { BaseService } from '../../../service/base.service';
import { ModalService } from '../../../modal/modal.service';
declare var $: any;

@Component({
  selector: 'app-verifyPhone',
  templateUrl: './verifyNumber.component.html',
  styleUrls: ['./verifyNumber.component.css'],
  providers: [VerifyNumberRequest, VerifyNumberResendRequest]
})
export class VerifyNumberComponent implements OnInit {

  phone : string;
  otp : "";
  userVerify: any;
  otpSend:boolean;
  otpResend:boolean;
  otpWrong:boolean;


  constructor(
    private verifyNumberRequest: VerifyNumberRequest,
    private verifyNumberResendRequest: VerifyNumberResendRequest,    
    private modalService: ModalService, 
    private base: BaseService
  ) {}
  
  public setPhone(phone : string) {
    this.phone = phone;
  }

  ngOnInit() {
    this.userVerify=Object.assign({},this.base.currentUser());
    this.otpSend=true;
  }
  
  verifyNumber(): void {
    this.verifyNumberRequest.addParam("user",this.userVerify._key)
    .addParam("phone",this.phone)
    .addParam("otp",this.otp)    
    .executePost()
    .then(response=>{
      if (response.verifyphone) {
      this.base.toastSuccess("Mobile Number Updated Successfully");
      this.modalService.close(true, this.phone);
      this.otpSend=true;
      this.otpResend=false;
      this.otpWrong=false;
      } else {
            this.otpWrong=true;
      }

    }).catch(err=>{
      console.log(err);
      this.otpWrong=true;
 
    });
  }

  resendNumber(): void {
    this.verifyNumberResendRequest.addParam("user",this.userVerify._key)
    .addParam("phone",this.phone)
    .executePost()
    .then(response=>{
      this.otpSend=false;
      this.otpResend=true;
    }).catch(err=>{
      console.log(err);
    });
  }
}
