import { Directive, ViewContainerRef } from '@angular/core';
import { ModalService } from './modal.service';

@Directive({
  selector: '[app-modal]'
})

export class ModalDirective {
  constructor(public viewContainerRef: ViewContainerRef, private modalService: ModalService) { 
    console.log("modal service initiated");
    this.modalService.setViewContainerRef(viewContainerRef);
  }
}