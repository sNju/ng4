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
var home_request_1 = require("../request/home.request");
var HomeComponent = (function () {
    function HomeComponent(homeRequest) {
        this.homeRequest = homeRequest;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.homeRequest.addParam("try", "once").addParam("more", "asd").executeGet()
            .then(function (data) {
            _this.slider = data.slider;
            _this.arr1 = data.array[0].data;
            _this.arr2 = data.array[1].data;
            console.log("got data", data);
        }).catch(function (err) {
            console.log("got err", err);
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css'],
        providers: [home_request_1.HomeRequest]
    }),
    __metadata("design:paramtypes", [home_request_1.HomeRequest])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL21hYy9Eb2N1bWVudHMvd2ViYXBwL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsInNvdXJjZXMiOlsiL1VzZXJzL21hYy9Eb2N1bWVudHMvd2ViYXBwL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFrRDtBQUNsRCx3REFBb0Q7QUFRcEQsSUFBYSxhQUFhO0lBRXhCLHVCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFJLENBQUM7SUFNakQsZ0NBQVEsR0FBUjtRQUFBLGlCQVVDO1FBVEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsVUFBVSxFQUFFO2FBQzNFLElBQUksQ0FBQyxVQUFBLElBQUk7WUFDUixLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDMUIsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUMvQixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEdBQUc7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFSCxvQkFBQztBQUFELENBQUMsQUFwQkQsSUFvQkM7QUFwQlksYUFBYTtJQU56QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLHVCQUF1QjtRQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztRQUNuQyxTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO0tBQ3pCLENBQUM7cUNBR2lDLDBCQUFXO0dBRmpDLGFBQWEsQ0FvQnpCO0FBcEJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SG9tZVJlcXVlc3R9IGZyb20gJy4uL3JlcXVlc3QvaG9tZS5yZXF1ZXN0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWhvbWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vaG9tZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddLFxuICBwcm92aWRlcnM6IFtIb21lUmVxdWVzdF1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBob21lUmVxdWVzdDogSG9tZVJlcXVlc3QpIHsgfVxuXG4gIHNsaWRlciA6IHt9O1xuICBhcnIxIDoge307XG4gIGFycjIgOiB7fTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmhvbWVSZXF1ZXN0LmFkZFBhcmFtKFwidHJ5XCIsXCJvbmNlXCIpLmFkZFBhcmFtKFwibW9yZVwiLCBcImFzZFwiKS5leGVjdXRlR2V0KClcbiAgICAudGhlbihkYXRhPT57XG4gICAgICB0aGlzLnNsaWRlciA9IGRhdGEuc2xpZGVyO1xuICAgICAgdGhpcy5hcnIxID0gZGF0YS5hcnJheVswXS5kYXRhO1xuICAgICAgdGhpcy5hcnIyID0gZGF0YS5hcnJheVsxXS5kYXRhO1xuICAgICAgY29uc29sZS5sb2coXCJnb3QgZGF0YVwiLCBkYXRhKTtcbiAgICB9KS5jYXRjaChlcnI9PntcbiAgICAgIGNvbnNvbGUubG9nKFwiZ290IGVyclwiLCBlcnIpO1xuICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==