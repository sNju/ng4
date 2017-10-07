import { Component, ViewContainerRef, ComponentFactoryResolver, ComponentRef, OnInit } from '@angular/core';
import { Injectable, Type, EventEmitter } from '@angular/core';

declare var $ : any;
let parentModalService : ModalService;

@Injectable()
export class ModalService {

    public viewContainerRef: ViewContainerRef;
    public listener: ModalListener;
    selector: any;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    }

    public setComponentFactoryResolver(componentFactoryResolver: ComponentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
    }

    public setViewContainerRef(viewContainerRef : ViewContainerRef) : void {
        this.viewContainerRef = viewContainerRef;
    }

    public setListener(listener: ModalListener) : void {
        this.listener = listener;
    }

    public show<T>(component: Type<T>, selector : string, listener: ModalListener) : T  {
        if(!this.viewContainerRef) {
            console.error("Modal Service not initialized", "Please add the app-modal in your app component html file");
            return null;
        }
        parentModalService = this;
        this.setListener(listener);
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        this.viewContainerRef.clear();
        let ref = this.viewContainerRef.createComponent(componentFactory);
        parentModalService.selector = selector;
        $(selector).modal('show');
        $(selector).on('hidden.bs.modal', function() {
            ref.destroy();
            $(selector).remove();
        });
        return ref.instance;
    }

    public close(result : boolean, data : any) : void {
        if(parentModalService.listener) {
            $(parentModalService.selector).modal('hide');
            parentModalService.listener.onModalResponse(parentModalService.selector, result, data);
        }
    }
}

export interface ModalListener {
    /**
     * onModalResponse
     */
    onModalResponse(tag : any, result: boolean, data: any) : void;
}