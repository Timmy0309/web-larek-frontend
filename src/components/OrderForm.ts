import { Form } from './Form';
import { TOrderForm, PaymentMethod } from '../types';
import { IEvents } from './base/events';
import { ensureElement } from '../utils/utils';

export class OrderForm extends Form<TOrderForm> {
	protected _paymentCard: HTMLButtonElement;
	protected _paymentCash: HTMLButtonElement;
	protected _address: HTMLInputElement;

	constructor(container: HTMLFormElement, events: IEvents) {
		super(container, events);
	}

	set payment(value: PaymentMethod) {
		}

	set address(value: string) {
		this._address.value = value;
	}
}
