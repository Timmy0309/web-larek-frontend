import { IProduct } from "../types";


interface ICardActions {
	onClick: (event: MouseEvent) => void;
}

export class Card {
    protected _title: HTMLElement;
	protected _image?: HTMLImageElement;
	protected _price: HTMLElement;
	protected _category?: HTMLElement;
	protected _description?: HTMLElement;
	protected _button?: HTMLButtonElement;

    constructor(container: HTMLElement, actions?: ICardActions){}

    set id(value: string) {
	}

	get id(): string {
        return
	}

	set title(value: string) {
	}

	get title(): string {
        return
	}

	set price(value: string) {

	}

	get price(): string {
		return this._price.textContent || '';
	}
}