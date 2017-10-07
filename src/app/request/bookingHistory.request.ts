import { Injectable } from '@angular/core';
import {BaseRequest} from './baserequest';

@Injectable()
export class BookingHistoryRequest extends BaseRequest {
  parse(json : {}) {
    return json["data"];
  }

  getUrl() : string {
      return "/profile";
  }
}