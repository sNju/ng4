import { Component, ViewChild, ComponentFactoryResolver, ComponentRef, OnInit } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { VerifyComponent } from './verify/verify.component';
import { callBackRequestComponent } from './call-back-request/call-back-request.component';
import { BaseService } from '../service/base.service';
import { ModalService, ModalListener } from '../modal/modal.service';


declare var $: any;
declare var firebase: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, ModalListener {

  phone : string;
  isLoggedIn : boolean;
  user : any;

  constructor(private modalService: ModalService, private base: BaseService, private componentFactoryResolver: ComponentFactoryResolver) {}

  onModalResponse(tag, result, data) : void {
    if(!result) {
      return;
    }
    if(tag=="#app-login") {
      this.modalService.show(VerifyComponent, "#app-verify", this).setPhone(data);
    } else if(tag=="#app-verify") {
      this.base.setCurrentuser(data);
      location.reload(true);
    }
  }

  ngOnInit() {
    this.phone = "";
    // if we need to show the login popup
    if(location.href.endsWith("#login")) {
      let _this = this;
      setTimeout(function() {
        _this.login();
      }, 1000);
    }
    this.isLoggedIn = this.base.isLoggedIn();
    this.user = this.base.currentUser() || {};
  }

  login() {
    this.modalService.show(LoginComponent, "#app-login", this);
  }

  logout() {
    this.base.logout();
    location.reload(true);
  }

  stopFlickring(){
    $('body').removeClass('modal-open').addClass('modal-openNew');
					$('#app-login').appendTo('body');
  }

  callBackRequest() {
    this.modalService.show(callBackRequestComponent, "#call-back-request", this);
  }


}
