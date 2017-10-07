import { Injectable } from '@angular/core';
import {BaseRequest} from './baserequest';

@Injectable()
export class HomeRequest extends BaseRequest {
  parse(json : {}) {
    return json["data"]["home"];
  }

  getUrl() : string {
      return "/cawebhome_v2";
  }
}
