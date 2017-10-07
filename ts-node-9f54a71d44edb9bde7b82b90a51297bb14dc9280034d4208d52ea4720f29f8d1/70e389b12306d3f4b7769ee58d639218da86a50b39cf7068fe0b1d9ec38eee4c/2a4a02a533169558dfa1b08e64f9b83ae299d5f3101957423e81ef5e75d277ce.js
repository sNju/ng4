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
var http_service_1 = require("../service/http.service");
var storage_service_1 = require("../service/storage.service");
var BaseRequest = (function () {
    function BaseRequest(httpService, localStorage) {
        this.httpService = httpService;
        this.localStorage = localStorage;
        this.baseUrl = "https://api.goparties.com";
        this.params = {};
        this.setPreferCache(true);
    }
    BaseRequest.prototype.setPreferCache = function (value) {
        this.preferCache = value;
        return this;
    };
    BaseRequest.prototype.getPreferCache = function () {
        return this.preferCache;
    };
    BaseRequest.prototype.executeGet = function () {
        return this.execute("get");
    };
    BaseRequest.prototype.executePost = function () {
        return this.execute("post");
    };
    BaseRequest.prototype.executePut = function () {
        return this.execute("put");
    };
    BaseRequest.prototype.execute = function (type) {
        type = type || "get";
        var _this = this;
        return new Promise(function (resolve, reject) {
            var url = _this.populateUrl();
            console.log("trying : ", url);
            // check if we can pull it from cache
            if (_this.getPreferCache()) {
                if (_this.localStorage.exists(url)) {
                    return resolve(_this.localStorage.getJSON(url));
                }
            }
            var api = null;
            if (type == "get") {
                api = _this.httpService.newHttpCall().get(url, { params: _this.params });
            }
            else if (type == "post") {
                api = _this.httpService.newHttpCall().post(url, _this.params);
            }
            else if (type == "put") {
                api = _this.httpService.newHttpCall().put(url, _this.params);
            }
            api.subscribe(function (data) {
                if (_this.errorhandler(data))
                    reject(_this.errorhandler(data));
                else {
                    if (type == "get" && _this.saveToCache()) {
                        _this.localStorage.save(url, _this.resposeHandler(data));
                    }
                    resolve(_this.resposeHandler(data));
                }
            }, function (err) { reject(_this.errorhandler(err)); });
        });
    };
    BaseRequest.prototype.errorhandler = function (err) {
        if (err.status != 200) {
            var res = {};
            res["error"] = {};
            res["error"]["code"] = "404";
            res["error"]["message"] = "" + err;
            return res;
        }
        else if (err.json().error) {
            return err.json();
        }
        else {
            return false;
        }
    };
    BaseRequest.prototype.resposeHandler = function (data) {
        try {
            return this.parse(data.json());
        }
        catch (err) {
            return { "data": {} };
        }
    };
    BaseRequest.prototype.addParam = function (key, value) {
        this.params[key] = value;
        return this;
    };
    BaseRequest.prototype.populateUrl = function () {
        var url = this.baseUrl + this.getUrl();
        // populate the params
        return url;
    };
    BaseRequest.prototype.saveToCache = function () {
        return true;
    };
    return BaseRequest;
}());
BaseRequest = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_service_1.HttpService, storage_service_1.StorageService])
], BaseRequest);
exports.BaseRequest = BaseRequest;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL21hYy9Eb2N1bWVudHMvd2ViYXBwL3NyYy9hcHAvcmVxdWVzdC9iYXNlcmVxdWVzdC50cyIsInNvdXJjZXMiOlsiL1VzZXJzL21hYy9Eb2N1bWVudHMvd2ViYXBwL3NyYy9hcHAvcmVxdWVzdC9iYXNlcmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyx3REFBc0Q7QUFDdEQsOERBQTREO0FBRzVELElBQXNCLFdBQVc7SUFLL0IscUJBQW9CLFdBQXdCLEVBQVUsWUFBNEI7UUFBOUQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBZ0I7UUFKbEYsWUFBTyxHQUFHLDJCQUEyQixDQUFDO1FBS2xDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELG9DQUFjLEdBQWQsVUFBZSxLQUFlO1FBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsb0NBQWMsR0FBZDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFFRCxnQ0FBVSxHQUFWO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELGlDQUFXLEdBQVg7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsZ0NBQVUsR0FBVjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCw2QkFBTyxHQUFQLFVBQVEsSUFBYTtRQUNuQixJQUFJLEdBQUcsSUFBSSxJQUFJLEtBQUssQ0FBQztRQUNy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IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvaHR0cC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9zdG9yYWdlLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZVJlcXVlc3Qge1xuICBiYXNlVXJsID0gXCJodHRwczovL2FwaS5nb3BhcnRpZXMuY29tXCI7XG4gIHBhcmFtcyA6IHt9O1xuICBwcmVmZXJDYWNoZTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHBTZXJ2aWNlOiBIdHRwU2VydmljZSwgcHJpdmF0ZSBsb2NhbFN0b3JhZ2U6IFN0b3JhZ2VTZXJ2aWNlKSB7IFxuICAgICAgdGhpcy5wYXJhbXMgPSB7fTtcbiAgICAgIHRoaXMuc2V0UHJlZmVyQ2FjaGUodHJ1ZSk7XG4gIH1cblxuICBzZXRQcmVmZXJDYWNoZSh2YWx1ZSA6IGJvb2xlYW4pIDogQmFzZVJlcXVlc3Qge1xuICAgIHRoaXMucHJlZmVyQ2FjaGUgPSB2YWx1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldFByZWZlckNhY2hlKCkgOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wcmVmZXJDYWNoZTtcbiAgfVxuXG4gIGV4ZWN1dGVHZXQoKSA6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShcImdldFwiKTtcbiAgfVxuXG4gIGV4ZWN1dGVQb3N0KCkgOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmV4ZWN1dGUoXCJwb3N0XCIpO1xuICB9XG5cbiAgZXhlY3V0ZVB1dCgpIDogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5leGVjdXRlKFwicHV0XCIpO1xuICB9XG5cbiAgZXhlY3V0ZSh0eXBlIDogc3RyaW5nKSA6IFByb21pc2U8YW55PiB7XG4gICAgdHlwZSA9IHR5cGUgfHwgXCJnZXRcIjtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgbGV0IHVybCA9IF90aGlzLnBvcHVsYXRlVXJsKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidHJ5aW5nIDogXCIsIHVybCk7XG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIGNhbiBwdWxsIGl0IGZyb20gY2FjaGVcbiAgICAgICAgaWYoX3RoaXMuZ2V0UHJlZmVyQ2FjaGUoKSkge1xuICAgICAgICAgICAgaWYoX3RoaXMubG9jYWxTdG9yYWdlLmV4aXN0cyh1cmwpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoX3RoaXMubG9jYWxTdG9yYWdlLmdldEpTT04odXJsKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGFwaSA9IG51bGw7XG4gICAgICAgIGlmKHR5cGU9PVwiZ2V0XCIpIHtcbiAgICAgICAgICAgIGFwaSA9IF90aGlzLmh0dHBTZXJ2aWNlLm5ld0h0dHBDYWxsKCkuZ2V0KHVybCwge3BhcmFtcyA6IF90aGlzLnBhcmFtc30pO1xuICAgICAgICB9IGVsc2UgaWYodHlwZT09XCJwb3N0XCIpIHtcbiAgICAgICAgICAgIGFwaSA9IF90aGlzLmh0dHBTZXJ2aWNlLm5ld0h0dHBDYWxsKCkucG9zdCh1cmwsIF90aGlzLnBhcmFtcyk7XG4gICAgICAgIH0gZWxzZSBpZih0eXBlPT1cInB1dFwiKSB7XG4gICAgICAgICAgICBhcGkgPSBfdGhpcy5odHRwU2VydmljZS5uZXdIdHRwQ2FsbCgpLnB1dCh1cmwsIF90aGlzLnBhcmFtcyk7XG4gICAgICAgIH1cblxuICAgICAgICBhcGkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YT0+e1xuICAgICAgICAgICAgICAgIGlmKF90aGlzLmVycm9yaGFuZGxlcihkYXRhKSkgXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChfdGhpcy5lcnJvcmhhbmRsZXIoZGF0YSkpO1xuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZih0eXBlID09IFwiZ2V0XCIgJiYgX3RoaXMuc2F2ZVRvQ2FjaGUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMubG9jYWxTdG9yYWdlLnNhdmUodXJsLCBfdGhpcy5yZXNwb3NlSGFuZGxlcihkYXRhKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShfdGhpcy5yZXNwb3NlSGFuZGxlcihkYXRhKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycj0+IHtyZWplY3QoX3RoaXMuZXJyb3JoYW5kbGVyKGVycikpO31cbiAgICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGVycm9yaGFuZGxlcihlcnIpIDogYW55IHtcbiAgICBpZihlcnIuc3RhdHVzIT0yMDApIHtcbiAgICAgICAgbGV0IHJlcyA9IHt9O1xuICAgICAgICByZXNbXCJlcnJvclwiXSA9IHt9O1xuICAgICAgICByZXNbXCJlcnJvclwiXVtcImNvZGVcIl0gPSBcIjQwNFwiO1xuICAgICAgICByZXNbXCJlcnJvclwiXVtcIm1lc3NhZ2VcIl0gPSBcIlwiICsgZXJyO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH0gZWxzZSBpZihlcnIuanNvbigpLmVycm9yKSB7XG4gICAgICAgIHJldHVybiBlcnIuanNvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXNwb3NlSGFuZGxlcihkYXRhKSA6IGFueSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2UoZGF0YS5qc29uKCkpO1xuICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgIHJldHVybiB7XCJkYXRhXCI6e319O1xuICAgIH1cbiAgfVxuXG4gIGFkZFBhcmFtKGtleSwgdmFsdWUpIDogQmFzZVJlcXVlc3Qge1xuICAgIHRoaXMucGFyYW1zW2tleV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHBvcHVsYXRlVXJsKCkgOiBzdHJpbmcge1xuICAgIGxldCB1cmwgID0gdGhpcy5iYXNlVXJsICsgdGhpcy5nZXRVcmwoKTtcbiAgICAvLyBwb3B1bGF0ZSB0aGUgcGFyYW1zXG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHNhdmVUb0NhY2hlKCkgOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGFic3RyYWN0IHBhcnNlKGpzb24gOiBKU09OKTtcbiAgYWJzdHJhY3QgZ2V0VXJsKCkgOiBTdHJpbmc7XG5cbn1cbiJdfQ==