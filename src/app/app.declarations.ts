import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GpcardComponent } from './gpcard/gpcard.component';
import { PartydetailComponent } from './partydetail/partydetail.component';
import { LoginComponent } from './header/login/login.component';
import { VerifyComponent } from './header/verify/verify.component';
import { AppdownloadComponent } from './appdownload/appdownload.component';

import { RemainTimePipe } from './pipe/remaintime.pipe';

let components = [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    GpcardComponent,
    PartydetailComponent,
    LoginComponent,
    VerifyComponent,
    AppdownloadComponent
];

let pipes = [RemainTimePipe];

export {
    components,
    pipes
}