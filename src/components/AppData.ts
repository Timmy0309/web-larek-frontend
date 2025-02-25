import { IBasket, IProduct, PaymentMethod, TOrder } from '../types';
import { IEvents } from './base/events';


export class AppData {
	items: IProduct[] = [];
	preview: IProduct | null = null;
	basket: IBasket = {
		items: [],
		total: 0,
	};
	order: TOrder = {
		email: '',
		phone: '',
		address: '',
		payment: 'card',
	};
	formErrors: Partial<Record<keyof TOrder, string>> = {};

	constructor(protected events: IEvents) {}

	setItems(items: IProduct[]) {

	}

	setPreview(item: IProduct) {

	}

	isInBasket(item: IProduct) {
		return this.basket.items.includes(item.id);
	}

	addToBasket(item: IProduct) {
	
    }

	removeFromBasket(item: IProduct) {

	}

	clearBasket() {

	}

	setPayment(method: PaymentMethod) {
		this.order.payment = method;
	}

	setOrderField(field: keyof TOrder, value: string) {

	}

	validateOrderForm() {

	}

	validateContactsForm() {

	}

	clearOrder() {

	}
}