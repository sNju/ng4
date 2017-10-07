import { Injectable } from '@angular/core';
import { CanLoad, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route, Router } from '@angular/router';
import { BaseService } from './base.service';

@Injectable()
export class AuthenticationGaurd implements CanLoad, CanActivate{
  
    constructor(private router: Router, private base: BaseService) {}

    canLoad(route: Route): boolean {
        if(!this.base.isLoggedIn()) {
            this.router.navigate(["/"]);
        }
        return this.base.isLoggedIn();
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(!this.base.isLoggedIn()) {
            this.router.navigate(["/"]);
        }
        return this.base.isLoggedIn();
    }
}