import { Component, OnInit, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from '../service/base.service';
import { InitiatePaymentRequest } from './request/initiatepayment.request';
import { OrderDetailRequest } from './request/orderdetail.request';

declare var $: any;
let me: PaymentComponent;
let X_apikey = "c920e477e1b2c79993bc80a1db09eb3c";
let X_authtoken = "170f25bdc8c03e884ab3a2b6e82e0cd2";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css', './loader.css'],
  providers: [OrderDetailRequest, InitiatePaymentRequest]
})
export class PaymentComponent implements OnInit {

  id: any;
  order: any;
  paymentLink: string;
  loading: boolean;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, 
    private base: BaseService,
    private initiate: InitiatePaymentRequest,
    private route: ActivatedRoute,
    private orderdetail: OrderDetailRequest) {
      me = this;
      this.order = {};
      this.loading = true;
    }

  ngOnInit() {
    this.base.setPageTitle("Pay Securely");
    this.route.paramMap.subscribe(data=>{
      this.id = data.get("id");
      // this.getDetail();
      this.initiatePayment({});
    });
  }
  
  getDetail() {
    if(!this.id) {
      return;
    }
    this.orderdetail.addParam("id", this.id)
    .executeGet().then(data=>{
      this.order = data;
      this.initiatePayment(this.order);
    }).catch(err=>{

    });
  }

  initiatePayment(data) {
    let payload = Object.assign({});
    payload.purpose = "Book Tickets";
    payload.amount = 10;
    payload.phone = "8527782212";
    payload.email = "rajdeep.deb@goparties.com";
    payload.buyer_name = "Rajdeep Deb";
    payload.redirect_url = "http://www.gp.com/payment";
    payload.webhook = "https://api.goparties.com/webhook/";
    payload.send_sms = false;
    payload.send_email = false;
    payload.allow_repeated_payments = true;


    $("#payment-modal").modal("show");
    this.paymentLink = "https://www.instamojo.com/@goparties/ce037ac9b6be4d869c9ea52177368de3?embed=true";
    $("#payment-em").attr("src", this.paymentLink);
    $("#payment-em").on("load", function() {
      me.loading = false;
    });
    // this.initiate.setParams(payload)
    // .addHeader("X-Api-Key", X_apikey)
    // .addHeader("X-Auth-Token", X_authtoken)
    // .executePost();
  }

}
