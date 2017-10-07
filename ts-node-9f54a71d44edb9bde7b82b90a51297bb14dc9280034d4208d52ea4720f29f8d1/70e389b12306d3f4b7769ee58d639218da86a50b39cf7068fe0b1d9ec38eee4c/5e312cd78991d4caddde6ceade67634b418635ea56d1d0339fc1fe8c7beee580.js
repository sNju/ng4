"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
var forms_1 = require("@angular/forms");
var angular_2_local_storage_1 = require("angular-2-local-storage");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var header_component_1 = require("./header/header.component");
var footer_component_1 = require("./footer/footer.component");
var http_service_1 = require("./service/http.service");
var storage_service_1 = require("./service/storage.service");
var http_1 = require("@angular/http");
var gpcard_component_1 = require("./gpcard/gpcard.component");
var partydetail_component_1 = require("./partydetail/partydetail.component");
var login_component_1 = require("./header/login/login.component");
var verify_component_1 = require("./header/verify/verify.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            header_component_1.HeaderComponent,
            footer_component_1.FooterComponent,
            gpcard_component_1.GpcardComponent,
            partydetail_component_1.PartydetailComponent,
            login_component_1.LoginComponent,
            verify_component_1.VerifyComponent
        ],
        imports: [
            platform_browser_1.BrowserModule.withServerTransition({ appId: 'webapp' }),
            // BrowserAnimationsModule,
            http_1.HttpModule,
            // NgbModule.forRoot(),
            forms_1.FormsModule,
            angular_2_local_storage_1.LocalStorageModule.withConfig({
                prefix: 'webapp',
                storageType: 'localStorage'
            }),
            router_1.RouterModule.forRoot([
                {
                    path: '',
                    redirectTo: 'delhi-ncr',
                    pathMatch: 'full'
                },
                {
                    path: 'delhi-ncr',
                    component: home_component_1.HomeComponent
                },
                {
                    path: 'party/:id',
                    component: partydetail_component_1.PartydetailComponent
                },
                {
                    path: '**',
                    redirectTo: 'delhi-ncr',
                    pathMatch: 'full'
                }
            ])
        ],
        providers: [http_service_1.HttpService, storage_service_1.StorageService],
        bootstrap: [app_component_1.AppComponent],
        entryComponents: [login_component_1.LoginComponent, verify_component_1.VerifyComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL21hYy9Eb2N1bWVudHMvd2ViYXBwL3NyYy9hcHAvYXBwLm1vZHVsZS50cyIsInNvdXJjZXMiOlsiL1VzZXJzL21hYy9Eb2N1bWVudHMvd2ViYXBwL3NyYy9hcHAvYXBwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLDhEQUEwRDtBQUMxRCxrRkFBa0Y7QUFDbEYsc0NBQXlDO0FBQ3pDLDBDQUF5RDtBQUN6RCwwREFBMEQ7QUFDMUQsd0NBQStDO0FBQy9DLG1FQUE2RDtBQUU3RCxpREFBK0M7QUFDL0Msd0RBQXNEO0FBQ3RELDhEQUE0RDtBQUM1RCw4REFBNEQ7QUFDNUQsdURBQXFEO0FBQ3JELDZEQUEyRDtBQUMzRCxzQ0FBMkM7QUFDM0MsOERBQTREO0FBQzVELDZFQUEyRTtBQUMzRSxrRUFBZ0U7QUFDaEUscUVBQW1FO0FBZ0RuRSxJQUFhLFNBQVM7SUFBdEI7SUFBeUIsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUExQixJQUEwQjtBQUFiLFNBQVM7SUE5Q3JCLGVBQVEsQ0FBQztRQUNSLFlBQVksRUFBRTtZQUNaLDRCQUFZO1lBQ1osOEJBQWE7WUFDYixrQ0FBZTtZQUNmLGtDQUFlO1lBQ2Ysa0NBQWU7WUFDZiw0Q0FBb0I7WUFDcEIsZ0NBQWM7WUFDZCxrQ0FBZTtTQUNoQjtRQUNELE9BQU8sRUFBRTtZQUNQLGdDQUFhLENBQUMsb0JBQW9CLENBQUMsRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLENBQUM7WUFDcEQsMkJBQTJCO1lBQzNCLGlCQUFVO1lBQ1YsdUJBQXVCO1lBQ3ZCLG1CQUFXO1lBQ1gsNENBQWtCLENBQUMsVUFBVSxDQUFDO2dCQUM1QixNQUFNLEVBQUUsUUFBUTtnQkFDaEIsV0FBVyxFQUFFLGNBQWM7YUFDNUIsQ0FBQztZQUNGLHFCQUFZLENBQUMsT0FBTyxDQUFDO2dCQUNuQjtvQkFDRSxJQUFJLEVBQUUsRUFBRTtvQkFDUixVQUFVLEVBQUUsV0FBVztvQkFDdkIsU0FBUyxFQUFFLE1BQU07aUJBQ2xCO2dCQUNEO29CQUNFLElBQUksRUFBRSxXQUFXO29CQUNqQixTQUFTLEVBQUUsOEJBQWE7aUJBQ3pCO2dCQUNEO29CQUNFLElBQUksRUFBRSxXQUFXO29CQUNqQixTQUFTLEVBQUUsNENBQW9CO2lCQUNoQztnQkFDRDtvQkFDRSxJQUFJLEVBQUUsSUFBSTtvQkFDVixVQUFVLEVBQUUsV0FBVztvQkFDdkIsU0FBUyxFQUFFLE1BQU07aUJBQ2xCO2FBQ0YsQ0FBQztTQUNIO1FBQ0QsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSxnQ0FBYyxDQUFDO1FBQ3hDLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7UUFDekIsZUFBZSxFQUFFLENBQUMsZ0NBQWMsRUFBRSxrQ0FBZSxDQUFDO0tBQ25ELENBQUM7R0FDVyxTQUFTLENBQUk7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbi8vIGltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9ICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbi8vIGltcG9ydCB7IE5nYk1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gICBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VNb2R1bGUgfSBmcm9tICdhbmd1bGFyLTItbG9jYWwtc3RvcmFnZSc7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyL2hlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gJy4vc2VydmljZS9odHRwLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2Uvc3RvcmFnZS5zZXJ2aWNlJztcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IEdwY2FyZENvbXBvbmVudCB9IGZyb20gJy4vZ3BjYXJkL2dwY2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFydHlkZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL3BhcnR5ZGV0YWlsL3BhcnR5ZGV0YWlsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBWZXJpZnlDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci92ZXJpZnkvdmVyaWZ5LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcENvbXBvbmVudCxcbiAgICBIb21lQ29tcG9uZW50LFxuICAgIEhlYWRlckNvbXBvbmVudCxcbiAgICBGb290ZXJDb21wb25lbnQsXG4gICAgR3BjYXJkQ29tcG9uZW50LFxuICAgIFBhcnR5ZGV0YWlsQ29tcG9uZW50LFxuICAgIExvZ2luQ29tcG9uZW50LFxuICAgIFZlcmlmeUNvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZS53aXRoU2VydmVyVHJhbnNpdGlvbih7YXBwSWQ6J3dlYmFwcCd9KSxcbiAgICAvLyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcbiAgICBIdHRwTW9kdWxlLFxuICAgIC8vIE5nYk1vZHVsZS5mb3JSb290KCksXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTG9jYWxTdG9yYWdlTW9kdWxlLndpdGhDb25maWcoe1xuICAgICAgcHJlZml4OiAnd2ViYXBwJyxcbiAgICAgIHN0b3JhZ2VUeXBlOiAnbG9jYWxTdG9yYWdlJ1xuICAgIH0pLFxuICAgIFJvdXRlck1vZHVsZS5mb3JSb290KFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJycsXG4gICAgICAgIHJlZGlyZWN0VG86ICdkZWxoaS1uY3InLFxuICAgICAgICBwYXRoTWF0Y2g6ICdmdWxsJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ2RlbGhpLW5jcicsXG4gICAgICAgIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ3BhcnR5LzppZCcsXG4gICAgICAgIGNvbXBvbmVudDogUGFydHlkZXRhaWxDb21wb25lbnRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcqKicsXG4gICAgICAgIHJlZGlyZWN0VG86ICdkZWxoaS1uY3InLFxuICAgICAgICBwYXRoTWF0Y2g6ICdmdWxsJ1xuICAgICAgfVxuICAgIF0pXG4gIF0sXG4gIHByb3ZpZGVyczogW0h0dHBTZXJ2aWNlLCBTdG9yYWdlU2VydmljZV0sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0xvZ2luQ29tcG9uZW50LCBWZXJpZnlDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==