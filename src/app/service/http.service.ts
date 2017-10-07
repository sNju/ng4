import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class HttpService {
  constructor(private http: Http) { }

  newHttpCall() : Http {
    return this.http;
  }
}
