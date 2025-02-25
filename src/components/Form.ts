import { IEvents } from "./base/events";

export class Form<T> {

    protected _submit: HTMLButtonElement;
    protected _errors: HTMLElement;

    constructor(protected container: HTMLFormElement, protected events: IEvents){}

    protected onInputChange(){}

    set valid(value: boolean){}

    set errors(value: string){}

    render(){}

}