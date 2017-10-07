import { Component, OnInit} from '@angular/core';
import { ModalService } from '../../modal/modal.service';
import { callBackRequest } from '../../request/callBack.request';
declare var $: any;

@Component({
  selector: 'app-verify',
  templateUrl: './call-back-request.component.html',
  styleUrls: ['./call-back-request.component.css'],
  providers: [callBackRequest]
})
export class callBackRequestComponent implements OnInit {
  name:string;
  phone:number;

  constructor(private modalService: ModalService,private CallBackRequest:callBackRequest) {}
  
  ngOnInit() {
  }
  
  submitquery() {
    debugger;
    this.CallBackRequest.addParam("user", 'callback')
    .addParam("query", this.name + ' ' + this.phone)
    .executePost()
    .then(response => {
      console.log('getting response', response);
      this.modalService.close(true, null);
    }).catch(err => {
      console.log('getting error',err);
    });
  }

}
