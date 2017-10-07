import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { PaymentComponent } from './payment.component';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

@NgModule({
    declarations: [
        PaymentComponent
    ],
    imports:[
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            {
                path: 'execute/:id',
                component: PaymentComponent
            }
        ])
    ],
    providers: [
    ],
    entryComponents: [
    ]
})
export class PaymentModule {}
