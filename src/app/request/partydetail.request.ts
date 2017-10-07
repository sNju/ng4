import { Injectable } from '@angular/core';
import {BaseRequest} from './baserequest';

@Injectable()
export class PartyDetailRequest extends BaseRequest {
  parse(json : {}) {
    return json["data"]["detail"];
  }

  getUrl() : string {
      return "/party";
  }
}
