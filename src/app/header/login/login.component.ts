import { Component, Output,Input, EventEmitter } from '@angular/core';
import {VerifyComponent} from '../verify/verify.component';
import {LoginRequest} from '../../request/login.request';
import { ModalService } from '../../modal/modal.service';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginRequest]
})
export class LoginComponent  {
  @Input() phone : string;
  
  promocode : "";
  showPromoCode=false;

  constructor(private loginRequest: LoginRequest, private modalService: ModalService) { }

  sendotp() : void {
    // validation
    this.loginRequest.addParam("phone", this.phone)
    .addParam("promocode", this.promocode)
    .executePost()
    .then(response=>{
      this.modalService.close(true, this.phone);
    }).catch(err=>{
      // check the error
    });
  }

  getPromoCode(){
    this.showPromoCode=true;
  }

}
