import { Component, OnInit } from '@angular/core';
import {VerifyRequest} from '../../request/verify.request';
import {ResendRequest} from '../../request/resend.request';
import { ModalService } from '../../modal/modal.service';
declare var $: any;

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css'],
  providers: [VerifyRequest, ResendRequest]
})
export class VerifyComponent implements OnInit {

  phone : string;
  otp : "";
  otpSend:boolean=true;
  otpResend:boolean=false;
  wrongOtp:boolean=false;
  

  constructor(private verifyRequest: VerifyRequest, private resendRequest: ResendRequest, private modalService: ModalService) {}
  
  public setPhone(phone : string) {
    this.phone = phone;
  }

  ngOnInit() {
  }
  
  verifyotp() : void {
    this.verifyRequest.addParam("phone",this.phone)
    .addParam("otp",this.otp)
    .executePost()
    .then(response=>{
      this.modalService.close(true, response);
      this.otpResend=false;
      this.otpSend=true;
      this.wrongOtp=false;
    }).catch(err=>{
      this.wrongOtp=true;
    });    
  }
  resendOtp() : void {
    this.resendRequest.addParam("phone",this.phone)
    .executePost()
    .then(response=>{
      this.otpResend=true;
      this.otpSend=false;
    }).catch(err=>{
       console.log(err);
    });
  }

}
