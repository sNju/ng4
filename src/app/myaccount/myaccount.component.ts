import { Component, OnInit, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { BaseService } from '../service/base.service';
import { AddEmailRequest } from '../request/myaccountRequest/updateEmail.request';
import { AddPhoneRequest } from '../request/myaccountRequest/updatePhone.request';
import { UpdateAllRequest } from '../request/myaccountRequest/updateAll.request';
import { GetProfileRequest } from '../request/myaccountRequest/getprofile.request';
import { UploadFileRequest } from '../request/uploadfile.request';
import { ModalService, ModalListener } from '../modal/modal.service';
import { VerifyEmailComponent } from '../myaccount/verifyMyAccount/verifyEmail.component';
import { VerifyNumberComponent } from '../myaccount/verifyMyAccount/verifyMyAccountByNo/verifyNumber.component';

declare var $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css', './spinner.css'],
   providers: [AddEmailRequest,AddPhoneRequest,UpdateAllRequest,UploadFileRequest,GetProfileRequest]
})
export class MyAccountComponent implements OnInit, ModalListener {

  userObj: any;
  isEdit: boolean;
  emailsave: boolean;
  phonesave: boolean;
  uploading: boolean;

  constructor(private modalService: ModalService, 
    private componentFactoryResolver: ComponentFactoryResolver, 
    private base: BaseService, 
    private uploadFileRequest: UploadFileRequest, 
    private addemailrequest: AddEmailRequest, 
    private addphonerequest: AddPhoneRequest, 
    private getProfileRequest: GetProfileRequest, 
    private updateallrequest: UpdateAllRequest) {}

  onModalResponse(tag, result, data) : void {
    if(!result) {
      return;
    }
    if(tag=="#app-verifyEmail") {
      // the email was verified, now change the local user
      this.userObj.email = data;
      this.base.setCurrentuser(this.userObj);
    } 
    else if(tag=="#app-verifyPhone") {
      this.userObj.phone = data;
      this.base.setCurrentuser(this.userObj);
      // location.reload(true);
    }
  }

  ngOnInit() {
    this.userObj = this.base.currentUser();
    this.isEdit = false;
    this.emailsave = false;
    this.uploading = false;
    this.phonesave = false;
    this.getProfileRequest.addParam("id", this.base.currentUser()._key)
    .setPreferCache(false)
    .executeGet().then(data=>{
      this.base.setCurrentuser(data);
      this.userObj = data;
    }).catch(err=>{
      console.log(err);
    });
  }

  uploadFile() {
    if(!$("#profilepic").prop("files") || $("#profilepic").prop("files").length == 0) {
      return;
    }
    var file_data = $("#profilepic").prop("files")[0];
    this.uploading = true;
    this.uploadFileRequest
    .addFile(file_data)
    .executePost()
    .then(url=>{
      this.userObj.profile_pic = url;
      this.uploading = false;
    }).catch(err=>{
      console.log(err);
    });
  }

  editClick(){
    this.isEdit = true;
    this.emailsave = false;
    this.phonesave = false;
  }

  cancelClick() {
    this.isEdit = false;
    this.emailsave = false;
    this.phonesave = false;    
  }

  updateEmail() {
    this.addemailrequest.addParam("user",this.userObj._key)
    .addParam("email",this.userObj.email)
    .executePost()
    .then(response=>{
      if (response.addemail) {
        this.modalService.show(VerifyEmailComponent, "#app-verifyEmail", this).setEmail(this.userObj.email);
      } else {
        console.log("err");
      }
    }).catch(err=>{
      console.log(err);
      
    });
  }

  updatePhone() {
    this.addphonerequest.addParam("user",this.userObj._key)
    .addParam("phone",this.userObj.phone)
    .executePost()
    .then(response=>{
      if (response.addphone) {
        this.modalService.show(VerifyNumberComponent, "#app-verifyPhone", this).setPhone(this.userObj.phone);
      } else { 
        console.log("err");  
      }
    }).catch(err=>{
        console.log("err");      
    });
  }

  updateAll() {
    this.updateallrequest
    .addParam("id",this.userObj._key)
    .addParam("name",this.userObj.name)
    .addParam("profile_pic",this.userObj.profile_pic)
    .executePut()
    .then(response=>{
      if(response.profile){
        this.base.setCurrentuser(response.profile);
        this.cancelClick();
        this.base.toastSuccess("Updated Succesfully");
      } else {
        console.log("err");
      }
    }).catch(err=>{
        console.log(err);
    });
  }

}
