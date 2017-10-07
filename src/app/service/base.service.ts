import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Title }     from '@angular/platform-browser';

declare var $ : any;

@Injectable()
export class BaseService {

    title = "Go Parties | Your Party App";
    userKey = "loggedinuser";
  
    constructor(private titleService: Title, private storageService: StorageService) {}

    public load(callback, ...urls) {
        let count = 0;
        for(let url of urls) {
            let node;
            if(url.endsWith(".css")) {
                node = document.createElement('link');
                node.rel = "stylesheet";
                node.href = url;
            } else {
                node = document.createElement('script');
                node.src = url;
                node.type = 'text/javascript';
                node.async = true;
            }
            if(callback) {
                node.addEventListener("load", function() {
                    count++;
                    if(count==urls.length) {
                        callback(urls);
                    }
                });
            }
            document.getElementsByTagName('head')[0].appendChild(node);
        }
    }
    
    public setPageTitle(title : string) : void {
        this.titleService.setTitle(title || this.title);
        document.body.scrollTop = 0; // For Chrome, Safari and Opera
        document.documentElement.scrollTop = 0; // For IE and Firefox
    }

    public isLoggedIn() : boolean {
        return this.storageService.exists(this.userKey);
    }

    public currentUser() : any {
        return this.storageService.getJSON(this.userKey);
    }

    public setCurrentuser(user : any) : void {
        this.storageService.save(this.userKey, user);
    }

    public logout() : void {
        this.storageService.remove(this.userKey);
    }

    public toastSuccess(message : any) : void {
        $.toast({ 
          heading : message, 
          showHideTransition : 'slide',
          position: 'top-center',
          bgColor: '#0fb14a',
          hideAfter: 1500,
          allowToastClose: false,
          loader: false,
          stack: false,
          textAlign: 'center',
          textColor: 'white'
        });
    }

    public toastError(message : any) : void {
        $.toast({ 
          heading : message, 
          showHideTransition : 'fade',
          position: 'top-center',
          icon: 'error',
          stack: false
        });
    }

}