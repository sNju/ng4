import { Injectable } from '@angular/core';
import {BaseRequest} from '../baserequest';

@Injectable()
export class GetProfileRequest extends BaseRequest {
  parse(json : {}) {
    return json["data"]["profile"];
  }

  getUrl() : string {
      return "/partymondetail";
  }
}