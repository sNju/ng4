import { Injectable } from '@angular/core';
import {BaseRequest} from '../baserequest';

@Injectable()
export class AddEmailRequest extends BaseRequest {
  parse(json : {}) {
    return json["data"];
  }

  getUrl() : string {
      return "/addemail";
  }
}