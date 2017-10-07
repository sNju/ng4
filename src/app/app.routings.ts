import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PartydetailComponent } from './partydetail/partydetail.component';
import { AppdownloadComponent } from './appdownload/appdownload.component';
import { AuthenticationGaurd } from './service/authentication.gaurd';

const all : Routes = [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'myaccount',
      loadChildren: 'app/myaccount/myaccount.module#MyAccountModule',
      canLoad: [AuthenticationGaurd],
      canActivate: [AuthenticationGaurd]
    },
    {
      path: 'payment',
      loadChildren: 'app/payment/payment.module#PaymentModule',
      canLoad: [AuthenticationGaurd],
      canActivate: [AuthenticationGaurd]
    },
    {
      path: 'delhi-ncr',
      component: HomeComponent
    },
    {
      path: 'app',
      component: AppdownloadComponent
    },
    {
      path: 'get',
      component: AppdownloadComponent
    },
    {
      path: 'party/:id',
      component: PartydetailComponent
    },
    {
      path: '**',
      redirectTo: 'delhi-ncr',
      pathMatch: 'full'
    }
]

export {
  all
}
