import { IEvents } from "./base/events";
import { ensureElement } from "../utils/utils";

interface IPage {
    counter: number;
    catalog: HTMLElement[];
    locked: boolean;
}

export class Page {
    protected _counter: HTMLElement;
    protected _catalog: HTMLElement;
    protected _wrapper: HTMLElement;
    protected _basket: HTMLElement;


    constructor(container: HTMLElement, events: IEvents) { }

    set counter(value: number) {}

    set catalog(items: HTMLElement[]) { }

    set locked(value: boolean) { }
}