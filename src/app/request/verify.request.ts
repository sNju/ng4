import { Injectable } from '@angular/core';
import {BaseRequest} from './baserequest';

@Injectable()
export class VerifyRequest extends BaseRequest {
  parse(json : {}) {
    return json["data"]["profile"];
  }

  getUrl() : string {
      return "/otploginverify";
  }
}