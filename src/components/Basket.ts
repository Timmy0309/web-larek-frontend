import { cloneTemplate, createElement, ensureElement } from '../utils/utils';
import { IEvents } from './base/events';

interface IBasketView {
	items: HTMLElement[];
	total: number;
	selected: string[];
}

export class Basket {
    static template = ensureElement<HTMLTemplateElement>('#basket');

	protected _list: HTMLElement;
	protected _total: HTMLElement;
	protected _button: HTMLElement;

	constructor(protected events: IEvents){}

    toggleButton(state: boolean){}

    set items(items: HTMLElement[]){}

    set total(total: number){}
}