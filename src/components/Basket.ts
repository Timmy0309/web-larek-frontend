import { cloneTemplate, createElement, ensureElement } from '../utils/utils';
import { View } from './base/Component';
import { IEvents } from './base/events';

interface IBasketView {
	items: HTMLElement[];
	total: number;
	selected: string[];
}

export class Basket extends View<IBasketView>{
    static template = ensureElement<HTMLTemplateElement>('#basket');

	protected _list: HTMLElement;
	protected _total: HTMLElement;
	protected _button: HTMLElement;

	constructor(protected events: IEvents){
		super(cloneTemplate(Basket.template), events);

		this._list = ensureElement<HTMLElement>('.basket__list', this.container);
		this._button = this.container.querySelector('.basket__button');
		this._total = this.container.querySelector('.basket__price');

		if (this._button) {
			this._button.addEventListener('click', () => {
				this.events.emit('order:open');
			});
		}

		this.items = [];
	}

    toggleButton(state: boolean){
		this.setDisabled(this._button, !state);
	}

    set items(items: HTMLElement[]){
		if (items.length) {
			this._list.replaceChildren(...items);
			this.toggleButton(true);
		} else {
			this._list.replaceChildren(
				createElement<HTMLParagraphElement>('p', {
					textContent: 'Корзина пустая'
				})
			);
			this.toggleButton(false);
		}
	}

    set total(total: number){
		this.setText(this._total, `${total} синапсов`);
	}
}