import { Injectable } from '@angular/core';
import {BaseRequest} from './baserequest';

@Injectable()
export class UploadFileRequest extends BaseRequest {
  parse(json : {}) {
    return json["data"]["file"]["fileurl"];
  }

  getUrl() : string {
      return "/uploadfile";
  }

  addFile(file: File) : BaseRequest {
    let formData = new FormData();
    formData.append("file", file, file.name);
    this.setFormData(formData);
    return this;
  }

}