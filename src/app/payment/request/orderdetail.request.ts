import { Injectable } from '@angular/core';
import { BaseRequest } from '../../request/baserequest';

@Injectable()
export class OrderDetailRequest extends BaseRequest {
  parse(json : {}) {
    return json["data"]["order"];
  }

  getUrl() : string {
      return "/order";
  }
}
