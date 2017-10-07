import { Injectable } from '@angular/core';
import {BaseRequest} from '../baserequest';

@Injectable()
export class VerifyEmailResendRequest extends BaseRequest {
  parse(json : {}) {
    return json["data"];
  }

  getUrl() : string {
      return "/addemailresend";
  }
}