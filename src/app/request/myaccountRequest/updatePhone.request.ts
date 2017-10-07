import { Injectable } from '@angular/core';
import {BaseRequest} from '../baserequest';

@Injectable()
export class AddPhoneRequest extends BaseRequest {
  parse(json : {}) {
    return json["data"];
  }

  getUrl() : string {
      return "/addphone";
  }
}