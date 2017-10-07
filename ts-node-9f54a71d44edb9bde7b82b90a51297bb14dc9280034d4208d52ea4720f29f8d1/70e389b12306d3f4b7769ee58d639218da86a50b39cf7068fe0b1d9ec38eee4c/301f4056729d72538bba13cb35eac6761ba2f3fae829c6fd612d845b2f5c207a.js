"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var baserequest_1 = require("./baserequest");
var HomeRequest = (function (_super) {
    __extends(HomeRequest, _super);
    function HomeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomeRequest.prototype.parse = function (json) {
        return json["data"]["home"];
    };
    HomeRequest.prototype.getUrl = function () {
        return "/cawebhome_v2";
    };
    return HomeRequest;
}(baserequest_1.BaseRequest));
HomeRequest = __decorate([
    core_1.Injectable()
], HomeRequest);
exports.HomeRequest = HomeRequest;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL21hYy9Eb2N1bWVudHMvd2ViYXBwL3NyYy9hcHAvcmVxdWVzdC9ob21lLnJlcXVlc3QudHMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRG9jdW1lbnRzL3dlYmFwcC9zcmMvYXBwL3JlcXVlc3QvaG9tZS5yZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyw2Q0FBMEM7QUFHMUMsSUFBYSxXQUFXO0lBQVMsK0JBQVc7SUFBNUM7O0lBUUEsQ0FBQztJQVBDLDJCQUFLLEdBQUwsVUFBTSxJQUFTO1FBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsNEJBQU0sR0FBTjtRQUNJLE1BQU0sQ0FBQyxlQUFlLENBQUM7SUFDM0IsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQVJELENBQWlDLHlCQUFXLEdBUTNDO0FBUlksV0FBVztJQUR2QixpQkFBVSxFQUFFO0dBQ0EsV0FBVyxDQVF2QjtBQVJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCYXNlUmVxdWVzdH0gZnJvbSAnLi9iYXNlcmVxdWVzdCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIb21lUmVxdWVzdCBleHRlbmRzIEJhc2VSZXF1ZXN0IHtcbiAgcGFyc2UoanNvbiA6IHt9KSB7XG4gICAgcmV0dXJuIGpzb25bXCJkYXRhXCJdW1wiaG9tZVwiXTtcbiAgfVxuXG4gIGdldFVybCgpIDogU3RyaW5nIHtcbiAgICAgIHJldHVybiBcIi9jYXdlYmhvbWVfdjJcIjtcbiAgfVxufVxuIl19