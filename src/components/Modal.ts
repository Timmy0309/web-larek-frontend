import { IEvents } from "./base/events";


export class Modal {
    protected _closeButton: HTMLButtonElement;
    protected _content: HTMLElement;

    constructor(container: HTMLElement, protected events: IEvents){}

    set content(value: HTMLElement){
        this._content.replaceChildren(value);
    }
    open(){}

    close(){}

    render(){}
}