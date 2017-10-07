"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_server_1 = require("@angular/platform-server");
var app_module_1 = require("./app.module");
var app_component_1 = require("./app.component");
var AppServerModule = (function () {
    function AppServerModule() {
    }
    return AppServerModule;
}());
AppServerModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_server_1.ServerModule,
            app_module_1.AppModule
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppServerModule);
exports.AppServerModule = AppServerModule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL21hYy9Eb2N1bWVudHMvd2ViYXBwL3NyYy9hcHAvYXBwLnNlcnZlci5tb2R1bGUudHMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRG9jdW1lbnRzL3dlYmFwcC9zcmMvYXBwL2FwcC5zZXJ2ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLDREQUF3RDtBQUN4RCwyQ0FBeUM7QUFDekMsaURBQStDO0FBUy9DLElBQWEsZUFBZTtJQUE1QjtJQUErQixDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUFDLEFBQWhDLElBQWdDO0FBQW5CLGVBQWU7SUFQM0IsZUFBUSxDQUFDO1FBQ1YsT0FBTyxFQUFFO1lBQ0wsOEJBQVk7WUFDWixzQkFBUztTQUNaO1FBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztLQUN4QixDQUFDO0dBQ1csZUFBZSxDQUFJO0FBQW5CLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlcnZlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLXNlcnZlcic7XG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC5tb2R1bGUnO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbmltcG9ydHM6IFtcbiAgICBTZXJ2ZXJNb2R1bGUsXG4gICAgQXBwTW9kdWxlXG5dLFxuYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBTZXJ2ZXJNb2R1bGUgeyB9Il19