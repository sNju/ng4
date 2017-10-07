import { Injectable } from '@angular/core';
import { HttpService } from '../service/http.service';
import { Headers } from '@angular/http';
import { StorageService } from '../service/storage.service';

@Injectable()
export class BaseRequest {
  baseUrl = "https://api.goparties.com";
  params : any;
  headers: Headers;
  preferCache: boolean;
  private type : string;
  url: string;

  constructor(public httpService: HttpService, private localStorage: StorageService) { 
      //this.baseUrl = "http://localhost:1234";
      this.params = {};
      this.setPreferCache(false);
      this.url = "";
      this.headers = new Headers();
  }

  setPreferCache(value : boolean) : BaseRequest {
    this.preferCache = value;
    return this;
  }

  getPreferCache() : boolean {
    return this.preferCache;
  }

  addHeader(name: string, value: string) : BaseRequest {
      this.headers.append(name, value);
      return this;
  }

  setUrl(url: string) : BaseRequest {
    this.url = url;
    return this;
  }

  setParams(params: any) : BaseRequest {
    this.params = params;
    return this;
  }

  setFormData(formData: FormData) : BaseRequest {
    this.params = formData;
    return this;
  }

  executeGet() : Promise<any> {
    return this.execute("get");
  }

  executePost() : Promise<any> {
    return this.execute("post");
  }

  executePut() : Promise<any> {
    return this.execute("put");
  }

  execute(type : string) : Promise<any> {
    this.type = type || "get";
    let _this = this;
    return new Promise(function(resolve, reject) {
        let url = _this.populateUrl();
        console.log("trying : ", url);
        // check if we can pull it from cache
        if(_this.getPreferCache()) {
            if(_this.localStorage.exists(url)) {
                console.log("got local : ", url);
                return resolve(_this.localStorage.getJSON(url));
            }
        }
        let api = null;
        if(type=="get") {
            api = _this.httpService.newHttpCall().get(url, {headers : _this.headers});
        } else if(type=="post") {
            api = _this.httpService.newHttpCall().post(url, _this.params, {headers : _this.headers});
        } else if(type=="put") {
            api = _this.httpService.newHttpCall().put(url, _this.params, {headers : _this.headers});
        }
        
        api.subscribe(
            data=>{
                if(_this.errorhandler(data)) 
                    reject(_this.errorhandler(data));
                else {
                    if(type == "get" && _this.saveToCache()) {
                        _this.localStorage.save(url, _this.resposeHandler(data));
                    }
                    console.log("network : ", url);
                    resolve(_this.resposeHandler(data));
                }
            },
            err=> {reject(_this.errorhandler(err));}
        );
    });
  }

  errorhandler(err) : any {
    if(err.status!=200) {
        let res = {};
        res["error"] = {};
        res["error"]["code"] = "404";
        res["error"]["message"] = "" + err;
        return res;
    } else if(err.json().error) {
        return err.json();
    } else {
        return false;
    }
  }

  encodeQueryData(data) : string {
    let ret = [];
    for (let d in data)
      ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
    return ret.join('&');
  }

  resposeHandler(data) : any {
    try {
        return this.parse(data.json());
    } catch(err) {
        return {"data":{}};
    }
  }

  addParam(key, value) : BaseRequest {
    this.params[key] = value;
    return this;
  }

  populateUrl() : string {
    let url  = this.baseUrl + this.getUrl();
    if(this.getUrl().startsWith("http")) {
        url = this.getUrl();
    }
    // populate the params
    if(this.type=="get") {
        url = url + "?" + this.encodeQueryData(this.params);
    }
    return url;
  }

  saveToCache() : boolean {
    return true;
  }

  parse(json : JSON) {
    console.log(json);
  }

  getUrl() : string {
      return this.url;
  }

}
