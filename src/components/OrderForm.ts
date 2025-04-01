import { Form } from './Form';
import { TOrderForm, PaymentMethod } from '../types';
import { IEvents } from './base/events';
import { ensureElement } from '../utils/utils';

export class OrderForm extends Form<TOrderForm> {
	protected _paymentCard: HTMLButtonElement;
	protected _paymentCash: HTMLButtonElement;

	constructor(container: HTMLFormElement, events: IEvents) {
		super(container, events);

		this._paymentCard = ensureElement<HTMLButtonElement>('[name=card]', this.container);
		this._paymentCash = ensureElement<HTMLButtonElement>('[name=cash]', this.container);

		this._paymentCard.addEventListener('click', () => {
			this._paymentCard.classList.add('button_alt_active');
			this._paymentCard.classList.remove('button_alt');
			this._paymentCash.classList.add('button_alt');
			this._paymentCash.classList.remove('button_alt_active');
			this.events.emit('order:change', { field: 'payment', value: 'online' });
		});

		this._paymentCash.addEventListener('click', () => {
			this._paymentCash.classList.add('button_alt_active');
			this._paymentCash.classList.remove('button_alt');
			this._paymentCard.classList.add('button_alt');
			this._paymentCard.classList.remove('button_alt_active');
			this.events.emit('order:change', { field: 'payment', value: 'online' });
		});


	}

	set address(val: string) {
		(this.container.elements.namedItem('address') as HTMLSelectElement).value = val;
	}
}
