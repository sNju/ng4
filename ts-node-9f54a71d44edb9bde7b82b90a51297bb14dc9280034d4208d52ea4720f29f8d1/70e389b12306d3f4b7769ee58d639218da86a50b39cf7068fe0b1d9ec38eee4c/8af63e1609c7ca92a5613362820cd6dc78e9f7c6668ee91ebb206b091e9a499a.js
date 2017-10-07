"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var PartydetailComponent = (function () {
    function PartydetailComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    PartydetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (data) {
            var params = data["params"];
            _this.id = data.get("id");
            console.log(_this.id);
        });
        // .switchMap((params: ParamMap) =>
        //   this.service.getHero(params.get('id')))
        // .subscribe((hero: Hero) => this.hero = hero);
    };
    return PartydetailComponent;
}());
PartydetailComponent = __decorate([
    core_1.Component({
        selector: 'app-partydetail',
        templateUrl: './partydetail.component.html',
        styleUrls: ['./partydetail.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router])
], PartydetailComponent);
exports.PartydetailComponent = PartydetailComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL21hYy9Eb2N1bWVudHMvd2ViYXBwL3NyYy9hcHAvcGFydHlkZXRhaWwvcGFydHlkZXRhaWwuY29tcG9uZW50LnRzIiwic291cmNlcyI6WyIvVXNlcnMvbWFjL0RvY3VtZW50cy93ZWJhcHAvc3JjL2FwcC9wYXJ0eWRldGFpbC9wYXJ0eWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQW1FO0FBT25FLElBQWEsb0JBQW9CO0lBSS9CLDhCQUNVLEtBQXFCLEVBQ3JCLE1BQWM7UUFEZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ3JCLENBQUM7SUFFSix1Q0FBUSxHQUFSO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ2hDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQU8sQ0FBQztZQUNsQyxLQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFDRCxtQ0FBbUM7UUFDbkMsNENBQTRDO1FBQzVDLGdEQUFnRDtJQUNwRCxDQUFDO0lBRUgsMkJBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDO0FBcEJZLG9CQUFvQjtJQUxoQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixXQUFXLEVBQUUsOEJBQThCO1FBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO0tBQzNDLENBQUM7cUNBTWlCLHVCQUFjO1FBQ2IsZUFBTTtHQU5iLG9CQUFvQixDQW9CaEM7QUFwQlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIFBhcmFtTWFwIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXBhcnR5ZGV0YWlsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhcnR5ZGV0YWlsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGFydHlkZXRhaWwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBhcnR5ZGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBpZDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucm91dGUucGFyYW1NYXAuc3Vic2NyaWJlKGRhdGE9PntcbiAgICAgIGxldCBwYXJhbXMgPSBkYXRhW1wicGFyYW1zXCJdIGFzIHt9O1xuICAgICAgdGhpcy5pZCA9IGRhdGEuZ2V0KFwiaWRcIik7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmlkKTtcbiAgICB9KTtcbiAgICAgIC8vIC5zd2l0Y2hNYXAoKHBhcmFtczogUGFyYW1NYXApID0+XG4gICAgICAvLyAgIHRoaXMuc2VydmljZS5nZXRIZXJvKHBhcmFtcy5nZXQoJ2lkJykpKVxuICAgICAgLy8gLnN1YnNjcmliZSgoaGVybzogSGVybykgPT4gdGhpcy5oZXJvID0gaGVybyk7XG4gIH1cblxufVxuIl19