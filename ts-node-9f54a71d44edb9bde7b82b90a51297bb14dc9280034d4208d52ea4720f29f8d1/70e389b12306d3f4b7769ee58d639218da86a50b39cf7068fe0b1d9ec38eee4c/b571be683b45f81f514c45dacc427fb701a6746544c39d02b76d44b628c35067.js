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
var angular_2_local_storage_1 = require("angular-2-local-storage");
var StorageService = (function () {
    function StorageService(localStorage) {
        this.localStorage = localStorage;
    }
    StorageService.prototype.save = function (key, value) {
        try {
            if (value instanceof Object) {
                value = JSON.stringify(value);
            }
            localStorage.setItem(key, value);
        }
        catch (error) {
            console.log(error);
        }
    };
    StorageService.prototype.get = function (key) {
        try {
            return localStorage.getItem(key);
        }
        catch (error) {
            return null;
        }
    };
    StorageService.prototype.getJSON = function (key) {
        return JSON.parse(this.get(key));
    };
    StorageService.prototype.getString = function (key) {
        return this.get(key);
    };
    StorageService.prototype.exists = function (key) {
        return this.get(key) ? true : false;
    };
    return StorageService;
}());
StorageService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [angular_2_local_storage_1.LocalStorageService])
], StorageService);
exports.StorageService = StorageService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL21hYy9Eb2N1bWVudHMvd2ViYXBwL3NyYy9hcHAvc2VydmljZS9zdG9yYWdlLnNlcnZpY2UudHMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRG9jdW1lbnRzL3dlYmFwcC9zcmMvYXBwL3NlcnZpY2Uvc3RvcmFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBQzNDLG1FQUE4RDtBQUc5RCxJQUFhLGNBQWM7SUFFekIsd0JBQW9CLFlBQWlDO1FBQWpDLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtJQUFJLENBQUM7SUFFMUQsNkJBQUksR0FBSixVQUFLLEdBQVcsRUFBRSxLQUFVO1FBQzFCLElBQUksQ0FBQztZQUNILEVBQUUsQ0FBQSxDQUFDLEtBQUssWUFBWSxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoQyxDQUFDO1lBQ0QsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbkMsQ0FBQztRQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLENBQUM7SUFDSCxDQUFDO0lBRUQsNEJBQUcsR0FBSCxVQUFJLEdBQVc7UUFDYixJQUFJLENBQUM7WUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQyxDQUFDO1FBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDO0lBQ0gsQ0FBQztJQUVELGdDQUFPLEdBQVAsVUFBUSxHQUFXO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsa0NBQVMsR0FBVCxVQUFVLEdBQVc7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELCtCQUFNLEdBQU4sVUFBTyxHQUFXO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFFLElBQUksR0FBRyxLQUFLLENBQUM7SUFDckMsQ0FBQztJQUVILHFCQUFDO0FBQUQsQ0FBQyxBQW5DRCxJQW1DQztBQW5DWSxjQUFjO0lBRDFCLGlCQUFVLEVBQUU7cUNBR3VCLDZDQUFtQjtHQUYxQyxjQUFjLENBbUMxQjtBQW5DWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UgfSBmcm9tICdhbmd1bGFyLTItbG9jYWwtc3RvcmFnZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdG9yYWdlU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2NhbFN0b3JhZ2U6IExvY2FsU3RvcmFnZVNlcnZpY2UpIHsgfVxuXG4gIHNhdmUoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIDogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIGlmKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgIHZhbHVlID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgfVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7IFxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgZ2V0KGtleTogc3RyaW5nKSA6IHN0cmluZyB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBnZXRKU09OKGtleTogc3RyaW5nKSA6IEpTT04ge1xuICAgIHJldHVybiBKU09OLnBhcnNlKHRoaXMuZ2V0KGtleSkpO1xuICB9XG5cbiAgZ2V0U3RyaW5nKGtleTogc3RyaW5nKSA6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGtleSk7XG4gIH1cblxuICBleGlzdHMoa2V5OiBzdHJpbmcpIDogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGtleSk/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG59XG4iXX0=