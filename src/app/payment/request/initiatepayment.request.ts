import { Injectable } from '@angular/core';
import { BaseRequest } from '../../request/baserequest';

@Injectable()
export class InitiatePaymentRequest extends BaseRequest {
  parse(json : {}) {
    return json;
  }

  getUrl() : string {
      return "https://www.instamojo.com/api/1.1/payment-requests/";
  }
}
