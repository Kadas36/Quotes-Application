import { ElementRef, Injectable } from "@angular/core";
// import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
// tslint:disable: typedef
export class MyService {
    private elementArray: Array<ElementRef> = [];

    public push(el: ElementRef) {
       this.elementArray.push(el);
    }
    public getElements() {
    return this.elementArray;
    }
}
