import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() { }

  save(key: string, value: any) : void {
    try {
      if(value instanceof Object) {
        value = JSON.stringify(value);
      }
      sessionStorage.setItem(key, value);
    } catch (error) {
      // console.log(error);
    }
  }

  remove(key : string) : void {
    sessionStorage.removeItem(key);
  }

  get(key: string) : string {
    try {
      return sessionStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  getJSON(key: string) : any {
    return JSON.parse(this.get(key));
  }

  getString(key: string) : string {
    return this.get(key);
  }

  exists(key: string) : boolean {
    return this.get(key)? true : false;
  }

}
