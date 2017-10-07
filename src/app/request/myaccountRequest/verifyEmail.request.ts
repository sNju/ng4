import { Injectable } from '@angular/core';
import {BaseRequest} from '../baserequest';

@Injectable()
export class VerifyEmailRequest extends BaseRequest {
  parse(json : {}) {
    return json["data"];
  }

  getUrl() : string {
      return "/verifyemail";
  }
}