import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { MyAccountComponent } from './myaccount.component';
import { VerifyEmailComponent } from './verifyMyAccount/verifyEmail.component';
import { VerifyNumberComponent } from '../myaccount/verifyMyAccount/verifyMyAccountByNo/verifyNumber.component';
import { MyBookingsComponent } from './mybookings/mybookings.component';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { ModalModule }   from '../modal/modal.module';

@NgModule({
    declarations: [
        MyAccountComponent,
        MyBookingsComponent,
        VerifyEmailComponent,
        VerifyNumberComponent
    ],
    imports:[
        FormsModule,
        ModalModule,
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: MyAccountComponent
            },
            {
                path: 'bookings',
                component: MyBookingsComponent
            }
        ])
    ],
    providers: [
    ],
    entryComponents: [
        VerifyEmailComponent,
        VerifyNumberComponent
    ]
})
export class MyAccountModule {}
