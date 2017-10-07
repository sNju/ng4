import { NgModule } from '@angular/core';
import { ModalDirective } from './modal.directive';
import { ModalService } from './modal.service';

@NgModule({
  declarations: [ModalDirective],
  exports: [ModalDirective],
  providers: [ModalService]
})
export class ModalModule {}
