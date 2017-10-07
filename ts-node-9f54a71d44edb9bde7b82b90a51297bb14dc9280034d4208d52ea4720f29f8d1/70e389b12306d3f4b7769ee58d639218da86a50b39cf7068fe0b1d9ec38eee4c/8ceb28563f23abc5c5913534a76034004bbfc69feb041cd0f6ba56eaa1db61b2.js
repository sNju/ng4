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
// import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
var VerifyComponent = (function () {
    // constructor(public activeModal: NgbActiveModal, private modalService: NgbModal) {}
    function VerifyComponent() {
    }
    VerifyComponent.prototype.setPhone = function (phone) {
        this.phone = phone;
    };
    VerifyComponent.prototype.ngOnInit = function () {
    };
    VerifyComponent.prototype.verify = function () {
        // this.activeModal.close("done");
    };
    return VerifyComponent;
}());
VerifyComponent = __decorate([
    core_1.Component({
        selector: 'app-verify',
        templateUrl: './verify.component.html',
        styleUrls: ['./verify.component.css']
    }),
    __metadata("design:paramtypes", [])
], VerifyComponent);
exports.VerifyComponent = VerifyComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL21hYy9Eb2N1bWVudHMvd2ViYXBwL3NyYy9hcHAvaGVhZGVyL3ZlcmlmeS92ZXJpZnkuY29tcG9uZW50LnRzIiwic291cmNlcyI6WyIvVXNlcnMvbWFjL0RvY3VtZW50cy93ZWJhcHAvc3JjL2FwcC9oZWFkZXIvdmVyaWZ5L3ZlcmlmeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBa0Q7QUFDbEQsdUVBQXVFO0FBT3ZFLElBQWEsZUFBZTtJQU8xQixxRkFBcUY7SUFDckY7SUFBZSxDQUFDO0lBRVQsa0NBQVEsR0FBZixVQUFnQixLQUFLO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxrQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELGdDQUFNLEdBQU47UUFDRSxrQ0FBa0M7SUFDcEMsQ0FBQztJQUVILHNCQUFDO0FBQUQsQ0FBQyxBQXJCRCxJQXFCQztBQXJCWSxlQUFlO0lBTDNCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsWUFBWTtRQUN0QixXQUFXLEVBQUUseUJBQXlCO1FBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO0tBQ3RDLENBQUM7O0dBQ1csZUFBZSxDQXFCM0I7QUFyQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gaW1wb3J0IHtOZ2JNb2RhbCwgTmdiQWN0aXZlTW9kYWx9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXZlcmlmeScsXG4gIHRlbXBsYXRlVXJsOiAnLi92ZXJpZnkuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi92ZXJpZnkuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFZlcmlmeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcGhvbmUgOiBcIlwiO1xuICBwcm9tb2NvZGUgOiBcIlwiO1xuICBcbiAgZGF0YSA6IHt9O1xuXG4gIC8vIGNvbnN0cnVjdG9yKHB1YmxpYyBhY3RpdmVNb2RhbDogTmdiQWN0aXZlTW9kYWwsIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbCkge31cbiAgY29uc3RydWN0b3IoKSB7fVxuICBcbiAgcHVibGljIHNldFBob25lKHBob25lKSA6IHZvaWQge1xuICAgIHRoaXMucGhvbmUgPSBwaG9uZTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgdmVyaWZ5KCkgOiB2b2lkIHtcbiAgICAvLyB0aGlzLmFjdGl2ZU1vZGFsLmNsb3NlKFwiZG9uZVwiKTtcbiAgfVxuXG59XG4iXX0=