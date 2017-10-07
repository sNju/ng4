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
var LoginComponent = (function () {
    // constructor(public activeModal: NgbActiveModal, private modalService: NgbModal) {}
    function LoginComponent() {
    }
    LoginComponent.prototype.setPhone = function (phone) {
        this.phone = phone;
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.sendotp = function () {
        // this.activeModal.close('done');
        // let verifyComponent = this.modalService.open(VerifyComponent).componentInstance as VerifyComponent;
        // verifyComponent.setPhone(this.phone);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL21hYy9Eb2N1bWVudHMvd2ViYXBwL3NyYy9hcHAvaGVhZGVyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsInNvdXJjZXMiOlsiL1VzZXJzL21hYy9Eb2N1bWVudHMvd2ViYXBwL3NyYy9hcHAvaGVhZGVyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFrRDtBQVNsRCxJQUFhLGNBQWM7SUFPekIscUZBQXFGO0lBQ3JGO0lBQWUsQ0FBQztJQUVULGlDQUFRLEdBQWYsVUFBZ0IsS0FBSztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBRUQsaUNBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCxnQ0FBTyxHQUFQO1FBQ0Usa0NBQWtDO1FBQ2xDLHNHQUFzRztRQUN0Ryx3Q0FBd0M7SUFDMUMsQ0FBQztJQUVILHFCQUFDO0FBQUQsQ0FBQyxBQXZCRCxJQXVCQztBQXZCWSxjQUFjO0lBTDFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsV0FBVztRQUNyQixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO0tBQ3JDLENBQUM7O0dBQ1csY0FBYyxDQXVCMUI7QUF2Qlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gaW1wb3J0IHtOZ2JNb2RhbCwgTmdiQWN0aXZlTW9kYWx9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7VmVyaWZ5Q29tcG9uZW50fSBmcm9tICcuLi92ZXJpZnkvdmVyaWZ5LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1sb2dpbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvZ2luLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcGhvbmUgOiBcIlwiO1xuICBwcm9tb2NvZGUgOiBcIlwiO1xuICBcbiAgZGF0YSA6IHt9O1xuXG4gIC8vIGNvbnN0cnVjdG9yKHB1YmxpYyBhY3RpdmVNb2RhbDogTmdiQWN0aXZlTW9kYWwsIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbCkge31cbiAgY29uc3RydWN0b3IoKSB7fVxuICBcbiAgcHVibGljIHNldFBob25lKHBob25lKSA6IHZvaWQge1xuICAgIHRoaXMucGhvbmUgPSBwaG9uZTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgc2VuZG90cCgpIDogdm9pZCB7XG4gICAgLy8gdGhpcy5hY3RpdmVNb2RhbC5jbG9zZSgnZG9uZScpO1xuICAgIC8vIGxldCB2ZXJpZnlDb21wb25lbnQgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKFZlcmlmeUNvbXBvbmVudCkuY29tcG9uZW50SW5zdGFuY2UgYXMgVmVyaWZ5Q29tcG9uZW50O1xuICAgIC8vIHZlcmlmeUNvbXBvbmVudC5zZXRQaG9uZSh0aGlzLnBob25lKTtcbiAgfVxuXG59XG4iXX0=